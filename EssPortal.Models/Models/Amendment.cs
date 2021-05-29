
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Models
{

    [Table("Amendment", Schema = "ess")]
    public class Amendment
    {
        [Key]
        [Column(Order = 0)]
        public int ID { get; set; }

        [Display(Name = "Request ID")]
        public int RequestID { get; set; }
        public virtual Request Request { get; set; } 

        [Display(Name = "Type ")]
        [Required(ErrorMessage = "Type required")]
        [Column(Order = 2)]
        public string Type { get; set; }

        [Column(Order = 3)]
        [Required(ErrorMessage = "Time required")]
        public string Time { get; set; }

        [Required]
        //[Display(Name = "Select Date")]
        //[DataType(DataType.Date)]
        //[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public string FromDate { get; set; }

        //[Required]
        //[Display(Name = "Select Date")
        //[RegularExpression(@"(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$", ErrorMessage = "Invalid date format.")]
        //public string SelectDate { get; set; }

        [Required] 
        [MaxLength(500)]
        public string Justification { get; set; }

        public string AmendmentReasonCode { get; set; }        
        //public virtual List<AmendmentReason> AmendmentReasons { get; set; }

    }
}
