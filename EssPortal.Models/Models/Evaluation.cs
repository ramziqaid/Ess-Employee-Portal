using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Models
{
  

    [Table("Evaluation", Schema = "ess")]
    public class Evaluation
    {
        [Key]  
        public int EvaluationID { get; set; }  
        public long EmployeeID { get; set; } 
        public long EvalCharterID { get; set; }          
        public int? EmployeeApproval { get; set; }
        public int? ManagerApproval { get; set; }
        public long? ManagerApprovalID { get; set; }
        public int? HRApproval { get; set; }
        public long? HRApprovalID { get; set; }
        public int UserID { get; set; }
        public virtual Users Users { get; set; } 
        [NotMapped]
        public string CreatedDate { get; set; }
        public string Notes { get; set; }
    }

    [Table("EvaluationCharterItem", Schema = "ess")]
    public class EvaluationCharterItem
    {
        [Key]
        public int EvaluationCharterItemsID { get; set; }
        public int EvaluationID { get; set; }
        public virtual Evaluation Evaluation { get; set; } 
        public long EvalCharterDetailsItemsID { get; set; }
        public int DegreeEmployee { get; set; }
        public int DegreeManager { get; set; }
        public string Notes { get; set; } 
    }

}
