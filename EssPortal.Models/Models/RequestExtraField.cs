using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
  
    [Table("RequestExtraField", Schema = "ess")]
    public class RequestExtraField
    {
        [Key]
        public int RequestExtraFieldID { get; set; }
        public int ExtraFieldTypeID { get; set; }
        public string Value { get; set; }

        [Required]
        [Display(Name = "Request ID")]
        public int RequestID { get; set; }
        public virtual Request Request { get; set; }

        [NotMapped]
        public string ExtraFieldName { get; set; }
    }
}
