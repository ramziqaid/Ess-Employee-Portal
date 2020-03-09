using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EssPortal.Interface;
using EssPortal.Models;
using EssPortal.ViewModels;
using EssPortal.Interfaces;
using System.Security.Claims;

namespace EssPortalAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly INotificationRepository _notificationRepository;

        public NotificationController(INotificationRepository notificationRepository)
        {
            _notificationRepository = notificationRepository;
        }

        // GET: api/CreateRole
        [HttpGet]
        [Route("GetNotification/{UserId}")]
        public async Task<IActionResult> Get(int userId)
        {
            var CurrentuserId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            if (CurrentuserId !=userId)
            {
                return BadRequest(ModelState);
            }
            try
            {
               List< Notification> notifications= await  _notificationRepository.GetNotification(userId);
                return Ok(notifications);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        } 

    }
}
