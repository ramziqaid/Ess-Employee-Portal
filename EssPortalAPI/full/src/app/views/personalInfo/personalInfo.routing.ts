import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './personalInfo/personalInfo.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './Profile/Profile.component';


const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Info'
    },
    children: [
      {
        path: '',
        redirectTo: 'Info'
      },
      {
        path: 'Info',
        component: PersonalInfoComponent,
        data: {
          title: 'Personal Information'
        }
      },
      {
        path: 'Profile',
        component: ProfileComponent,
        data: {
          title: 'Profile'
        }
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalInfoRoutesModule { }