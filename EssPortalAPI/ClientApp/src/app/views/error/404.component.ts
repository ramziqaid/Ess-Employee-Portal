import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  templateUrl: '404.component.html'
})
export class P404Component {

  constructor(private _location: Location, private _Route: Router) { }

  backClicked() {
    this._Route.navigateByUrl("/dashboard");
  }

}
