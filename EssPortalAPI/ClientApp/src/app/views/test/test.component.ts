import { DatePickerComponent } from './date-picker/date-picker.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  _dateValue: string = "'12/02/2020'";
  valeu: string;
  valeu2: string;
  PatientUsername: string;
  type: string;
  @ViewChild('basicForm', { static: false }) basicForm: any;
  @ViewChild('ref', { static: false }) child: DatePickerComponent;
  @ViewChild('refTime', { static: false }) refTime: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  date: FormControl;
  onSubmit() {
    this.refTime;
    this.child.inputModel;
    if (this.basicForm.valid) {
      alert(moment(this.refTime.nativeElement).format("hh:mm a"));
    }
  }

  get name() {
    return this.basicForm.get('name') as FormControl
  }

}
