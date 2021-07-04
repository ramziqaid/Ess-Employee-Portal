using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
    [Table("PortalSetting", Schema = "ess")]
   public class PortalSetting
    {
        [Key]
        public int ID { get; set; }
        public string PortalNameAR { get; set; }
        public string PortalNameEN { get; set; }
        public int? NumberSalaryForLoan { get; set; }
        public int? NoOfInstallmentForLoan { get; set; }
        public int? NoOfMonthAfterJoinForLoan { get; set; }
        public int? LessNumberDayVacation { get; set; }


    }
}
