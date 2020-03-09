import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { AdminAreaRoutesModule } from './AdminArea.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AssignRoleComponent } from './Role/Role.component';
import { AllAssignRoleComponent } from './AllRole/AllRole.component';
import { SettingComponent } from './Settings/Setting.component';
import { ShowUsersComponent } from './AllUser/ShowUser.component';
import { EditUserRegistrationComponent } from './EditUserRegistration/EditUserRegistration.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { AdminService } from './Services/admin.service';

@NgModule({
  imports: [
    CommonModule,
    AdminAreaRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatStepperModule,
    MatInputModule
  ],
  declarations: [
    ShowUsersComponent,
    SettingComponent,
    RegisterComponent,
    EditUserRegistrationComponent,
    AssignRoleComponent,
    AllAssignRoleComponent,
    ChangePasswordComponent,

  ],
  providers: [AdminService]

}
)
export class AdminAreaModule { }
