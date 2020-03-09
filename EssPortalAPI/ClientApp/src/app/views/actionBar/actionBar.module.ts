import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from './actionBar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActionBarComponent],
  exports: [ActionBarComponent]
})
export class ActionBarModule { }
