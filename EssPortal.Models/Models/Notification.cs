using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EssPortal.Models
{
  
    
    public class Notification
    {
        public int NotiCount { get; set; }
        public string MessageAR { get; set; }
        public string MessageEN { get; set; }

    }
}
