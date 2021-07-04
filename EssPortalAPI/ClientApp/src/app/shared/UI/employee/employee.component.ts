 
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core'; 
import { FormControl, Validators, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from 'app/shared/models/common.model';
import { EssPortalService,  AuthService } from '../../../core';  
import {map, startWith} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'employeeList',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit, OnChanges {
  //empoyeeList: Employee[];
  employeeID: Number ;
  // employeeID: FormControl;

  @Input() empoyeeList:  Employee[];
  @Input() required: boolean = false;
  @Input() editMode: boolean = true;
  @Input() loadAllEmployee :boolean = false;
  @Input() labelName :string="EMPLOYEE";
  @Input() addAllText: boolean = false;
  @Input() employee: string = "";
  @Output() employeeSelect = new EventEmitter<Number>();

  myControl = new FormControl(); 
  patientCategory: FormGroup;
  constructor(private emp: EssPortalService,
    private fb: FormBuilder,
     private authService: AuthService) { 
      
      // this.patientCategory = this.fb.group({
      //   patientCategory: [null, Validators.required]
      // });

     }

  ngOnChanges(changes: SimpleChanges): void {    
    if(this.employee!=undefined && this.empoyeeList!=undefined){      
      if(this.empoyeeList.filter(c => c.employeeID == Number( this.employee)).length>0)
      {
        this.employeeID =Number( this.employee);  
            };
             // this.patientCategory.get('patientCategory').setValue(toSelect);
           } 
  }
   
  ngOnInit() {
   // this.getEmployees();  
  
     
  }

  // private _filter(value: string): string[] {
  //   if (value ) {
  //     return [];
  //   }
  //   const filterValue = value.toLowerCase();     
  //   return this.empoyeeList.filter(option => option.englishName.toLowerCase().indexOf(filterValue) === 0);
  // }

  // private _filter2(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  // }
  

  getEmployees() {
   
    var element =new Employee();
    element.employeeID=-1;
    element.personnelnumber="";
    element.englishName= "All";
    element.arabicName= "الكل";   
    if (this.loadAllEmployee) {
      this.emp.getEmployees().subscribe(
        result => {  
          this.empoyeeList = result;  
          if(this.addAllText){
            this.empoyeeList.unshift(element);
          } 
          this.ngOnChanges(undefined);
        },
        error => console.log(error)
      );
    } else {
      this.emp.getEmployeeByManagerId(this.authService.logginEmployeeId()).subscribe(
        result => {
          this.empoyeeList = result;  
          if(this.addAllText){
            this.empoyeeList.unshift(element);
          } 
          this.ngOnChanges(undefined);
        },
        error => console.log(error)
      );
    }
    
  }

  SelectEmoployee() { 
    //console.log(this.employeeID);
    this.employeeSelect.emit(this.employeeID);
  }

}
