using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models 
{
    [Table("EmailsNotification", Schema = "ess")]
   public class EmailsNotification
    {
        
        [Key] 
        public int ID { get; set; }
        [Required] 
        public string SubjectTitle { get; set; }
        [Required]
        public string SubjectBody { get; set; }  
        public int? FromUserID { get; set; }
        [Required]
        public int ToUserID { get; set; } 
        public int? RequestID { get; set; } 
        public Boolean Status { get; set; } 

    }
}
