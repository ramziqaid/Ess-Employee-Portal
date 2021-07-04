import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthGuardService } from './UserAuthGuardService';
import { AdminAuthGuardService } from './AdminAuthGuardService';
 


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AdminAuthGuardService, 
    UserAuthGuardService],
  declarations: []
})
export class AuthModule { }
