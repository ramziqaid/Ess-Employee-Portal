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
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { AlertifyService, AuthService } from '../../../core';
import { LoginModel } from '../Models/app.LoginModel';
import { Router } from '@angular/router';
import { NavigationService } from 'app/shared/services/navigation.service';
let Signin2Component = class Signin2Component {
    constructor(fb, alertify, _loginservice, navService, _Route) {
        this.fb = fb;
        this.alertify = alertify;
        this._loginservice = _loginservice;
        this.navService = navService;
        this._Route = _Route;
        this.LoginModel = new LoginModel();
        this.hide = true;
    }
    ngOnInit() {
        //localStorage.clear(); 
        this._loginservice.LogoutUser();
        const password = new FormControl('', Validators.required);
        const confirmPassword = new FormControl('', CustomValidators.equalTo(password));
        this.signupForm = this.fb.group({
            Username: ["", [Validators.required]],
            Password: password,
        });
    }
    onSubmit() {
        if (!this.signupForm.invalid) {
            this.LoginModel = Object.assign({}, this.signupForm.value);
            this.LoginModel.Token = "";
            this.LoginModel.UserType = 1;
            this._loginservice.Login(this.LoginModel).subscribe(response => {
                if (response.Token == null && response.Usertype == "0") {
                    this.alertify.error("Invalid Username and Password");
                    this._Route.navigate(['Login']);
                }
                let redirect = this._loginservice.redirectUrl ? this._Route.parseUrl(this._loginservice.redirectUrl) : '/dashboard/default';
                this.navService.generateMenu();
                // Redirect the user
                this._Route.navigateByUrl(redirect);
            }, error => {
                this.alertify.error(error.error);
            });
        }
    }
};
Signin2Component = __decorate([
    Component({
        selector: 'app-signin2',
        templateUrl: './signin2.component.html',
        styleUrls: ['./signin2.component.scss']
    }),
    __metadata("design:paramtypes", [FormBuilder,
        AlertifyService,
        AuthService,
        NavigationService,
        Router])
], Signin2Component);
export { Signin2Component };
//# sourceMappingURL=signin2.component.js.map