using System.Linq;
using EssPortal.Models;
using EssPortal.ViewModels;

namespace EssPortal.Interface
{
    public interface IPaymentDetails
    {
        IQueryable<PaymentDetailsViewModel> GetAll(QueryParameters queryParameters, int userId);
        int Count(int userId);
        bool RenewalPayment(RenewalViewModel renewalViewModel);
    }
}