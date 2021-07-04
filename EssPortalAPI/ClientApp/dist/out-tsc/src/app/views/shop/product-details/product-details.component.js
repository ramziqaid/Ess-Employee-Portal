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
import { ActivatedRoute } from '@angular/router';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { ShopService } from '../shop.service';
import { MatSnackBar } from '@angular/material/snack-bar';
let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(shopService, route, snackBar) {
        this.shopService = shopService;
        this.route = route;
        this.snackBar = snackBar;
        this.quantity = 1;
        this.photoGallery = [{ url: '', state: '0' }];
    }
    ngOnInit() {
        this.productID = this.route.snapshot.params['id'];
        this.getProduct(this.productID);
        this.getCart();
        this.cartData = this.shopService.cartData;
    }
    ngOnDestroy() {
        this.productSub.unsubscribe();
    }
    getProduct(id) {
        this.productSub = this.shopService.getProductDetails(id)
            .subscribe(res => {
            this.product = res;
            this.initGallery(this.product);
        }, err => {
            this.product = {
                _id: '',
                name: '',
                price: { sale: 0 }
            };
        });
    }
    getCart() {
        this.shopService
            .getCart()
            .subscribe(cart => {
            this.cart = cart;
        });
    }
    addToCart() {
        let cartItem = {
            product: this.product,
            data: {
                quantity: this.quantity,
                options: {}
            }
        };
        this.shopService
            .addToCart(cartItem)
            .subscribe(res => {
            this.cart = res;
            this.quantity = 1;
            this.snackBar.open('Product added to cart', 'OK', { duration: 4000 });
        });
    }
    initGallery(product) {
        if (!product.gallery) {
            return;
        }
        this.photoGallery = product.gallery.map(i => {
            return {
                url: i,
                state: '0'
            };
        });
        if (this.photoGallery[0]) {
            this.photoGallery[0].state = '1';
        }
    }
    changeState(photo) {
        if (photo.state === '1') {
            return;
        }
        this.photoGallery = this.photoGallery.map(p => {
            if (photo.url === p.url) {
                setTimeout(() => {
                    p.state = '1';
                    return p;
                }, 290);
            }
            p.state = '0';
            return p;
        });
    }
};
ProductDetailsComponent = __decorate([
    Component({
        selector: 'app-product-details',
        templateUrl: './product-details.component.html',
        styleUrls: ['./product-details.component.scss'],
        animations: egretAnimations
    }),
    __metadata("design:paramtypes", [ShopService,
        ActivatedRoute,
        MatSnackBar])
], ProductDetailsComponent);
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map