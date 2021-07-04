var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarEventDB } from '../../shared/inmemory-db/calendarEvents';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
let AppCalendarService = class AppCalendarService {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        // return this.http.get('api/calendar/events')
        // .map((events: CalendarEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        let eventDB = new CalendarEventDB();
        return of(eventDB.events).pipe(map((events) => {
            this.events = events;
            return events;
        }));
    }
    addEvent(event) {
        // return this.http.post('api/calendar/events', event)
        // .map((events: EgretCalendarEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        this.events.push(event);
        return of(this.events);
    }
    updateEvent(event) {
        // return this.http.put('api/calendar/events/'+event._id, event)
        // .map((events: EgretCalendarEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        this.events = this.events.map((e) => {
            if (e._id === event._id) {
                return Object.assign(e, event);
            }
            return e;
        });
        return of(this.events);
    }
    deleteEvent(eventID) {
        // return this.http.delete('api/calendar/events/'+eventID)
        // .map((events: EgretCalendarEvent[]) => {
        //   this.events = events;
        //   return events;
        // });
        this.events = this.events.filter((e) => e._id !== eventID);
        return of(this.events);
    }
};
AppCalendarService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], AppCalendarService);
export { AppCalendarService };
//# sourceMappingURL=app-calendar.service.js.map