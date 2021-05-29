using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models.Models
{
    [Table("Vacation", Schema = "ess")]
   public class Vacation
    {
        [Key] 
        public int ID { get; set; }
        [Required]
        public int RequestID { get; set; }
        [Required]
        public string VacationTypeID { get; set; }
        [Required]
        public string StartDate { get; set; }
        [Required]
        public string EndDate { get; set; }
        [Required]
        public int DaysNo { get; set; }
     
        public string ReplacmentStuffID { get; set; }        
        public Boolean ReplacmentStuffIDIsApprove { get; set; }

        [Required]
        [MaxLength(500)]
        public string Justification { get; set; }


    }
}
