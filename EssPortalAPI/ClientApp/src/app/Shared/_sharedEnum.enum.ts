
export enum RequestTypeId {
    Amendment = 5,
    BusinessTripAssignment = 10,
    Housing = 15,
    ExitReEnterVisa = 20,
    EmployeeClearanceForm = 25,
    ResubmissionBusinessTripAssignment = 30,
    LeaveRequestVacations = 35,//طلبات الاجازة
    EndOfService = 40,
    CompanyLetter = 45,
    ResubmissionRequest = 50,
    ExternalCommitmentRequest = 55,
    MedicalInsurance = 60,
    MedicalInsurance2 = 62,
    MedicalInsurance3 = 63,
    ChangeHouseingRequest = 61,
    JoiningRequest = 2042,
    FamilyVisit = 2043,
    LoanRequest = 51,//طلبات السلفة
    SingleHomeAwayVisaRequests = 69,
    MultiHomeAwayVisaRequests = 70,
    ExitReturnOfficialLeaveRequests = 71,
    AddingNewBabyReques = 72,
    DependentIDRenewalRequest = 73,
    IDProfessionModificationRequest = 74,
    IqamaLostReplacementRequests = 75
}

export enum RequestStatus {
    NewRequest = 1,
    UnderPreparation = 2,
    RequestCanceled = 3,
    RequestRejected = 4,
    DoneRequest = 5
}

export enum NotificationType {
    error,
    success,
    warning,
    info
}

export enum ActionName {
    Submit = "Submit",
    Reject = "Reject",
    Cancel = "Cancel",
    Approve = "Approve",
    Done = "Done"
}

//system Code
export enum ActionTypeID {
    Submit = 9,
    Reject = 10,
    Cancel = 11,
    Approve = 12,
    Done = 13
}

export enum StatusTypeID {
    NewRequest = 4,
    PendingRequest = 5,
    FinishedRequest = 6,
    CanceledRequest = 14,
}