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
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
let NgxTablePopupComponent = class NgxTablePopupComponent {
    constructor(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
    }
    ngOnInit() {
        this.buildItemForm(this.data.payload);
    }
    buildItemForm(item) {
        this.itemForm = this.fb.group({
            name: [item.name || '', Validators.required],
            age: [item.age || ''],
            email: [item.email || ''],
            company: [item.company || ''],
            phone: [item.phone || ''],
            address: [item.address || ''],
            balance: [item.balance || ''],
            isActive: [item.isActive || false]
        });
    }
    submit() {
        this.dialogRef.close(this.itemForm.value);
    }
};
NgxTablePopupComponent = __decorate([
    Component({
        selector: 'app-ngx-table-popup',
        templateUrl: './ngx-table-popup.component.html'
    }),
    __param(0, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [Object, MatDialogRef,
        FormBuilder])
], NgxTablePopupComponent);
export { NgxTablePopupComponent };
//# sourceMappingURL=ngx-table-popup.component.js.map