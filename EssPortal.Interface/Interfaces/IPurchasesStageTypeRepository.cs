

using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace EssPortal.Interfaces
{
    public interface IPurchasesStageTypeRepository : IGenericRepository<PurchasesStageType>
    {
        Task<PurchasesStageType> UpdatePurchasesStageType(PurchasesStageType purchasesStageType);
    }

}
