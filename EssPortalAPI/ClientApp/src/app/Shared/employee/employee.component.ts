import { Employee } from './../_models';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FormControl, Validators, FormsModule } from '@angular/forms';
import { EssPortalService, AlertifyService, AuthService } from '../../core';


@Component({
  selector: 'employeeList',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges {
  empoyeeList: Employee[];
  employeeID: string = '0';
  // employeeID: FormControl;

  @Input() required: boolean = false;
  @Input() editMode: boolean = true;
  @Input() loadAllEmployee: boolean = true;
  @Input() labelName: string = "Employee";

  @Input() employee: string = "";
  @Output() employeeSelect = new EventEmitter<string>();

  constructor(private emp: EssPortalService, private auth: AuthService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.employeeID = this.employee;
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    if (this.loadAllEmployee) {
      this.emp.getEmployees().subscribe(
        result => {
          this.empoyeeList = result;

        },
        error => console.log(error)
      );
    } else {
      this.emp.getEmployeeByManagerId(this.auth.userEmployeeId).subscribe(
        result => {
          this.empoyeeList = result;
        },
        error => console.log(error)
      );
    }

  }

  SelectEmoployee() {

    console.log(this.employeeID);
    this.employeeSelect.emit(this.employeeID);
  }

}
