 
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import * as shared from 'app/shared/models/common.model';
import * as enums from 'app/shared/enum.enum'; 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'; 
import { SystemCode } from 'app/shared/models/common.model'; 
import { Router } from '@angular/router';
import { EvaluationService } from '../Services/Evaluation.service';
import { EmployeeComponent } from 'app/shared/UI/employee/employee.component';

@Component({
  selector: 'app-evalList',
  templateUrl: './evalList.component.html',
  styleUrls: ['./evalList.component.scss']
})
export class EvalListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
  @ViewChild('employeeList') employeeList: EmployeeComponent;

  displayedColumns: string[] = ['index','number','employeeName','namePeriod','evaluationStauts','createdDate','action'];
  dataSource: any;  
  employeeID:number; 
  evalPeriodID:number;   
  empoyeeList: shared.Employee[]; 
  evalPeriod:any[];
  editMode: boolean = false;
  myOrder:string;
  isHRUser:boolean=false;

  constructor(
    private evalService: EvaluationService,
    private alertify: AlertifyService,
    private essService: EssPortalService,
    private router: Router,
    private authService: AuthService) { 
  }

  ngOnInit() {    
   this.loadEvalYear();
   this.myOrder="0";
   this.employeeID=this.authService.logginEmployeeId();
 
   this.essService.checkEmployeeIsHR(this.employeeID).subscribe(
    result => { 
      this.isHRUser=result;     
      if(this.isHRUser || this.authService.logginUserName()=='superadmin'){
        this.employeeList.loadAllEmployee=true;        
      } 
      this.employeeList.getEmployees();
    },
    //error => console.log(error)
  );    
  } 
  

  private loadEvalYear(){ 
    this.evalService.getEvalPeriodInfo().subscribe(
      result => {
        this.evalPeriod = result;
      },
      //error => console.log(error)
    ); 
  }

  onSubmit(){  
   // employeeID:this.authService.logginEmployeeId(), 
  this.evalService.searchEvaluationInfo(this.evalPeriodID,-1,
             (this.myOrder=="0"? this.authService.logginEmployeeId() :this.employeeID) ,
             (this.myOrder=="1"? this.authService.logginEmployeeId() :-1)
             ).subscribe(
      result => {  
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },    
      error => { this.alertify.error(error); }
      );

  }
  

 //#region  events

 employeeSelect(employeeID: any) {
  this.employeeID = employeeID;
} 

evalPeriodChange(ob) {
  this.evalPeriodID=ob.value;  
}

myOrderChange(ob) { 
  if(this.myOrder=="0"){ 
      this.employeeID=this.authService.logginEmployeeId();
  }else{
      this.employeeID=-1;
  }
 
}

//#endregion

}
