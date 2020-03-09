
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personalInfo/personalInfo.component';
import { PersonalInfoRoutesModule } from './personalInfo.routing';
import { SharedModule } from './../../Shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProfileComponent } from './Profile/Profile.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PersonalInfoRoutesModule,
    FormsModule,
    TabsModule,

    SharedModule,
    AccordionModule.forRoot(),
  ],
  declarations: [PersonalInfoComponent, ProfileComponent]
})
export class PersonalInfoModule { }
