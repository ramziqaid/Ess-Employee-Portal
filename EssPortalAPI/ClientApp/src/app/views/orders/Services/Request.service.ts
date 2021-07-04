import { ApiService } from './../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { RequestType } from '../Models/Request';
import { Observable, throwError } from 'rxjs';

import { shareReplay, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SystemCode } from 'app/shared/models/common.model';
import * as enums from 'app/shared/enum.enum';  

@Injectable()

export class RequestService {

  private requestType$: Observable<RequestType[]>;
  private baseUrl: string = environment.apiUrl;

  constructor(private apiService: ApiService) { }

  //#region load
  getRequestType(): Observable<RequestType[]> {
    if (!this.requestType$) {
      this.requestType$ = this.apiService.get("RequestType").pipe(shareReplay());
    }
    return this.requestType$;
  }

 
getSystemCode(SystemCodeType: enums.SystemCodeType): Observable<SystemCode[]> {
  return this.apiService.get("SystemCode").pipe(
    map(result => result.filter((result) => result.systemCodeType == SystemCodeType)),
    catchError(this.handleError)
  );
}


  getRequestList(request:any): Observable<any[]> { 
  return this.apiService.post("Requests/GetRequestList",request).pipe(shareReplay(),
      catchError(this.handleError));
  }
 
getNextPrivateNumber() {
    return this.apiService.get(`Requests/GetNextPrivateNumber`).pipe(shareReplay());
  }

getRequest(requestId: number) {
    return this.apiService.get(`Requests/${requestId}`).pipe(shareReplay());
  }

  getRequestStage(requestId: number) {
    return this.apiService.get(`Requests/GetOrderStage/${requestId}`).pipe(shareReplay());
  }
  //#endregion load


  saveRequest(request: any) {
    if (request.request.requestID == undefined || request.request.requestID <1) {
      return this.apiService.post("Requests/CreateOrder", request).pipe(
        catchError(this.handleError)
      );
    }
    else {
      return this.apiService.post("Requests/UpdateOrder", request).pipe(
        catchError(this.handleError)
      );
    }
  }

  approvalRequest(requestStage:any): Observable<any[]> 
    { 
    return this.apiService.post("Requests/ApprovalOrder",requestStage).pipe(shareReplay(),
        catchError(this.handleError));
    }
   
  deleteRequest(requestID: number) {
    return this.apiService.delete(`Requests/DeleteRequest/${requestID}`).pipe(
      catchError(this.handleError)
    );
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
