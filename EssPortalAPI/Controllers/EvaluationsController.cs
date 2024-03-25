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
    public class EvaluationController : ControllerBase
    {

        private readonly IEvaluationRepository _evaluationRepository;
        public EvaluationController(IEvaluationRepository evaluationRepository)
        {
            _evaluationRepository = evaluationRepository; 
        }

        [HttpGet]
        [Route("GetEvalCommunityInfo/{pEmployeeID}/{pEvalCommunityID}")]
        public async Task<IActionResult> GetEvalCommunityInfo([FromRoute] long pEmployeeID, long pEvalCommunityID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier)); 

            IEnumerable<object> obj = await _evaluationRepository.getEvalCommunityInfo(pEmployeeID, pEvalCommunityID);
            if (obj == null)
            {
                return NotFound();
            } 
            return Ok(obj);
        }

        [HttpGet]
        [Route("GetEvalCharterCommunityInfo/{pEmployeeID}/{pEvalPeriodID}/{pEvalCommunityID}")]
        public async Task<IActionResult> GetEvalCharterCommunityInfo([FromRoute] long pEmployeeID, long pEvalPeriodID, long pEvalCommunityID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier)); 
            IEnumerable<object> obj = await _evaluationRepository.getEvalCharterCommunityInfo(pEmployeeID, pEvalPeriodID, pEvalCommunityID);
            if (obj == null)
            {
                return NotFound();
            } 
            return Ok(obj);
        }

        [HttpGet]
        [Route("GetEvalResultInfo/{pEvaluationID}")]
        public async Task<IActionResult> GetEvalResultInfo([FromRoute] int pEvaluationID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
           EvaluationViewModel obj = await _evaluationRepository.getEvalResultInfo(pEvaluationID, userId);
            if (obj == null)
            {
                return NotFound();
            }
            return Ok(obj);
        }
        
        [HttpGet]
        [Route("SearchEvaluationInfo/{pEvalPeriodID}/{pEvalCommunityID}/{pEmployeeID}/{pManagerID}")]
        public async Task<IActionResult> SearchEvaluationInfo([FromRoute] long pEvalPeriodID, long pEvalCommunityID, long pEmployeeID, long pManagerID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            IEnumerable<object> obj = await _evaluationRepository.searchEvaluationInfo(pEvalPeriodID, pEvalCommunityID, pEmployeeID, pManagerID, userId);
            if (obj == null)
            {
                return NotFound();
            }
            return Ok(obj);
        }



        [HttpPost("CreateEvaluation")]
        public async Task<IActionResult> CreateEvaluation([FromBody] EvaluationViewModel evaluationVM)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bad Request");
            }
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            evaluationVM.evaluationVM.UserID = userId;

            var obj = await _evaluationRepository.saveEvaluation(evaluationVM, userId);
            return Ok(obj);

        }


        [HttpPost("UpdateEvaluation")]
        public async Task<IActionResult> UpdateEvaluation([FromBody] EvaluationViewModel evaluationVM)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bad Request");
            }
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            //evaluationVM.evaluationVM.UserID = userId;

            var obj = await _evaluationRepository.updateEvaluation(evaluationVM, userId);
            return Ok(obj);

        }

       
        [HttpPost("ApproveRejectEvaluation")]
        public async Task<IActionResult> ApproveRejectEvaluation([FromBody] EvalVM evaluationVM)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bad Request");
            }
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));

            _evaluationRepository.ApproveRejectEvaluation(evaluationVM);
            return Ok();

        }

        #region "Delete"

        [HttpPost]
        [Route("DeleteEvaluation/{pEvaluationID}")]
        public async Task<IActionResult> DeleteEvaluation([FromRoute] int pEvaluationID)
        {
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            Boolean result = await _evaluationRepository.DeleteEvaluation(pEvaluationID, userId);
            if (result)
            {
                return Ok();
            }
            return BadRequest("Not Deleted Record");

        }
        #endregion
    }
}