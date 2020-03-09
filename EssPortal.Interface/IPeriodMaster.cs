using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EssPortal.Models;

namespace EssPortal.Interface
{
  public  interface IPeriodMaster
    {
        List<PeriodTB> ListofPeriod();
    }
}
