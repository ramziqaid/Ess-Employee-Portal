using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Models
{

    [Table("PurchasesDetails", Schema = "ess")]
    public class PurchasesDetails
    {  
        [Key]
        public int PurchasesDetailsID { get; set; } 
        [Display(Name = "Purchase ID")]
        public int PurchaseID { get; set; }

        [Required]
        public int ItemTypeID { get; set; }

        public int MainGroupID { get; set; }

        public int SubGroupID { get; set; }
        
        public string itemNumber { get; set; }
        [NotMapped]
        public string itemNameAR { get; set; }
        [NotMapped]
        public string itemNameEN { get; set; }

        [Required]
        public int QTY { get; set; } 
        public decimal Price { get; set; }

      
        
        public string Description { get; set; }

        [NotMapped]
        public int PurchaseOfferID { get; set; } 
    }
}
