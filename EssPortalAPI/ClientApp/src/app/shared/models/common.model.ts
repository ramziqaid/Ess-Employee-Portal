export class Employee {
    employeeID: number;
    personnelnumber: string;
    person: string;
    arabicName: string;
    englishName: string;
    userName: string;
}

export class Role {
    id: string;
    name: string;
    normalizedName: string;
}

export class Attachment {
    attachmentID: Number;
    referenceID: Number;
    fileName: string;
    fileType: string;
}

export class SystemCode {
    systemCode: string;
    descriptionAr: string;
    descriptionEn: string;
    systemCodeType: string;
  
}

export class ViewData {
    ID: number;
    Code: string;
    NameAR: string;
    NameEN: string;
    IsNeedReplacementEmp?: boolean;
}



export class Notification {
    notiCount: number;
    messageAR: string;
    messageEN: string;
}

export class Roles {
    static administrator = "Administrator";
    static manager = "Manager";
}
