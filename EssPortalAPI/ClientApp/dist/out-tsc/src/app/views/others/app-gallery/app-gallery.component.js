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
let AppGalleryComponent = class AppGalleryComponent {
    constructor() {
        this.photos = [{
                name: 'Photo 1',
                url: 'assets/images/sq-10.jpg'
            }, {
                name: 'Photo 2',
                url: 'assets/images/sq-16.jpg'
            }, {
                name: 'Photo 3',
                url: 'assets/images/sq-15.jpg'
            }, {
                name: 'Photo 4',
                url: 'assets/images/sq-17.jpg'
            }, {
                name: 'Photo 5',
                url: 'assets/images/sq-13.jpg'
            }, {
                name: 'Photo 6',
                url: 'assets/images/sq-12.jpg'
            }, {
                name: 'Photo 7',
                url: 'assets/images/sq-11.jpg'
            }, {
                name: 'Photo 8',
                url: 'assets/images/sq-10.jpg'
            }];
    }
    ngOnInit() {
    }
};
AppGalleryComponent = __decorate([
    Component({
        selector: 'app-gallery',
        templateUrl: './app-gallery.component.html',
        styleUrls: ['./app-gallery.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppGalleryComponent);
export { AppGalleryComponent };
//# sourceMappingURL=app-gallery.component.js.map