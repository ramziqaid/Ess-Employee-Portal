using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Models
{
    [NotMapped]
    [Table("EmployeeInfo", Schema = "ess")]
    public partial class Employee
    {
        [Key] 
        public int ID { get; set; }


        public string EmployeeID { get; set; }

        [Display(Name = "Personnel Number")]
        public string  Personnelnumber{ get; set; }

        public string  PASSWORD{ get; set; }

        public string  PERSON{ get; set; }

        public string  ArabicName{ get; set; }

        public string  EnglishName{ get; set; }

        public string  UserName{ get; set; }

        public string  ACTIVE{ get; set; }

        public string  BASICSALARY{ get; set; }

        public string  GOSISALARY{ get; set; }

        public string  GROSSSALARY{ get; set; }

        public string  CONTRACTCODE{ get; set; }

        public string  CONTRACTTYPE{ get; set; }

        public string ContractStart { get; set; }

        public string ContractEnd { get; set; }

        public string  JOININGDATE{ get; set; }

        public string NOOFYEARS { get; set; }

        public string BIRTHDATE { get; set; }

        public string  EDUCATION{ get; set; }

        public string  NATIONALITY{ get; set; }

        public string  RELGION{ get; set; }

        public string  SPONSERSHIP{ get; set; }

        public string  STATUS{ get; set; }

        public string  GenderID{ get; set; }

        public string  GENDERName{ get; set; }

        public string ManagerID { get; set; }

        public string  DirectManagerName{ get; set; }

        public string  Email{ get; set; }

        public string  Phone{ get; set; }

        public string  Fax{ get; set; }

        public string  Company{ get; set; }

        public string IsManager { get; set; }

        public string  IsDepartmentManager{ get; set; }

        public string  VacationBalance{ get; set; }

        public string  WORKERGROUP{ get; set; }

        public string DepartmentID { get; set; }

        public string  DepartmentName{ get; set; }

        public string IqamaDate { get; set; }

        public string IqamaExpiryDate { get; set; }

        public string  IqamaID{ get; set; }

        public string lastReturnVacationDate { get; set; }

        public string  Position{ get; set; }

        public string PositionID { get; set; }

        public string  PROFILEID{ get; set; }

        //public virtual List<Request> Requests { get; set; }
        
    }
}
