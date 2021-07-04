var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let SessionsModule = class SessionsModule {
};
SessionsModule = __decorate([
    NgModule({
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
            Signin2Component
        ]
    })
], SessionsModule);
export { SessionsModule };
//# sourceMappingURL=sessions.module.js.map