var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
let DisplayValueAutocompleteComponent = class DisplayValueAutocompleteComponent {
    constructor() {
        this.myControl = new FormControl();
        this.options = [
            { name: 'Mary' },
            { name: 'Shelley' },
            { name: 'Igor' }
        ];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map((value) => typeof value === 'string' ? value : value.name), map(name => name ? this._filter(name) : this.options.slice()));
    }
    displayFn(user) {
        return user ? user.name : undefined;
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
};
DisplayValueAutocompleteComponent = __decorate([
    Component({
        selector: 'app-display-value-autocomplete',
        templateUrl: './display-value-autocomplete.component.html',
        styleUrls: ['./display-value-autocomplete.component.scss']
    })
], DisplayValueAutocompleteComponent);
export { DisplayValueAutocompleteComponent };
//# sourceMappingURL=display-value-autocomplete.component.js.map