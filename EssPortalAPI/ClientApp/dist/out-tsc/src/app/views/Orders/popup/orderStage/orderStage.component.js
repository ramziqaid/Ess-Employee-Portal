var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestService } from '../../Services/Request.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
let OrderStagePopupComponent = class OrderStagePopupComponent {
    constructor(data, dialogRef, requestService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.requestService = requestService;
        this.displayedColumns = ['index', 'employeeName', 'action', 'createdDate', 'note'];
    }
    ngOnInit() {
        this.buildItemForm(this.data);
    }
    ngAfterViewInit() {
    }
    buildItemForm(item) {
        this.requestService.getRequestStage(item.RequestID).subscribe(result => {
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
};
__decorate([
    ViewChild(MatPaginator),
    __metadata("design:type", MatPaginator)
], OrderStagePopupComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort),
    __metadata("design:type", MatSort)
], OrderStagePopupComponent.prototype, "sort", void 0);
OrderStagePopupComponent = __decorate([
    Component({
        selector: 'app-ngx-table-popup',
        templateUrl: './orderStage.component.html'
    }),
    __param(0, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [Object, MatDialogRef,
        RequestService])
], OrderStagePopupComponent);
export { OrderStagePopupComponent };
//# sourceMappingURL=orderStage.component.js.map