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
import { ShopService } from '../shop.service';
import { egretAnimations } from "../../../shared/animations/egret-animations";
let CartComponent = class CartComponent {
    constructor(shopService) {
        this.shopService = shopService;
        this.vat = 15;
    }
    ngOnInit() {
        this.getCart();
        this.onQuantityChange();
    }
    getCart() {
        this.shopService
            .getCart()
            .subscribe(cart => {
            this.cart = cart;
        });
    }
    removeProduct(cartItem) {
        this.shopService
            .removeFromCart(cartItem)
            .subscribe(res => {
            this.cart = res;
        });
    }
    onQuantityChange() {
        this.subTotal = 0;
        this.cart.forEach(item => {
            this.subTotal += (item.product.price.sale * item.data.quantity);
        });
        this.total = this.subTotal + (this.subTotal * (15 / 100));
    }
};
CartComponent = __decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.scss'],
        animations: [egretAnimations]
    }),
    __metadata("design:paramtypes", [ShopService])
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map