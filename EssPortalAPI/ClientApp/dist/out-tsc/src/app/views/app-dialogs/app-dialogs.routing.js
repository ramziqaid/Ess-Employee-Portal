import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LoaderDialogComponent } from './loader-dialog/loader-dialog.component';
export const DialogsRoutes = [
    {
        path: '',
        children: [{
                path: 'confirm',
                component: ConfirmDialogComponent,
                data: { title: 'Confirm', breadcrumb: 'CONFIRM' },
            }, {
                path: 'loader',
                component: LoaderDialogComponent,
                data: { title: 'Loader', breadcrumb: 'LOADER' },
            }]
    }
];
//# sourceMappingURL=app-dialogs.routing.js.map