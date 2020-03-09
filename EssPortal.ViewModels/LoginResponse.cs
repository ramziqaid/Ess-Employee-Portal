using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
    public class LoginResponse
    {
        public int UserId { get; set; }
        public long EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string UserName { get; set; }
        public string EmailId { get; set; }
        public bool Status { get; set; }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        
    }
}
