var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
let HighlightFirstAutocompleteComponent = class HighlightFirstAutocompleteComponent {
    constructor() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
};
HighlightFirstAutocompleteComponent = __decorate([
    Component({
        selector: 'app-highlight-first-autocomplete',
        templateUrl: './highlight-first-autocomplete.component.html',
        styleUrls: ['./highlight-first-autocomplete.component.scss']
    })
], HighlightFirstAutocompleteComponent);
export { HighlightFirstAutocompleteComponent };
//# sourceMappingURL=highlight-first-autocomplete.component.js.map