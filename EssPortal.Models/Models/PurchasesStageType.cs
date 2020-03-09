using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
  
    [Table("PurchasesStageType", Schema = "ess")]
    public class PurchasesStageType
    {      
        [Key]
        public int PurchasesStageTypeID { get; set; }
        public int PurchasesTypeID { get; set; }
        public string NameAR { get; set; }
        public string NameEN { get; set; }
         
        public int? ApprovedID { get; set; }
        public int StageOrder { get; set; } 
    }
}
