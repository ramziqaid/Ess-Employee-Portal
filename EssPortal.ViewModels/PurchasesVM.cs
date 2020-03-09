using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
    
    public class PurchasesVM
    { 
        public Purchases purchases { get; set; } 
        public List<PurchasesDetails> purchasesDetails { get; set; }
        public List<PurchasesStage> purchasesStages { get; set; }
        public List<PurchasesStageTransactionModel> purchasesStageTransactionModels { get; set; }
        public List<Attachment> attachments { get; set; }
        public List<PurchaseOffer> purchaseOffers { get; set; }
        
        public PurchasesVM()
        {
            purchases = new Purchases();
            purchasesDetails = new List<PurchasesDetails>();
            purchasesStages = new List<PurchasesStage>();
            purchasesStageTransactionModels = new List<PurchasesStageTransactionModel>();
            attachments = new List<Attachment>();
            purchaseOffers = new List<PurchaseOffer>();
        }
    }

 

}
