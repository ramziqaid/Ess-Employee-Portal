using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Models.searchVM;
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
         
        
        [HttpGet]
        [Route("GetNextPrivateNumber")]
        public async Task<string> GetNextPrivateNumber()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    return await _requestRepository.GetNextPrivateNumber();
                }
                else
                {
                    return string.Empty;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet("{requestId}")]
        //[Route("GetRequest")]
        public async Task<IActionResult> GetRequest([FromRoute] int requestId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            RequestViewModel request = await _requestRepository.GetRequestInfo( requestId, userId);
            //IEnumerable<object> request = await _requestRepository.GetRequestInfo(requestId, userId);

            if (request == null)
            {
                return BadRequest("Not Found Requset by Number " + requestId);
            }
             
            return Ok(request);
        }

        [HttpPost]
         // [Authorize(Policy = "RequireAdminRole")]
        [Route("GetRequestList")]
        public async Task<IActionResult> GetRequestList([FromBody] RequestListVM requestVM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IEnumerable<object> request=await _requestRepository.getRequestsList(requestVM.requestID, requestVM.employeeID, requestVM.managerId, requestVM.requestTypeID,
                requestVM.statusCode, requestVM.showMyEmployee);
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
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                request.request.UserID = userId;


                var obj = await _requestRepository.saveRequest(request, userId);
                //return Ok();
                return Ok(obj);
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }
             
        }
        [HttpGet]
        // [Authorize(Policy = "RequireAdminRole")]
        [Route("GetOrderStage/{requestId}")]
        public async Task<IActionResult> GetOrderStage([FromRoute] int requestId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            

            IEnumerable<object> request = await _requestRepository.GetRequestStage(requestId,userId);
            if (request == null)
            {
                return NotFound();
            }
            // return Json(new { data = requests });
            return Ok(request);
        }

        [HttpPost("UpdateOrder")]
        public async Task<IActionResult> UpdateOrder([FromBody] RequestViewModel request)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bad Request");
            }
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                //if (userId != request.request.UserID)
                //{
                //    return BadRequest("You do not have permission to edit this data");
                //}

                var obj = await _requestRepository.updateRequest(request, userId);
                //return Ok();
                return Ok(obj);
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("ApprovalOrder")]
        public async Task<IActionResult> ApprovalOrder([FromBody] RequestStage requestStage)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bad Request");
            }
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier)); 

                var obj = await _requestRepository.approvalOrder(requestStage, userId); 
                return Ok(obj);
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }

        }


        #region "Delete"

        [HttpDelete]
        [Route("DeleteRequest/{requestID}")]
        public async Task<IActionResult> DeleteRequest(int requestID)
        {
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                Boolean result = await _requestRepository.DeleteRequest(requestID, userId);
                if (result)
                {
                    return Ok();
                }
                return BadRequest("Not Deleted Record");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        #endregion
    }
}