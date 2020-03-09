
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Models
{

    [Table("Purchases", Schema = "ess")]
    public class Purchases
    {

        [Key]
        public int PurchaseID { get; set; }
       
        public string PurchaseNumber { get; set; }
        [Required(ErrorMessage = "PurchaseName required")]
        public string PurchaseName { get; set; }
        [Required]
        public int UserID { get; set; }
        [NotMapped]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Status required")]
        public int StatusID { get; set; }
        [NotMapped]
        public string StatusAR { get; set; }
        [NotMapped]
        public string StatusEN { get; set; }
        [NotMapped]
        public string Statusbadge { get; set; }
        

        [Required(ErrorMessage = "ReasonID required")]
        public int ReasonID { get; set; }
        [NotMapped]
        public string ReasonAR { get; set; }
        [NotMapped]
        public string ReasonEN { get; set; }

        [Required(ErrorMessage = "TypeID required")]
        public int TypeID { get; set; }
        [NotMapped]
        public string TypeAR{ get; set; }
        [NotMapped]
        public string TypeEN { get; set; }

        [Required(ErrorMessage = "Project  required")]
        public string ProjectID { get; set; }
        [Required]
        //[Display(Name = "Select Date")]
        //[DataType(DataType.Date)]
        //[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public string CreatedDate { get; set; }
        [Required]
        [MaxLength(500)]
        public string Justification { get; set; } 

        [NotMapped]
        public int PurchasesStageID { get; set; }
        [NotMapped]
        public int PurchasesStageTypeID { get; set; }
        [NotMapped]
        public string StageTypeNameAR { get; set; }
        [NotMapped]
        public string StageTypeNameEN { get; set; }
        [NotMapped]
        public int StageOrder { get; set; }     

        [NotMapped]
        public Boolean IsNeedAction { get; set; }
        [NotMapped]
        public Boolean IsNeedOffer { get; set; }
        [NotMapped]
        public Boolean IsNeedSelectOffer { get; set; }

        public virtual List<PurchasesDetails> PurchasesDetails { get; set; }


    }
}
