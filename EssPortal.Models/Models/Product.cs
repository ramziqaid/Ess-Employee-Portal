using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
  
    [Table("ProductView", Schema = "ess")]
    public class Product
    {
        [Key]
        public string ID { get; set; }
        public string ITEMID { get; set; }
    }
}
