using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EssPortal.Interfaces;
using EssPortal.Models;
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
             return Ok(employeeInfoView.Distinct().OrderBy(p=>p.EnglishName));
        }
       
     
        [HttpGet]
        [Route("Get/{EmployeeID}")]
        public async Task<IActionResult> Get([FromRoute] string EmployeeID)
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
        [Route("GetByManager/{ManagerID}")]
        public async Task<IActionResult> GetByManager([FromRoute] string ManagerID)
        { 
            IEnumerable<Employee> employeeInfoView;
            employeeInfoView = await _employeeRepository.FindAllAsync(p => p.ManagerID == ManagerID || p.EmployeeID == ManagerID);
            if (employeeInfoView == null)
            {
                return NotFound();
            }
            return Ok(employeeInfoView.Distinct().OrderBy(p => p.EnglishName));

        }
    }
}