using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models.Views
{ 
    [Table("VactionTypesView", Schema = "ess")]
    public class VactionTypesView
    { 
      
        public long ID { get; set; }
        public string Code { get; set; }
        public string NameAR { get; set; }
        public string NameEN { get; set; }
        public Boolean IsNeedReplacementEmp { get; set; }
        public int? MaxDays { get; set; }
    }
}
