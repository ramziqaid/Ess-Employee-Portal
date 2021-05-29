import { Employee } from './../../models/common.model';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonService } from '@app/shared/services/common.service';
import { AuthService } from '@app/shared/services/auth/auth.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {


  empoyeeList: Employee[];
  employeeID: string = '0';
  // employeeID: FormControl;

  @Input() required: boolean = false;
  @Input() editMode: boolean = true;
  @Input() loadAllEmployee: boolean = true;
  @Input() labelName: string = "Employee";

  @Input() employee: string = "";
  @Output() employeeSelect = new EventEmitter<string>();

  constructor(private emp: CommonService, private auth: AuthService) { }

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
