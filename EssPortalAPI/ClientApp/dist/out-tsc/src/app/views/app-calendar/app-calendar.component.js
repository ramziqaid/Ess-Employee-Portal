var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { isSameDay, isSameMonth } from 'date-fns';
import { egretAnimations } from '../../shared/animations/egret-animations';
import { EgretCalendarEvent } from '../../shared/models/event.model';
import { AppCalendarService } from './app-calendar.service';
import { CalendarFormDialogComponent } from './calendar-form-dialog/calendar-form-dialog.component';
import { AppConfirmService } from '../../shared/services/app-confirm/app-confirm.service';
let AppCalendarComponent = class AppCalendarComponent {
    constructor(dialog, calendarService, confirmService) {
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.confirmService = confirmService;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.refresh = new Subject();
        this.actions = [
            {
                label: '<i class="material-icons icon-sm">edit</i>',
                onClick: ({ event }) => {
                    this.handleEvent('edit', event);
                },
            },
            {
                label: '<i class="material-icons icon-sm">close</i>',
                onClick: ({ event }) => {
                    this.removeEvent(event);
                },
            },
        ];
    }
    ngOnInit() {
        this.loadEvents();
    }
    initEvents(events) {
        return events.map((event) => {
            event.actions = this.actions;
            return new EgretCalendarEvent(event);
        });
    }
    loadEvents() {
        this.calendarService.getEvents().subscribe((events) => {
            this.events = this.initEvents(events);
        });
    }
    removeEvent(event) {
        this.confirmService
            .confirm({
            title: 'Delete Event?',
        })
            .subscribe((res) => {
            if (!res) {
                return;
            }
            this.calendarService.deleteEvent(event._id).subscribe((events) => {
                this.events = this.initEvents(events);
                this.refresh.next();
            });
        });
    }
    addEvent() {
        this.dialogRef = this.dialog.open(CalendarFormDialogComponent, {
            panelClass: 'calendar-form-dialog',
            data: {
                action: 'add',
                date: new Date(),
            },
            width: '450px',
        });
        this.dialogRef.afterClosed().subscribe((res) => {
            if (!res) {
                return;
            }
            let dialogAction = res.action;
            let responseEvent = res.event;
            this.calendarService.addEvent(responseEvent).subscribe((events) => {
                this.events = this.initEvents(events);
                this.refresh.next(true);
            });
        });
    }
    handleEvent(action, event) {
        // console.log(event)
        this.dialogRef = this.dialog.open(CalendarFormDialogComponent, {
            panelClass: 'calendar-form-dialog',
            data: { event, action },
            width: '450px',
        });
        this.dialogRef.afterClosed().subscribe((res) => {
            if (!res) {
                return;
            }
            let dialogAction = res.action;
            let responseEvent = res.event;
            if (dialogAction === 'save') {
                this.calendarService.updateEvent(responseEvent).subscribe((events) => {
                    this.events = this.initEvents(events);
                    this.refresh.next();
                });
            }
            else if (dialogAction === 'delete') {
                this.removeEvent(event);
            }
        });
    }
    dayClicked({ date, events }) {
        if (isSameMonth(date, this.viewDate)) {
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        event.start = newStart;
        event.end = newEnd;
        this.calendarService.updateEvent(event).subscribe((events) => {
            this.events = this.initEvents(events);
            this.refresh.next();
        });
    }
};
AppCalendarComponent = __decorate([
    Component({
        selector: 'app-calendar',
        templateUrl: './app-calendar.component.html',
        styleUrls: ['./app-calendar.component.css'],
        animations: egretAnimations,
    }),
    __metadata("design:paramtypes", [MatDialog,
        AppCalendarService,
        AppConfirmService])
], AppCalendarComponent);
export { AppCalendarComponent };
//# sourceMappingURL=app-calendar.component.js.map