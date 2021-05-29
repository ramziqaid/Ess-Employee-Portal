using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models 
{
    [Table("Operation", Schema = "ess")]
   public class operation
    {
        [Key] 
        public int OperationID { get; set; }
        [Required]
        public int OperationCode { get; set; } 
        public string OperationNameAr { get; set; } 
        public string OperationNameEn { get; set; } 
        public string ParentID { get; set; } 
        public int RoutUrl { get; set; } 
        public Boolean IsActive { get; set; }
        public Boolean IsNeedPermission { get; set; }  

    }
}
