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
    refrenceID: Number;
    fileName: string;
    fileType: string;
}

export class SystemCode {
    systemCodeID: string;
    descriptionAr: string;
    descriptionEn: string;
    category: string;
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
