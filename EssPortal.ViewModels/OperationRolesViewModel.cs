using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EssPortal.ViewModels
{
    public class OperationRolesViewModel
    {
        public int OperationPermissionID { get; set; }
        public int OperationID { get; set; }
        public string OperationNameAr { get; set; }
        public string OperationNameEn { get; set; }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public Boolean Check { get; set; }
        public Boolean IsNeedPermission { get; set; }
        

    }
}
