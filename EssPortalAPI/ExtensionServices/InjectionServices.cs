using AutoMapper.Configuration;
using EssPortal.Concrete;
using EssPortal.Interface;
using EssPortal.Interfaces;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortalAPI.ExtensionServices
{
    public static class InjectionServices
    {
        public static void CreateServices(this IServiceCollection services)
        {
            services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
            services.AddTransient<IRole, RoleConcrete>();
            services.AddTransient<IUsers, UsersConcrete>();
            services.AddTransient<IUsersInRoles, UsersInRolesConcrete>();
            services.AddTransient<IGenerateRecepit, GenerateRecepitConcrete>();
            services.AddTransient<IEmployeeRepository, EmployeesConcrete>();
            services.AddTransient<IRequestTypeRepository, RequestTypeConcrete>();
            services.AddTransient<IRequestRepository, RequestConcrete>();
            services.AddTransient<ISystemCodeRepository, SystemCodeConcrete>();
            services.AddTransient<IPurchasesRepository, PurchasesConcrete>();
            services.AddTransient<IAXInfoRepository, AXInfoConcrete>();
            services.AddTransient<IAttachmentRepository, AttachmentConcrete>();
            services.AddTransient<IOperationPermissionRepository, OperationPermissionConcrete>();
            services.AddTransient<IOperationRepository, OperationConcrete>();
            services.AddTransient<IPurchasesStageTypeRepository, PurchasesStageTypeConcrete>();
            services.AddTransient<INotificationRepository, NotificationConcrete>();
            services.AddTransient<IEvaluationRepository, EvaluationConcrete>();
        }
    }
}
