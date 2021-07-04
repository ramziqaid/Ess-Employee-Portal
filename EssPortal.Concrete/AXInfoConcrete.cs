﻿using System;
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
        

        public bool CheckNameExits(string memberFName, string memberLName, string memberMName)
        {
            var result = (from member in _context.MemberRegistration
                          where member.MemberLName == memberLName && member.MemberFName == memberFName &&
                                member.MemberMName == memberMName
                          select member.MemberId
                ).Count();

            return result > 0 ? true : false;
        }

        public long CheckNameExitsforUpdate(string memberFName, string memberLName, string memberMName)
        {
            var memberCount = (from member in _context.MemberRegistration
                               where member.MemberLName == memberLName && member.MemberFName == memberFName &&
                                     member.MemberMName == memberMName
                               select member.MemberId
                ).Count();

            if (memberCount > 0)
            {
                var result = (from member in _context.MemberRegistration
                              where member.MemberLName == memberLName && member.MemberFName == memberFName &&
                                    member.MemberMName == memberMName
                              select member.MemberId
                    ).FirstOrDefault();

                return result;
            }
            else
            {
                return 0;
            }
        }

        public bool DeleteMember(long memberId)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                string val = string.Empty;
                var para = new DynamicParameters();
                para.Add("@MemberId", memberId);
                int result = con.Execute("sprocMemberRegistrationDeleteSingleItem", para, null, 0, CommandType.StoredProcedure);
                if (result > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public MemberRegistrationViewModel GetMemberbyId(int memberId)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var para = new DynamicParameters();
                para.Add("@MemberId", memberId);
                return con.Query<MemberRegistrationViewModel>("sprocMemberRegistrationSelectSingleItem", para, null, true, 0, commandType: CommandType.StoredProcedure).Single();
            }
        }


        public List<MemberRegistrationGridModel> GetMemberList()
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                return con.Query<MemberRegistrationGridModel>("sprocMemberRegistrationSelectList", null, null, true, 0, commandType: CommandType.StoredProcedure).ToList();
            }
        }
         

        public int InsertMember(MemberRegistration memberRegistration)
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                con.Open();
                var sqlTransaction = con.BeginTransaction();
                var para = new DynamicParameters();
                para.Add("@MemberId", "0");
                para.Add("@MemberFName", memberRegistration.MemberFName);
                para.Add("@MemberLName", memberRegistration.MemberLName);
                para.Add("@MemberMName", memberRegistration.MemberMName);
                para.Add("@Address", memberRegistration.Address);
                para.Add("@DOB", memberRegistration.Dob);
                para.Add("@Age", memberRegistration.Age);
                para.Add("@Contactno", memberRegistration.Contactno);
                para.Add("@EmailID", memberRegistration.EmailId);
                para.Add("@Gender", memberRegistration.Gender);
                para.Add("@PlanID", memberRegistration.PlanID);
                para.Add("@SchemeID", memberRegistration.SchemeID);
                para.Add("@Createdby", memberRegistration.Createdby);
                para.Add("@JoiningDate", memberRegistration.JoiningDate);
                para.Add("@ModifiedBy", 0);
                para.Add("@MemIDOUT", dbType: DbType.Int32, direction: ParameterDirection.Output);
                int resultMember = con.Execute("SprocMemberRegistrationInsertUpdateSingleItem", para, sqlTransaction, 0, CommandType.StoredProcedure);
                int memberId = para.Get<int>("MemIDOUT");

                var paramater = new DynamicParameters();
                paramater.Add("@PaymentID", 0);
                paramater.Add("@PlanID", memberRegistration.PlanID);
                paramater.Add("@WorkouttypeID", memberRegistration.SchemeID);
                paramater.Add("@Paymenttype", "Cash");
                paramater.Add("@PaymentFromdt", memberRegistration.JoiningDate);
                paramater.Add("@PaymentAmount", memberRegistration.Amount);
                paramater.Add("@CreateUserID", memberRegistration.Createdby);
                paramater.Add("@ModifyUserID", memberRegistration.Createdby);
                paramater.Add("@RecStatus", "A");
                paramater.Add("@MemberID", memberId);
                paramater.Add("@PaymentIDOUT", dbType: DbType.Int32, direction: ParameterDirection.Output);
                int resultPayment = con.Execute("sprocPaymentDetailsInsertUpdateSingleItem", paramater, sqlTransaction, 0, CommandType.StoredProcedure);
                int paymentId = paramater.Get<int>("PaymentIDOUT");

                if (resultMember > 0 && resultPayment > 0)
                {
                    sqlTransaction.Commit();
                    return memberId;
                }
                else
                {
                    sqlTransaction.Rollback();
                    return 0;
                }
            }
        }

        public int UpdateMember(MemberRegistration memberRegistration)
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                con.Open();
                var sqlTransaction = con.BeginTransaction();
                var para = new DynamicParameters();
                para.Add("@MemberId", memberRegistration.MemberId);
                para.Add("@MemberFName", memberRegistration.MemberFName);
                para.Add("@MemberLName", memberRegistration.MemberLName);
                para.Add("@MemberMName", memberRegistration.MemberMName);
                para.Add("@Address", memberRegistration.Address);
                para.Add("@DOB", memberRegistration.Dob);
                para.Add("@Age", memberRegistration.Age);
                para.Add("@Contactno", memberRegistration.Contactno);
                para.Add("@EmailID", memberRegistration.EmailId);
                para.Add("@Gender", memberRegistration.Gender);
                para.Add("@ModifiedBy", 0);
                int result = con.Execute("Usp_UpdateMemberDetails", para, sqlTransaction, 0, CommandType.StoredProcedure);
                if (result > 0)
                {
                    sqlTransaction.Commit();
                    return result;
                }
                else
                {
                    sqlTransaction.Rollback();
                    return 0;
                }
            }
        }

        public IQueryable<MemberRegistrationGridModel> GetAll(QueryParameters queryParameters , int userId)
        {
            IQueryable<MemberRegistrationGridModel> allItems = (from member in _context.MemberRegistration
                                                                where member.Createdby == userId
                                                                join plan in _context.PlanMaster on member.PlanID equals plan.PlanID
                                                                join scheme in _context.SchemeMaster on member.SchemeID equals scheme.SchemeID
                                                                select new MemberRegistrationGridModel()
                                                                {

                                                                    MemberName = member.MemberFName + '|' + member.MemberMName + '|' + member.MemberLName,
                                                                    MemberNo = member.MemberNo,
                                                                    JoiningDate = member.JoiningDate,
                                                                    SchemeName = scheme.SchemeName,
                                                                    PlanName = plan.PlanName,
                                                                    MemberId = member.MemberId,
                                                                    Contactno = member.Contactno,
                                                                    EmailId = member.EmailId

                                                                }).AsQueryable().OrderBy("MemberId",
                    queryParameters.IsDescending());



            if (queryParameters.HasQuery())
            {
                allItems = allItems
                    .Where(x => x.MemberName.ToLowerInvariant().Contains(queryParameters.Query.ToLowerInvariant()));
            }

            return allItems
                .Skip(queryParameters.PageCount * (queryParameters.Page - 1))
                .Take(queryParameters.PageCount);
        }


        public int Count(int userId)
        {
            var membercount = (from payment in _context.MemberRegistration
                            where payment.Createdby == userId
                select payment).Count();
            return membercount;
        }

       
    }
}
