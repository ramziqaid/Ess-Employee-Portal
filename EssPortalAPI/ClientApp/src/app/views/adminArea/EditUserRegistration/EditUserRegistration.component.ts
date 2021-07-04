import { Employee } from './../../../shared/models/common.model';
import { AdminService } from '../Services/admin.service';
import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { EssPortalService, AlertifyService, AuthService } from '../../../core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../Models/adminModel';

@Component({
  selector: 'app-EditUserRegistration',
  templateUrl: './EditUserRegistration.component.html',
  styleUrls: ['./EditUserRegistration.component.scss']
})
export class EditUserRegistrationComponent implements OnInit {

  updateForm: FormGroup;
  UserName: FormControl;
  FullName: FormControl;

  Contactno: FormControl;
  Password: FormControl;
  cpassword: FormControl;
  EmailId: FormControl;
  Status: FormControl;
  employeeName: FormControl;

  UserModel: UserModel = new UserModel();
  empoyeeList: Employee[];
  UserId: number;

  unamePattern = "^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$";

  constructor(private fb: FormBuilder,
    private userService: AdminService,
    private alertify: AlertifyService,
    private router: Router,
    private _routeParams: ActivatedRoute) {
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

    this.updateForm = this.fb.group(
      {
        'UserName': this.UserName,
        'FullName': this.FullName,
        'Contactno': this.Contactno,
        'Password': this.Password,
        'cpassword': this.cpassword,
        'EmailId': this.EmailId,
        'Status': this.Status,
        'employeeName': this.employeeName,
      });

    this.userService.GetUserId(this.UserId).subscribe(
      result => {
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
      },
      error => console.log(error)
    );

  }

  onSubmit() {
    if (this.updateForm.valid && this.cpassword.value ==this.Password.value) {
      this.UserModel = Object.assign({}, this.updateForm.value); 
      this.UserModel.userId = this.UserId;
      this.userService.UpdateUser(this.UserModel).subscribe(
        response => {
          this.alertify.success('Your Registration Was Update');
          this.router.navigate(['/AdminArea/User/AllUser']);
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
