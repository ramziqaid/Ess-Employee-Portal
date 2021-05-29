using System;
using System.Collections.Generic;
using System.Text;

namespace EssPortal.Models.searchVM
{
   public class RequestListVM
    {
      public  int? requestID;
        public long? employeeID;
        public long? managerId;
        public int? requestTypeID;
        public string statusCode;
        public Boolean showMyEmployee;
    }
}
