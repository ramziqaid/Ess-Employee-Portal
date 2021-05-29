using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models 
{
    [Table("OperationPermission", Schema = "ess")]
   public class operationPermission
    {
        [Key] 
        public int OperationPermissionID { get; set; }
        [Required]
        public int OperationID { get; set; }
        [Required]
        public int RoleId { get; set; } 
         

    }
}
