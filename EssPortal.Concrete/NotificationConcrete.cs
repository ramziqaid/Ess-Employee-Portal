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
using EssPortal.Repository;
using EssPortal.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace EssPortal.Concrete
{
    public class NotificationConcrete : GenericRepository<Notification>, INotificationRepository
    {
        private readonly IConfiguration _configuration;

        public NotificationConcrete(DatabaseContext context, IConfiguration configuration) : base(context)
        {
            // _context = context;
            _configuration = configuration;
        }
        
        public async Task<List<dynamic>> GetNotification(int UserID, String NotType)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters(); 
                paramater.Add("@UserID", UserID);
                paramater.Add("@NotType", NotType);

                return con.Query("[ess].LoadNotificationInfo", paramater, null, true, 0, commandType: System.Data.CommandType.StoredProcedure).ToList();
             }
        }
             
        public async Task<bool> SaveNotification(int pNotDecisionID,bool pNotStatus,string pNotType, int pUserID ,int pNotActionID, int? pCreatedUserID)
        {
            try
            {
                Notification notification = new Notification
                {
                    NotDecisionID = pNotDecisionID,
                    NotStatus = pNotStatus,
                    NotType = pNotType,
                    CreatedUserID = pCreatedUserID,
                    NotActionID = pNotActionID,
                    UserID = pUserID
                };
                await _context.Notifications.AddAsync(notification);
                var result = await _context.SaveChangesAsync();
                if (result > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception)
            { 
            }
            return false;
        }

        public async Task<bool> HideNotification(int Id)
        {
            try
            {
                var obj = _context.Notifications.Where(p => p.ID == Id).FirstOrDefault();
                if (obj != null)
                {
                    obj.NotStatus = true;
                     _context.Notifications.Update(obj);
                    await _context.SaveChangesAsync();
                }               
                return true;
            }
            catch (Exception)
            {
                return false;
                throw;
            }
            return false;
        }

        public async  Task<bool> HideAllNotification(int UserID)
        {
            try
            {
                IEnumerable<Notification> obj = _context.Notifications.Where(p => p.UserID == UserID).ToList();
                if (obj != null)
                {
                    foreach(var item in obj)
                    {
                        item.NotStatus = true;
                        _context.Entry(item).Property(x => x.NotStatus).IsModified = true;
                        _context.Notifications.Update(item);
                    } 
                    
                    await _context.SaveChangesAsync();
                }
                return true;
            }
            catch (Exception)
            {
                return false;
                throw;
            }
            return false;
        }
    }
}
