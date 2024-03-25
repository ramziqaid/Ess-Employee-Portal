using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{

    public class EvaluationViewModel
    {
        public EvaluationVM evaluationVM { get; set; }
        public List<EvaluationCharterItem> evaluationCharterItems { get; set; }
        public List<EvalCharterCommunityViewModel> evalCharterCommunityItemsVM { get; set; }
        public List<Attachment> attachments { get; set; }

        public class EvaluationVM
        {
            public int EvaluationID { get; set; }
            public long EvalPeriodID { get; set; }
            public long EvalCommunityID { get; set; }
            public long EmployeeID { get; set; }
            public string NamePeriod { get; set; }
            public string RecordNumber { get; set; }            
            public string ArabicName { get; set; }
            public string EnglishName { get; set; }
            public long EvalCharterID { get; set; }
            public string EvalCharterAr { get; set; }
            public string EvalCharterEn { get; set; }
            public long? ManagerID { get; set; }
            public int? EmployeeApproval { get; set; }
            public string EmployeeApprovalDate { get; set; }
            public int? ManagerApproval { get; set; }
            public string ManagerApprovalArabicName { get; set; }
            public long? ManagerApprovalID { get; set; }
            public string ManagerApprovalDate { get; set; }
            public int? HRApproval { get; set; }
            public long? HRApprovalID { get; set; }
            public string HRApprovalArabicName { get; set; }
            public string HRApprovalDate { get; set; }
            public int UserID { get; set; }
            public string EvaluationStautsAr { get; set; }
            public string EvaluationStautsEn { get; set; }
            public int? EvaluationStautsID { get; set; }
            public string CreatedDate { get; set; }
            public string Notes { get; set; }
            public decimal? ResultDegree { get; set; }
            public string ResultAR { get; set; }
            public string ResultEN { get; set; }
        }

        public class EvalCharterCommunityViewModel
        {
            public long EvalCharterID { get; set; }
            public string EvalCharterAr { get; set; }
            public string EvalCharterEn { get; set; }
            public int? EvaluationCharterItemsID { get; set; }
            public long EvalCharterDetailsID { get; set; }
            public string EvalCharterDetailsAr { get; set; }
            public string EvalCharterDetailsEn { get; set; }
            public decimal Weight { get; set; }
            public long EvalCharterDetailsItemsID { get; set; }
            public string EvalCharterDetailsItemsAr { get; set; }
            public string EvalCharterDetailsItemsEn { get; set; } 
            public int MinWeight { get; set; }
            public int MaxWeight { get; set; }
            public string DegreeEmployee { get; set; }
            public string DegreeManager { get; set; }

            //public long EvalPeriodID { get; set; }
            //public string NamePeriod { get; set; }
            //public string FromDate { get; set; }
            //public string ToDate { get; set; } 
            //public long EvalCommunityID { get; set; }
            //public string CommunityDescAr { get; set; }
            //public string CommunityDescEn { get; set; }
  
            //public int Status { get; set; }

            //public int Weight { get; set; }



        }


    }

}
