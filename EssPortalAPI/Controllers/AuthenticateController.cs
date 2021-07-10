using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using EssPortal.Common;
using EssPortal.Interface;
using EssPortal.Models;
using EssPortal.ViewModels;
using Microsoft.AspNetCore.Identity;
using EssPortalAPI.Models;
using Microsoft.AspNetCore.Authorization;
using EssPortalAPI.Email;

namespace EssPortalAPI.Controllers
{
    [Produces("application/json")]
    [AllowAnonymous]
    [Route("api/authenticate")]
    [ApiController]
   
    public class AuthenticateController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly AppSettings _appSettings;
        private readonly IUsers _users;
        private IEmailSender _emailSender;

        public AuthenticateController(IOptions<AppSettings> appSettings, IUsers users,IEmailSender emailSender)
        {
            _users = users;
            _appSettings = appSettings.Value;
            _emailSender = emailSender;
        }


        // POST: api/Authenticate
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestViewModel value)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var loginstatus = _users.AuthenticateUsers(value.UserName, value.Password);

                    if (loginstatus == null)
                        return BadRequest("MSG_USERNAMR_PASSWORD_NOTFOUND");

                   
                    var userdetails = _users.GetUserDetailsbyCredentials(value.UserName, value.Password);

                    if (userdetails != null)
                    {
                        if(!userdetails.Status)
                            return BadRequest("MSG_USERNAMR_NOT_ACTIVE");

                        var tokenHandler = new JwtSecurityTokenHandler();
                        var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                        double tokenExpiryTime = Convert.ToDouble(_appSettings.ExpireTime);
                        var tokenDescriptor = new SecurityTokenDescriptor
                        {
                            Subject = new ClaimsIdentity(new Claim[]
                                {
                                new Claim(ClaimTypes.NameIdentifier, userdetails.UserId.ToString()),
                                 //new Claim(JwtRegisteredClaimNames.Sub, value.UserName),
                                 new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                                 new Claim(ClaimTypes.Name, value.UserName),
                                 new Claim(ClaimTypes.Email, userdetails.EmailId),
                                 new Claim(ClaimTypes.Role, userdetails.RoleName),
                                 new Claim("EmployeeId", userdetails.EmployeeId.ToString()),
                                 new Claim("LoggedOn", DateTime.Now.ToString()),
                                }),
                            Expires = DateTime.UtcNow.AddMinutes(tokenExpiryTime),
                            Issuer = _appSettings.Site,
                            Audience = _appSettings.Audience,

                            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)

                        }; 
                        var token = tokenHandler.CreateToken(tokenDescriptor);
                        //value.Token = tokenHandler.WriteToken(token);
                        //value.UserName = value.UserName;
                        //// remove password before returning
                        //value.Password = null;
                        //value.Usertype = userdetails.RoleId;

                        return Ok(new
                        {
                            token = tokenHandler.WriteToken(token),
                            expiration = token.ValidTo,
                            username = value.UserName,                          
                            Usertype = userdetails.RoleId,
                            EmployeeId = userdetails.EmployeeId,
                            Email = userdetails.EmailId,
                            userRole = userdetails.RoleName,
                            EmployeeName= userdetails.EmployeeName
                        });
                    }
                    
                }
                ModelState.AddModelError("error", "Username/Password was not Found");
                return Unauthorized();

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


    }
}
