
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,of, throwError } from 'rxjs';
import { flatMap, first, filter, map, catchError, shareReplay } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Employee, SystemCode } from '../../shared/models/common.model';
import * as _moment from 'moment';
@Injectable()
export class EssPortalService {

    private employee$: Observable<Employee[]>;

    constructor(private apiService: ApiService) { }

    getEmployees(): Observable<Employee[]> {
        if (!this.employee$) {
            this.employee$ = this.apiService.get(`Employee`).pipe();
        }
        return this.employee$;
    }

    // Get Employee by its ID
    getEmployeeById(employeeID: Number): Observable<Employee> {
        return this.apiService.get(`Employee/Get/${employeeID}`).pipe();
    }

    getEmployeeByManagerId(employeeID: Number): Observable<Employee[]> {
        return this.apiService.get(`Employee/GetByManager/${employeeID}`).pipe();
    }

    checkEmployeeIsManager(employeeID: Number): boolean {
        var employeeInfo: any;
        this.getEmployeeById(employeeID).subscribe(
            result => {
                employeeInfo = result;
                if (employeeInfo.filter(p => p.isManager == 1).length > 0) {
                    return true;
                }
            }
        );
        return false;
    }

    checkEmployeeIsHR(employeeID: Number): Observable<boolean> {        
        var ishr: string;
       return   this.apiService.get(`Employee/checkEmployeeIsHR/${employeeID}`)
        .pipe(
          map(result => { 
            ishr = result;
            if(ishr=="1") return    true;
            return    true;
          })
        ); 
    } 

    getSystemCode(): Observable<SystemCode[]> {
        return this.apiService.get(`SystemCode`).pipe();
    }

    getSystemCodeCategory(category: string): Observable<SystemCode[]> {
        return this.apiService.get(`SystemCode`).pipe(
            //flatMap(result => result), first(SystemCode => SystemCode.Category == Category)
            // filter(result => result.Category == Category)
            map(result => result.filter((result) => result.systemCodeType == category)),
            catchError(this.handleError)
        );
    }

    getClient(): Observable<any[]> {
        return this.apiService.get("AXInfo/GetClient").pipe(shareReplay(),
            catchError(this.handleError));
    }

    getVacationTypes(): Observable<any[]> {
        return this.apiService.get("AXInfo/GetVactionTyps").pipe(shareReplay(),
            catchError(this.handleError));
    }

    getLoanTypes(): Observable<any[]> {
        return this.apiService.get("AXInfo/GetLoanTypes").pipe(shareReplay(),
            catchError(this.handleError));
    }


    getLoansInfo(employeeid:number){
        return this.apiService.get(`AXInfo/GetLoansInfo/${employeeid}`).pipe(shareReplay(),
            catchError(this.handleError));
    }
 
    getAssestInfo(employeeid:number): Observable<any[]> {
        return this.apiService.get(`AXInfo/GetAssestInfo/${employeeid}`).pipe(shareReplay(),
            catchError(this.handleError));
    }

     
    getPaySlipInfo(employeeid:number): Observable<any[]> {
        return this.apiService.get(`AXInfo/GetPaySlipInfo/${employeeid}`).pipe(shareReplay(),
            catchError(this.handleError));
    } 
    
    getAttendeesInfo(obj:any): Observable<any[]> { 
        return this.apiService.post("AXInfo/GetAttendeesInfo",obj).pipe(shareReplay(),
            catchError(this.handleError));
        }
    
    getVacationBalanceInfo(obj:any): Observable<any[]> { 
        return this.apiService.post("AXInfo/GetVacationBalanceInfo",obj).pipe(shareReplay(),
            catchError(this.handleError));
        }
        
    getEmployeeVacationInfo(employeeid:number): Observable<any[]> {
        return this.apiService.get(`AXInfo/GetEmployeeVacationInfo/${employeeid}`).pipe(shareReplay(),
            catchError(this.handleError));
    }

    getPermissionInfo(obj:any): Observable<any[]> { 
        return this.apiService.post("Operation/GetPermissionInfo",obj).pipe(shareReplay(),
            catchError(this.handleError));
        }
   
        

    //#region "Date"   
    getCurrentDate(): string {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
        return '';
    }

    isCheckDateFormat(date: string): Boolean {
         
        if (date.length !== 10) {
            return false;
          //return 'Invalid input: Please input a string in the form of YYYY/MM/DD';
        } else {
          const da = date.split('/');
         
          if (da.length !== 3 || da[0].length !== 2 || da[1].length !== 2 || da[2].length !== 4) {
            return false;// 'Invalid input: Please input a string in the form of YYYY/MM/DD';
          } 
        //   else if (_moment(date).isValid()) {
        //     return false;// 'Invalid date: Please input a date no later than today';
        //   } else if (!_moment(date).isValid()) {
        //     return false;// 'Invalid date: Please input a date with a valid month and date.';
        //   }
          if(Number(da[0])<1 || Number(da[0])>31)return false;
          if(Number(da[1])<1 || Number(da[1])>12)return false;
          if(Number(da[2])<2000 || Number(da[2])>2050)return false;
        }
        return true;
      }

    currentLang():string{
        var dir=localStorage.getItem('dir');
        return (dir === "ltr"  ? "1": "2");
      }

      
    getRandomNumber():number{
       return -Math.floor((Math.random() * 100000) + 1) ;
      }
      


    private handleError(error: HttpErrorResponse) {

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            return throwError(error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error} `);
        }
        // return an observable with a user-facing error message
        return throwError(error);
    };
}
