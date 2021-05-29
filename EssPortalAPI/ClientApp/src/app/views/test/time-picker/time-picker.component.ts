import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, DoCheck } from '@angular/core';
import { ThemePalette } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  /* Override the label of the ok button. */
  @Input() okLabel = 'Ok';

  /* Override the label of the cancel button. */
  @Input() cancelLabel = 'Cancel';

  /* Sets the clock mode, 12-hour or 24-hour clocks are supported. */
  @Input() mode: '12h' | '24h' = '24h';

  /* Disable the timepicker control */
  @Input() disabled = false;

  /* Set the color of the timepicker control */
  @Input() color: ThemePalette = 'primary';

  /* Set the value of the timepicker control (default is current time) */
  @Input() value: Date = new Date();

  /* Wrapper the input with MaterialFormField */
  @Input() withFormField = false;

  /* Placeholder for the time input */
  @Input() placeholder: string = null;

  /* Minimum time to pick from */
  @Input() minDate: Date;

  /* Maximum time to pick from */
  @Input() maxDate: Date;

  /* Add material clock icon to the left */
  @Input() withIcon = false;

  /* Material clock icon color */
  @Input() iconColor: ThemePalette

  /* Disables the dialog open when clicking the input field */
  @Input() disableDialogOpenOnInputClick = false;

  /* Disables the dialog open when clicking the icon if there is one */
  @Input() disableDialogOpenOnIconClick = false;

  @Input() label: string;
  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();
  @ViewChild('refTime', { static: false }) refTime: ElementRef;
  constructor() { }
  ngDoCheck() {
    // check for object mutation 
    if (this.refTime != undefined) {
      this.inputModel = moment(this.refTime.nativeElement).format("hh:mm a");
    }

  }


  ngOnInit() {
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

  get getvalue() {
    this.inputModel = moment(this.refTime.nativeElement).format("DD/MM/YYYY hh:mm a");
    return this.inputModel;
  }
  get minValue() {
    const val = new Date();
    val.setHours(6);
    val.setMinutes(10);
    return val;
  }

  get maxValue() {
    const val = new Date();
    val.setHours(18);
    val.setMinutes(10);
    return val;
  }

}
