using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EssPortal.Common;
using EssPortal.Interface;
using EssPortal.Models;
using EssPortal.ViewModels;
using AutoMapper;

namespace EssPortalAPI.Controllers
{
    [Authorize(Policy = "RequireAdminRole")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUsers _users;
        private readonly IMapper _mapper;

        public UserController(IUsers users, IMapper mapper)
        {
            _users = users;
            _mapper = mapper; 
        }
        // GET: api/User
        [HttpGet]
        public IEnumerable<Users> Get()
        {
            return _users.GetAllUsers();
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "GetUsers")]
        public Users Get(int id)
        {
            return _users.GetUsersbyId(id);
        }

        [HttpPost("{userId}/UpdateStauts/{status}")]
        public async Task<IActionResult> UpdateStauts(int userId , Boolean status)
        {
          
            var id = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            if (id == null || id == 0)
            {
                return BadRequest("Not Unauthorized ");
               // return Unauthorized(); 
            }
            var user = _users.GetUsersbyId(userId);
            user.Status = status;
            _users.UpdateUsersStatus(user);
            return Ok();
        }

        // POST: api/User
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UsersViewModel users)
        { 
            try
            {
                if (ModelState.IsValid)
                {
                    if (_users.CheckUsersExits(users.UserName))
                    {
                        return BadRequest("Username already exists");
                    }
                    if (_users.CheckEmployeeExits(users.EmployeeId))
                    {
                        return BadRequest("This Employee already exists");
                    }

                    var userId = this.User.FindFirstValue(ClaimTypes.NameIdentifier);
                    var tempUsers = _mapper.Map<Users>(users);
                    tempUsers.CreatedDate = DateTime.Now;
                    tempUsers.Createdby = Convert.ToInt32(userId);
                    tempUsers.EmployeeId = Convert.ToInt64(users.EmployeeId);
                    // tempUsers.Password = EncryptionLibrary.EncryptText(users.Password); 
                    var result= _users.InsertUsers(tempUsers, users.Password); 
                    if (result)
                    {
                        return Ok();
                    }

                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UsersViewModel users)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var tempUsers = _mapper.Map<Users>(users);
                    tempUsers.CreatedDate = DateTime.Now;
                    var result = _users.UpdateUsers(tempUsers, users.Password);

                    if (result)
                    {
                        return Ok();
                    }

                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // PUT: api/User/5
        [HttpPut("ChangePassword")]
        public async Task<IActionResult> ChangePassword( [FromBody] UsersChangePasswordViewModel usersChangePasswordViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                { 
                    var result =  _users.ChangePassword(usersChangePasswordViewModel);
                    if (result)
                    {
                        return Ok();//"Password changed"
                    }
                    
                }
                return BadRequest("Password not Updated"); 
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
          
        }

        // DELETE: api/ApiWithActions/5
        [HttpPut("ResetPassword/{userId}")]
        public async Task<IActionResult> ResetPassword(int userId)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var user = _users.GetUsersbyId(userId);
                    if(user==null)
                        return BadRequest("This User Not Found");

                    var result =   _users.ResetPassword(userId);
                    if (result)
                    {
                        return Ok();
                    }

                }
                return BadRequest("Password not Updated");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(int id)
        {
            var result = _users.DeleteUsers(id);

            if (result)
            {
                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };
                return response;
            }
            else
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
