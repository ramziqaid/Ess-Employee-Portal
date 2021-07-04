var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AuthService } from './../../../core/services/auth.service';
import { AlertifyService } from '../../../core/services/Alertify.service';
import { Component, ViewChild } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
let PermissionOperationComponent = class PermissionOperationComponent {
    constructor(adminService, _Route, authService, alertify) {
        this.adminService = adminService;
        this._Route = _Route;
        this.authService = authService;
        this.alertify = alertify;
        this.permission = {
            operationPermissionID: -1,
            operationID: null,
            roleId: null
        };
        this.displayedColumns1 = ['index', 'operationName', 'active'];
        this._adminService = adminService;
    }
    ngOnInit() {
        this.loadRolesType();
    }
    loadRolesType() {
        this.adminService.GetAllRole().subscribe(result => {
            this.RoleTypeList = result.filter(x => x.roleName.toUpperCase() != 'ADMIN');
        }, error => { this.alertify.error(error); });
    }
    loadPermission() {
        this.adminService.GetOperationWithPermission().subscribe(result => {
            this.DataSource1 = result.filter(role => role.isNeedPermission == true
                && (role.roleId == this.permission.roleId || role.roleId == -1));
        }, error => { this.alertify.error(error); });
    }
    SelectRole() {
        this.loadPermission();
    }
    changeStatus(OperationId, status) {
        this.permission.operationID = OperationId;
        if (!status) {
            this.adminService.DeletePermission(this.permission).subscribe(result => {
                this.loadPermission();
            }, error => { this.alertify.error(error); });
        }
        else {
            this.adminService.SavePermission(this.permission).subscribe(result => {
                this.loadPermission();
            }, error => { this.alertify.error(error); });
        }
    }
};
__decorate([
    ViewChild('paginator1'),
    __metadata("design:type", MatPaginator)
], PermissionOperationComponent.prototype, "paginator1", void 0);
__decorate([
    ViewChild(MatSort),
    __metadata("design:type", MatSort)
], PermissionOperationComponent.prototype, "sort1", void 0);
PermissionOperationComponent = __decorate([
    Component({
        selector: 'app-permission-operation',
        templateUrl: './permission-operation.component.html',
        styleUrls: ['./permission-operation.component.scss']
    }),
    __metadata("design:paramtypes", [AdminService,
        Router,
        AuthService,
        AlertifyService])
], PermissionOperationComponent);
export { PermissionOperationComponent };
//# sourceMappingURL=permission-operation.component.js.map