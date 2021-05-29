import { TestComponent } from './views/test/test.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './auth/AuthGuard';
import { UserLogoutComponent } from './views/login/app.UserLogout.Component';
import { AccessDeniedComponent } from './views/error/access-denied/access-denied.component';
import { AdminAuthGuardService } from './auth/AdminAuthGuardService';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    canActivate: [AuthGuard],
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    data: {
      title: 'access-denied'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  { path: 'UserLogout', component: UserLogoutComponent },
  { path: 'test', component: TestComponent },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   canActivate: [AuthGuard],
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    runGuardsAndResolvers: 'always',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'Orders',
        loadChildren: () => import('./views/Orders/Orders.module').then(m => m.OrdersModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'Purchases',
        loadChildren: () => import('./views/purchases/purchases.module').then(m => m.PurchasesModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'PersonalInfo',
        loadChildren: () => import('./views/PersonalInfo/personalInfo.module').then(m => m.PersonalInfoModule),

      },
      {
        canActivate: [AdminAuthGuardService],
        path: 'AdminArea',
        loadChildren: () => import('./views/AdminArea/AdminArea.module').then(m => m.AdminAreaModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
