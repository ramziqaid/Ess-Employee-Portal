import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SERVICES
import { ThemeService } from './services/theme.service';
import { NavigationService } from "./services/navigation.service";
import { RoutePartsService } from './services/route-parts.service';
import { AuthGuard } from './services/auth/auth.guard';
import { AppConfirmService } from './services/app-confirm/app-confirm.service';
import { AppLoaderService } from './services/app-loader/app-loader.service';

import { SharedComponentsModule } from './components/shared-components.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';
import { SharedDirectivesModule } from './directives/shared-directives.module';
import { JwtInterceptor } from './helpers/jwt.Interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { AuthModule } from './services/auth/auth.module';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedPipesModule,
    SharedDirectivesModule,
    AuthModule
  ],
  providers: [
    ThemeService,
    NavigationService,
    RoutePartsService,
    AppConfirmService,
    AppLoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    CommonService,
    ApiService,
    AlertifyService
  ],
  exports: [
    SharedComponentsModule,
    SharedPipesModule,
    SharedDirectivesModule,
    AuthModule
  ]
})
export class SharedModule { }
