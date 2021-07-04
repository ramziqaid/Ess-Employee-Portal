using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
    public class EmailsNotificationConcrete : GenericRepository<EmailsNotification>, IEmailsNotificationsRepository
    {
        private readonly IConfiguration _configuration;

        public EmailsNotificationConcrete(DatabaseContext context, IConfiguration configuration) : base(context)
        {
            // _context = context;
            _configuration = configuration;
        }
        
        public async Task<bool> InsertEmailsNotifications (string subjectTitle, string subjectBody, int? fromUserID, int toUserID, int requestID, Boolean status)
        {
            EmailsNotification emailsNotification = new EmailsNotification()
            {
                SubjectTitle = subjectTitle,
                SubjectBody = subjectBody,
                FromUserID = fromUserID,
                ToUserID = toUserID,
                RequestID = requestID,
                Status = status
            };

            await _context.EmailsNotifications.AddAsync(emailsNotification);
            var result = _context.SaveChanges();
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
}
