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
            return Ok(systemCodes);
        }


        // GET: api/SystemCode/acv

        [HttpGet("{Code}", Name = "GetSystemCode")]
        public async Task<IActionResult> Get( string SystemCode)
        {
             SystemCodes systemCodes;
            systemCodes = await _systemCodeRepository.FindAsync(p => p.SystemCode == SystemCode);
            return Ok(systemCodes);
        }
         

        //// POST: api/CreateRole
        //[HttpPost]
        //public HttpResponseMessage Post([FromBody] RoleViewModel roleViewModel)
        //{

        //    try
        //    {
        //        if (ModelState.IsValid)
        //        {
        //            if (_role.CheckRoleExits(roleViewModel.RoleName))
        //            {
        //                var response = new HttpResponseMessage()
        //                {
        //                    StatusCode = HttpStatusCode.Conflict
        //                };

        //                return response;
        //            }
        //            else
        //            {
        //                var temprole = AutoMapper.Mapper.Map<Role>(roleViewModel);

        //                _role.InsertRole(temprole);

        //                var response = new HttpResponseMessage()
        //                {
        //                    StatusCode = HttpStatusCode.OK
        //                };

        //                return response;
        //            }
        //        }
        //        else
        //        {
        //            var response = new HttpResponseMessage()
        //            {

        //                StatusCode = HttpStatusCode.BadRequest
        //            };

        //            return response;
        //        }
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}

        //// PUT: api/CreateRole/5
        //[HttpPut("{id}")]
        //public HttpResponseMessage Put(int id, [FromBody] RoleViewModel roleViewModel)
        //{
        //    try
        //    {
        //        var temprole = AutoMapper.Mapper.Map<Role>(roleViewModel);
        //        _role.UpdateRole(temprole);

        //        var response = new HttpResponseMessage()
        //        {
        //            StatusCode = HttpStatusCode.OK
        //        };

        //        return response;
        //    }
        //    catch (Exception)
        //    {
        //        var response = new HttpResponseMessage()
        //        {

        //            StatusCode = HttpStatusCode.BadRequest
        //        };

        //        return response;

        //    }
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public HttpResponseMessage Delete(int id)
        //{
        //    try
        //    {

        //        var result = _role.DeleteRole(id);

        //        if (result)
        //        {
        //            var response = new HttpResponseMessage()
        //            {
        //                StatusCode = HttpStatusCode.OK
        //            };
        //            return response;
        //        }
        //        else
        //        {
        //            var response = new HttpResponseMessage()
        //            {
        //                StatusCode = HttpStatusCode.BadRequest
        //            };
        //            return response;
        //        }
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

    }
}
