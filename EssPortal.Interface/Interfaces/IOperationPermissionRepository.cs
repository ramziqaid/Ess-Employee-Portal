

using EssPortal.Models;
using EssPortal.Models.searchVM;
using EssPortal.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace EssPortal.Interfaces
{
    public interface IOperationPermissionRepository 
    {
        bool AddPermission(operationPermission obj);
        bool CheckPermissionExists(operationPermission obj);
        bool RemovePermission(operationPermission obj);  
        List<OperationRolesViewModel> GetOperationRoles();
        Task<List<dynamic>> GetPermissionInfo(OperationVM operationVM);

    }

}
