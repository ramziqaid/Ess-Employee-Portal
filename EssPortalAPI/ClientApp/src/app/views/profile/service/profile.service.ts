
import { ApiService } from './../../../core/services/api.service';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserChangePasswordModel } from '../Model/profile.Model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private apiService: ApiService) { }

public UpdateUserPassword(changeUserPassword: UserChangePasswordModel) {
  return this.apiService.put(`User/ChangePassword`, changeUserPassword)
    .pipe(
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
