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
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize]    
    [ApiController]
    public class AXInfoController : ControllerBase
    {
        private readonly IAXInfoRepository _iAXInfoRepository;

        public AXInfoController(IAXInfoRepository iAXInfoRepository)
        {
            _iAXInfoRepository = iAXInfoRepository;
        }

        [Route("GetProductGroup")]
        [HttpGet]
        public async Task<IActionResult> GetProductGroup()
        {
            IEnumerable<object> products = await _iAXInfoRepository.GetProductGroups();
            if (products == null)
            {
                return BadRequest("Not Found Product Group ");
            }
            return Ok(products);
        }


        [Route("GetProduct")]
        [HttpGet]
        public async Task<IActionResult> GetProduct()
        { 
            IEnumerable<object> products= await _iAXInfoRepository.GetProducts(); 
            if (products == null)
            {
                return BadRequest("Not Found product ");
            } 
            return Ok(products);
        }

        [Route("GetProject")]
        [HttpGet]
        public async Task<IActionResult> GetProject()
        {
            IEnumerable<object> products = await _iAXInfoRepository.GetProjects();
            if (products == null)
            {
                return BadRequest("Not Found product ");
            }
            return Ok(products);
        }

        [Route("GetClient")]
        [HttpGet]
        public async Task<IActionResult> GetClient()
        {
            IEnumerable<object> client = await _iAXInfoRepository.GetClient();
            if (client == null)
            {
                return BadRequest("Not Found Client ");
            }
            return Ok(client);
        }

        [Route("GetVend")]
        [HttpGet]
        public async Task<IActionResult> GetVend()
        {
            IEnumerable<object> vend = await _iAXInfoRepository.GetVends();
            if (vend == null)
            {
                return BadRequest("Not Found Vend ");
            }
            return Ok(vend);
        }
        

        //// GET: api/CreateRole
        //[HttpGet]
        //public IEnumerable<Role> Get()
        //{
        //    try
        //    {
        //        return _role.GetAllRole();
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}

        //// GET: api/CreateRole/5
        //[HttpGet("{id}", Name = "GetRole2")]
        //public Role Get(int id)
        //{
        //    try
        //    {
        //        return _role.GetRolebyId(id);
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}

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
