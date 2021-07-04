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
import { AssignRemoveModel } from '../Models/adminModel';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
let AssignRoleComponent = class AssignRoleComponent {
    constructor(adminService, _Route, authService, alertify) {
        this.adminService = adminService;
        this._Route = _Route;
        this.authService = authService;
        this.alertify = alertify;
        this.AssignRemoveModel = new AssignRemoveModel();
        this.displayedColumns1 = ['index', 'employeeNumber', 'employeeNameEn', 'action'];
        this.displayedColumns2 = ['index', 'fullName', 'userName', 'roleName', 'action'];
        this._adminService = adminService;
        var fruits = ['Apple', 'Orange', 'Banana'];
    }
    ngOnInit() {
        this.loadRolesType();
        this.loadData();
    }
    ngAfterViewInit() {
    }
    loadRolesType() {
        this._adminService.GetAllRole().subscribe(allroles => {
            this.RoleTypeList = allroles.filter(x => x.roleName.toUpperCase() != 'ADMIN');
        }, error => this.errorMessage = error);
    }
    loadData() {
        forkJoin([this.adminService.GetAllUsers(), this.adminService.GetAllAssignedRoles()]).subscribe(data => {
            this.UserList = data[0];
            this.rolesDataSource = data[1];
            this.SelectRole();
            debugger;
        }, error => { this.alertify.error(error); });
    }
    loadUser() {
        this._adminService.GetAllUsers().subscribe(allUsers => {
            this.UserList = allUsers;
        }, error => this.errorMessage = error);
    }
    loadAllRoles() {
        this.adminService.GetAllAssignedRoles().subscribe(result => {
            this.rolesDataSource = result; //.filter(role => role.userId === userId);    
        }, error => { this.alertify.error(error); });
    }
    SelectRole() {
        if (this.AssignRemoveModel.roleId != undefined) {
            var DataSource2 = this.rolesDataSource.filter(role => role.roleId === this.AssignRemoveModel.roleId);
            this.DataSource2 = new MatTableDataSource(DataSource2);
            this.DataSource2.paginator = this.paginator2;
            this.DataSource2.sort = this.sort2;
            var DataSource1 = [];
            for (let num of this.UserList) {
                const found = DataSource2.filter(el => el.userId === num.userId);
                if (found.length == 0)
                    DataSource1.push(num);
            }
            this.DataSource1 = new MatTableDataSource(DataSource1);
            this.DataSource1.paginator = this.paginator1;
            this.DataSource1.sort = this.sort1;
        }
    }
    onAdd(UserId) {
        this.AssignRemoveModel.userId = UserId;
        this._adminService.AssignRole(this.AssignRemoveModel).subscribe(response => {
            //this.output = response
            this.alertify.success('Role Add Successfully');
            this.loadData();
        }, error => {
            this.alertify.error(error);
        });
    }
    onRemove(RoleId, UserId) {
        this.alertify.confirm('Are you sure you want to delete this Role?', () => {
            this.AssignRemoveModel.roleId = RoleId;
            this.AssignRemoveModel.userId = UserId;
            this.adminService.RemoveRole(this.AssignRemoveModel).subscribe(response => {
                this.output = response;
                if (this.output.statusCode == "409") {
                    this.alertify.error('Role does not Exists');
                }
                else if (this.output.statusCode == "200") {
                    this.alertify.success('Role Removed Successfully');
                    this.loadData();
                }
                else {
                    alert('Something Went Wrong');
                }
            });
        });
    }
};
__decorate([
    ViewChild('paginator1'),
    __metadata("design:type", MatPaginator)
], AssignRoleComponent.prototype, "paginator1", void 0);
__decorate([
    ViewChild(MatSort),
    __metadata("design:type", MatSort)
], AssignRoleComponent.prototype, "sort1", void 0);
__decorate([
    ViewChild('paginator2'),
    __metadata("design:type", MatPaginator)
], AssignRoleComponent.prototype, "paginator2", void 0);
__decorate([
    ViewChild(MatSort),
    __metadata("design:type", MatSort)
], AssignRoleComponent.prototype, "sort2", void 0);
AssignRoleComponent = __decorate([
    Component({
        selector: 'app-Role',
        templateUrl: './Role.component.html',
        styleUrls: ['./Role.component.scss']
    }),
    __metadata("design:paramtypes", [AdminService,
        Router,
        AuthService,
        AlertifyService])
], AssignRoleComponent);
export { AssignRoleComponent };
//# sourceMappingURL=Role.component.js.map