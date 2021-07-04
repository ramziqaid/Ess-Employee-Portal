var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { throwError as observableThrowError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductDB } from '../../shared/inmemory-db/products';
import { of, combineLatest } from 'rxjs';
import { startWith, debounceTime, delay, map, switchMap } from 'rxjs/operators';
let ShopService = class ShopService {
    constructor() {
        this.products = [];
        this.initialFilters = {
            minPrice: 10,
            maxPrice: 40,
            minRating: 1,
            maxRating: 5
        };
        this.cart = [];
        this.cartData = {
            itemCount: 0
        };
    }
    getCart() {
        return of(this.cart);
    }
    addToCart(cartItem) {
        let index = -1;
        this.cart.forEach((item, i) => {
            if (item.product._id === cartItem.product._id) {
                index = i;
            }
        });
        if (index !== -1) {
            this.cart[index].data.quantity += cartItem.data.quantity;
            this.updateCount();
            return of(this.cart);
        }
        else {
            this.cart.push(cartItem);
            this.updateCount();
            return of(this.cart);
        }
    }
    updateCount() {
        this.cartData.itemCount = 0;
        this.cart.forEach(item => {
            this.cartData.itemCount += item.data.quantity;
        });
    }
    removeFromCart(cartItem) {
        this.cart = this.cart.filter(item => {
            if (item.product._id == cartItem.product._id) {
                return false;
            }
            return true;
        });
        this.updateCount();
        return of(this.cart);
    }
    getProducts() {
        let productDB = new ProductDB();
        return of(productDB.products)
            .pipe(delay(500), map((data) => {
            this.products = data;
            return data;
        }));
    }
    getProductDetails(productID) {
        let productDB = new ProductDB();
        let product = productDB.products.filter(p => p._id === productID)[0];
        if (!product) {
            return observableThrowError(new Error('Product not found!'));
        }
        return of(product);
    }
    getCategories() {
        let categories = ['speaker', 'headphone', 'watch', 'phone'];
        return of(categories);
    }
    getFilteredProduct(filterForm) {
        return combineLatest(this.getProducts(), filterForm.valueChanges
            .pipe(startWith(this.initialFilters), debounceTime(400)))
            .pipe(switchMap(([products, filterData]) => {
            return this.filterProducts(products, filterData);
        }));
    }
    /*
    * If your data set is too big this may raise performance issue.
    * You should implement server side filtering instead.
    */
    filterProducts(products, filterData) {
        let filteredProducts = products.filter(p => {
            let isMatch;
            let match = {
                search: false,
                caterory: false,
                price: false,
                rating: false
            };
            // Search
            if (!filterData.search
                || p.name.toLowerCase().indexOf(filterData.search.toLowerCase()) > -1
                || p.description.indexOf(filterData.search) > -1
                || p.tags.indexOf(filterData.search) > -1) {
                match.search = true;
            }
            else {
                match.search = false;
            }
            // Category filter
            if (filterData.category === p.category
                || !filterData.category
                || filterData.category === 'all') {
                match.caterory = true;
            }
            else {
                match.caterory = false;
            }
            // Price filter
            if (p.price.sale >= filterData.minPrice
                && p.price.sale <= filterData.maxPrice) {
                match.price = true;
            }
            else {
                match.price = false;
            }
            // Rating filter
            if (p.ratings.rating >= filterData.minRating
                && p.ratings.rating <= filterData.maxRating) {
                match.rating = true;
            }
            else {
                match.rating = false;
            }
            for (let m in match) {
                if (!match[m])
                    return false;
            }
            return true;
        });
        return of(filteredProducts);
    }
};
ShopService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ShopService);
export { ShopService };
//# sourceMappingURL=shop.service.js.map