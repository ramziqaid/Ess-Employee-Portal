using EssPortal.Interface;
using EssPortal.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EssPortal.Concrete
{
    public class Factory : IFactory
    {
        private readonly DatabaseContext _context;
        private readonly IConfiguration _configuration;
        public Factory(DatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public IAttachmentRepository attachmentRepository
        {
            get
            {
                if (attachmentRepository == null)
                {
                    return new AttachmentConcrete(_context, _configuration);
                }
                return attachmentRepository;
            }
        }

        public IAXInfoRepository aXInfoRepository
        {
            get
            {
                if (aXInfoRepository == null)
                {
                    return new AXInfoConcrete(_context, _configuration);
                }
                return aXInfoRepository;
            }
        }

        public IRole role
        {
            get
            {
                if (role == null)
                {
                    return new RoleConcrete(_context, _configuration);
                }
                return role;
            }
        }

        public IUsers users
        {
            get
            {
                if (users == null)
                {
                    return new UsersConcrete(_context, _configuration);
                }
                return users;
            }
        }

        public IUsersInRoles usersInRoles
        {
            get
            {
                if (usersInRoles == null)
                {
                    return new UsersInRolesConcrete(_context, _configuration);
                }
                return usersInRoles;
            }
        }

        public IEmployeeRepository employeeRepository
        {
            get
            {
                if (employeeRepository == null)
                {
                    return new EmployeesConcrete(_context, _configuration);
                }
                return employeeRepository;
            }
        }


        public IRequestTypeRepository requestTypeRepository
        {
            get
            {
                if (requestTypeRepository == null)
                {
                    return new RequestTypeConcrete(_context, _configuration);
                }
                return requestTypeRepository;
            }
        }

        public IRequestRepository requestRepository
        {
            get
            {
                if (requestRepository == null)
                {
                    return new RequestConcrete(_context, _configuration);
                }
                return requestRepository;
            }
        }

        public ISystemCodeRepository systemCodeRepository
        {
            get
            {
                if (systemCodeRepository == null)
                {
                    return new SystemCodeConcrete(_context);
                }
                return systemCodeRepository;
            }
        }

        public IPurchasesRepository purchasesRepository
        {
            get
            {
                if (purchasesRepository == null)
                {
                    return new PurchasesConcrete(_context, _configuration);
                }
                return purchasesRepository;
            }
        }

        public IOperationPermissionRepository operationPermissionRepository
        {
            get
            {
                if (operationPermissionRepository == null)
                {
                    return new OperationPermissionConcrete(_context, _configuration);
                }
                return operationPermissionRepository;
            }
        }

        public IOperationRepository operationRepository
        {
            get
            {
                if (operationRepository == null)
                {
                    return new OperationConcrete(_context);
                }
                return operationRepository;
            }
        }

        public IPurchasesStageTypeRepository purchasesStageTypeRepository
        {
            get
            {
                if (purchasesStageTypeRepository == null)
                {
                    return new PurchasesStageTypeConcrete(_context);
                }
                return purchasesStageTypeRepository;
            }
        }

        public INotificationRepository notificationRepository
        {
            get
            {
                if (notificationRepository == null)
                {
                    return new NotificationConcrete(_context, _configuration);
                }
                return notificationRepository;
            }
        }

        public IEvaluationRepository evaluationRepository
        {
            get
            {
                if (evaluationRepository == null)
                {
                    return new EvaluationConcrete(_context, _configuration);
                }
                return evaluationRepository;
            }
        }

        public IPortalSettingRepository portalSettingRepository
        {
            get
            {
                if (portalSettingRepository == null)
                {
                    return new PortalSettingConcrete(_context);
                }
                return portalSettingRepository;
            }
        }

        public IEmailsNotificationsRepository emailsNotificationsRepository
        {
            get
            {
                if (emailsNotificationsRepository == null)
                {
                    return new EmailsNotificationConcrete(_context, _configuration);
                }
                return emailsNotificationsRepository;
            }
        }

        public IRequestStageRepository requestStageRepository => throw new NotImplementedException();

        public IRequestExtraFieldsRepository requestExtraFieldsRepository => throw new NotImplementedException();

        public async Task<bool> SaveChangesAsync()
        {
            var result = await _context.SaveChangesAsync();
            if (result > 0) return true;
            return false;
        }
    }
}
