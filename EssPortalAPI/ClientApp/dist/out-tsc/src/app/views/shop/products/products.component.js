var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShopService } from '../shop.service';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { egretAnimations } from '../../../shared/animations/egret-animations';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
let ProductsComponent = class ProductsComponent {
    constructor(shopService, fb, snackBar, loader) {
        this.shopService = shopService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.loader = loader;
        this.viewMode = 'grid-view';
        this.activeCategory = 'all';
    }
    ngOnInit() {
        this.categories$ = this.shopService.getCategories();
        this.buildFilterForm(this.shopService.initialFilters);
        setTimeout(() => {
            this.loader.open();
        });
        this.products$ = this.shopService
            .getFilteredProduct(this.filterForm)
            .pipe(map(products => {
            this.loader.close();
            return products;
        }));
        this.getCart();
        this.cartData = this.shopService.cartData;
    }
    ngOnDestroy() {
    }
    getCart() {
        this.shopService
            .getCart()
            .subscribe(cart => {
            this.cart = cart;
        });
    }
    addToCart(product) {
        let cartItem = {
            product: product,
            data: {
                quantity: 1
            }
        };
        this.shopService
            .addToCart(cartItem)
            .subscribe(cart => {
            this.cart = cart;
            this.snackBar.open('Product added to cart', 'OK', { duration: 4000 });
        });
    }
    buildFilterForm(filterData = {}) {
        this.filterForm = this.fb.group({
            search: [''],
            category: ['all'],
            minPrice: [filterData.minPrice],
            maxPrice: [filterData.maxPrice],
            minRating: [filterData.minRating],
            maxRating: [filterData.maxRating]
        });
    }
    setActiveCategory(category) {
        this.activeCategory = category;
        this.filterForm.controls['category'].setValue(category);
    }
    toggleSideNav() {
        this.sideNav.opened = !this.sideNav.opened;
    }
};
__decorate([
    ViewChild(MatSidenav),
    __metadata("design:type", MatSidenav)
], ProductsComponent.prototype, "sideNav", void 0);
ProductsComponent = __decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.scss'],
        animations: [egretAnimations]
    }),
    __metadata("design:paramtypes", [ShopService,
        FormBuilder,
        MatSnackBar,
        AppLoaderService])
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map