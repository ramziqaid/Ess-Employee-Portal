import { Injectable } from '@angular/core';
import { RequestType } from '../Models/Request';
import { Observable, throwError } from 'rxjs';

import { shareReplay, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requestType$: Observable<RequestType[]>;
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //#region load
  getRequestType(): Observable<RequestType[]> {
    if (!this.requestType$) {
      this.requestType$ = this.http.get<RequestType[]>(this.baseUrl + "RequestType").pipe(shareReplay());
    }
    return this.requestType$;
  }

  getAmendmentReasons(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "AmendmentsReason").pipe(shareReplay());
  }

  getRequestForManager(managerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}Requests/GetRequestForManager/${managerId}`).pipe(shareReplay(),
      catchError(this.handleError));
  }

  getRequestForEmployee(EmployeeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}Requests/GetRequestForEmployee/${EmployeeId}`).pipe();
  }

  getRequest(requestId: number) {
    return this.http.get<any[]>(`${this.baseUrl}Requests/${requestId}`).pipe(shareReplay());
  }
  //#endregion load


  saveRequest(request: any) {
    return this.http.post(this.baseUrl + "Requests/CreateOrder", request);
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
