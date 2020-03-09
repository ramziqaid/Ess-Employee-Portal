import { NotificationService } from './services/Notification.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService,
  AlertifyService,
  AuthService,
  EssPortalService,
  JwtService
} from './services';
import { JwtInterceptor } from './_helpers/jwt.Interceptor';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ApiService,
    AlertifyService,
    AuthService,
    EssPortalService,
    JwtService,
    NotificationService
  ],
  declarations: []
})
export class CoreModule { }
