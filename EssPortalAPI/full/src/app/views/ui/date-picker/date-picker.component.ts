import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import * as moment from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

// tslint:disable-next-line:no-duplicate-imports 


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class DatePickerComponent implements OnInit {
  date: Date;
  @Input() label: string;
  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    if (this.inputModel == null) {
      this.date = new Date((new Date().getTime()));
    } else {
      this.inputModel = moment(this.inputModel).format("DD/MM/YYYY");
      this.date = new Date(this.inputModel);
    }
  }

  public OnDateChange(event): void {
    if (event == null) {
      this.inputModel = "";
      this.inputModelChange.emit(this.inputModel);
    }
    else {
      var d = new Date(event),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      var result = [day, month, year].join('/');
      this.inputModel = result;
      this.inputModelChange.emit(this.inputModel);
    }
  }


}
