import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { AdminService } from './../Services/admin.service';
import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { Employee } from '../../../Shared/_models';
import { ActivatedRoute, Router } from '@angular/router';
import { UserChangePasswordModel, UserModel } from '../Models/adminModel';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  updateForm: FormGroup;
  UserName: FormControl;
  oldPassword: FormControl;
  newPassword: FormControl;
  cpassword: FormControl;

  UserModel: UserModel = new UserModel();
  UserchangePasswordModel: UserChangePasswordModel = new UserChangePasswordModel();
  UserId: any;
  _authService: AuthService;

  unamePattern = "^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$";

  constructor(private fb: FormBuilder,
    private userService: AdminService,
    private alertify: AlertifyService,
    private _Route: Router,
    private authService: AuthService) {
    this._authService = authService;
  }

  ngOnInit() {

    this.UserId = this._authService.logginUserID();

    this.UserName = new FormControl('');
    this.oldPassword = new FormControl('', [Validators.required]);
    this.newPassword = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]);
    this.cpassword = new FormControl('', [Validators.required, this.MustMatch(this.newPassword)]);

    this.updateForm = this.fb.group(
      {
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
      this.userService.UpdateUserPassword(this.UserchangePasswordModel).subscribe(
        response => {
          this.alertify.success(' Password is Updated');
          this._Route.navigateByUrl("/dashboard");
        }, error => {
          this.alertify.error(error);
        });
    }
  }


  MustMatch(passwordControl: AbstractControl): ValidatorFn {
    return (cpasswordControl: AbstractControl): { [key: string]: boolean } | null => {
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

    }
  }

}
