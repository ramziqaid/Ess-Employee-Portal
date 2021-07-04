using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
    [Table("Notification", Schema = "ess")]
    public class Notification
    {
        [Key]
        public int ID { get; set; }
        public int UserID { get; set; } 
        public string NotType { get; set; } 
        public int NotDecisionID { get; set; }
        public int NotActionID { get; set; }        
        public Boolean NotStatus { get; set; }
        public int? CreatedUserID { get; set; }

    }
}
