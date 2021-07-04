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
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
let DataDialogOverviewComponent = class DataDialogOverviewComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
};
DataDialogOverviewComponent = __decorate([
    Component({
        selector: 'app-data-dialog-overview',
        templateUrl: './data-dialog-overview.component.html',
        styleUrls: ['./data-dialog-overview.component.scss']
    }),
    __param(0, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [Object])
], DataDialogOverviewComponent);
export { DataDialogOverviewComponent };
//# sourceMappingURL=data-dialog-overview.component.js.map