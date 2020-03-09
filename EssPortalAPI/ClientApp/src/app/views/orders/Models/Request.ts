
class Requests {
    iD: number;
    employeeID: number;
    requestTypeID: number;
    statusID: number;
    createdDate: Date;
    createdBy: string;
    isDelegate: boolean;
    isDelegateApprove: boolean;
    delegateFromID: number;
    delegateToID: number;
    fileName: string;
}

class RequestType {
    ID: number;
    RequestName: string;
    ControllerName: string;
    RequestGroupID: number;
    IsActive: boolean;
    icons: string;
}

class RequestStage {
    ID: number;
    StageTypeID: number;
    Justification: string;
    ActionName: string;
    EmployeeID: number;
    CreateDate: string;
}

class Amendments {
    ID: number;
    AmendmentReasonId: number;
    RequestID: number;
    Type: string;
    Time: string;
    FromDate: string;
    Justification: string;
}

class AmendmentReason {
    ID: number;
    AmendReasonEn: string;
    AmendReasonAr: string;
}



export { Requests, RequestStage, Amendments, RequestType, AmendmentReason }