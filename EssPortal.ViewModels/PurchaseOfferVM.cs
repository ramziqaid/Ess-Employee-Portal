using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
    public class PurchaseOfferVM
    {
        
        public int PurchaseOfferID { get; set; } 
        public int PurchasesDetailsID { get; set; }
        public string ItemNumber { get; set; }
        public string ItemNameAR { get; set; }
        public string ItemNameEN { get; set; }  
        public int UserID { get; set; } 
        public string VendNumber { get; set; } 
        public string VendNameEN { get; set; } 
        public string VendNameAR { get; set; } 
        public decimal Price { get; set; }  
        public Boolean? IsSelected { get; set; }
        public int? SelectedByUserID { get; set; } 
        public string CreatedDate { get; set; } 
        public string Justification { get; set; }

    }
}
