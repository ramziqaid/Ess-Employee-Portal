import { HelpersService } from './services/helpers.service';
import { NotificationService } from './services/Notification.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
    CommonModule,
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ApiService,
    AlertifyService,
    AuthService,
    EssPortalService,
    HelpersService,
    JwtService,
    NotificationService,
    TranslateModule
  ],
  declarations: []
})
export class CoreModule { }
