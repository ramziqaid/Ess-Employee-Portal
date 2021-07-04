using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EssPortal.Interfaces;
using EssPortal.Models;
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
    public class EmployeeController : Controller
    {

        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository; 
        }
         
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            
            IEnumerable<Employee> employeeInfoView;
            employeeInfoView =await _employeeRepository.GetAllAsyn();
          
            if (employeeInfoView ==null)
            {
                return NotFound();
            }
             return Ok(employeeInfoView.Distinct().OrderBy(p=>p.Personnelnumber));
        }
            
        [HttpGet]
        [Route("Get/{EmployeeID}")]
        public async Task<IActionResult> Get([FromRoute] long EmployeeID)
        { 
             Employee employeeInfoView;
            employeeInfoView = await _employeeRepository.FindAsync(p=>p.EmployeeID==EmployeeID);

            if (employeeInfoView == null)
            {
                return NotFound();
            }
            return Ok(employeeInfoView);

        }

        [HttpGet]
        [Route("GetByManager/{EmployeeID}")]
        public async Task<IActionResult> GetByManager([FromRoute] string EmployeeID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Bad Request");
            }
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                IEnumerable<Employee> employeeInfoView;
                employeeInfoView = await _employeeRepository.GetByManager(EmployeeID, userId);             
                return Ok(employeeInfoView);
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            } 

        }

        [HttpGet]
        [Route("checkEmployeeIsHR/{EmployeeID}")]
        public async Task<IActionResult> CheckEmployeeIsHR([FromRoute] string EmployeeID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Bad Request");
            }
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                string type = await _employeeRepository.CheckEmployeeIsHR(EmployeeID, userId); 
                return Ok(type);
            }
            catch (Exception ex)
            {               
                return BadRequest(ex.Message);
            }

        }

        [HttpGet]
        [Route("GetEmployeeUserHR")]
        public async Task<IActionResult> GetEmployeeUserHR()
        { 
            try
            { 
                IEnumerable<EmployeeUserHRViewModel> employeeInfoView = await _employeeRepository.GetEmployeeUserHR();                  
                return Ok(employeeInfoView);
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }

        }
    }
}