var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppCalendarComponent } from './app-calendar.component';
import { CalendarRoutes } from "./app-calendar.routing";
import { CalendarFormDialogComponent } from './calendar-form-dialog/calendar-form-dialog.component';
import { AppCalendarService } from './app-calendar.service';
let AppCalendarModule = class AppCalendarModule {
};
AppCalendarModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            HttpClientModule,
            MatIconModule,
            MatDialogModule,
            MatButtonModule,
            MatCardModule,
            MatListModule,
            MatToolbarModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatInputModule,
            FlexLayoutModule,
            ColorPickerModule,
            CalendarModule.forRoot({
                provide: DateAdapter,
                useFactory: adapterFactory
            }),
            RouterModule.forChild(CalendarRoutes)
        ],
        providers: [AppCalendarService],
        // entryComponents: [CalendarFormDialogComponent],
        declarations: [
            AppCalendarComponent,
            CalendarFormDialogComponent
        ]
    })
], AppCalendarModule);
export { AppCalendarModule };
//# sourceMappingURL=app-calendar.module.js.map