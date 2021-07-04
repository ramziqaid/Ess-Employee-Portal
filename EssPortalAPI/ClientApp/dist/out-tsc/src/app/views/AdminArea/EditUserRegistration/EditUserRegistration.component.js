var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AdminService } from '../Services/admin.service';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from '../../../core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../Models/adminModel';
let EditUserRegistrationComponent = class EditUserRegistrationComponent {
    constructor(fb, userService, alertify, router, _routeParams) {
        this.fb = fb;
        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
        this._routeParams = _routeParams;
        this.UserModel = new UserModel();
        this.unamePattern = "^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$";
    }
    ngOnInit() {
        this.UserId = this._routeParams.snapshot.params['UserId'];
        this.UserName = new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]);
        this.FullName = new FormControl('', [Validators.required]);
        this.Contactno = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]);
        this.Password = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]);
        this.cpassword = new FormControl('', [Validators.required, this.MustMatch(this.Password)]);
        this.EmailId = new FormControl('', [Validators.required, Validators.email]);
        this.Status = new FormControl('');
        this.employeeName = new FormControl('');
        this.updateForm = this.fb.group({
            'UserName': this.UserName,
            'FullName': this.FullName,
            'Contactno': this.Contactno,
            'Password': this.Password,
            'cpassword': this.cpassword,
            'EmailId': this.EmailId,
            'Status': this.Status,
            'employeeName': this.employeeName,
        });
        this.userService.GetUserId(this.UserId).subscribe(result => {
            this.UserModel = result;
            this.updateForm.setValue({
                employeeName: this.UserModel.employeeNameEn,
                UserName: this.UserModel.userName,
                FullName: this.UserModel.fullName,
                Contactno: this.UserModel.contactno,
                Password: '',
                cpassword: '',
                EmailId: this.UserModel.emailId,
                Status: this.UserModel.status,
            });
        }, error => console.log(error));
    }
    onSubmit() {
        if (this.updateForm.valid && this.cpassword.value == this.Password.value) {
            this.UserModel = Object.assign({}, this.updateForm.value);
            this.UserModel.userId = this.UserId;
            this.userService.UpdateUser(this.UserModel).subscribe(response => {
                this.alertify.success('Your Registration Was Update');
                this.router.navigate(['/AdminArea/User/AllUser']);
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
EditUserRegistrationComponent = __decorate([
    Component({
        selector: 'app-EditUserRegistration',
        templateUrl: './EditUserRegistration.component.html',
        styleUrls: ['./EditUserRegistration.component.scss']
    }),
    __metadata("design:paramtypes", [FormBuilder,
        AdminService,
        AlertifyService,
        Router,
        ActivatedRoute])
], EditUserRegistrationComponent);
export { EditUserRegistrationComponent };
//# sourceMappingURL=EditUserRegistration.component.js.map