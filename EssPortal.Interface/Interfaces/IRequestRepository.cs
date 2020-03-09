
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
        //Task<Request> GetRequestsWithAllData(int? pRequestID);
        Task<List<dynamic>> getRequests(long? pEmployeeID, long? pManagerID, int? pStageID, int? pOrderID);
        Task<Request> saveRequest(RequestViewModel request);
    }

}
