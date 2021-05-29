
import { AppConfirmService } from './../../../shared/services/app-confirm/app-confirm.service';
import { AlertifyService } from './../../../shared/services/alertify.service';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminService } from '../Services/admin.service';
import { AssignRolesViewModel, AssignRemoveModel } from '../Models/adminModel';



@Component({
  selector: 'app-AllRole',
  templateUrl: './AllRole.component.html',
  styleUrls: ['./AllRole.component.scss']
})


export class AllAssignRoleComponent implements OnInit {

  items: AssignRolesViewModel[];
  AssignRemoveModel: AssignRemoveModel = new AssignRemoveModel();

  output: any;

  constructor(
    private alertify: AlertifyService,
    private adminService: AdminService,
    private confirmService: AppConfirmService
  ) { }

  ngOnInit() {
    this.loadAllRoles();
  }


  loadAllRoles() {
    this.adminService.GetAllAssignedRoles().subscribe(
      result => {
        this.items = result;
      },
      error => { this.alertify.error(error); }
    );
  }

  deleteItem(row): void {
    //this.alertify.confirm('Are you sure you want to delete this Role?', () => { 
    this.confirmService.confirm({ message: `Delete Role ${row.roleName}?` })
      .subscribe(res => {
        if (res) {
          this.AssignRemoveModel.roleId = row.roleId;
          this.AssignRemoveModel.userId = row.userId;
          this.adminService.RemoveRole(this.AssignRemoveModel).subscribe(
            response => {
              this.output = response
              if (this.output.StatusCode == "409") {
                this.alertify.error('Role does not Exists');
              }
              else if (this.output.StatusCode == "200") {
                this.alertify.success('Role Removed Successfully');
                this.adminService.GetAllAssignedRoles().subscribe(
                  result => {
                    this.items = result;
                  },
                  error => { this.alertify.error(error); }
                );
              }
              else {
                this.alertify.error('Something Went Wrong');
              }
            });
        }

      });
  }



}
