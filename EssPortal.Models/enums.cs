using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Text;

namespace EssPortal.Models
{
  public static class enumsType
    {
        public  class RequestAction
        { 
            public static string NewRequest
            {
                get { return "COR01"; } 
            }
            public static string Approved
            {
                get { return "COR02"; }
            }
            public static string Rejected
            {
                get { return "COR03"; }
            } 
        }

        public static class RequestStatus
        {
            public static string NewRequest
            {
                get { return "CSR01"; }
            }
            public static string UnderPreparation
            {
                get { return "CSR02"; }
            }
            public static string RequestCanceled
            {
                get { return "CSR03"; }
            }
            public static string RequestRejected
            {
                get { return "CSR04"; }
            }
            public static string DoneRequest
            {
                get { return "CSR05"; }
            }
        }
         
      
   
}
   
   


}
