using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EssPortal.Interfaces;
using EssPortal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

 

namespace EssPortalAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class RequestTypeController : Controller
    {
        private readonly IRequestTypeRepository _requestTypeRepository;
        public RequestTypeController(IRequestTypeRepository requestTypeRepository)
        {
            _requestTypeRepository = requestTypeRepository;
        }
         
      
        // GET: api/EForm

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<RequestType> requestsType;
            requestsType = await _requestTypeRepository.GetAllAsyn();
            return Ok(requestsType);
        }



        // GET: api/EForm/5
        [HttpGet("{id}", Name = "GetByID")]
        public async Task<IActionResult> GetByID(int id)
        {
            IEnumerable<RequestType> requestsType;
            requestsType = await _requestTypeRepository.FindAllAsync(p => p.RequestGroupID == id);
            return Ok(requestsType);
        }


    }
}
