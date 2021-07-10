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
        private AttachmentConcrete _attachmentConcrete;
        private AXInfoConcrete _aXInfoConcrete;
        private RoleConcrete _roleConcrete;
        private UsersConcrete _usersConcrete;
        private UsersInRolesConcrete _usersInRolesConcrete;
        private EmployeesConcrete _employeesConcrete;
        private RequestTypeConcrete _requestTypeConcrete;
        private RequestConcrete _requestConcrete;
        private SystemCodeConcrete _systemCodeConcrete;
        private PurchasesConcrete _purchasesConcrete;
        private OperationPermissionConcrete _operationPermissionConcrete;
        private OperationConcrete _operationConcrete;
        private PurchasesStageTypeConcrete _purchasesStageTypeConcrete;
        private NotificationConcrete _notificationConcrete;
        private EvaluationConcrete _evaluationConcrete;
        private PortalSettingConcrete _portalSettingConcrete;
        private EmailsNotificationConcrete _emailsNotificationConcrete;
        private RequestStageConcrete _requestStageRepository;
        private RequestExtraFieldsConcrete _requestExtraFieldsConcrete;


        public Factory(DatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public IAttachmentRepository attachmentRepository
        {
            get
            {
                if (_attachmentConcrete == null)
                {
                    _attachmentConcrete = new AttachmentConcrete(_context, _configuration);
                    return _attachmentConcrete;
                }
                return _attachmentConcrete;
            }
        }

        public IAXInfoRepository aXInfoRepository
        {
            get
            {
                if (_aXInfoConcrete == null)
                {
                    _aXInfoConcrete = new AXInfoConcrete(_context, _configuration);
                    return _aXInfoConcrete;
                }
                return _aXInfoConcrete;
            }
        }

        public IRole role
        {
            get => (_roleConcrete == null) ? _roleConcrete = new RoleConcrete(_context, _configuration) : _roleConcrete;
            //{
            //    if (_roleConcrete == null)
            //    {
            //        _roleConcrete = new RoleConcrete(_context, _configuration);
            //        return _roleConcrete;
            //    }
            //    return _roleConcrete;
            //}
        }

        public IUsers users
        {
            get => (_usersConcrete == null) ? _usersConcrete = new UsersConcrete(_context, _configuration) : _usersConcrete;
            //{
            //    if (_usersConcrete == null)
            //    {
            //        _usersConcrete = new UsersConcrete(_context, _configuration);
            //    }
            //    return _usersConcrete;
            //}
        }

        public IUsersInRoles usersInRoles
        {
            get
            {
                if (_usersInRolesConcrete == null)
                {
                    _usersInRolesConcrete = new UsersInRolesConcrete(_context, _configuration);
                    return _usersInRolesConcrete;
                }
                return _usersInRolesConcrete;
            }
        }

        public IEmployeeRepository employeeRepository
        {
            get
            {
                if (_employeesConcrete == null)
                {
                    _employeesConcrete = new EmployeesConcrete(_context, _configuration);
                    return _employeesConcrete;
                }
                return _employeesConcrete;
            }
        }

        public IRequestTypeRepository requestTypeRepository
        {
            get
            {
                if (_requestTypeConcrete == null)
                {
                    _requestTypeConcrete = new RequestTypeConcrete(_context, _configuration);
                    return _requestTypeConcrete;
                }
                return _requestTypeConcrete;
            }
        }

        public IRequestRepository requestRepository
        {
            get
            {
                if (_requestConcrete == null)
                {
                    _requestConcrete = new RequestConcrete(_context, _configuration);
                    return _requestConcrete;
                }
                return _requestConcrete;
            }
        }
          
        public ISystemCodeRepository systemCodeRepository
        {
            get
            {
                if (_systemCodeConcrete == null)
                {
                    _systemCodeConcrete = new SystemCodeConcrete(_context);
                }
                return _systemCodeConcrete;
            }
        }

        public IPurchasesRepository purchasesRepository
        {
            get
            {
                if (_purchasesConcrete == null)
                {
                    _purchasesConcrete = new PurchasesConcrete(_context, _configuration);
                }
                return _purchasesConcrete;
            }
        }

        public IOperationPermissionRepository operationPermissionRepository
        {
            get
            {
                if (_operationPermissionConcrete == null)
                {
                    _operationPermissionConcrete = new OperationPermissionConcrete(_context, _configuration);
                }
                return _operationPermissionConcrete;
            }
        }

        public IOperationRepository operationRepository
        {
            get
            {
                if (_operationConcrete == null)
                {
                    _operationConcrete = new OperationConcrete(_context);
                }
                return _operationConcrete;
            }
        }

        public IPurchasesStageTypeRepository purchasesStageTypeRepository
        {
            get
            {
                if (_purchasesStageTypeConcrete == null)
                {
                    _purchasesStageTypeConcrete = new PurchasesStageTypeConcrete(_context);
                }
                return _purchasesStageTypeConcrete;
            }
        }

        public INotificationRepository notificationRepository
        {
            get
            {
                if (_notificationConcrete == null)
                {
                    _notificationConcrete = new NotificationConcrete(_context, _configuration);
                }
                return _notificationConcrete;
            }
        }

        public IEvaluationRepository evaluationRepository
        {
            get
            {
                if (_evaluationConcrete == null)
                {
                    _evaluationConcrete = new EvaluationConcrete(_context, _configuration);
                }
                return _evaluationConcrete;
            }
        }

        public IPortalSettingRepository portalSettingRepository
        {
            get
            {
                if (_portalSettingConcrete == null)
                {
                    _portalSettingConcrete = new PortalSettingConcrete(_context);
                }
                return _portalSettingConcrete;
            }
        }

        public IEmailsNotificationsRepository emailsNotificationsRepository
        {

            get
            {
                if (_emailsNotificationConcrete == null)
                {
                    _emailsNotificationConcrete = new EmailsNotificationConcrete(_context, _configuration);
                }
                return _emailsNotificationConcrete;
            }
        }

        public IRequestStageRepository requestStageRepository  {
            get
            {
                if (_requestStageRepository == null)
                {
                    _requestStageRepository = new RequestStageConcrete(_context);
                }
                return _requestStageRepository;
            }
        }

        public IRequestExtraFieldsRepository requestExtraFieldsRepository
        {
            get
            {
                if (_requestExtraFieldsConcrete == null)
                {
                    _requestExtraFieldsConcrete = new RequestExtraFieldsConcrete(_context);
                }
                return _requestExtraFieldsConcrete;
            }
        }

        public async Task<bool> SaveChangesAsync()
        {
            var result = await _context.SaveChangesAsync();
            if (result > 0) return true;
            return false;
        }
    }
}
