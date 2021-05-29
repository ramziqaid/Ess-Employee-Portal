
class Requests {
    iD: number;
    employeeID: number;
    requestTypeID: number;
    statusID: number;
    createdDate: Date;
    userID: number;
    isDelegate: boolean;
    isDelegateApprove: boolean;
    delegateFromID: number;
    delegateToID: number;
    fileName: string;
}

class RequestType {
    iD: number;
    requestName: string;
    controllerName: string;
    requestGroupID: number;
    isActive: boolean;
    icons: string;
}

class RequestStage {
    ID: number;
    stageTypeID: number;
    Justification: string;
    actionName: string;
    employeeID: number;
    createDate: string;
}

class Amendments {
    ID: number;
    amendmentReasonId: number;
    requestID: number;
    type: string;
    time: string;
    fromDate: string;
    justification: string;
}

class AmendmentReason {
    amendmentReasonId: number;
    AmendReasonEn: string;
    AmendReasonAr: string;
}

class Leave {
    ID: number;
    requestID: number;
    vacationTypeID: string;
    startDate: string;
    endDate: string;
    daysNo: number;
    replacmentStuffID: number;
    replacmentStuffIDIsApprove: boolean;
    justification: string;
}

class Housing {
    ID: number;
    requestID: number;
    startDate: string;
    endDate: string;
    TotalAmount: number;
    MonthlyInstallment: number;
    ContractPeriod: string;
    NoOfInstallment: boolean;
    LoanStartDate: string;
    LOANTYPECODE: string;
    justification: string;
}




export { Requests, RequestStage, Amendments, RequestType, AmendmentReason, Leave }