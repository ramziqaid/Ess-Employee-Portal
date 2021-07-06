using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
     
    public class RequestViewModel
    { 
        public Request request { get; set; }
        public Employee employee { get; set; }
        public List<RequestStage> RequestStages { get; set; }
        public List<RequestExtraField> RequestExtraFields { get; set; }
        public List<Attachment> attachments { get; set; }
    }

}
