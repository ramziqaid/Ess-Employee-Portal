import { ChangePasswordComponent } from './change-password/change-password.component';

import { AllAssignRoleComponent } from './AllRole/AllRole.component';
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
    children: [
      { path: 'User/Add', component: RegisterComponent },
      { path: 'User/Edit/:UserId', component: EditUserRegistrationComponent },
      { path: 'User/AllUser', component: ShowUsersComponent }
    ]
  },
  {
    path: 'ChangePassword',
    component: ChangePasswordComponent,
    data: {
      title: 'Setting Portal'
    }
  },
  {
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
    children: [
      { path: 'Role', component: AssignRoleComponent },
      { path: 'AllRole', component: AllAssignRoleComponent }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminAreaRoutesModule { }
