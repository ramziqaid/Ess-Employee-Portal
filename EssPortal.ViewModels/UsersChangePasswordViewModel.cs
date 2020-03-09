using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
    public class UsersChangePasswordViewModel
    {
        public int UserId { get; set; } 
        
        [Required]
        [DataType(DataType.Password)]       
        public string oldPassword { get; set; }

        [Required]
        [DataType(DataType.Password)] 
        public string newPassword { get; set; }

    }
}
