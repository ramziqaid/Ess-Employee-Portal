import { AuthService } from './../../../shared/services/auth/auth.service';
import { AlertifyService } from './../../../shared/services/alertify.service';

import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';

@Component({
  selector: 'app-personalInfo',
  templateUrl: './personalInfo.component.html',
  styleUrls: ['./personalInfo.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  employeeInfo: any;
  personnelnumbers: string = "personnelnumbera";
  constructor(private emp: CommonService,
    private alertify: AlertifyService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loadEmployeeInfo();
  }


  loadEmployeeInfo() {
    this.emp.getEmployeeById(this.auth.userEmployeeId).subscribe(
      result => {
        this.employeeInfo = result;
      },
      error => { this.alertify.error(error); }
    );
  }
  get diagnostic() { return JSON.stringify(this.employeeInfo); }
}
