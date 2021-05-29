import { AlertifyService } from './../../../shared/services/alertify.service';
import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { UserDropdownModel } from '../Models/app.UserDropdownModel';
import { AssignRemoveModel, RoleModel } from '../Models/adminModel';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Role',
  templateUrl: './Role.component.html',
  styleUrls: ['./Role.component.scss']
})
export class AssignRoleComponent implements OnInit {

  private _userservice;

  UserList: UserDropdownModel[];
  AssignRemoveModel: AssignRemoveModel = new AssignRemoveModel();
  RoleList: RoleModel[];

  errorMessage: any;
  output: any;
  constructor(private userservice: AdminService,
    private _Route: Router,
    private alertify: AlertifyService
  ) {
    this._userservice = userservice;
  }

  ngOnInit(): void {
    this._userservice.GetAllUsers().subscribe(
      allUsers => {
        this.UserList = allUsers
      },
      error => this.errorMessage = <any>error
    );

    this._userservice.GetAllRole().subscribe(
      allroles => {
        this.RoleList = allroles.filter(x => x.roleName != 'Admin')
      },
      error => this.errorMessage = <any>error
    );
  }


  onSubmit(buttonType): void {

    if (buttonType === "onAssign") {
      console.log(this.AssignRemoveModel);
      this._userservice.AssignRole(this.AssignRemoveModel).subscribe(
        response => {
          //this.output = response
          this.alertify.success('Role Add Successfully');
        }, error => {
          this.alertify.error(error);
        });
    }

    //if (buttonType === "onRemove") {
    //  this._userservice.RemoveRole(this.AssignRemoveModel).subscribe(
    //    response => {
    //      this.output = response
    //      if (this.output.StatusCode == "409") {
    //        alert('Role does not Exists');
    //      }
    //      else if (this.output.StatusCode == "200") {
    //        alert('Role Removed Successfully');
    //        this._Route.navigate(['/Assign/AllRole']);
    //      }
    //      else {
    //        alert('Something Went Wrong');
    //      }
    //    });
    //}

  }

}
