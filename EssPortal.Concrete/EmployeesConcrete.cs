using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Repository;
using EssPortal.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace EssPortal.Concrete
{
    public class EmployeesConcrete : GenericRepository<Employee>, IEmployeeRepository
    { 
        private readonly IConfiguration _configuration;
        public EmployeesConcrete(DatabaseContext context, IConfiguration configuration) : base(context)
        {
            // _context = context;
            _configuration = configuration;
        }

        public async Task<string> CheckEmployeeIsHR(string EmployeeID, int UserID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EmployeeID", EmployeeID);

                return   con.Query<string>("[ess].CheckEmployeeIsHR", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).SingleOrDefault(); ;
            }
        }

        public async Task<List<Employee>> GetByManager(string EmployeeID, int UserID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EmployeeID", EmployeeID);
                paramater.Add("@UserID", UserID);
                
                return con.Query<Employee>("[ess].LoadEmployeeForManager", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }
        }
    
        public async Task<List<EmployeeUserHRViewModel>> GetEmployeeUserHR()
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters(); 

                return con.Query<EmployeeUserHRViewModel>("[ess].LoadEmpUserHRInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }
        }
        
    }
}
