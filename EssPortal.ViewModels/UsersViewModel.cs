using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
    public class UsersViewModel
    {
        public int UserId { get; set; }

        [Required]
        public Int64 EmployeeId { get; set; }

        [Required]
        public string UserName { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        [EmailAddress]
        public string EmailId { get; set; }
        [Required]
        public string Contactno { get; set; }

        [Required]
        //[DataType(DataType.Password)]      
        //[Display(Name = "Password")]     
        public string Password { get; set; }
        public bool Status { get; set; }
    }
}
