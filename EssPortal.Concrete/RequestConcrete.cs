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
using System.Data;
using Microsoft.AspNetCore.Mvc;

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

      
        public async Task<List<dynamic>> getRequestsList(int? requestID,long? pEmployeeID, long? pManagerID, int? requestTypeID, 
                                                          string orderStatusCode, Boolean showMyEmployee)
        {  
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@RequestID", requestID);
                paramater.Add("@EmployeeID", pEmployeeID);
                paramater.Add("@ManagerID", pManagerID);
                paramater.Add("@RequestTypeID", requestTypeID);
                paramater.Add("@StatusCode", orderStatusCode);
                paramater.Add("@ShowMyEmployee", showMyEmployee);

                return con.Query("[ess].GetOrder", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }
            
        }

        public async Task<List<dynamic>> GetRequestStage(int pRequestID, int UserID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@RequestID", pRequestID); 

                return con.Query("[ess].GetOrderStage", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
            }

        }

        public async Task<Request> GetRequestsWithAllData(Expression<Func<Request, bool>> predicate)
         {
            return await _context.Requests
                 //.Include(c => c.RequestType)
                 //.Include(c => c.Employee)
                 //.Include(c => c.RequestStages)
                 //.Include(c => c.Amendments)//.ThenInclude(a => a.AmendmentReasons)
                 //                           //.Include(c => c.Housings)
                 .Where(predicate).FirstOrDefaultAsync();

            //using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            //{
            //    var paramater = new DynamicParameters();
            //    paramater.Add("@RequestID", pRequestID);
            //    IEnumerable<RequestViewModel> x = await con.QueryAsync<RequestViewModel>("ESS_LoadRequestInfo", paramater, null, 0, commandType: System.Data.CommandType.StoredProcedure);
            //    return x.FirstOrDefault();
            //}

        }

        //public async Task<RequestViewModel> GetRequestsWithAllData(int pRequestID, int UserID)
        //{

        //    RequestViewModel obj = new RequestViewModel();
        //    using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
        //    {
        //        var paramater1 = new DynamicParameters();
        //        paramater1.Add("@RequestID", pRequestID);
        //        paramater1.Add("@UserID", UserID);

        //        Request purchases = _context.Requests.Where(p => p.RequestID == pRequestID && p.UserID == UserID).FirstOrDefault();
        //        //IEnumerable<Request> purchases = await con.QueryAsync<Request>("[ESS].LoadRequestInfo", paramater1, null, 0, commandType: CommandType.StoredProcedure);
        //        if (purchases == null)
        //        {
        //            return obj;
        //        }
        //        IEnumerable<Amendment> amendment = _context.Amendments.Where(p => p.RequestID == pRequestID);
        //        IEnumerable<Housing> housing = _context.Housings.Where(p => p.RequestID == pRequestID);
        //        IEnumerable<RequestStage> requestStage = _context.RequestStages.Where(p => p.RequestID == pRequestID);
        //        IEnumerable<RequestExtraField> extraFiled = _context.RequestExtraFields.Where(p => p.RequestID == pRequestID);


        //        obj.request = purchases;
        //        if (amendment != null) obj.amendments = amendment.ToList();
        //        if (housing != null) obj.Housings = housing.ToList();
        //        if (requestStage != null) obj.RequestStages = requestStage.ToList();
        //        if (requestStage != null) obj.RequestExtraFields = extraFiled.ToList();

        //        return obj;
        //    }

        //}

        public async Task<RequestViewModel> GetRequestInfo(int pRequestID, int UserID)
        {

            RequestViewModel obj = new RequestViewModel();
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater1 = new DynamicParameters();
                paramater1.Add("@RequestID", pRequestID);
                paramater1.Add("@UserID", UserID);

                var reader = con.QueryMultiple("[ess].LoadRequestInfo", paramater1, commandType: CommandType.StoredProcedure);
                obj.request = reader.Read<Request>().FirstOrDefault();
                obj.RequestExtraFields = reader.Read<RequestExtraField>().ToList();
                obj.RequestStages = reader.Read<RequestStage>().ToList();

                return obj;
              //  return con.Query("[ess].LoadRequestInfo", paramater1, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();

            }

        }

        public async Task<Request> saveRequest(RequestViewModel requestVM, int UserID)
        {
            requestVM.request.RequestID = 0;

            #region "Bussines"
            var stageType = _context.OrderStageTypes.Where(p => p.StageTypeID == 1 && p.RequestTypeID == requestVM.request.RequestTypeID);
            if (stageType.Count() == 0)
            {
                throw new Exception("MSG_STAGE_NOT_FOUND");
            }
            switch (requestVM.request.RequestTypeID)
            {
                case 5:
                    break;
            }
         

           #endregion


           await _context.Requests.AddAsync(requestVM.request);

            foreach (RequestStage stage in requestVM.RequestStages)
            {
                stage.RequestID = requestVM.request.RequestID;
                stage.ActionCode = "COR01";
                stage.OrderStageID = 0;
            }

            foreach (RequestExtraField obj in requestVM.RequestExtraFields)
            {
                obj.RequestID = requestVM.request.RequestID;
                obj.RequestExtraFieldID = 0;
            }


            await _context.AddRangeAsync(requestVM.RequestStages);
            if (requestVM.RequestExtraFields != null) await _context.AddRangeAsync(requestVM.RequestExtraFields);
            await _context.SaveChangesAsync();

            AttachmentConcrete attachmentConcrete = new AttachmentConcrete(_context, _configuration);
            if (requestVM.attachments != null)
            {
                foreach (Attachment dtl in requestVM.attachments)
                {
                    Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == dtl.AttachmentID);
                    obj.ReferenceID = requestVM.request.RequestID;
                    await attachmentConcrete.UpdateAttachment(obj);
                }
            }

            return requestVM.request;

            //if (requestVM.amendments != null)
            //{
            //    foreach (Amendment amendment in requestVM.amendments)
            //    {
            //        amendment.RequestID = requestVM.request.RequestID;
            //    }
            //}

            //if (requestVM.Housings != null)
            //{
            //    foreach (Housing housing in requestVM.Housings)
            //    {
            //        housing.RequestID = requestVM.request.RequestID;
            //    }

            //}
            //if (requestVM.amendments != null) await _context.AddRangeAsync(requestVM.amendments);
            //if (requestVM.Housings != null) await _context.AddRangeAsync(requestVM.Housings);

        }

        public async Task<Request> updateRequest(RequestViewModel requestVM, int UserID)
        {
            var stage = _context.RequestStages.Where(p => p.RequestID == requestVM.request.RequestID).LastOrDefault();
            if (UserID != requestVM.request.UserID)
            {
                throw new Exception("NOT_HAVE_PERMISSION_EDIT_THIS_REQUEST");
            }
            if (requestVM.request.StatusCode != enumsType.RequestStatus.NewRequest)
            {
                throw new Exception("MSG_REQUET_NOT_NEW_STAGE");
            }

              _context.Requests.Update(requestVM.request);

            if (requestVM.RequestExtraFields != null)  _context.UpdateRange(requestVM.RequestExtraFields);
            await _context.SaveChangesAsync();

            AttachmentConcrete attachmentConcrete = new AttachmentConcrete(_context, _configuration);
            if (requestVM.attachments != null)
            {
                foreach (Attachment dtl in requestVM.attachments)
                {
                    Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == dtl.AttachmentID);
                    obj.ReferenceID = requestVM.request.RequestID;
                    await attachmentConcrete.UpdateAttachment(obj);
                }
            }
            return requestVM.request;

            //await _context.AddRangeAsync(requestVM.RequestStages);
            //if (requestVM.amendments != null)   _context.Amendments.UpdateRange(requestVM.amendments);
            //if (requestVM.Housings != null)   _context.Housings.UpdateRange(requestVM.Housings);
            //await _context.SaveChangesAsync();

        }


        public async Task<bool> approvalOrder(RequestStage requestStage, int UserID)
        {
            //requestStage.OrderStageID = 0;
            //Request request = _context.Requests.Where(p => p.RequestID == requestStage.RequestID).FirstOrDefault();

            #region "Bussines"

            switch (requestStage.ActionCode)
            {
                case "CSR03":
                    throw new Exception("MSA_THIS_REQUEST_CANCELED");
                    break;
                case "CSR04":
                    throw new Exception("MSA_THIS_REQUEST_REJECTED");
                    break;
                case "CSR05":
                    throw new Exception("MSA_THIS_REQUEST_DONE");
                    break;
            }
            // throw new Exception("MSG_STAGE_NOT_FOUND");

            #endregion

            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            { 

                var paramater1 = new DynamicParameters();
                paramater1.Add("@RequestID", requestStage.RequestID);
                paramater1.Add("@StageTypeID", requestStage.StageTypeID);
                paramater1.Add("@ActionCode", requestStage.ActionCode);
                paramater1.Add("@UserID", @UserID);
                paramater1.Add("@Justification", requestStage.Justification);

                var affectedRows = await con.ExecuteAsync("[ESS].ApprovalRequestInfo", paramater1, null, 0, commandType: CommandType.StoredProcedure);
                if (affectedRows > 0)
                    return true;
                return false;
            }            
            
        }

        public async Task<bool> DeleteRequest(int pRequestID, int pUserID)
        {
            Request request = _context.Requests.Where(p => p.RequestID == pRequestID).FirstOrDefault();
            if (request.StatusCode != enumsType.RequestStatus.NewRequest)
            {
                throw new Exception("MSG_NOT_CAN_DELETE_REQUET_NOT_NEW_STAGE");
            }
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater1 = new DynamicParameters();
                paramater1.Add("@RequestID", pRequestID);
                paramater1.Add("@UserID", pUserID);

                var affectedRows = await con.ExecuteAsync("[ESS].DeleteRequestInfo", paramater1, null, 0, commandType: CommandType.StoredProcedure);
                if (affectedRows > 0)
                    return true;
                return false;
            }
            return false;
        }


        public async Task<string> GetNextPrivateNumber()
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                 
                var x= con.Query<string>("[ess].GetRequestPrivateNumber", null, null, true, 0, commandType: CommandType.StoredProcedure).SingleOrDefault();
                return x;
                 
            }

        }
    }
}
