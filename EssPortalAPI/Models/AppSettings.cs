using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortalAPI.Models
{
    public class AppSettings
    {
        // Properties for JWT Token Signature
        public string Site { get; set; }
        public string Audience { get; set; }
        public string ExpireTime { get; set; }
        public string Secret { get; set; }

        // Sendgrind
        public string SendGridKey { get; set; }
        public string SendGridUser { get; set; }

        public string UploadFileToDataBase { get; set; }
        public string AcceptedFileTypes { get; set; }
        public string MaxFileSize { get; set; }
        public string IsNeedAttachmentsWithRequest { get; set; }
        public string IsNeedAttachmentsWithOffers { get; set; }


    }
}
