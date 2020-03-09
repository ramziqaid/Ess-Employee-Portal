
using EssPortal.Interfaces;
using System;


namespace EssPortal.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRequestRepository Request { get; }
        IRequestTypeRepository RequestType { get; }
        IAmendmentRepository Amendment { get; }
        IEmployeeInfoViewRepository employeeInfoView { get; }

        IBankInfoRepository BankInfo { get; }

        int Complete();
    }
}