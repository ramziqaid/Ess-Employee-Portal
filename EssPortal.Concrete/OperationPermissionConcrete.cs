using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Models.searchVM;
using EssPortal.Repository;
using EssPortal.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace EssPortal.Concrete
{
    public class OperationPermissionConcrete : IOperationPermissionRepository
    {
        private readonly DatabaseContext _context;
        private readonly IConfiguration _configuration;

        public OperationPermissionConcrete(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            _configuration = config;
        }

        public bool AddPermission(operationPermission obj)
        {
            _context.Add(obj);
            var result = _context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool CheckPermissionExists(operationPermission obj)
        {
            var result = (from operationPermission in _context.OperationPermissions
                          where operationPermission.OperationID == obj.OperationID && operationPermission.RoleId == obj.RoleId
                          select operationPermission).Count();

            return result > 0 ? true : false;
        }

        public List<OperationRolesViewModel> GetOperationRoles()
        {
            
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query<OperationRolesViewModel>("SELECT * FROM [ess].[OperationPermissionView]", null, null, true, 0, commandType: CommandType.Text).ToList();
            }
        }

        public async Task<List<dynamic>> GetPermissionInfo(OperationVM operationVM) 
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@UserID", operationVM.userID);
                paramater.Add("@OperationCode", operationVM.operationCode); 

                return con.Query("[ess].LoadPermissionInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }

        }
        public List<MemberRegistrationGridModel> GetMemberList()
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query<MemberRegistrationGridModel>("sprocMemberRegistrationSelectList", null, null, true, 0, commandType: CommandType.StoredProcedure).ToList();
            }
        }

        public bool RemovePermission(operationPermission obj)
        {
            var role = (from operationPermission in _context.OperationPermissions
                        where operationPermission.OperationID == obj.OperationID && operationPermission.RoleId == obj.RoleId
                        select operationPermission).FirstOrDefault();
            if (role != null)
            {
                _context.OperationPermissions.Remove(role);
                var result = _context.SaveChanges();

                if (result > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

     
    }
}
