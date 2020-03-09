using System;
using EssPortal.ViewModels;

namespace EssPortal.Interface
{
    public interface IRenewal
    {
        RenewalViewModel GetMemberNo(string memberNo, int userid);
        bool CheckRenewalPaymentExists(DateTime newdate, long memberId);
    }
}