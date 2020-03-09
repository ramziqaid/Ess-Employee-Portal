
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { flatMap, first, filter, map, catchError, shareReplay } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Employee, SystemCode } from '../../shared/_models';

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

    getSystemCode(): Observable<SystemCode[]> {
        return this.apiService.get(`SystemCode`).pipe();
    }

    getSystemCodeCategory(category: string): Observable<SystemCode[]> {
        return this.apiService.get(`SystemCode`).pipe(
            //flatMap(result => result), first(SystemCode => SystemCode.Category == Category)
            // filter(result => result.Category == Category)
            map(result => result.filter((result) => result.category == category)),
            catchError(this.handleError)
        );
    }

    getClient(): Observable<any[]> {
        return this.apiService.get("AXInfo/GetClient").pipe(shareReplay(),
            catchError(this.handleError));
    }


    getCurrentDate(): string {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
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
