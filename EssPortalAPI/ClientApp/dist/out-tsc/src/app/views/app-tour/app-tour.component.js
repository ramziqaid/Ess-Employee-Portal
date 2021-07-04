var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as hopscotch from 'hopscotch';
let AppTourComponent = class AppTourComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    ngOnInit() { }
    ngOnDestroy() {
        hopscotch.endTour(true);
    }
    /*
    ***** Tour Steps ****
    * You can supply tourSteps directly in hopscotch.startTour instead of
    * returning value by invoking tourSteps method,
    * but DOM query methods(querySelector, getElementsByTagName etc) will not work
    */
    tourSteps() {
        let self = this;
        return {
            id: 'demo-tour',
            showPrevButton: true,
            onEnd: function () {
                self.snackBar.open('User tour ended!', 'close', { duration: 3000 });
            },
            onClose: function () {
                self.snackBar.open('You just closed User Tour!', 'close', { duration: 3000 });
            },
            steps: [
                {
                    title: 'Step one',
                    content: 'This is step description.',
                    target: 'areaOne',
                    placement: 'left',
                    xOffset: 10
                },
                {
                    title: 'Define your steps',
                    content: 'This is step description.',
                    target: document.querySelector('#areaOne code'),
                    placement: 'left',
                    xOffset: 0,
                    yOffset: -10
                },
                {
                    title: 'Invoke startTour function',
                    content: 'This is step description.',
                    target: document.querySelector('#areaTwo code'),
                    placement: 'left',
                    xOffset: 15,
                    yOffset: -10
                }
            ]
        };
    }
    startTour() {
        // Destroy running tour
        hopscotch.endTour(true);
        // Initialize new tour 
        hopscotch.startTour(this.tourSteps());
    }
};
AppTourComponent = __decorate([
    Component({
        selector: 'app-app-tour',
        templateUrl: './app-tour.component.html',
        styleUrls: ['./app-tour.component.css']
    }),
    __metadata("design:paramtypes", [MatSnackBar])
], AppTourComponent);
export { AppTourComponent };
//# sourceMappingURL=app-tour.component.js.map