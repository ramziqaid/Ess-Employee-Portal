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
        

        public async Task<List<Notification>> GetNotification(int UserID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters(); 
                paramater.Add("@UserID", UserID);

                IEnumerable<Notification> notifications = await con.QueryAsync<Notification>("[ESS].LoadNotificationInfo", paramater, null, 0, commandType: CommandType.StoredProcedure);
                return notifications.ToList();

            }
        }
    }
}
