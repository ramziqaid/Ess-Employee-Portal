var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AuthService } from './../../../core/services/auth.service';
import { AdminService } from '../Services/admin.service';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../Models/adminModel';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService, EssPortalService } from '../../../core';
let RegisterComponent = class RegisterComponent {
    constructor(fb, userService, authService, alertify, EssPortalService, _routeParams) {
        this.fb = fb;
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.EssPortalService = EssPortalService;
        this._routeParams = _routeParams;
        this.UserModel = new UserModel();
        this.unamePattern = "^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$";
        this.getEmployees();
    }
    ngOnInit() {
        this.UserName = new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]);
        this.FullName = new FormControl('', [Validators.required]);
        this.Contactno = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]);
        this.Password = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]);
        this.cpassword = new FormControl('', [Validators.required, this.MustMatch(this.Password)]);
        this.EmailId = new FormControl('', [Validators.required, Validators.email]);
        this.Status = new FormControl('');
        this.EmployeeID = new FormControl('', [Validators.required]);
        this.insertForm = this.fb.group({
            'UserName': this.UserName,
            'FullName': this.FullName,
            'Contactno': this.Contactno,
            'Password': this.Password,
            'cpassword': this.cpassword,
            'EmailId': this.EmailId,
            'Status': this.Status,
            'EmployeeID': this.EmployeeID,
        });
        this.insertForm.get("Status").setValue("True");
        this.Id = this._routeParams.snapshot.params['UserId'];
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
    getEmployees() {
        this.EssPortalService.getEmployees().subscribe(result => {
            this.empoyeeList = result;
        }, error => console.log(error));
        // forkJoin([this.EssPortalService.getEmployees(), this.EssPortalService.getClient()]).subscribe(results => {
        //   this.empoyeeList = results[0];
        //   this.client = results[1];
        //   for (let i = 0; i < this.client.length; i++) {
        //     let Employee2 = new Employee();
        //     Employee2.employeeID = this.client[i].ID;
        //     Employee2.arabicName = this.client[i].NameAR;
        //     Employee2.englishName = this.client[i].NameEN;
        //     this.empoyeeList.push(Employee2);
        //   }
        // }
        // )
    }
    onSubmit() {
        if (this.insertForm.valid) {
            this.UserModel = Object.assign({}, this.insertForm.value);
            this.userService.SaveUser(this.UserModel).subscribe(response => {
                this.alertify.success('Your Registration Was successful');
                this.insertForm.reset();
            }, error => {
                this.alertify.error(error);
            });
        }
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        AdminService,
        AuthService,
        AlertifyService,
        EssPortalService,
        ActivatedRoute])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map