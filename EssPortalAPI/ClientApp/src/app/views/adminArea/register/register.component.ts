import { AuthService } from './../../../core/services/auth.service';
import { AdminService } from '../Services/admin.service';
import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { UserModel } from '../Models/adminModel';
import { Employee } from './../../../shared/models/common.model';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AlertifyService, EssPortalService } from '../../../core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  insertForm: FormGroup;
  UserName: FormControl;
  FullName: FormControl;

  Contactno: FormControl;
  Password: FormControl;
  cpassword: FormControl;
  EmailId: FormControl;
  Status: FormControl;
  EmployeeID: FormControl;

  UserModel: UserModel = new UserModel();
  empoyeeList: Employee[];
  client: any[];
  Id: any;

  unamePattern = "^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$";

  constructor(private fb: FormBuilder,
    private userService: AdminService,
    private authService: AuthService,
    private alertify: AlertifyService,
    private EssPortalService: EssPortalService,
    private _routeParams: ActivatedRoute) {
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


    this.insertForm = this.fb.group(
      {
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

  getEmployees() {
    this.EssPortalService.getEmployees().subscribe(
      result => {
        this.empoyeeList = result;
      },
      error => console.log(error)
    );

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
      this.userService.SaveUser(this.UserModel).subscribe(
        response => {
          this.alertify.success('Your Registration Was successful');
          this.insertForm.reset();
        }, error => {
          this.alertify.error(error);
        });
    }

  }

}
