using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
  
    [Table("PurchaseOffers", Schema = "ess")]
    public class PurchaseOffer
    {
        [Key]
        public int PurchaseOfferID { get; set; }

        [Required]
        public int PurchaseID { get; set; }

        
        [Required]
        public int PurchasesDetailsID { get; set; }
      
        [Required]
        public int UserID { get; set; }

        [Required]
        public string VendNumber { get; set; } 

        [Required]
        public decimal Price { get; set; }
        
        public Boolean? IsSelected { get; set; }        
        public int? SelectedByUserID { get; set; }

        public string CreatedDate { get; set; } 
        [Required]
        [MaxLength(500)]
        public string Justification { get; set; }

       

    }
}
