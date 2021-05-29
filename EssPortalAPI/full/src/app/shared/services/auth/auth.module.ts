import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthGuardService } from './UserAuthGuardService';
import { AdminAuthGuardService } from './adminAuthGuardService';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AdminAuthGuardService,
    AuthGuard,
    UserAuthGuardService,
    AuthService],
  declarations: []
})
export class AuthModule { }
