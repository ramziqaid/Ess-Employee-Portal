import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { LoginModel } from '../Models/app.LoginModel';
import { Router } from '@angular/router';
import { NavigationService } from 'app/shared/services/navigation.service';
@Component({
  selector: 'app-signin2',
  templateUrl: './signin2.component.html',
  styleUrls: ['./signin2.component.scss']
})
export class Signin2Component implements OnInit {
  LoginModel: LoginModel = new LoginModel(); 
  signupForm: FormGroup; 
  hide = true;
  
  constructor(private fb: FormBuilder,
    private alertify: AlertifyService,
    private _loginservice: AuthService,
     private navService: NavigationService,
     private _Route: Router) { 
     
  }

  ngOnInit() {
    //localStorage.clear(); 
    this._loginservice.LogoutUser();
    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.signupForm = this.fb.group(
      {
        Username: ["",[Validators.required]],
        Password: password, 
      }
    );
  }

   

  onSubmit() {
    if (!this.signupForm.invalid) {
      this.LoginModel = Object.assign({}, this.signupForm.value);
      this.LoginModel.Token="";
      this.LoginModel.UserType=1;
      this._loginservice.Login(this.LoginModel).subscribe(
        response => {
          if (response.Token == null && response.Usertype == "0") {
            this.alertify.error("Invalid Username and Password");
            this._Route.navigate(['Login']);
          }
          let redirect = this._loginservice.redirectUrl ? this._Route.parseUrl(this._loginservice.redirectUrl) : '/dashboard/default';
          this.navService.generateMenu(); 
 
          // Redirect the user
          this._Route.navigateByUrl(redirect);
         
        },
        error => {
          this.alertify.error(error.error);
        });
    }   

  }
}
