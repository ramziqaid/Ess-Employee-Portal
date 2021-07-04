import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from 'app/shared/shared-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component'; 
import { SessionsRoutes } from "./sessions.routing";
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component'; 
import { Signin2Component } from './signin2/signin2.component';
import { UserLogoutComponent } from './app.UserLogout.Component'; 

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    RouterModule.forChild(SessionsRoutes)
  ],
  declarations: [
    ForgotPasswordComponent, 
    LockscreenComponent,  
    NotFoundComponent, 
    AccessDeniedComponent,
    ErrorComponent,
    UserLogoutComponent, 
     Signin2Component]
})
export class SessionsModule { }