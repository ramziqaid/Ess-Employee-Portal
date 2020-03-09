using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
    public class PurchasesStageTransactionModel
    {
     
        public int PurchasesStageTypeID { get; set; }
        public int PurchasesTypeID { get; set; }
        public string NameAR { get; set; }
        public string NameEN { get; set; }
        public int UserID { get; set; }
        public string FullName { get; set; }

        public int StageUserId { get; set; }
        public string StageUserFullName { get; set; }

        public Boolean IsApproved { get; set; }
        public Boolean IsRejected { get; set; }
        public string Justification { get; set; }
        public Boolean IsAction { get; set; }
        public string ActionDate { get; set; }
        public int StageOrder { get; set; }
    }
}
