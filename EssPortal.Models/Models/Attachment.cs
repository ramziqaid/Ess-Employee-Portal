using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
  
    [Table("Attachment", Schema = "ess")]
    public class Attachment
    {
        [Key]
        public int AttachmentID { get; set; } 

        
        public int ReferenceID { get; set; }
        //[Required]
        public byte[] FileContent { get; set; }

        [Required]
        public string FileType { get; set; }

        [Required]
        public string FileName { get; set; } 
    }
}
