using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Repository;
using EssPortal.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace EssPortal.Concrete
{
    public class PurchasesStageTypeConcrete : GenericRepository<PurchasesStageType>, IPurchasesStageTypeRepository
    {

        public PurchasesStageTypeConcrete(DatabaseContext context) : base(context)
        {
        }

        public async Task<PurchasesStageType> UpdatePurchasesStageType(PurchasesStageType purchasesStageType)
        {
            _context.PurchasesStageTypes.Update(purchasesStageType);

            _context.Entry(purchasesStageType).Property(x => x.ApprovedID).IsModified = true;
          //  _context.Entry(purchasesStageType).Property(x => x.FileContent).IsModified = false; 

            await _context.SaveChangesAsync();
            return purchasesStageType;
        }
    }
}
