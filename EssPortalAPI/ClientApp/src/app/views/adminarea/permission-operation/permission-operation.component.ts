import { AuthService } from './../../../core/services/auth.service';
import { AlertifyService } from '../../../core/services/Alertify.service';
import { filter } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserDropdownModel } from '../Models/app.UserDropdownModel';
import { AssignRemoveModel, RoleModel } from '../Models/adminModel';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
 
@Component({
  selector: 'app-permission-operation',
  templateUrl: './permission-operation.component.html',
  styleUrls: ['./permission-operation.component.scss']
})
export class PermissionOperationComponent implements OnInit {

  @ViewChild('paginator1') paginator1: MatPaginator;
  @ViewChild(MatSort) sort1: MatSort;
   
 
  private _adminService; 
  UserList: UserDropdownModel[]; 
  RoleTypeList: RoleModel[];   
  DataSource1: any;   
  permission = { 
    operationPermissionID:  -1,
    operationID:  null as number, 
    roleId:  null as number 
  };
   
  
  displayedColumns1: string[] = ['index','operationName','active']; 

  errorMessage: any;
  output: any;
  constructor(
    private adminService: AdminService,
    private _Route: Router,
    private authService: AuthService,
    private alertify: AlertifyService
  ) {
    this._adminService = adminService; 
  }
 
  ngOnInit() {
    this.loadRolesType();
  }

  loadRolesType():void{
    this.adminService.GetAllRole().subscribe(
      result => { 
        this.RoleTypeList = result.filter(x => x.roleName.toUpperCase() != 'ADMIN')  
      },
      error => { this.alertify.error(error); }
    );
  }
 
  loadPermission():void{
    this.adminService.GetOperationWithPermission().subscribe(
      result => { 
        this.DataSource1 = result.filter(role => role.isNeedPermission == true 
          && (role.roleId==this.permission.roleId || role.roleId==-1 ));    
      },
      error => { this.alertify.error(error); }
    );
  }

  SelectRole():void{
    this.loadPermission();
  }

  changeStatus(OperationId: number, status: boolean):void {
    this.permission.operationID=OperationId;
    if(!status){
      this.adminService.DeletePermission(this.permission).subscribe(
        result => {
          this.loadPermission();
        },
        error => { this.alertify.error(error); }
      );
    }else{
      this.adminService.SavePermission(this.permission).subscribe(
        result => {
          this.loadPermission();
        },
        error => { this.alertify.error(error); }
      );
    }
    
  }

   
// SelectRole():void{

//   if(this.AssignRemoveModel.roleId!= undefined){
//     debugger;
//     var DataSource2=this.rolesDataSource.filter(role => role.roleId === this.AssignRemoveModel.roleId);
//     this.DataSource2 = new MatTableDataSource(DataSource2);
//     this.DataSource2.paginator = this.paginator2;
//     this.DataSource2.sort = this.sort2;
    
//     var DataSource1:UserDropdownModel[] = [];
//     for (let num of this.UserList ) {    
//       const found = DataSource2.filter(el => el.userId === num.userId); 
//       if (found.length==0)   DataSource1.push(num); 
//     }
//     this.DataSource1 = new MatTableDataSource(DataSource1);
//     this.DataSource1.paginator = this.paginator1;
//     this.DataSource1.sort = this.sort1;   
//     }
   
//     } 
// 
}
