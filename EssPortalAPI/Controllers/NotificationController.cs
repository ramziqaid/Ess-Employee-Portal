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
        [Route("GetNotification/{UserId}/{NotType}")]
        public async Task<IActionResult> Get(int userId,String NotType)
        {
            var CurrentuserId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            if (CurrentuserId !=userId)
            {
                return BadRequest(ModelState);
            }
            try
            {
               IEnumerable<object> notifications = await  _notificationRepository.GetNotification(userId, NotType);
               return Ok(notifications);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/CreateRole
        [HttpPost]
        [Route("HideNotification/{ID}")]
        public async Task<IActionResult> HideNotification(int ID)
        { 
            try
            {
               await _notificationRepository.HideNotification(ID);
               return Ok(); 
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/CreateRole
        [HttpPost]
        [Route("HideAllNotification/{UserID}")]
        public async Task<IActionResult> HideAllNotification(int UserID)
        {
            try
            {
                await _notificationRepository.HideAllNotification(UserID);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
