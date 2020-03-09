import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminService } from '../Services/admin.service';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { AssignRolesViewModel, AssignRemoveModel } from '../Models/adminModel';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-AllRole',
  templateUrl: './AllRole.component.html',
  styleUrls: ['./AllRole.component.scss']
})
export class AllAssignRoleComponent implements OnInit {
  // Datatables Properties
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  data: AssignRolesViewModel[];
  AssignRemoveModel: AssignRemoveModel = new AssignRemoveModel();
  output: any;

  constructor(
    private alertify: AlertifyService,
    private adminService: AdminService,
    private chRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.loadAllRoles();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,
      order: [[0, 'desc']]
    };

  }


  loadAllRoles() {
    this.adminService.GetAllAssignedRoles().subscribe(
      result => {
        this.data = result;
        this.chRef.detectChanges();

        this.dtTrigger.next();
      },
      error => { this.alertify.error(error); }
    );
  }

  onSubmit(RoleId: number, UserId: number): void {
    this.alertify.confirm('Are you sure you want to delete this Role?', () => {
      this.AssignRemoveModel.roleId = RoleId;
      this.AssignRemoveModel.userId = UserId;
      this.adminService.RemoveRole(this.AssignRemoveModel).subscribe(
        response => {
          this.output = response
          if (this.output.StatusCode == "409") {
            this.alertify.error('Role does not Exists');
          }
          else if (this.output.StatusCode == "200") {
            alert('Role Removed Successfully');

            this.adminService.GetAllAssignedRoles().subscribe(
              result => {
                this.data = result;
              },
              error => { this.alertify.error(error); }
            );
            this.rerender();

          }
          else {
            alert('Something Went Wrong');
          }
        });
    });

  }

  // We will use this method to destroy old table and re-render new table
  @ViewChild(DataTableDirective, { static: true }) dtElement: DataTableDirective;

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first in the current context
      dtInstance.destroy();

      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

}
