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
import { MatDialog } from '@angular/material/dialog';
import { BasicDialogOverviewComponent } from './basic-dialog-overview/basic-dialog-overview.component';
let BasicDialogComponent = class BasicDialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(BasicDialogOverviewComponent, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            this.animal = result;
        });
    }
};
BasicDialogComponent = __decorate([
    Component({
        selector: 'app-basic-dialog',
        templateUrl: './basic-dialog.component.html',
        styleUrls: ['./basic-dialog.component.scss']
    }),
    __metadata("design:paramtypes", [MatDialog])
], BasicDialogComponent);
export { BasicDialogComponent };
//# sourceMappingURL=basic-dialog.component.js.map