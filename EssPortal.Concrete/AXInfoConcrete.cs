using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using EssPortal.Interface;
using EssPortal.Models;
using EssPortal.ViewModels;
using System.Linq.Dynamic.Core;
using EssPortal.Interfaces;
using static EssPortal.Models.DynamicAxClass;

namespace EssPortal.Concrete
{
    public class AXInfoConcrete : IAXInfoRepository
    {
        private readonly IConfiguration _configuration;
        private readonly DatabaseContext _context;


        public AXInfoConcrete(DatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;

        }


        public async Task<List<dynamic>> GetProductGroups()
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query("SELECT * FROM [ess].[ProductGroups]", null, null, true, 0, commandType: CommandType.Text).ToList();
            }
        }


        public async Task<List<dynamic>> GetProducts()
        { 
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query("SELECT * FROM [ess].[ProductView]", null, null, true, 0, commandType: CommandType.Text).ToList();
            } 
        }


        public async Task<List<dynamic>> GetProjects()
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query("SELECT * FROM [ess].[ProjectView]", null, null, true, 0, commandType: CommandType.Text).ToList();
            }
        }

        public async Task<List<dynamic>> GetClient()
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query("SELECT * FROM [ess].[ClientView]", null, null, true, 0, commandType: CommandType.Text).ToList();
            }
        }


        public async Task<List<dynamic>> GetVends()
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return  con.Query("SELECT * FROM [ess].[VendView]", null, null, true, 0, commandType: CommandType.Text).ToList();
            }
        }

        public async Task<List<dynamic>> GetVactionTypes()
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query("SELECT * FROM [ess].[VactionTypesView]", null, null, true, 0, commandType: CommandType.Text).ToList();
            }
        }

        public async Task<List<dynamic>> GetLoanTypes()
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query("SELECT * FROM [ess].[LoanTypesView]", null, null, true, 0, commandType: CommandType.Text).ToList();
            }
        }

        public async Task<List<dynamic>> GetEvalPeriod()
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query("SELECT * FROM [ess].[EvalPeriodView]", null, null, true, 0, commandType: CommandType.Text).ToList();
            }
        }

        public async Task<List<dynamic>> GetEvalCommunity()
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query("SELECT * FROM [ess].[EvalCommunityView]", null, null, true, 0, commandType: CommandType.Text).ToList();
            }
        }
        



        public async Task<dynamic> GetEmployeeInfo(long pEmployeeID)
        {
            var employee = (from emp in _context.EmployeeInfoView
                            where emp.EmployeeID.Equals(pEmployeeID.ToString())
                            select emp).SingleOrDefault();

            return employee;
        }

        public async Task<LoanVm> GetLoansInfo(long pEmployeeID)
        {
            LoanVm obj = new LoanVm();
            try
            {
               
                using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
                {
                    var paramater1 = new DynamicParameters();
                    paramater1.Add("@EmployeeID", pEmployeeID);

                    var reader = con.QueryMultiple("[ess].[LoadLoansInfo]", paramater1, commandType: CommandType.StoredProcedure);
                    obj.LoanSum = reader.Read<LoanSum>().FirstOrDefault(); 
                    obj.LoanHeader = reader.Read<LoanHeader>().ToList();
                    obj.LoanDetails = reader.Read<LoanDetails>().ToList();

                    return obj;

                }
            }
            catch (Exception)
            { 
                return null;
            }
            

        }

        public async Task<List<dynamic>> GetAssestInfo(long pEmployeeID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EmployeeID", pEmployeeID); 

                return con.Query("[ess].LoadAssestInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }

        }

      

        public async Task<PayslipVM> GetPaySlipInfo(long pEmployeeID)
        {

            PayslipVM obj = new PayslipVM();
            try
            {
                using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
                {
                    var paramater1 = new DynamicParameters();
                    paramater1.Add("@EmployeeID", pEmployeeID);

                    var reader = con.QueryMultiple("[ess].[LoadPaySlipInfo]", paramater1, commandType: CommandType.StoredProcedure);
                    obj.PayslipHeader = reader.Read<PayslipHeader>().ToList();
                    obj.PayslipIncome = reader.Read<PayslipIncome>().ToList();
                    obj.Payslipdeduction = reader.Read<Payslipdeduction>().ToList();

                    return obj;

                }
            }
            catch (Exception)
            { 
                return null;
            }

            

        }

      

        public async Task<AttendeesVM> GetAttendeesInfo(long pEmployeeID,string pFromDate,string pToDate)
        {
            AttendeesVM obj = new AttendeesVM();
            try
            {
               
                using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
                {
                    var paramater = new DynamicParameters();
                    paramater.Add("@EmployeeID", pEmployeeID);
                    paramater.Add("@FromDate", pFromDate);
                    paramater.Add("@ToDate", pToDate);

                    var reader = con.QueryMultiple("[ess].[LoadAttendeesInfo]", paramater, commandType: CommandType.StoredProcedure);
                    obj.AttendeesToDay = reader.Read<Attendees>().ToList();
                    obj.AttendeesList = reader.Read<Attendees>().ToList();

                    return obj;

                }
            }
            catch (Exception)
            { 
                return null;
            }            

        }


        public async Task<dynamic> GetVacationBalanceInfo(Nullable<long> pEmployeeID,string pFromDate)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EmployeeID", pEmployeeID);
                paramater.Add("@RequsetDate", pFromDate);

                return con.Query("[ess].LoadVacationBalanceInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure);
            }

        }

        public async Task<List<dynamic>> GetEmployeeVacationInfo(long pEmployeeID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EmployeeID", pEmployeeID);

                return con.Query("[ess].LoadEmployeeVacationInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }

        }
        
               
 
    }
}
