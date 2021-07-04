var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
let DragndropComponent = class DragndropComponent {
    constructor(dragulaService, cdr) {
        this.dragulaService = dragulaService;
        this.cdr = cdr;
        this.folders = [
            {
                name: 'Backups',
                updated: new Date('2/2/17'),
                color: 'primary'
            },
            {
                name: 'Payments',
                updated: new Date('2/2/17'),
                color: 'warn'
            },
            {
                name: 'Orders',
                updated: new Date('2/20/17'),
                color: 'accent'
            },
            {
                name: 'Photos',
                updated: new Date('1/2/17'),
                color: 'warn'
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/17'),
                color: 'primary'
            },
            {
                name: 'Work',
                updated: new Date('1/24/17'),
                color: 'accent'
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
        dragulaService.drag().subscribe((value) => {
            // console.log(`drag: ${value[0]}`);
            // console.log(value);
            this.cdr.markForCheck();
        });
        dragulaService.dragend().subscribe((value) => {
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
    }
};
DragndropComponent = __decorate([
    Component({
        selector: 'app-dragndrop',
        templateUrl: './dragndrop.component.html',
        styleUrls: ['./dragndrop.component.css'],
        providers: [DragulaService]
    }),
    __metadata("design:paramtypes", [DragulaService,
        ChangeDetectorRef])
], DragndropComponent);
export { DragndropComponent };
//# sourceMappingURL=dragndrop.component.js.map