import { Employee } from './../_models';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormControl, Validators, FormsModule } from '@angular/forms';
import { EssPortalService, AlertifyService, AuthService } from '../../core';


@Component({
  selector: 'employeeList',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empoyeeList: Employee[];
  employeeID: string = '0';
  // employeeID: FormControl;

  @Input() required: boolean = false;
  @Output() employeeSelect = new EventEmitter<string>();

  constructor(private emp: EssPortalService) { }

  ngOnInit() {

    this.getEmployees();

    //, [Validators.required]);

  }

  getEmployees() {

    this.emp.getEmployees().subscribe(
      result => {
        this.empoyeeList = result;
      },
      error => console.log(error)
    );
  }

  SelectEmoployee() {

    console.log(this.employeeID);
    this.employeeSelect.emit(this.employeeID);
  }

}
