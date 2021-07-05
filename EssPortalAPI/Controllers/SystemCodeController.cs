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
    [Authorize]
    [ApiController]
    public class SystemCodeController : ControllerBase
    {
        private readonly ISystemCodeRepository _systemCodeRepository;

        public SystemCodeController(ISystemCodeRepository systemCodeRepository)
        {
            _systemCodeRepository = systemCodeRepository;
        }

        // GET: api/CreateRole
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<SystemCodes> systemCodes;
            systemCodes = await _systemCodeRepository.GetAllAsyn();
            return Ok(systemCodes.OrderBy(p=>p.Sort));
        }


        // GET: api/SystemCode/acv

        [HttpGet("{Code}", Name = "GetSystemCode")]
        public async Task<IActionResult> Get( string SystemCode)
        {
             SystemCodes systemCodes;
            systemCodes = await _systemCodeRepository.FindAsync(p => p.SystemCode == SystemCode);
            return Ok(systemCodes);
        } 
    
    }
}
