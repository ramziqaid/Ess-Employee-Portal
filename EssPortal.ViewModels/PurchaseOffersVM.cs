using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
    
    public class PurchaseOffersVM
    { 
        public PurchaseOffer purchaseOffers { get; set; }  
        public List<Attachment> attachments { get; set; }
        
        public PurchaseOffersVM()
        {
           // purchaseOffers = new PurchaseOffer();
            purchaseOffers = new PurchaseOffer();
            attachments = new List<Attachment>(); 
        }
    }

}
