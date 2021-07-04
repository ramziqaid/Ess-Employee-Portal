var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AdminService } from '../Services/admin.service';
let SettingComponent = class SettingComponent {
    constructor(adminService, userService) {
        this.adminService = adminService;
        this.userService = userService;
    }
    ngOnInit() {
        this.loadUsers();
        this.getPurchasesStageType();
    }
    loadUsers() {
        this.adminService.GetAllUsers().subscribe(result => {
            this.UserModel = result;
        }, error => console.log(error));
    }
    getPurchasesStageType() {
        this.userService.GetPurchasesStageType().subscribe(result => {
            this.PurchasesStageType = result.filter(x => x.purchasesTypeID == 7);
        }, error => console.log(error));
    }
};
SettingComponent = __decorate([
    Component({
        selector: 'app-Setting',
        templateUrl: './Setting.component.html',
        styleUrls: ['./Setting.component.scss']
    }),
    __metadata("design:paramtypes", [AdminService,
        AdminService])
], SettingComponent);
export { SettingComponent };
//# sourceMappingURL=Setting.component.js.map