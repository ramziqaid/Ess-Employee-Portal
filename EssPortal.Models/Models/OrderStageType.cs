using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models 
{
    [Table("WF_OrderStageType", Schema = "ess")]
   public class OrderStageType
    {
        [Key] 
        public int OrderStageTypeID { get; set; }
        public int RequestTypeID { get; set; }
        public int StageTypeID { get; set; } 
        public int OrderStep { get; set; } 
        public int Value { get; set; } 
        public string ActionType { get; set; }  
        public string PersmissionType { get; set; }
        public int ProfileID { get; set; } 


    }
}
