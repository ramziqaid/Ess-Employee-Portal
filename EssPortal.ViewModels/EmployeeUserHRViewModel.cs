using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
    public class EmployeeUserHRViewModel
    {     
        public long EmployeeID { get; set; }
        public string Personnelnumber { get; set; } 
        public string ArabicName { get; set; }
        public string EnglishName { get; set; }       
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string EmailId { get; set; } 
    }


}
