using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Models
{
    public class DateValidationAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            DateTime todayDate = Convert.ToDateTime(value);
            return todayDate >= DateTime.Now;
        }
    }

    [Table("Requests", Schema = "ess")]
    public class Request
    {
        [Key]
        [Display(Name = "Request ID")]
        [Column(Order = 0)]
        public int RequestID { get; set; }

        [Column(Order = 1)]
        [Required]
        public long EmployeeID { get; set; }
        public virtual Employee Employee { get; set; }

        [Required]
        [Column(Order = 2)]       
        public int RequestTypeID { get; set; }
        public virtual RequestType RequestType { get; set; }

        [Column(Order = 3)]
        [Required]
        public int StatusID { get; set; }

       // [DateValidation]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public  DateTime CreatedDate { get; set; }

        public string CreatedBy { get; set; }
       

        public Nullable<bool> IsDelegate { get; set; }
        public Nullable<bool> IsDelegateApprove { get; set; }
        public Nullable<long> DelegateFromID { get; set; }
        public Nullable<long> DelegateToID { get; set; }

        [Display(Name = "Attachment")]
        public  string FileName { get; set; }
      
        public virtual List<Amendment> Amendments { get; set; }
        public virtual List<Housing> Housings { get; set; }
        public virtual List<RequestStage> RequestStages { get; set; }

    }

}
