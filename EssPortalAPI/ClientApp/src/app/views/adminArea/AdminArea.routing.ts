import { PermissionOperationComponent } from './permission-operation/permission-operation.component';
import { AdminAuthGuardService } from './../../auth/AdminAuthGuardService';
import { ChangePasswordComponent } from '../profile/change-password/change-password.component';  
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssignRoleComponent } from './Role/Role.component';
import { ShowUsersComponent } from './AllUser/ShowUser.component';
import { SettingComponent } from './Settings/Setting.component';
import { EditUserRegistrationComponent } from './EditUserRegistration/EditUserRegistration.component';

const routes: Routes = [
  {
    path: '',
    //component: RegisterComponent,
    // canActivate: [AuthGuard],
    canActivate: [AdminAuthGuardService],
    children: [
      { path: 'User/Add', component: RegisterComponent },
      { path: 'User/Edit/:UserId', component: EditUserRegistrationComponent },
      { path: 'User/AllUser', component: ShowUsersComponent }
    ]
  },
  {
    canActivate: [AdminAuthGuardService],
    path: 'Setting',
    component: SettingComponent,
    data: {
      title: 'Setting Portal'
    }
  },
  {
    path: 'Assign',
    // component: ShowUsersComponent,
    // canActivate: [AuthGuard],
    canActivate: [AdminAuthGuardService],
    children: [
      { path: 'Role', component: AssignRoleComponent },
      // { path: 'AllRole', component: AllAssignRoleComponent }
    ]
  }, 
  {
    canActivate: [AdminAuthGuardService],
    path: 'Permission',
    component: PermissionOperationComponent,
    data: {
      title: 'Permission'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminAreaRoutesModule { }
