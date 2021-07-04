using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Models
{
  

    [Table("Requests", Schema = "ess")]
    public class Request
    {
        [Key]  
        public int RequestID { get; set; } 
        public string RequsetPrivateNumber { get; set; } 
        [Required]
         public long EmployeeID { get; set; } 
        [Required] 
        public int RequestTypeID { get; set; }
        public virtual RequestType RequestType { get; set; }  
        [Required]
        public string StatusCode { get; set; } 
        public int UserID { get; set; }
        public virtual Users Users { get; set; } 
        public Nullable<bool> IsDelegate { get; set; }
        public Nullable<bool> IsDelegateApprove { get; set; }
        public Nullable<long> DelegateFromID { get; set; }
        public Nullable<long> DelegateToID { get; set; } 
        public Nullable<Boolean> IsReplacementEmployeeApprove { get; set; } 
    }

}
