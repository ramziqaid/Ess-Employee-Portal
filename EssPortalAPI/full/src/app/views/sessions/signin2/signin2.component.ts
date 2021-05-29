import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { LoginModel } from 'app/shared/models/common.model';
import { Router } from '@angular/router';
import { AlertifyService } from 'app/shared/services/alertify.service';
import { AuthService } from 'app/shared/services/auth/auth.service';

@Component({
  selector: 'app-signin2',
  templateUrl: './signin2.component.html',
  styleUrls: ['./signin2.component.scss']
})
export class Signin2Component implements OnInit {
  LoginModel: LoginModel = new LoginModel();
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _Route: Router,
    private alertify: AlertifyService,
    private _loginservice: AuthService) { }

  ngOnInit() {
    localStorage.clear();

    const username = new FormControl('username', Validators.required);
    const password = new FormControl('password', Validators.required);

    this.signupForm = this.fb.group(
      {
        username: username,
        password: password,
        //agreed: [false, Validators.required]
      }
    );
  }

  onSubmit() {
    if (!this.signupForm.invalid) {
      // do what you wnat with your data
      this.LoginModel = Object.assign({}, this.signupForm.value);
      this._loginservice.Login(this.LoginModel).subscribe(
        response => {
          if (response.Token == null && response.Usertype == "0") {

            this.alertify.error("Invalid Username Or Password");
            this._Route.navigate(['Login']);
          }
          let redirect = this._loginservice.redirectUrl ? this._Route.parseUrl(this._loginservice.redirectUrl) : '/dashboard/default';

          // Redirect the user
          this._Route.navigateByUrl(redirect);

        },
        error => {
          this.alertify.error(error.error);
        });
    }
  }
}
