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
import { RequestService } from '../Services/Request.service';
let OrderDashBoardComponent = class OrderDashBoardComponent {
    constructor(requestService) {
        this.requestService = requestService;
    }
    ngOnInit() {
        this.loadRequestType();
    }
    loadRequestType() {
        this.requestService.getRequestType().subscribe(result => {
            this.requestType = result;
            this.General = this.requestType.filter(p => p.requestGroupID == 1 && p.isActive);
            this.Government = this.requestType.filter(p => p.requestGroupID == 2 && p.isActive);
            this.Letters = this.requestType.filter(p => p.requestGroupID == 3 && p.isActive);
        }, error => console.log(error));
    }
};
OrderDashBoardComponent = __decorate([
    Component({
        selector: 'app-orderDashBoard',
        templateUrl: './orderDashBoard.component.html',
        styleUrls: ['./orderDashBoard.component.scss']
    }),
    __metadata("design:paramtypes", [RequestService])
], OrderDashBoardComponent);
export { OrderDashBoardComponent };
//# sourceMappingURL=orderDashBoard.component.js.map