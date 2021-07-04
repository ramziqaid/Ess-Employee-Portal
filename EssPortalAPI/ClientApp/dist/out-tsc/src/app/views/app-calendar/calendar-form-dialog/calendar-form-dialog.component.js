var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EgretCalendarEvent } from '../../../shared/models/event.model';
let CalendarFormDialogComponent = class CalendarFormDialogComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.event = data.event;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = this.event.title;
        }
        else {
            this.dialogTitle = 'Add Event';
            this.event = new EgretCalendarEvent({
                start: data.date,
                end: data.date
            });
        }
        // console.log(data);
        this.eventForm = this.buildEventForm(this.event);
    }
    ngOnInit() {
    }
    buildEventForm(event) {
        return new FormGroup({
            _id: new FormControl(event._id),
            title: new FormControl(event.title),
            start: new FormControl(event.start),
            end: new FormControl(event.end),
            allDay: new FormControl(event.allDay),
            color: this.formBuilder.group({
                primary: new FormControl(event.color.primary),
                secondary: new FormControl(event.color.secondary)
            }),
            meta: this.formBuilder.group({
                location: new FormControl(event.meta.location),
                notes: new FormControl(event.meta.notes)
            })
        });
    }
};
CalendarFormDialogComponent = __decorate([
    Component({
        selector: 'app-calendar-form-dialog',
        templateUrl: './calendar-form-dialog.component.html',
        styleUrls: ['./calendar-form-dialog.component.scss']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, FormBuilder])
], CalendarFormDialogComponent);
export { CalendarFormDialogComponent };
//# sourceMappingURL=calendar-form-dialog.component.js.map