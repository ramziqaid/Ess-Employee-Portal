// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DashBoardService {

// constructor() { }

// }

import { ApiService } from './../../../core/services/api.service';
import { Injectable } from '@angular/core'; 
import { Observable, throwError } from 'rxjs'; 
import { shareReplay, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SystemCode } from 'app/shared/models/common.model';
import * as enums from 'app/shared/enum.enum';  

@Injectable()

export class DashBoardService {
 
  private baseUrl: string = environment.apiUrl;

  constructor(private apiService: ApiService) { }

  //#region load
 
 
getSystemCode(SystemCodeType: enums.SystemCodeType): Observable<SystemCode[]> {
  return this.apiService.get("SystemCode").pipe(
    map(result => result.filter((result) => result.systemCodeType == SystemCodeType)),
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
