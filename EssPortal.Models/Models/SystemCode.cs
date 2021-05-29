using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
  
    [Table("SystemCode", Schema = "ess")]
    public class SystemCodes
    { 

        [Key]
        public string SystemCode { get; set; } 

        public string DescriptionAr { get; set; }
        public string DescriptionEn { get; set; }
        public string SystemCodeType { get; set; } 
        
    }
}
