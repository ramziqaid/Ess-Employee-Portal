using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Models
{
    [Table("RequestsType", Schema = "ess")]
    public class RequestType
    {
        [Column(Order = 0)]
        [Key]
        public int RequestTypeID { get; set; }

        [Column(Order = 1)]
        public string RequestNameAr { get; set; }
        [Column(Order = 2)]
        public string RequestNameEn { get; set; }
        public Nullable<int> RequestGroupID { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public string icons { get; set; }

        public virtual List<Request> Requests { get; set; }
    }
}
