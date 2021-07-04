var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderRoutingModule } from "./order-routing.module";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { OrderCostListComponent } from "./order-cost-list/order-cost-list.component";
import { SharedMaterialModule } from "app/shared/shared-material.module";
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    NgModule({
        declarations: [
            OrderListComponent,
            OrderDetailComponent,
            OrderCostListComponent
        ],
        imports: [CommonModule, SharedMaterialModule, OrderRoutingModule]
    })
], OrderModule);
export { OrderModule };
//# sourceMappingURL=order.module.js.map