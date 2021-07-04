

using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace EssPortal.Interfaces
{
    public interface INotificationRepository : IGenericRepository<Notification>
    {
        Task<bool> SaveNotification(int pNotDecisionID, bool pNotStatus, string pNotType, int pUserID, int pNotActionID, int? pCreatedUserID);
        Task<List<dynamic>> GetNotification(int UserID, String NotType);
        Task<bool> HideNotification(int Id);
        
    }

}
