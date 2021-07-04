var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { AlertifyService } from '../../../core';
import { AdminService } from '../Services/admin.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
let ShowUsersComponent = class ShowUsersComponent {
    constructor(alertify, adminService) {
        this.alertify = alertify;
        this.adminService = adminService;
        this.displayedColumns = ['index', 'employeeNumber', 'employeeNameEn', 'userName', 'emailId', 'active', 'action'];
    }
    ngOnInit() {
        this.loadUsers();
    }
    ngAfterViewInit() {
    }
    loadUsers() {
        this.adminService.GetAllUsers().subscribe(result => {
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            // debugger;
            //this.dtTrigger.next();
        }, error => { this.alertify.error(error); });
    }
    changeStatus(UserId, status) {
        debugger;
        this.adminService.UpdateUserStatus(UserId, status).subscribe(result => {
        }, error => { this.alertify.error(error); });
    }
    resetPassword(UserId) {
        this.adminService.ResetUserPassword(UserId).subscribe(result => {
            this.alertify.success("Password changed");
        }, error => { this.alertify.error(error); });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    ExportTOExcel() {
        debugger;
        // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
        // const wb: XLSX.WorkBook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        // /* save to file */
        // XLSX.writeFile(wb, 'Allusers.xlsx');
    }
};
__decorate([
    ViewChild(MatPaginator),
    __metadata("design:type", MatPaginator)
], ShowUsersComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort),
    __metadata("design:type", MatSort)
], ShowUsersComponent.prototype, "sort", void 0);
ShowUsersComponent = __decorate([
    Component({
        selector: 'app-ShowUser',
        templateUrl: './ShowUser.component.html',
        styleUrls: ['./ShowUser.component.scss']
    }),
    __metadata("design:paramtypes", [AlertifyService,
        AdminService])
], ShowUsersComponent);
export { ShowUsersComponent };
//# sourceMappingURL=ShowUser.component.js.map