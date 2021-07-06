using EssPortal.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EssPortal.Interface
{
  public  interface IFactory
    {
        IAttachmentRepository attachmentRepository { get; }
        IAXInfoRepository aXInfoRepository { get; }
        IRole role { get; }
        IUsers users { get; }
        IUsersInRoles usersInRoles { get; }
        IEmployeeRepository employeeRepository { get; }
        IRequestTypeRepository requestTypeRepository { get; }
        IRequestRepository requestRepository { get; }
        ISystemCodeRepository systemCodeRepository { get; }
        IPurchasesRepository purchasesRepository { get; } 
        IOperationPermissionRepository operationPermissionRepository { get; }
        IOperationRepository operationRepository { get; }
        IPurchasesStageTypeRepository purchasesStageTypeRepository { get; }
        INotificationRepository notificationRepository { get; }
        IEvaluationRepository evaluationRepository { get; }
        IPortalSettingRepository portalSettingRepository { get; }
        IEmailsNotificationsRepository emailsNotificationsRepository { get; }

        Task<bool> SaveChangesAsync();
    }
}
