import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ErrorComponent } from "./error/error.component";
import { Signin2Component } from './signin2/signin2.component';
import { UserLogoutComponent } from './app.UserLogout.Component';
export const SessionsRoutes = [
    {
        path: "",
        children: [
            {
                path: "login",
                component: Signin2Component,
                data: { title: "Login" }
            },
            {
                path: "forgot-password",
                component: ForgotPasswordComponent,
                data: { title: "Forgot password" }
            },
            {
                path: "lockscreen",
                component: LockscreenComponent,
                data: { title: "Lockscreen" }
            },
            {
                path: "404",
                component: NotFoundComponent,
                data: { title: "Not Found" }
            },
            {
                path: "error",
                component: ErrorComponent,
                data: { title: "Error" }
            },
            {
                path: "access-denied",
                component: AccessDeniedComponent,
                data: { title: "access-denied" }
            },
            { path: 'UserLogout',
                component: UserLogoutComponent
            }
        ]
    }
];
//# sourceMappingURL=sessions.routing.js.map