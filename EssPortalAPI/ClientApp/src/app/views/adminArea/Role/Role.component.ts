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
  selector: 'app-Role',
  templateUrl: './Role.component.html',
  styleUrls: ['./Role.component.scss']
})
export class AssignRoleComponent implements OnInit, AfterViewInit  {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('paginator1') paginator1: MatPaginator;
  @ViewChild(MatSort) sort1: MatSort;
  @ViewChild('paginator2') paginator2: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;
 
  private _adminService; 
  UserList: UserDropdownModel[];
  AssignRemoveModel: AssignRemoveModel = new AssignRemoveModel();
  RoleTypeList: RoleModel[]; 
  rolesDataSource: any;   
 
  DataSource2: any;   
  DataSource1: any;   
   
  
  displayedColumns1: string[] = ['index','employeeNumber','employeeNameEn','action'];
  displayedColumns2: string[] = ['index','fullName','userName','roleName','action'];

  errorMessage: any;
  output: any;
  constructor(
    private adminService: AdminService,
    private _Route: Router,
    private authService: AuthService,
    private alertify: AlertifyService
  ) {
    this._adminService = adminService;
    var fruits: string[] = ['Apple', 'Orange', 'Banana']; 
  }

  ngOnInit(): void { 
     
    this.loadRolesType();
    this.loadData();

    
  }
  ngAfterViewInit() { 
  
  }

  loadRolesType(){
    this._adminService.GetAllRole().subscribe(
      allroles => {
        this.RoleTypeList = allroles.filter(x => x.roleName.toUpperCase() != 'ADMIN')
      },
      error => this.errorMessage = <any>error
    );
  }

loadData(){

  forkJoin([this.adminService.GetAllUsers(), this.adminService.GetAllAssignedRoles()]).subscribe(data => {
   
    this.UserList=data[0];
    this.rolesDataSource=data[1];
    this.SelectRole();
    debugger;
  },
  error => { this.alertify.error(error); }
     );

}


  loadUser(){
    this._adminService.GetAllUsers().subscribe(
      allUsers => {
        this.UserList = allUsers;  
      },
      error => this.errorMessage = <any>error
    );
  }



  loadAllRoles() {
    this.adminService.GetAllAssignedRoles().subscribe(
      result => { 
        this.rolesDataSource = result;//.filter(role => role.userId === userId);    
      },
      error => { this.alertify.error(error); }
    );
  }

 
SelectRole():void{

if(this.AssignRemoveModel.roleId!= undefined){
  
  var DataSource2=this.rolesDataSource.filter(role => role.roleId === this.AssignRemoveModel.roleId);
  this.DataSource2 = new MatTableDataSource(DataSource2);
  this.DataSource2.paginator = this.paginator2;
  this.DataSource2.sort = this.sort2;
  
  var DataSource1:UserDropdownModel[] = [];
  for (let num of this.UserList ) {    
    const found = DataSource2.filter(el => el.userId === num.userId); 
    if (found.length==0)   DataSource1.push(num); 
  }
  this.DataSource1 = new MatTableDataSource(DataSource1);
  this.DataSource1.paginator = this.paginator1;
  this.DataSource1.sort = this.sort1;   
  }
 
  }

  viewValues:any;
  onAdd( UserId: number): void 
  {
    this.AssignRemoveModel.userId=UserId;
    this._adminService.AssignRole(this.AssignRemoveModel).subscribe(
      response => {
        //this.output = response
        this.alertify.success('Role Add Successfully'); 
        this.loadData();
      }, error => {
        this.alertify.error(error);
      }); 
  
  }

  onRemove(RoleId: number, UserId: number): void 
  {
    this.alertify.confirm('Are you sure you want to delete this Role?', () => {
      this.AssignRemoveModel.roleId = RoleId;
      this.AssignRemoveModel.userId = UserId;
      this.adminService.RemoveRole(this.AssignRemoveModel).subscribe(
        response => {
          this.output = response
          if (this.output.statusCode == "409") {
            this.alertify.error('Role does not Exists');
          }
          else if (this.output.statusCode == "200") { 
            this.alertify.success('Role Removed Successfully'); 
            this.loadData();
          }
          else {
            alert('Something Went Wrong');
          }
        });
    });

  }

}
