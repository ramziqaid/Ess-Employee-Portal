var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AlertifyService, AuthService } from '../../../core';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../service/profile.service';
import { UserChangePasswordModel } from '../Model/profile.Model';
let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(fb, userService, alertify, _Route, authService) {
        this.fb = fb;
        this.userService = userService;
        this.alertify = alertify;
        this._Route = _Route;
        this.authService = authService;
        this.UserchangePasswordModel = new UserChangePasswordModel();
        this.unamePattern = "^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$";
        this._authService = authService;
    }
    ngOnInit() {
        this.UserId = this._authService.logginUserID();
        this.UserName = new FormControl('');
        this.oldPassword = new FormControl('', [Validators.required]);
        this.newPassword = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]);
        this.cpassword = new FormControl('', [Validators.required, this.MustMatch(this.newPassword)]);
        this.updateForm = this.fb.group({
            'UserName': this._authService.logginUserName(),
            'oldPassword': this.oldPassword,
            'newPassword': this.newPassword,
            'cpassword': this.cpassword,
        });
    }
    onSubmit() {
        if (this.updateForm.valid) {
            this.UserchangePasswordModel = Object.assign({}, this.updateForm.value);
            this.UserchangePasswordModel.userId = this.UserId;
            this.userService.UpdateUserPassword(this.UserchangePasswordModel).subscribe(response => {
                this.alertify.success(' Password is Updated');
                this._Route.navigateByUrl("/dashboard");
            }, error => {
                this.alertify.error(error);
            });
        }
    }
    MustMatch(passwordControl) {
        return (cpasswordControl) => {
            // return null if controls haven't initialised yet
            if (!passwordControl && !cpasswordControl) {
                return null;
            }
            // return null if another validator has already found an error on the matchingControl
            if (cpasswordControl.hasError && !passwordControl.hasError) {
                return null;
            }
            // set error on matchingControl if validation fails
            if (passwordControl.value !== cpasswordControl.value) {
                return { 'mustMatch': true };
            }
            else {
                return null;
            }
        };
    }
};
ChangePasswordComponent = __decorate([
    Component({
        selector: 'app-change-password',
        templateUrl: './change-password.component.html',
        styleUrls: ['./change-password.component.scss']
    }),
    __metadata("design:paramtypes", [FormBuilder,
        ProfileService,
        AlertifyService,
        Router,
        AuthService])
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map