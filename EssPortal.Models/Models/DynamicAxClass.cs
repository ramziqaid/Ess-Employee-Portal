using System;
using System.Collections.Generic;
using System.Text;

namespace EssPortal.Models
{
   public class DynamicAxClass
    {
        public class LoanSum
        {
           public decimal loan { get; set; }
           public decimal loanpaid { get; set; }
            public decimal loanunpaid { get; set; }

        }
        public class LoanHeader
        {
          public string recid { get; set; }
          public string transactionid { get; set; }
          public string worker { get; set; }
          public string loantype { get; set; }
            public string description { get; set; } 
        }
        public class LoanDetails
        {
           public string recid { get; set; }
           public string installmentdate { get; set; }
           public string status { get; set; }
           public string amount { get; set; }
            public string balance { get; set; }
        }

        public class LoanVm
        {
            public LoanSum LoanSum { get; set; }
            public List<LoanHeader> LoanHeader { get; set; }
            public List<LoanDetails> LoanDetails { get; set; }
        }


        public class PayslipHeader
        {
          public string worker { get; set; }
          public string recid { get; set; }
          public string paymentstatement { get; set; }
          public string totalincome { get; set; }
          public string totaldeduction { get; set; }
          public string netsalary { get; set; }
            public string cutoffdate { get; set; }
        }
        public class PayslipIncome
        {
          public string PaymentstatmentID { get; set; }
          public string Description { get; set; }
            public string Amount { get; set; }
             
        }
        public class Payslipdeduction
        {
          public  string PaymentstatmentID { get; set; }
          public  string Description { get; set; }
            public string Amount { get; set; }

        }
        public class PayslipVM
        { 
            public List<PayslipHeader> PayslipHeader { get; set; }
            public List<PayslipIncome> PayslipIncome { get; set; }
            public List<Payslipdeduction> Payslipdeduction { get; set; }
        }

        public class Attendees
        {
            public string type { get; set; }
            public string fulldate { get; set; }
            public string month { get; set; }
            public string day { get; set; }
            public string time { get; set; }

        }

        public class AttendeesVM
        {
            public List<Attendees> AttendeesToDay { get; set; }
            public List<Attendees> AttendeesList { get; set; } 
        }

 


    }
    //load


}
