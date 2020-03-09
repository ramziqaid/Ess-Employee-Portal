import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthGuardService } from './UserAuthGuardService';
import { AdminAuthGuardService } from './AdminAuthGuardService';
import { AuthGuard } from './AuthGuard';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AdminAuthGuardService,
    AuthGuard,
    UserAuthGuardService],
  declarations: []
})
export class AuthModule { }
