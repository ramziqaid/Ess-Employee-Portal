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

namespace EssPortalAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PurchasesStageTypeController : ControllerBase
    {
        private readonly IPurchasesStageTypeRepository _purchasesStageTypeRepository;

        public PurchasesStageTypeController(IPurchasesStageTypeRepository purchasesStageTypeRepository)
        {
            _purchasesStageTypeRepository = purchasesStageTypeRepository;
        }

        // GET: api/CreateRole
        [HttpGet] 
        public async Task<IActionResult> Get()
        {
            IEnumerable<PurchasesStageType> purchasesStageTypes;
            purchasesStageTypes = await _purchasesStageTypeRepository.GetAllAsyn();

            if (purchasesStageTypes == null)
            {
                return NotFound();
            }
            return Ok(purchasesStageTypes);

             
        }

   
        // POST: api/CreateRole
        [HttpPost]
       public async Task<IActionResult> Post([FromBody] PurchasesStageType purchasesStageType)
        {

            try
            {
                if (ModelState.IsValid)
                {
                   await _purchasesStageTypeRepository.UpdatePurchasesStageType(purchasesStageType);
                    return Ok();
                }
                return BadRequest("Not Update");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/CreateRole/5
        [HttpPut("{id}")]
        public HttpResponseMessage Put(int id, [FromBody] RoleViewModel roleViewModel)
        {
            try
            {
                
                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

                return response;
            }
            catch (Exception)
            {
                var response = new HttpResponseMessage()
                {

                    StatusCode = HttpStatusCode.BadRequest
                };

                return response;

            }
        }

         
    }
}
