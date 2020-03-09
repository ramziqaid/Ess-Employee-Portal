using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
  
    [Table("PurchasesStage", Schema = "ess")]
    public class PurchasesStage
    { 
        [Key]
        public int PurchasesStageID { get; set; }
        [Required]
        public int PurchasesStageTypeID { get; set; }
        [Required]
        public int PurchaseID { get; set; }
        [Required]
        public int UserID { get; set; }
        public Boolean? IsApproved { get; set; }
        public Boolean? IsRejected { get; set; }

        public string Justification { get; set; } 
        public string CreatedDate { get; set; }
        public int UserIDForClient { get; set; }
        
    }
}
