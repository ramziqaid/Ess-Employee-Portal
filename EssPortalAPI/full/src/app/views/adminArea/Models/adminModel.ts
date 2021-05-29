
class UserModel {
    userId: number;
    userName: string;
    fullName: string;
    emailId: string;
    contactno: string;
    password: string;
    status: boolean;
    employeeID: number;
    employeeNameEn: string;
    employeeNameAR: string;
}

class UserChangePasswordModel {
    userId: number;
    newpassword: string;
    oldpassword: string;
}
class AssignRemoveModel {
    public userId: number;
    public roleId: number;
}

class AssignRolesViewModel {
    public userId: number;
    public roleId: number;
    public userName: string;
    public roleName: string;
    public userRolesId: number;
}

class RoleModel {
    public roleName: string;
    public status: boolean;
    public roleId: number;
}

class UserDropdownModel {
    public userId: number;
    public userName: string;
}

export { UserModel, AssignRemoveModel, AssignRolesViewModel, RoleModel, UserDropdownModel, UserChangePasswordModel }