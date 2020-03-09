using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Repository;
using EssPortal.ViewModels;
using Dapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace EssPortal.Concrete
{
    public class RequestConcrete : GenericRepository<Request>, IRequestRepository
    {
        //  private readonly UserManager<IdentityUser> _userManager;
        // private readonly DatabaseContext _context;
        private readonly IConfiguration _configuration;
        public RequestConcrete(DatabaseContext context, IConfiguration configuration) : base(context)
        {
            // _context = context;
            _configuration = configuration; 
        }
        
        //public async Task<Request> GetRequestsWithAllData(Expression<Func<Request, bool>> predicate)
       
        public async Task<List<dynamic>> getRequests(long? pEmployeeID, long? pManagerID, int? pStageID, int? pOrderID)
        {
            //var EmployeeID = new SqlParameter("@EmployeeID", pEmployeeID);
            //var ManagerID = new SqlParameter("@ManagerID", pManagerID);
            //var StageID = new SqlParameter("@StageID", pStageID);
            //var OrderID = new SqlParameter("@OrderID", pOrderID);
            //return _context.eSS_GetOrders
            //          .FromSql("EXEC ESS_GetOrder @EmployeeID,@ManagerID,@StageID,@OrderID", EmployeeID, ManagerID, StageID, OrderID)
            // .ToList();
            
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@EmployeeID", pEmployeeID);
                paramater.Add("@ManagerID", pManagerID);
                paramater.Add("@StageID", pStageID);
                paramater.Add("@RequestID", pOrderID);

                return con.Query("[ess].GetOrder", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }
            
        }

        public async Task<Request> GetRequestsWithAllData(Expression<Func<Request, bool>> predicate)
        //public async Task<Request> GetRequestsWithAllData(int? pRequestID)
        {
            return await _context.Requests
                 .Include(c => c.RequestType)
                 .Include(c => c.Employee)
                 .Include(c => c.RequestStages)
                 .Include(c => c.Amendments).ThenInclude(a => a.AmendmentReasons)
                 //.Include(c => c.Housings)
                 .Where(predicate).FirstOrDefaultAsync();

            //using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            //{
            //    var paramater = new DynamicParameters();
            //    paramater.Add("@RequestID", pRequestID);
            //    IEnumerable<RequestViewModel> x = await con.QueryAsync<RequestViewModel>("ESS_LoadRequestInfo", paramater, null, 0, commandType: System.Data.CommandType.StoredProcedure);
            //    return x.FirstOrDefault();
            //}

        }
 

        public async Task<Request> saveRequest(RequestViewModel requestVM)
        {
            
            await _context.Requests.AddAsync(requestVM.request);

            foreach (RequestStage stage in requestVM.RequestStages)
            {
                stage.RequestID = requestVM.request.RequestID;
            }

            if (requestVM.amendments != null)
            {
                foreach (Amendment amendment in requestVM.amendments)
                {
                    amendment.RequestID = requestVM.request.RequestID;
                }
            }

            if (requestVM.Housings != null)
            {
                foreach (Housing housing in requestVM.request.Housings)
                {
                    housing.RequestID = requestVM.request.RequestID;
                }

            }
            await _context.AddRangeAsync(requestVM.RequestStages);
            if (requestVM.amendments != null) await _context.AddRangeAsync(requestVM.amendments);
            if (requestVM.Housings != null) await _context.AddRangeAsync(requestVM.Housings);
            await _context.SaveChangesAsync();
            return requestVM.request;
        }

       
    }
}
