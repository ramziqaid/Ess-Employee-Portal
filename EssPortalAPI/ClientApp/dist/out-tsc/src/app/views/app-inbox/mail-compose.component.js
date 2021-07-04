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
import { FormGroup, FormControl, Validators } from '@angular/forms';
let MailComposeComponent = class MailComposeComponent {
    constructor(composeDialog) {
        this.composeDialog = composeDialog;
        this.newMailData = {};
    }
    ngOnInit() {
        this.mailForm = new FormGroup({
            to: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            subject: new FormControl('', [
                Validators.required
            ]),
            message: new FormControl('', [
                Validators.required
            ])
        });
    }
    sendEmail() {
        // console.log(this.mailForm.value);
    }
    closeDialog() {
    }
};
MailComposeComponent = __decorate([
    Component({
        selector: 'mail-compose',
        templateUrl: './mail-compose.template.html'
    }),
    __metadata("design:paramtypes", [MatDialog])
], MailComposeComponent);
export { MailComposeComponent };
//# sourceMappingURL=mail-compose.component.js.map