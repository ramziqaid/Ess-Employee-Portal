using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
     

   public   class PurchasesViewModel
    {

         
        public int PurchaseID { get; set; } 
        public string PurchaseNumber { get; set; } 
        public string PurchaseName { get; set; } 
        public int UserID { get; set; } 
        public string UserName { get; set; } 
        public int StatusID { get; set; } 
        public string StatusAR { get; set; } 
        public string StatusEN { get; set; } 
        public string Statusbadge { get; set; } 
        public int ReasonID { get; set; } 
        public string ReasonAR { get; set; } 
        public string ReasonEN { get; set; }  
        public int TypeID { get; set; } 
        public string TypeAR { get; set; } 
        public string TypeEN { get; set; } 
        public string ProjectID { get; set; } 
        public string CreatedDate { get; set; } 
        public string Justification { get; set; } 
        public int PurchasesStageID { get; set; } 
        public int PurchasesStageTypeID { get; set; } 
        public string StageTypeNameAR { get; set; } 
        public string StageTypeNameEN { get; set; } 
        public Boolean IsNeedAction { get; set; } 
        public Boolean IsNeedOffer { get; set; }
        public Boolean IsNeedSelectOffer { get; set; }


    }

}
