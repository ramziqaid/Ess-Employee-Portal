using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DevExpress.AspNetCore;
using DevExpress.AspNetCore.Reporting;
using DevExpress.XtraReports.Web.Extensions;
using EssPortal.Common;
using EssPortal.Concrete;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortalAPI.Email;
using EssPortalAPI.Models;
using EssPortalAPI.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace EssPortalAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            #region MyRegion
            var connection = Configuration.GetConnectionString("DatabaseConnection");
            services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(connection, b => b.UseRowNumberForPaging()));

            // Email Sending Service
            services.AddSendGridEmailSender();

            services.AddMemoryCache();
            services.AddSession(); 
            services.AddAutoMapper(typeof(Startup));
            //services.AddMvc();
            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            services.AddDevExpressControls();
            services.AddScoped<ReportStorageWebExtension, ReportStorageWebExtension1>();

          //  services
          //.AddMvc()
          //.AddDefaultReportingControllers()
          //.SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
          //  services.ConfigureReportingServices(configurator => {
          //      configurator.ConfigureReportDesigner(designerConfigurator => {
          //          designerConfigurator.RegisterDataSourceWizardConfigFileConnectionStringsProvider();
          //      });
          //      configurator.ConfigureWebDocumentViewer(viewerConfigurator => {
          //          viewerConfigurator.UseCachedReportSourceBuilder();
          //      });
          //  });

            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            // configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
            services.AddTransient<ISchemeMaster, SchemeMasterConcrete>();
            services.AddTransient<IPlanMaster, PlanMasterConcrete>();
            services.AddTransient<IPeriodMaster, PeriodMasterConcrete>();
            services.AddTransient<IRole, RoleConcrete>();
            services.AddTransient<IMemberRegistration, MemberRegistrationConcrete>();
            services.AddTransient<IUsers, UsersConcrete>();
            services.AddTransient<IUsersInRoles, UsersInRolesConcrete>();
            services.AddTransient<IPaymentDetails, PaymentDetailsConcrete>();
            services.AddTransient<IRenewal, RenewalConcrete>();
            services.AddTransient<IReports, ReportsMaster>();
            services.AddTransient<IGenerateRecepit, GenerateRecepitConcrete>();
            services.AddTransient<IEmployeeRepository, EmployeesConcrete>();
            services.AddTransient<IRequestTypeRepository, RequestTypeConcrete>();
            services.AddTransient<IAmendmentReasonRepository, AmendmentReasonConcrete>();
            services.AddTransient<IRequestRepository, RequestConcrete>();
            services.AddTransient<ISystemCodeRepository, SystemCodeConcrete>();
            services.AddTransient<IPurchasesRepository, PurchasesConcrete>();
            services.AddTransient<IAXInfoRepository, AXInfoConcrete>();
            services.AddTransient<IAttachmentRepository, AttachmentConcrete>();  
            services.AddTransient<IPurchasesStageTypeRepository, PurchasesStageTypeConcrete>();
            services.AddTransient<INotificationRepository, NotificationConcrete>();
            
            services.AddScoped<IUrlHelper>(implementationFactory =>
            {
                var actionContext = implementationFactory.GetService<IActionContextAccessor>().ActionContext;
                return new UrlHelper(actionContext);
            });
            #endregion

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            var cultureInfo = new CultureInfo("en-GB");
            cultureInfo.NumberFormat.CurrencySymbol = "€";
            CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
            CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;

           // services.AddMvc(options => { options.Filters.Add(typeof(CustomExceptionFilterAttribute)); })
           //.SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
           //.AddJsonOptions(options =>
           //{
           //    options.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();
           //});


            services.AddMvc();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials()
                        .WithExposedHeaders("X-Pagination"));
            });


            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddAuthorization(options =>
            { 
                options.AddPolicy("RequireLoggedIn", policy => policy.RequireRole("Admin", "Manager", "User","Client").RequireAuthenticatedUser());
               // options.AddPolicy("RequireManagerRole", policy => policy.RequireRole("Manager").RequireAuthenticatedUser());
                options.AddPolicy("RequireAdminRole", policy => policy.RequireRole("Admin","Manager").RequireAuthenticatedUser());
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            DevExpress.XtraReports.Configuration.Settings.Default.UserDesignerOptions.DataBindingMode = DevExpress.XtraReports.UI.DataBindingMode.Expressions;
           if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection(); 
            app.UseStaticFiles();
            app.UseDevExpressControls();
            app.UseCookiePolicy();
            app.UseAuthentication();
            app.UseCors("CorsPolicy"); 

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

        }
    }
}
