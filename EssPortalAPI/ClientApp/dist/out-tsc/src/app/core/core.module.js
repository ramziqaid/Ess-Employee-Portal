var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NotificationService } from './services/Notification.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService, AlertifyService, AuthService, EssPortalService, JwtService } from './services';
import { JwtInterceptor } from './_helpers/jwt.Interceptor';
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            ApiService,
            AlertifyService,
            AuthService,
            EssPortalService,
            JwtService,
            NotificationService,
            TranslateModule
        ],
        declarations: []
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map