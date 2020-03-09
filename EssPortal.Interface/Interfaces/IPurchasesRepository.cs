

using EssPortal.Models;
using EssPortal.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace EssPortal.Interfaces
{
    public interface IPurchasesRepository : IGenericRepository<Purchases>
    {
        #region "Load"

        Task<List<Purchases>> GetWithDetailsAsync(Expression<Func<Purchases, bool>> predicate);

        Task<List<Purchases>> GetPurchaseList(int UserID);

        Task<PurchasesVM> GetPurchase(int pPurchaseID, int UserID);

        Task<List<PurchaseOfferVM>> GetPurchaseOffers(int pPurchasesDetailsID, int UserID);

        #endregion 

        #region "Save"

        Task<PurchasesVM> savePurchases(PurchasesVM PurchasesVM);

        Task<bool> savePurchasesStage(PurchasesStage purchasesStage);

        Task<PurchaseOffersVM> SavePurchaseOffers(PurchaseOffersVM purchaseOffersVM);
        #endregion
        //save


        #region "Update"  
        Task<PurchasesVM> updatePurchases(PurchasesVM PurchasesVM);

        Task<bool> SelectPurchaseOffers(int purchaseOfferID, int purchasesDetailsID, Boolean isSelected, int UserID);
        #endregion 


        #region "Delete"
        Task<bool> DeletePurchaseOffers(int pPurchaseOfferID, int pUserID);
        #endregion
    }

}
