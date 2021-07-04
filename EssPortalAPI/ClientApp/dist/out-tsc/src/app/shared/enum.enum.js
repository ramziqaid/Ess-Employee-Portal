export var RequestTypeId;
(function (RequestTypeId) {
    RequestTypeId[RequestTypeId["Amendment"] = 5] = "Amendment";
    RequestTypeId[RequestTypeId["ChangeHousing"] = 15] = "ChangeHousing";
    RequestTypeId[RequestTypeId["LoanRequest"] = 51] = "LoanRequest";
    RequestTypeId[RequestTypeId["BusinessTripAssignment"] = 10] = "BusinessTripAssignment";
    RequestTypeId[RequestTypeId["ExitReEnterVisa"] = 20] = "ExitReEnterVisa";
    RequestTypeId[RequestTypeId["EmployeeClearanceForm"] = 25] = "EmployeeClearanceForm";
    RequestTypeId[RequestTypeId["ResubmissionBusinessTripAssignment"] = 30] = "ResubmissionBusinessTripAssignment";
    RequestTypeId[RequestTypeId["LeaveRequestVacations"] = 35] = "LeaveRequestVacations";
    RequestTypeId[RequestTypeId["EndOfService"] = 40] = "EndOfService";
    RequestTypeId[RequestTypeId["CompanyLetter"] = 45] = "CompanyLetter";
    RequestTypeId[RequestTypeId["ResubmissionRequest"] = 50] = "ResubmissionRequest";
    RequestTypeId[RequestTypeId["ExternalCommitmentRequest"] = 55] = "ExternalCommitmentRequest";
    RequestTypeId[RequestTypeId["MedicalInsurance"] = 60] = "MedicalInsurance";
    RequestTypeId[RequestTypeId["MedicalInsurance2"] = 62] = "MedicalInsurance2";
    RequestTypeId[RequestTypeId["MedicalInsurance3"] = 63] = "MedicalInsurance3";
    RequestTypeId[RequestTypeId["ChangeHouseingRequest"] = 61] = "ChangeHouseingRequest";
    RequestTypeId[RequestTypeId["JoiningRequest"] = 2042] = "JoiningRequest";
    RequestTypeId[RequestTypeId["FamilyVisit"] = 2043] = "FamilyVisit";
    RequestTypeId[RequestTypeId["SingleHomeAwayVisaRequests"] = 69] = "SingleHomeAwayVisaRequests";
    RequestTypeId[RequestTypeId["MultiHomeAwayVisaRequests"] = 70] = "MultiHomeAwayVisaRequests";
    RequestTypeId[RequestTypeId["ExitReturnOfficialLeaveRequests"] = 71] = "ExitReturnOfficialLeaveRequests";
    RequestTypeId[RequestTypeId["AddingNewBabyReques"] = 72] = "AddingNewBabyReques";
    RequestTypeId[RequestTypeId["DependentIDRenewalRequest"] = 73] = "DependentIDRenewalRequest";
    RequestTypeId[RequestTypeId["IDProfessionModificationRequest"] = 74] = "IDProfessionModificationRequest";
    RequestTypeId[RequestTypeId["IqamaLostReplacementRequests"] = 75] = "IqamaLostReplacementRequests";
})(RequestTypeId || (RequestTypeId = {}));
export var RequestAction;
(function (RequestAction) {
    RequestAction["NewRequest"] = "COR01";
    RequestAction["Approved"] = "COR02";
    RequestAction["Rejected"] = "COR03";
})(RequestAction || (RequestAction = {}));
export var RequestStatus;
(function (RequestStatus) {
    RequestStatus["NewRequest"] = "CSR01";
    RequestStatus["UnderPreparation"] = "CSR02";
    RequestStatus["RequestCanceled"] = "CSR03";
    RequestStatus["RequestRejected"] = "CSR04";
    RequestStatus["DoneRequest"] = "CSR05";
})(RequestStatus || (RequestStatus = {}));
export var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["error"] = 0] = "error";
    NotificationType[NotificationType["success"] = 1] = "success";
    NotificationType[NotificationType["warning"] = 2] = "warning";
    NotificationType[NotificationType["info"] = 3] = "info";
})(NotificationType || (NotificationType = {}));
export var ActionName;
(function (ActionName) {
    ActionName["Submit"] = "Submit";
    ActionName["Reject"] = "Reject";
    ActionName["Cancel"] = "Cancel";
    ActionName["Approve"] = "Approve";
    ActionName["Done"] = "Done";
})(ActionName || (ActionName = {}));
//system Code
export var ActionTypeID;
(function (ActionTypeID) {
    ActionTypeID[ActionTypeID["Submit"] = 9] = "Submit";
    ActionTypeID[ActionTypeID["Reject"] = 10] = "Reject";
    ActionTypeID[ActionTypeID["Cancel"] = 11] = "Cancel";
    ActionTypeID[ActionTypeID["Approve"] = 12] = "Approve";
    ActionTypeID[ActionTypeID["Done"] = 13] = "Done";
})(ActionTypeID || (ActionTypeID = {}));
export var SystemCodeType;
(function (SystemCodeType) {
    SystemCodeType["Code_CSR"] = "CSR";
    SystemCodeType["Code_CAC"] = "CAC";
    SystemCodeType["Code_COR"] = "COR";
    SystemCodeType["Code_EVD"] = "EVD";
})(SystemCodeType || (SystemCodeType = {}));
//# sourceMappingURL=enum.enum.js.map