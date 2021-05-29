import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private acct: AuthService, private _Route: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // debugger;
    // add authorization header with jwt token if available
    let currentuser = this.acct.isLoggesIn;
    let token = localStorage.getItem('jwtToken');

    if (currentuser && token !== undefined) {

      if (request.url !== undefined) {
        if (request.url.includes('api/Attachement')) {
          request = request.clone({
            setHeaders:
            {
              Authorization: `Bearer ${token}`
            }
          });
        }

        else {

          request = request.clone({
            setHeaders:
            {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
        }
      }
    }
    return next.handle(request).pipe(

      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:      //login
                this._Route.navigateByUrl("/login");
                break;
              case 403:     //forbidden
                this._Route.navigateByUrl("/unauthorized");
                break;
            }
          }
        } else {
          console.error("some thing else happened");
        }
        return throwError(error);

        // console.log(error);
        // confirm(error);
        // return throwError(error);
      })
    )

  }
}
