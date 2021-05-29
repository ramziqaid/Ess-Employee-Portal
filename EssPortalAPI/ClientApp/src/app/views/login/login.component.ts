import { EssPortalService, AlertifyService, AuthService } from '../../core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './Models/app.LoginModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginModel: LoginModel = new LoginModel(); 
  
  ngOnInit(): void {
    localStorage.clear();
  }
  private _loginservice;
  output: any;

  actionButtonLabel: string = 'Retry';
  action: boolean = false;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  // verticalPosition: MatSnackBarVerticalPosition = 'top';
  // horizontalPosition: MatSnackBarHorizontalPosition = 'center';


  constructor(private _Route: Router,
    private alertify: AlertifyService,
    // public snackBar: MatSnackBar,
    loginservice: AuthService) {
    this._loginservice = loginservice;
    
  }

  onSubmit() {

    this._loginservice.Login(this.LoginModel).subscribe(
      response => {
        if (response.Token == null && response.Usertype == "0") {

          // let config = new MatSnackBarConfig();
          // config.duration = this.setAutoHide ? this.autoHide : 0;
          // config.verticalPosition = this.verticalPosition;
          // this.snackBar.open("Invalid Username and Password", this.action ? this.actionButtonLabel : undefined, config);

          this.alertify.error("Invalid Username and Password");
          this._Route.navigate(['Login']);
        }
        let redirect = this._loginservice.redirectUrl ? this._Route.parseUrl(this._loginservice.redirectUrl) : '/dashboard';

        // Redirect the user
        this._Route.navigateByUrl(redirect);
        // this._Route.navigate(['dashboard']);

        // if (response.Usertype == "1") {
        //     let config = new MatSnackBarConfig();
        //     config.duration = this.setAutoHide ? this.autoHide : 0;
        //     config.verticalPosition = this.verticalPosition;

        //     this.snackBar.open("Logged in Successfully", this.action ? this.actionButtonLabel : undefined, config);

        //     this._Route.navigate(['/Admin/Dashboard']);
        // }

        // if (response.Usertype == "2") {
        //     let config = new MatSnackBarConfig();
        //     config.duration = this.setAutoHide ? this.autoHide : 0;
        //     config.verticalPosition = this.verticalPosition;

        //     this.snackBar.open("Logged in Successfully", this.action ? this.actionButtonLabel : undefined, config);
        //     this._Route.navigate(['/User/Dashboard']);
        // }
      },
      error => {
        this.alertify.error(error.error);
      });

  }
}

 