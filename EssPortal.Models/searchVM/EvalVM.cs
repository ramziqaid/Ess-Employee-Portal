using System;
using System.Collections.Generic;
using System.Text;

namespace EssPortal.Models.searchVM
{
   public class EvalVM
    {
        public int evaluationID { get; set; }
        public long? employeeID; 
        public string fromDate;
        public string toDate;
       
        public int? employeeApproval { get; set; }
        public int? managerApproval { get; set; }
        public long? managerApprovalID { get; set; }
        public int? hRApproval { get; set; }
        public long? hRApprovalID { get; set; }
        public int? userID { get; set; } 
        public string notes { get; set; }

    }
}
