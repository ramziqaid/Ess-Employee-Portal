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
import { FormBuilder, Validators } from '@angular/forms';
import { CountryDB } from '../../../shared/inmemory-db/countries';
import { ShopService } from '../shop.service';
import { egretAnimations } from "../../../shared/animations/egret-animations";
let CheckoutComponent = class CheckoutComponent {
    constructor(fb, shopService) {
        this.fb = fb;
        this.shopService = shopService;
        this.vat = 15;
        this.shipping = 'Free';
        let countryDB = new CountryDB();
        this.countries = countryDB.countries;
    }
    ngOnInit() {
        this.getCart();
        this.buildCheckoutForm();
    }
    calculateCost() {
        this.subTotal = 0;
        this.cart.forEach(item => {
            this.subTotal += (item.product.price.sale * item.data.quantity);
        });
        this.total = this.subTotal + (this.subTotal * (15 / 100));
        if (this.shipping !== 'Free') {
            this.total += this.shipping;
        }
    }
    getCart() {
        this.shopService
            .getCart()
            .subscribe(cart => {
            this.cart = cart;
            this.calculateCost();
        });
    }
    buildCheckoutForm() {
        this.checkoutForm = this.fb.group({
            country: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            company: [],
            address1: ['', Validators.required],
            address2: [],
            city: ['', Validators.required],
            zip: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required]
        });
        this.checkoutFormAlt = this.fb.group({
            country: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            company: [],
            address1: ['', Validators.required],
            address2: [],
            city: ['', Validators.required],
            zip: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required]
        });
    }
    placeOrder() {
        let billingAddress = this.checkoutForm.value;
        let shippingAddress;
        if (this.hasAltAddress) {
            shippingAddress = this.checkoutFormAlt.value;
        }
        console.log(billingAddress, shippingAddress, this.paymentMethod);
    }
};
CheckoutComponent = __decorate([
    Component({
        selector: 'app-checkout',
        templateUrl: './checkout.component.html',
        styleUrls: ['./checkout.component.scss'],
        animations: egretAnimations
    }),
    __metadata("design:paramtypes", [FormBuilder,
        ShopService])
], CheckoutComponent);
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map