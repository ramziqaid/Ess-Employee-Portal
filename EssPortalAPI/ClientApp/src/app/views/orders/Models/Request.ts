
class Requests {
    requestID: number;
    requsetPrivateNumber:string;
    employeeID: number;
    requestTypeID: number;
    statusCode: string; 
    userID: number;
    isDelegate: boolean;
    isDelegateApprove: boolean;
    delegateFromID: number;
    delegateToID: number;
    createdDate: Date;
    fileName: string;
}

class RequestExtraField {
    requestExtraFieldID: number;
    requestID: number;
    extraFieldTypeID:number ;
    value: string; 
}


class RequestType {
    requestTypeID: number;
    requestNameAr: string;
    requestNameEn: string;
    requestGroupID: number;
    isActive: boolean;
    icons: string;
}

class RequestStage {
    iD: number;
    stageTypeID: number;
    justification: string;
    actionCode: string;
    userID: number;
    createDate: string;
}

class Amendments {
    ID: number;
    amendmentReasonCode: number;
    requestID: number;
    type: string;
    time: string;
    fromDate: string;
    justification: string;
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

class SearchRequestCritria{
    requestID: number;
    employeeID: number;
    managerID: number;
    requestTypeID: number;
    statusID: number;
}




export { Requests, RequestStage, Amendments, RequestType, Leave,
    RequestExtraField,
    SearchRequestCritria }