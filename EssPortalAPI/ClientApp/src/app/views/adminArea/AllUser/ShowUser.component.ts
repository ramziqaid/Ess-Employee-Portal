import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { AdminService } from '../Services/admin.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ShowUser',
  templateUrl: './ShowUser.component.html',
  styleUrls: ['./ShowUser.component.scss']
})
export class ShowUsersComponent implements OnInit {
  // Datatables Properties
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild('TABLE', { static: false }) table: ElementRef;

  data: any[];


  constructor(
    private alertify: AlertifyService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.loadUsers();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,
      order: [[0, 'desc']]
    };

  }


  loadUsers() {
    this.adminService.GetAllUsers().subscribe(
      result => {
        this.data = result;
        this.dtTrigger.next();
      },
      error => { this.alertify.error(error); }
    );
  }

  changeStatus(UserId: number, status: boolean) {
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

  ExportTOExcel() {
    debugger;
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'Allusers.xlsx');
  }

}
