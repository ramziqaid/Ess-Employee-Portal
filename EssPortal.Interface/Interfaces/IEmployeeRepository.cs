

using EssPortal.Models;
using EssPortal.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Interfaces
{
    public interface IEmployeeRepository : IGenericRepository<Employee>
    {
        Task<List<Employee>> GetByManager(string EmployeeID, int UserID); 
        Task<string> CheckEmployeeIsHR(string EmployeeID, int UserID);
        Task<List<EmployeeUserHRViewModel>> GetEmployeeUserHR();
    }

}
