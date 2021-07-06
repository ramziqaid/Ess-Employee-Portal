

using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static EssPortal.Models.DynamicAxClass;

namespace EssPortal.Interfaces
{
    public interface IAXInfoRepository  
    {
        Task<List<dynamic>> GetProductGroups();
        Task<List<dynamic>> GetProducts();
        Task<List<dynamic>> GetProjects();
        Task<List<dynamic>> GetClient();
        Task<List<dynamic>> GetVends();
        Task<List<dynamic>> GetVactionTypes();
        Task<List<dynamic>> GetLoanTypes();
        Task<List<dynamic>> GetEvalPeriod();
        Task<List<dynamic>> GetEvalCommunity();


        Task<dynamic> GetEmployeeInfo(long pEmployeeID);
        Task<LoanVm> GetLoansInfo(long pEmployeeID);
        Task<List<dynamic>> GetAssestInfo(long pEmployeeID);
        Task<PayslipVM> GetPaySlipInfo(long pEmployeeID);
        Task<AttendeesVM> GetAttendeesInfo(long pEmployeeID, string pFromDate, string pToDate);
        Task<dynamic> GetVacationBalanceInfo(Nullable<long> pEmployeeID, string pFromDate);
        Task<List<dynamic>> GetEmployeeVacationInfo(long pEmployeeID);



    }

}
