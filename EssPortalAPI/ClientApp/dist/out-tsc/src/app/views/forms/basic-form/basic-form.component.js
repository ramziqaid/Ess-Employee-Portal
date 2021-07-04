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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
let BasicFormComponent = class BasicFormComponent {
    constructor() {
        this.formData = {};
        this.console = console;
    }
    ngOnInit() {
        let password = new FormControl('', Validators.required);
        let confirmPassword = new FormControl('', CustomValidators.equalTo(password));
        this.basicForm = new FormGroup({
            username: new FormControl('', [
                Validators.minLength(4),
                Validators.maxLength(9)
            ]),
            firstname: new FormControl('', [
                Validators.required
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            website: new FormControl('', CustomValidators.url),
            date: new FormControl(),
            cardno: new FormControl('', [
                CustomValidators.creditCard
            ]),
            password: password,
            confirmPassword: confirmPassword,
            gender: new FormControl('', [
                Validators.required
            ]),
            agreed: new FormControl('', (control) => {
                const agreed = control.value;
                if (!agreed) {
                    return { agreed: true };
                }
                return null;
            })
        });
    }
};
BasicFormComponent = __decorate([
    Component({
        selector: 'app-basic-form',
        templateUrl: './basic-form.component.html',
        styleUrls: ['./basic-form.component.css']
    }),
    __metadata("design:paramtypes", [])
], BasicFormComponent);
export { BasicFormComponent };
//# sourceMappingURL=basic-form.component.js.map