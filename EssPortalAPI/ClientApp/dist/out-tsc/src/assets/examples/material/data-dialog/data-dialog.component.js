var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DataDialogOverviewComponent } from './data-dialog-overview/data-dialog-overview.component';
let DataDialogComponent = class DataDialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DataDialogOverviewComponent, {
            data: {
                animal: 'panda'
            }
        });
    }
    ngOnInit() {
    }
};
DataDialogComponent = __decorate([
    Component({
        selector: 'app-data-dialog',
        templateUrl: './data-dialog.component.html',
        styleUrls: ['./data-dialog.component.scss']
    }),
    __metadata("design:paramtypes", [MatDialog])
], DataDialogComponent);
export { DataDialogComponent };
//# sourceMappingURL=data-dialog.component.js.map