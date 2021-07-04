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
import { CrudService } from '../crud.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { NgxTablePopupComponent } from './ngx-table-popup/ngx-table-popup.component';
import { egretAnimations } from "../../../shared/animations/egret-animations";
let CrudNgxTableComponent = class CrudNgxTableComponent {
    constructor(dialog, snack, crudService, confirmService, loader) {
        this.dialog = dialog;
        this.snack = snack;
        this.crudService = crudService;
        this.confirmService = confirmService;
        this.loader = loader;
    }
    ngOnInit() {
        this.getItems();
    }
    ngOnDestroy() {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    }
    getItems() {
        this.getItemSub = this.crudService.getItems()
            .subscribe(data => {
            this.items = data;
        });
    }
    openPopUp(data = {}, isNew) {
        let title = isNew ? 'Add new member' : 'Update member';
        let dialogRef = this.dialog.open(NgxTablePopupComponent, {
            width: '720px',
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            if (!res) {
                // If user press cancel
                return;
            }
            this.loader.open();
            if (isNew) {
                this.crudService.addItem(res)
                    .subscribe(data => {
                    this.items = data;
                    this.loader.close();
                    this.snack.open('Member Added!', 'OK', { duration: 4000 });
                });
            }
            else {
                this.crudService.updateItem(data._id, res)
                    .subscribe(data => {
                    this.items = data;
                    this.loader.close();
                    this.snack.open('Member Updated!', 'OK', { duration: 4000 });
                });
            }
        });
    }
    deleteItem(row) {
        this.confirmService.confirm({ message: `Delete ${row.name}?` })
            .subscribe(res => {
            if (res) {
                this.loader.open();
                this.crudService.removeItem(row)
                    .subscribe(data => {
                    this.items = data;
                    this.loader.close();
                    this.snack.open('Member deleted!', 'OK', { duration: 4000 });
                });
            }
        });
    }
};
CrudNgxTableComponent = __decorate([
    Component({
        selector: 'app-crud-ngx-table',
        templateUrl: './crud-ngx-table.component.html',
        animations: egretAnimations
    }),
    __metadata("design:paramtypes", [MatDialog,
        MatSnackBar,
        CrudService,
        AppConfirmService,
        AppLoaderService])
], CrudNgxTableComponent);
export { CrudNgxTableComponent };
//# sourceMappingURL=crud-ngx-table.component.js.map