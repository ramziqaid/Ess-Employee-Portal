using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.ViewModels;
using EssPortalAPI.Email;
using EssPortalAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace EssPortalAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PurchasesController : ControllerBase
    {

        private readonly IPurchasesRepository _purchasesRepository;
        private IEmailSender _emailsender;
        private readonly AppSettings _appSettings;

        public PurchasesController(IPurchasesRepository purchasesRepository, IEmailSender emailsender, IOptions<AppSettings> appSettings)
        {
            _purchasesRepository = purchasesRepository;
            _emailsender = emailsender;
            _appSettings = appSettings.Value;
        }

        [HttpGet]
        [Route("GetPurchasesByNumber/{PurchaseNumber}")]
        public async Task<IActionResult> Get([FromRoute] string PurchaseNumber)
        {
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Purchases Purchase = _purchasesRepository.Find(p => p.PurchaseNumber == PurchaseNumber);

            if (Purchase == null)
            {
                return BadRequest("Not Found Requset by Number " + PurchaseNumber);
            }
            PurchasesVM PurchaseVM = await _purchasesRepository.GetPurchase(Purchase.PurchaseID, userId);

            return Ok(PurchaseVM);
        }

        [HttpGet]
        [Route("GetPurchasesByID/{PurchaseID}")]
        public async Task<IActionResult> Get([FromRoute] int PurchaseID)
        {
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //IEnumerable<Purchases> Purchase1 = await _purchasesRepository.GetWithDetailsAsync(p => p.PurchaseID == PurchaseID);
            PurchasesVM PurchaseVM = await _purchasesRepository.GetPurchase(PurchaseID, userId);
            if (PurchaseVM == null)
            {
                return BadRequest("Not Found Requset by Id " + PurchaseID);
            }
            return Ok(PurchaseVM);
        }

        [HttpGet]
        [Route("GetPurchasesOffers/{PurchasesDetailsID}")]
        public async Task<IActionResult> GetPurchasesOffers([FromRoute] int PurchasesDetailsID)
        {
            var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //IEnumerable<Purchases> Purchase1 = await _purchasesRepository.GetWithDetailsAsync(p => p.PurchaseID == PurchaseID);
           List<PurchaseOfferVM> purchaseOffersVM = await _purchasesRepository.GetPurchaseOffers(PurchasesDetailsID, userId);
            if (purchaseOffersVM == null)
            {
                return BadRequest("Not Found Purchases DetailsID by Id " + PurchasesDetailsID);
            }
            return Ok(purchaseOffersVM);
        }

        [HttpGet]
        [Route("GetPurchasesList")]
        public async Task<IActionResult> GetPurchasesList()
        {
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                List<Purchases> Purchase = await _purchasesRepository.GetPurchaseList(userId);
                return Ok(Purchase);
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("CreatePurchases")]
        public async Task<IActionResult> CreatePurchases([FromBody] PurchasesVM purchasesView)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bad purchases");
            }
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                purchasesView.purchases.UserID = userId;
                purchasesView.purchases.StatusID = EnumsType.PurchasesStatus.NewRequest;
                purchasesView.purchases.PurchaseNumber = "-1";
                purchasesView.purchases.CreatedDate = DateTime.Now.ToShortDateString();

                var RoleName = this.User.FindFirstValue(ClaimTypes.Role);
                if (RoleName.ToUpper() == "CLIENT")
                {
                    return BadRequest("You do not have permission to Add New Request");
                }
                if (_appSettings.IsNeedAttachmentsWithRequest == "1")
                {
                    if (purchasesView.attachments == null || purchasesView.attachments.Count == 0)
                    {
                        return BadRequest("You Must Enter Attachments");
                    }
                    if (purchasesView.attachments == null || purchasesView.attachments.Count < 2)
                    {
                        return BadRequest("You Must Enter Two Or More Attachments");
                    }
                }
                var obj = await _purchasesRepository.savePurchases(purchasesView);
                // await _emailsender.SendEmailAsync(user.Email, "Techhowdy.com - Confirm Your Email", "Please confirm your e-mail by clicking this link: <a href=\"" + callbackUrl + "\">click here</a>");

                return Ok(obj);
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("ActionPurchasesStage")]
        public async Task<IActionResult> ActionPurchasesStage([FromBody] PurchasesStage purchasesStage)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bad purchases");
            }
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                purchasesStage.UserID = userId;


                var result = await _purchasesRepository.savePurchasesStage(purchasesStage);
                if (result)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest("Not saved");
                }


            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }

        }


        [HttpPost("CreatePurchaseOffers")]
        public async Task<IActionResult> CreatePurchaseOffers([FromBody] PurchaseOffersVM purchaseOffersVM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Bad Purchase Offers");
            }
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                purchaseOffersVM.purchaseOffers.UserID = userId;
                purchaseOffersVM.purchaseOffers.SelectedByUserID = null;
                purchaseOffersVM.purchaseOffers.CreatedDate = DateTime.Now.ToShortDateString();

                if (_appSettings.IsNeedAttachmentsWithOffers=="1")
                    {
                    if (purchaseOffersVM.attachments == null || purchaseOffersVM.attachments.Count == 0)
                    {
                        return BadRequest("You Must Enter Attachments");
                    }
                } 

                var obj = await _purchasesRepository.SavePurchaseOffers(purchaseOffersVM);

                // await _emailsender.SendEmailAsync(user.Email, "Techhowdy.com - Confirm Your Email", "Please confirm your e-mail by clicking this link: <a href=\"" + callbackUrl + "\">click here</a>");

                return Ok(obj);
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }

        }


        [HttpPost("UpdatePurchases")]
        public async Task<IActionResult> UpdatePurchases([FromBody] PurchasesVM purchasesView)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bad purchases");
            }
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
                if (userId != purchasesView.purchases.UserID)
                {
                    return BadRequest("You do not have permission to edit this data");
                }

                //purchasesView.purchases.UserID = userId;
                //purchasesView.purchases.StatusID = EnumsType.PurchasesStatus.NewRequest;                
                //purchasesView.purchases.CreatedDate = DateTime.Now.ToShortDateString();

                var obj = await _purchasesRepository.updatePurchases(purchasesView);

                // await _emailsender.SendEmailAsync(user.Email, "Techhowdy.com - Confirm Your Email", "Please confirm your e-mail by clicking this link: <a href=\"" + callbackUrl + "\">click here</a>");

                return Ok(obj);
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("{purchaseOfferID}/{purchasesDetailsID}/SelectPurchaseOffers/{isSelected}")]
        public async Task<IActionResult> SelectPurchaseOffers(int purchaseOfferID,int purchasesDetailsID, Boolean isSelected)
        { 
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));

              Boolean result= await  _purchasesRepository.SelectPurchaseOffers(purchaseOfferID, purchasesDetailsID, isSelected, userId);
               if(result) return Ok();
                return BadRequest();
            }
            catch (Exception ex)
            {
                //ModelState.AddModelError("error", ex.Message);
                return BadRequest(ex.Message);
            }
        }

        #region "Delete"

        [HttpDelete]
        [Route("DeletePurchaseOffer/{purchaseOfferID}")]
        public async Task<IActionResult> DeletePurchaseOffer(int purchaseOfferID)
        {
            try
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));  
                Boolean result=  await _purchasesRepository.DeletePurchaseOffers(purchaseOfferID, userId);
                if (result)
                {
                    return Ok();
                }
                return BadRequest("Not Deleted Record");
            }
            catch (Exception ex)
            { 
                return BadRequest(ex.Message);
            }
        }
        #endregion
    }
}