import { ApiService } from './../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import * as enums from 'app/shared/enum.enum';  
import { SystemCode } from 'app/shared/models/common.model';
import { map } from 'rxjs/operators';

@Injectable()

export class EvaluationService {

    constructor(private apiService: ApiService) 
    {
     }
     
 
getEvalPeriodInfo(): Observable<any[]> {
    return this.apiService.get(`AXInfo/GetEvalPeriod`).pipe(shareReplay(),
         catchError(this.handleError));
        }
    
getEvalCommunityInfo(): Observable<any[]> {
     return this.apiService.get(`AXInfo/GetEvalCommunity`).pipe(shareReplay(),
                 catchError(this.handleError));
                }

getEvalCommunityEmployeeInfo(employeeID:Number,evalCommunityID:Number): Observable<any[]> {
     return this.apiService.get(`Evaluation/GetEvalCommunityInfo/${employeeID}/${evalCommunityID}`)
     .pipe(shareReplay(),
      catchError(this.handleError));
              }

getEvalCharterCommunityInfo(employeeID:Number,evalPeriodID:Number,evalCommunityID:Number): Observable<any[]> {
          return this.apiService.get(`Evaluation/GetEvalCharterCommunityInfo/${employeeID}/${evalPeriodID}/${evalCommunityID}`)
          .pipe(shareReplay(),
           catchError(this.handleError));
            }

getEvalResultInfo(evaluationID:Number): Observable<any[]> {
              return this.apiService.get(`Evaluation/GetEvalResultInfo/${evaluationID}`)
              .pipe(shareReplay(),
               catchError(this.handleError));
                       }
         
searchEvaluationInfo(pEvalPeriodID:Number,pEvalCommunityID:Number,pEmployeeID:Number,pManagerID:Number): Observable<any[]> {
                   return this.apiService.get(`Evaluation/SearchEvaluationInfo/${pEvalPeriodID}/${pEvalCommunityID}/${pEmployeeID}/${pManagerID}`)
                   .pipe(shareReplay(),
                    catchError(this.handleError));
                     }

 getSystemCode(SystemCodeType: enums.SystemCodeType): Observable<SystemCode[]> {
  return this.apiService.get("SystemCode").pipe(
    map(result => result.filter((result) => result.systemCodeType == SystemCodeType)),
    catchError(this.handleError)
  );
}

insertEvaluation(obj: any) {
  return this.apiService.post("Evaluation/CreateEvaluation", obj).pipe(
    catchError(this.handleError)
  );
}

updateEvaluation(obj: any) {
  return this.apiService.post("Evaluation/UpdateEvaluation", obj).pipe(
    catchError(this.handleError)
  );
}

approveRejectEvaluation(obj: any) {
  return this.apiService.post("Evaluation/ApproveRejectEvaluation", obj).pipe(
    catchError(this.handleError)
  );
}

deleteEvaluation(evaluationID:Number) {
  return this.apiService.post(`Evaluation/DeleteEvaluation/${evaluationID}`).pipe(
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
