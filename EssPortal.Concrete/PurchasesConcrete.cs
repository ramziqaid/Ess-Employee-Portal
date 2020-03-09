using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Repository;
using EssPortal.ViewModels;
using Dapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace EssPortal.Concrete
{
    public class PurchasesConcrete : GenericRepository<Purchases>, IPurchasesRepository
    {
        //  private readonly UserManager<IdentityUser> _userManager;
        //private readonly DatabaseContext _context;
        private readonly IConfiguration _configuration;

        public PurchasesConcrete(DatabaseContext context, IConfiguration configuration) : base(context)
        {
            // _context = context;
            _configuration = configuration;
        }

        #region "Load"
        public async Task<List<Purchases>> GetWithDetailsAsync(Expression<Func<Purchases, bool>> predicate)
        {
            return await _context.Purchases
                 .Include(c => c.PurchasesDetails)
                 //.Include(c => c.Users)
                 .Where(predicate).ToListAsync();
        }

        public async Task<List<Purchases>> GetPurchaseList(int UserID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@PurchaseID", -1);
                paramater.Add("@UserID", UserID);

                IEnumerable<Purchases> purchases = await con.QueryAsync<Purchases>("[ESS].LoadPurchasesInfo", paramater, null, 0, commandType: CommandType.StoredProcedure);
                return purchases.ToList();

            }
        }

        public async Task<PurchasesVM> GetPurchase(int pPurchaseID, int UserID)
        {
            PurchasesVM obj = new PurchasesVM();
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater1 = new DynamicParameters();
                paramater1.Add("@PurchaseID", pPurchaseID);
                paramater1.Add("@UserID", UserID);

                Purchases purchases = await con.QueryFirstAsync<Purchases>("[ESS].LoadPurchasesInfo", paramater1, null, 0, commandType: CommandType.StoredProcedure);

                var paramater2 = new DynamicParameters();
                paramater2.Add("@PurchaseID", pPurchaseID);

                IEnumerable<PurchasesDetails> purchasesDetails = await con.QueryAsync<PurchasesDetails>("[ESS].LoadPurchasesDetailsInfo", paramater2, null, 0, commandType: CommandType.StoredProcedure);
                IEnumerable<PurchasesStageTransactionModel> purchasesStageTransactionModels = await con.QueryAsync<PurchasesStageTransactionModel>("[ESS].LoadPurchasesStageTransactionInfo", paramater2, null, 0, commandType: CommandType.StoredProcedure);
                //IEnumerable<PurchaseOffer> purchaseOffers = await con.QueryAsync<PurchaseOffer>("[ESS].LoadPurchaseOfferInfo", paramater2, null, 0, commandType: CommandType.StoredProcedure);

                obj.purchases = purchases;
                obj.purchasesDetails = purchasesDetails.ToList();
                obj.purchasesStageTransactionModels = purchasesStageTransactionModels.ToList();
                //obj.purchaseOffers = purchaseOffers.ToList(); 
                return obj;
            }
        }

        public async Task<List<PurchaseOfferVM>> GetPurchaseOffers(int pPurchasesDetailsID, int UserID)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater = new DynamicParameters();
                paramater.Add("@PurchasesDetailsID", pPurchasesDetailsID);
                paramater.Add("@UserID", UserID);

                IEnumerable<PurchaseOfferVM> purchaseOffers = await con.QueryAsync<PurchaseOfferVM>("[ESS].LoadPurchaseOfferInfo", paramater, null, 0, commandType: CommandType.StoredProcedure);
                return purchaseOffers.ToList();
            }

        }
        #endregion

        #region "Save"

        public async Task<PurchasesVM> savePurchases(PurchasesVM PurchasesVM)
        {

            await _context.Purchases.AddAsync(PurchasesVM.purchases);

            foreach (PurchasesDetails dtl in PurchasesVM.purchasesDetails)
            {
                dtl.PurchaseID = PurchasesVM.purchases.PurchaseID;
                if (PurchasesVM.purchases.PurchaseID < dtl.ItemTypeID)
                {
                    PurchasesVM.purchases.TypeID = dtl.ItemTypeID;
                }
            }

            if (PurchasesVM.purchasesDetails != null) await _context.AddRangeAsync(PurchasesVM.purchasesDetails);

            await _context.SaveChangesAsync();

            AttachmentConcrete attachmentConcrete = new AttachmentConcrete(_context, _configuration);
            if (PurchasesVM.attachments != null)
            {
                foreach (Attachment dtl in PurchasesVM.attachments)
                {
                    Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == dtl.AttachmentID);
                    obj.ReferenceID = PurchasesVM.purchases.PurchaseID;
                    await attachmentConcrete.UpdateAttachment(obj);
                }
            }


            await _context.SaveChangesAsync();

            return PurchasesVM;
        }

        public async Task<bool> savePurchasesStage(PurchasesStage purchasesStage)
        {

            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                con.Open();
                var sqlTransaction = con.BeginTransaction();
                var paramater = new DynamicParameters();

                paramater.Add("@PurchasesStageID", purchasesStage.PurchasesStageID);
                paramater.Add("@PurchasesStageTypeID", purchasesStage.PurchasesStageTypeID);
                paramater.Add("@PurchaseID", purchasesStage.PurchaseID);
                paramater.Add("@UserID", purchasesStage.UserID);
                paramater.Add("@IsApproved", purchasesStage.IsApproved);
                paramater.Add("@IsRejected", purchasesStage.IsRejected);
                paramater.Add("@Justification", purchasesStage.Justification);

                int result = con.Execute("[ess].UpdatePurchasesStageInfo", paramater, sqlTransaction, 0, CommandType.StoredProcedure);

                if (result > 0)
                {
                    sqlTransaction.Commit();
                    return true;
                }
                else
                {
                    sqlTransaction.Rollback();
                    return false;
                }
                return false;
            }


        }

        public async Task<PurchaseOffersVM> SavePurchaseOffers(PurchaseOffersVM purchaseOffersVM)
        {
            await _context.PurchaseOffers.AddRangeAsync(purchaseOffersVM.purchaseOffers);
            await _context.SaveChangesAsync();
            AttachmentConcrete attachmentConcrete = new AttachmentConcrete(_context, _configuration);
            if (purchaseOffersVM.attachments != null)
            {
                foreach (Attachment dtl in purchaseOffersVM.attachments)
                {
                    Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == dtl.AttachmentID);
                    if (obj != null)
                    {
                        obj.ReferenceID = purchaseOffersVM.purchaseOffers.PurchaseOfferID;
                        await attachmentConcrete.UpdateAttachment(obj);
                    }
                }
            }
            return purchaseOffersVM;
        }


        #endregion


        #region "Update"

        public async Task<PurchasesVM> updatePurchases(PurchasesVM PurchasesVM)
        {
            _context.Purchases.Update(PurchasesVM.purchases);

            foreach (PurchasesDetails dtl in PurchasesVM.purchasesDetails)
            {
                dtl.PurchaseID = PurchasesVM.purchases.PurchaseID;
                dtl.PurchasesDetailsID = 0;
                if (PurchasesVM.purchases.PurchaseID < dtl.ItemTypeID)
                {
                    PurchasesVM.purchases.TypeID = dtl.ItemTypeID;
                }
            }

            List<PurchasesDetails> Oldresult = _context.PurchasesDetails.Where(p => p.PurchaseID == PurchasesVM.purchases.PurchaseID).ToList();
            _context.RemoveRange(Oldresult);

            if (PurchasesVM.purchasesDetails != null) await _context.AddRangeAsync(PurchasesVM.purchasesDetails);

            var result = await _context.SaveChangesAsync();

            AttachmentConcrete attachmentConcrete = new AttachmentConcrete(_context, _configuration);
            if (PurchasesVM.attachments != null)
            {
                foreach (Attachment dtl in PurchasesVM.attachments)
                {
                    Attachment obj = _context.Attachments.FirstOrDefault(p => p.AttachmentID == dtl.AttachmentID);
                    obj.ReferenceID = PurchasesVM.purchases.PurchaseID;
                    await attachmentConcrete.UpdateAttachment(obj);
                }
            }

            if (result > 0)
            {
                return PurchasesVM;
            }
            else
            {
                throw new Exception("Not Update");
            }

        }

        public async Task<bool> SelectPurchaseOffers(int purchaseOfferID, int purchasesDetailsID, bool isSelected, int UserID)
        {
            using (var con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                con.Open();
                var sqlTransaction = con.BeginTransaction();
                var paramater = new DynamicParameters();

                paramater.Add("@PurchaseOfferID", purchaseOfferID);
                paramater.Add("@PurchasesDetailsID", purchasesDetailsID);
                paramater.Add("@IsSelected", isSelected);
                paramater.Add("@UserID", UserID);

                int result = con.Execute("[ess].SelectPurchaseOfferInfo", paramater, sqlTransaction, 0, CommandType.StoredProcedure);

                if (result > 0)
                {
                    sqlTransaction.Commit();
                    return true;
                }
                else
                {
                    sqlTransaction.Rollback();
                    return false;
                }
                return false;
            }

        }
        #endregion

        #region "Delete"
        public async Task<bool> DeletePurchaseOffers(int pPurchaseOfferID, int pUserID)
        {
            //var obj = _context.PurchaseOffers.Where(p => p.PurchaseOfferID == pPurchaseOfferID && p.UserID == pUserID);
            //if(obj==null)throw new Exception("You do not have permission to Delete this data");

            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DatabaseConnection")))
            {
                var paramater1 = new DynamicParameters();
                paramater1.Add("@PurchaseOfferID", pPurchaseOfferID);
                paramater1.Add("@UserID", pUserID);

                var affectedRows = await con.ExecuteAsync("[ESS].DeletePurchaseOffersInfo", paramater1, null, 0, commandType: CommandType.StoredProcedure);
                if (affectedRows > 0)
                    return true;
                return false;
            }
            return false;
        }


        #endregion


    }
}
