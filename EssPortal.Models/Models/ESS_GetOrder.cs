using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EssPortal.Models
{
   public class ESS_GetOrder
    {
        public int ID { get; set; }

        public long EmployeeID { get; set; }

        public int requestTypeID { get; set; }
        public int statusID { get; set; }
        public int? StageTypeID { get; set; }

        public DateTime createdDate { get; set; }

        public string ControllerName { get; set; }

        //public int RequestID { get; set; }
        //public long EmployeeID { get; set; }
        //public string PERSON { get; set; }
        //public string ControllerName { get; set; }
        //public string personnelnumber { get; set; }
        //public string ArabicName { get; set; }
        //public string EnglishName { get; set; }
        //public string Email { get; set; }
        //public string managerid { get; set; }
        //public string ArabicNameManager { get; set; }
         
         





        
            
          

        //public int requestTypeID { get; set; }
        //public int statusID { get; set; }
        //public int? StageTypeID { get; set; } 
 
        //public DateTime createdDate { get; set; }
 

                        //    CurrentStepArabicNameManager CurrentStepUserNameManager  ManagerWORKERGROUP RequestTypeID   RequestName ReplacmentStuff ReplacmentStuffID ReplacmentStuffIDIsApprove  StatusID Status_NameAR   Status_NameEN CreatedBy   CreatedDate OrderStageID    StageTypeID StageNameAR StageNameEN CurrentOrderStep    CurrentPersmissionType PersmissionType MaxStageID MaxOrderStep    NextStage NextOrderStep   NextPersmissionType Value   IsDelegate DelegateFromID  DelegateToID IsDelegateApprove   PROFILEID
 

    }
}
