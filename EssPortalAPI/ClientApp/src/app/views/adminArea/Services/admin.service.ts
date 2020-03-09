import { ApiService } from './../../../core/services/api.service';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { UserModel, AssignRolesViewModel, RoleModel, AssignRemoveModel, UserChangePasswordModel } from '../Models/adminModel';


@Injectable()
export class AdminService {


  constructor(private apiService: ApiService) { }

  //#region load

  GetAllUsers(): Observable<UserModel[]> {
    return this.apiService.get("User").pipe(shareReplay(),
      catchError(this.handleError));
  }

  // Get MemberBy Id
  public GetUserId(Id) {
    return this.apiService.get(`User/${Id}`).pipe(shareReplay(),
      catchError(this.handleError)
    );
  }


  // Get All Users
  public GetAllAssignedRoles() {
    return this.apiService.get("AssignRoles").pipe(shareReplay(),
      catchError(this.handleError));
  }


  public GetAllRole() {
    return this.apiService.get("CreateRole").pipe(shareReplay(),
      catchError(this.handleError));
  }

  public GetPurchasesStageType() {
    return this.apiService.get(`PurchasesStageType`).pipe(shareReplay(),
      catchError(this.handleError));
  }



  // Save User
  public SaveUser(usermodel: UserModel) {
    return this.apiService.post(`User/register`, usermodel)
      .pipe(
        catchError(this.handleError)
      );
  }
  public AssignRole(assignmodel: AssignRemoveModel) {
    return this.apiService.post("AssignRoles", assignmodel).pipe(shareReplay(),
      catchError(this.handleError));
  }



  public UpdateUser(usermodel: UserModel) {
    return this.apiService.put(`User/${usermodel.userId}`, usermodel)
      .pipe(
        catchError(this.handleError)
      );
  }

  public UpdateUserStatus(userId: number, status: boolean) {
    return this.apiService.post(`User/${userId}/UpdateStauts/${status}`, {}).pipe(
      catchError(this.handleError)
    );
  }

  public UpdateUserPassword(changeUserPassword: UserChangePasswordModel) {
    return this.apiService.put(`User/ChangePassword`, changeUserPassword)
      .pipe(
        catchError(this.handleError)
      );
  }

  public ResetUserPassword(userId: number) {
    return this.apiService.put(`User/ResetPassword/${userId}`, {}).pipe(
      catchError(this.handleError)
    );
  }

  public UpdatePurchasesStageType(purchasesStageType: any) {
    return this.apiService.put(`PurchasesStageType`, purchasesStageType)
      .pipe(
        catchError(this.handleError)
      );
  }




  public RemoveRole(assignmodel: AssignRemoveModel) {
    return this.apiService.post("RemoveRole", assignmodel).pipe(shareReplay(),
      catchError(this.handleError));

  }
  public DeleteUser(Id) {
    return this.apiService.delete(`User/${Id}`)
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
