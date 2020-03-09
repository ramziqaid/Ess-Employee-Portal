using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EssPortalAPI.Controllers
{
    public class BaseController : Controller
    {
        public BadRequestObjectResult AddErrors(IdentityResult result)
        {
            List<string> errorList = new List<string>();

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
                errorList.Add(error.Description);
            }
            return BadRequest(new JsonResult(errorList));
        }

        public BadRequestObjectResult AddErrors(string result)
        {
            List<string> errorList = new List<string>();

            
                ModelState.AddModelError(string.Empty, result);
                errorList.Add(result);
            
            return BadRequest(new JsonResult(errorList));
        }
    }
}
