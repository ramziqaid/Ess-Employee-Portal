
export enum RequestTypeId {
    Amendment = 5,    
    ChangeHousing = 15,
    LoanRequest = 51,//طلبات السلفة
    BusinessTripAssignment = 10,
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
    RemoteWork=65,
    JoiningRequest = 2042,
    FamilyVisit = 2043,
    SingleHomeAwayVisaRequests = 69,
    MultiHomeAwayVisaRequests = 70,
    ExitReturnOfficialLeaveRequests = 71,
    AddingNewBabyReques = 72,
    DependentIDRenewalRequest = 73,
    IDProfessionModificationRequest = 74,
    IqamaLostReplacementRequests = 75
}

export enum RequestAction {
    NewRequest = "COR01",
    Approved = "COR02",
    Rejected = "COR03" 
}


export enum RequestStatus {
    NewRequest = "CSR01",
    UnderPreparation = "CSR02",
    RequestCanceled = "CSR03",
    RequestRejected = "CSR04",
    DoneRequest = "CSR05"
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

 

export enum SystemCodeType {
    Code_CSR = "CSR", 
    Code_CAC = "CAC",
    Code_COR = "COR",
    Code_EVD = "EVD",
    Code_EOS = "EOS",
    Code_VSA = "VSA",
    Code_VSR = "VSR", 
    Code_CLT = "CLT", 
    Code_RWS = "RWS", 

}

