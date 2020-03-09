using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
    [Table("HCMWORKERBANKACCOUNT")]
    public class BankInfo
    {

        public long RECID { get; set; }
        [Key]
        public long WORKER { get; set; }
        public string DATAAREAID { get; set; }
        public long PARTITION { get; set; }
        public long LOCATION { get; set; }

        public string ACCOUNTNUM { get; set; }
        public string IBAN { get; set; }
        public string SWIFTCODE { get; set; }
        public string NAME { get; set; }
        public string BENEFICIARYNAME { get; set; }
        public string FilePath { get; set; }

        [NotMapped]
        public IFormFile bankfile { set; get; }
        
    }
}
