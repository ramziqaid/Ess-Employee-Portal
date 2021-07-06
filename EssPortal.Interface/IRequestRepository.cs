
using EssPortal.Models;
using EssPortal.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace EssPortal.Interfaces
{
    public interface IRequestRepository : IGenericRepository<Request>
    {
        Task<Request> GetRequestsWithAllData(Expression<Func<Request, bool>> predicate);
        //Task<RequestViewModel> GetRequestsWithAllData(int pRequestID, int UserID);
        Task<RequestViewModel> GetRequestInfo(int pRequestID, int UserID);
        Task<List<dynamic>> GetRequestStage(int pRequestID, int UserID);
        Task<List<NextStageVM>> GetNextStageInfo(int pRequestID, int UserID);
        //Task<Request> GetRequestsWithAllData(int? pRequestID); 
        Task<List<dynamic>> getRequestsList(int? requestID, string pRequsetPrivateNumber,long? pEmployeeID, long? pManagerID, int? requestTypeID, string statusCode, Boolean showMyEmployee);
        Task<Request> saveRequest(RequestViewModel request, int UserID);
        Task<Request> updateRequest(RequestViewModel request, int UserID);
        Task<bool> approvalOrder(RequestStage requestStage, int UserID);
        Task<string> GetNextPrivateNumber();


        Task<bool> DeleteRequest(int pRequestID, int pUserID);

       


    }

}
