import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { AdminService } from '../Services/admin.service';
import * as XLSX from 'xlsx';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ShowUser',
  templateUrl: './ShowUser.component.html',
  styleUrls: ['./ShowUser.component.scss']
})
export class ShowUsersComponent implements OnInit { 
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['index','employeeNumber','employeeNameEn','userName','emailId','active','action'];
  dataSource: any; 

  constructor(
    private alertify: AlertifyService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.loadUsers(); 
   
  }
  ngAfterViewInit() {
   
  }
 
  loadUsers() {
    this.adminService.GetAllUsers().subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
       // debugger;
        //this.dtTrigger.next();
      },
      error => { this.alertify.error(error); }
    );
  }

  changeStatus(UserId: number, status: boolean) {
    debugger;
    this.adminService.UpdateUserStatus(UserId, status).subscribe(
      result => {
      },
      error => { this.alertify.error(error); }
    );
  }


  resetPassword(UserId: number) {
    this.adminService.ResetUserPassword(UserId).subscribe(
      result => {
        this.alertify.success("Password changed");
      },
      error => { this.alertify.error(error); }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ExportTOExcel() {
    debugger;
    // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    // /* save to file */
    // XLSX.writeFile(wb, 'Allusers.xlsx');
  }

}
