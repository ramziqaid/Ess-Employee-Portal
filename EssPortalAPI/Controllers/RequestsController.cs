using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
 

namespace EssPortalAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class RequestsController : ControllerBase
    {

        private readonly IRequestRepository _requestRepository;
        public RequestsController(IRequestRepository requestRepository)
        {
            _requestRepository = requestRepository; 
        }

      
        [HttpGet("{requestId}")]
        //[Route("GetRequest")]
        public async Task<IActionResult> GetRequest([FromRoute] int requestId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Request request = await _requestRepository.GetRequestsWithAllData(p=>p.RequestID == requestId);  

            if (request == null)
            {
                return BadRequest("Not Found Requset by Number " + requestId);
            }
           
            return Ok(request);
        }

        [HttpGet]
        [Route("GetRequestForManager/{employeeID}")]
        [Authorize(Policy = "RequireAdminRole")]
        public async Task<IActionResult> GetRequestForManager([FromRoute] long employeeID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //  var currentUserId = long.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            IEnumerable<object> request =await _requestRepository.getRequests(-1, employeeID, -1, -1);
            if (request == null)
            {
                return NotFound();
            }
            // return Json(new { data = requests });
            return Ok(request);
        }

        [HttpGet]
        [Route("GetRequestForEmployee/{employeeID}")]
        public async Task<IActionResult> GetRequestForEmployee([FromRoute] long employeeID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //  var currentUserId = long.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            IEnumerable<object> request = await _requestRepository.getRequests(employeeID, -1, -1, -1); 
            if (request == null)
            {
                return NotFound();
            }
            // return Json(new { data = requests });
            return Ok(request);
        }

        [HttpPost("CreateOrder")]
        public async Task<IActionResult> CreateOrder([FromBody] RequestViewModel request)
        { 

            if (!ModelState.IsValid)
            {
                return BadRequest("Bad Request");
            }
            try
            {
                var obj = await _requestRepository.saveRequest(request);
                //return Ok();
                return Ok();
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }
             
        }

    }
}