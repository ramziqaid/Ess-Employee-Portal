using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EssPortal.Models;
using EssPortal.Models.Views;

namespace EssPortal.Concrete
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
            
        }

        public DbSet<SchemeMaster> SchemeMaster { get; set; }
        public DbSet<PeriodTB> PeriodTb { get; set; }
        public DbSet<PlanMaster> PlanMaster { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<MemberRegistration> MemberRegistration { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<UsersInRoles> UsersInRoles { get; set; }
        public DbSet<PaymentDetails> PaymentDetails { get; set; }

        public DbSet<Request> Requests { get; set; }
        public DbSet<RequestStage> RequestStages { get; set; }
        public DbSet<RequestExtraField> RequestExtraFields { get; set; }
        public DbSet<Amendment> Amendments { get; set; }
        public DbSet<RequestType> RequestTypes { get; set; }
        public DbSet<OrderStageType> OrderStageTypes { get; set; }
        public DbSet<Employee> EmployeeInfoView { get; set; } 
        public DbSet<Purchases> Purchases { get; set; }
        public DbSet<PurchasesDetails> PurchasesDetails { get; set; }
        public DbSet<PurchasesStage> PurchasesStages { get; set; }
        public DbSet<PurchasesStageType> PurchasesStageTypes { get; set; }
        public DbSet<PurchaseOffer> PurchaseOffers { get; set; }
        public DbSet<Attachment> Attachments { get; set; } 
        public DbSet<SystemCodes> SystemCode { get; set; }
        public DbSet<operation> Operations { get; set; }
        public DbSet<operationPermission> OperationPermissions { get; set; }
        public DbSet<PortalSetting> PortalSettings { get; set; }
        public DbSet<Evaluation> Evaluations { get; set; }
        public DbSet<EvaluationCharterItem> evaluationCharterItems { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<EmailsNotification> EmailsNotifications { get; set; }
        
        //Dyanmic AX
        public DbSet<BankInfo> bankInfos { get; set; }

        //view
        public DbSet<Product> Products { get; set; }
        public DbSet<VactionTypesView> VactionTypesViews { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           // optionsBuilder.use("Data Source=data.db");
        }
    }
}
