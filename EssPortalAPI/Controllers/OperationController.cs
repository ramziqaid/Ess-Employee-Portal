using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
 
using Microsoft.AspNetCore.Mvc;
using EssPortal.Interface;
using EssPortal.Models;
using EssPortal.ViewModels;
using EssPortal.Interfaces;
using EssPortal.Models.searchVM;

namespace EssPortalAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OperationController : ControllerBase
    {
        private readonly IOperationRepository _operationRepository;
        private readonly IOperationPermissionRepository _operationPermissionRepository;

        public OperationController(IOperationRepository operationRepository, IOperationPermissionRepository operationPermissionRepository)
        {
            _operationRepository = operationRepository;
            _operationPermissionRepository = operationPermissionRepository;
        }

        // GET: api/GetOperationRoles
        [HttpGet]
        public IEnumerable<OperationRolesViewModel> Get()
        {
            try
            { 
                return _operationPermissionRepository.GetOperationRoles();
            }
            catch (Exception ex)
            { 
                throw;
            }
        }

       
        // POST: api/UsersInRoles
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] operationPermission operationPermission)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (_operationPermissionRepository.CheckPermissionExists(operationPermission))
                    {
                        var response = new HttpResponseMessage()
                        {
                            StatusCode = HttpStatusCode.Conflict
                        };
                         
                        return BadRequest("Role Already Exists");
                    }
                    else
                    {

                        operationPermission.OperationPermissionID = 0;
                        _operationPermissionRepository.AddPermission(operationPermission);

                        var response = new HttpResponseMessage()
                        {
                            StatusCode = HttpStatusCode.OK
                        };

                        // return response;
                        return Ok();
                    }
                }
                else
                {
                    var response = new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.BadRequest
                    };

                    //return response;
                    return BadRequest();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost] 
        [Route("GetPermissionInfo")]
        public async Task<IActionResult> GetPermissionInfo([FromBody] OperationVM operationVM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IEnumerable<object> obj = await _operationPermissionRepository.GetPermissionInfo(operationVM);
            
            if (obj == null)
            {
                return NotFound();
            } 
            return Ok(obj);
        }


        // POST: api/RemoveRole
        [Route("DeletePermission")]
        [HttpPost]
        public async Task<IActionResult> DeletePermission([FromBody] operationPermission operationPermission)
        {
            if (ModelState.IsValid)
            {
                try
                { 
                    Boolean result = _operationPermissionRepository.RemovePermission(operationPermission);
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
            else
            {
                return BadRequest();
            }
        }


    }
}
