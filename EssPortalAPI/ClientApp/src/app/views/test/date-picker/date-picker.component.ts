import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MatDatepickerInputEvent } from "@angular/material";
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
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
