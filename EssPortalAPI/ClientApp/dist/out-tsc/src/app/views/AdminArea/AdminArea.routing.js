var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PermissionOperationComponent } from './permission-operation/permission-operation.component';
import { AdminAuthGuardService } from './../../auth/AdminAuthGuardService';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssignRoleComponent } from './Role/Role.component';
import { ShowUsersComponent } from './AllUser/ShowUser.component';
import { SettingComponent } from './Settings/Setting.component';
import { EditUserRegistrationComponent } from './EditUserRegistration/EditUserRegistration.component';
const routes = [
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
let AdminAreaRoutesModule = class AdminAreaRoutesModule {
};
AdminAreaRoutesModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AdminAreaRoutesModule);
export { AdminAreaRoutesModule };
//# sourceMappingURL=AdminArea.routing.js.map