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
let MapComponent = class MapComponent {
    constructor() {
        this.zoom = 6;
        this.mapCenter = {
            lat: 23.806921,
            lng: 90.377078
        };
        this.polylinePoints = [
            { lat: 24.847916, lng: 89.369764 },
            { lat: 23.806921, lng: 90.377078 },
            { lat: 24.919298, lng: 91.831699 }
        ];
        this.circleMapRadius = 50000;
    }
    ngOnInit() {
    }
    circleMapRadiusChange(radius) {
        this.circleMapRadius = radius;
        // console.log(e)
    }
};
MapComponent = __decorate([
    Component({
        selector: 'app-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.css']
    }),
    __metadata("design:paramtypes", [])
], MapComponent);
export { MapComponent };
//# sourceMappingURL=map.component.js.map