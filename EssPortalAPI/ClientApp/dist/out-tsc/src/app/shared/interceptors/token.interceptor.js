var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { JwtAuthService } from "../services/auth/jwt-auth.service";
let TokenInterceptor = class TokenInterceptor {
    constructor(jwtAuth) {
        this.jwtAuth = jwtAuth;
    }
    intercept(req, next) {
        var token = this.jwtAuth.token || this.jwtAuth.getJwtToken();
        var changedReq;
        if (token) {
            changedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                },
            });
        }
        else {
            changedReq = req;
        }
        return next.handle(changedReq);
    }
};
TokenInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtAuthService])
], TokenInterceptor);
export { TokenInterceptor };
//# sourceMappingURL=token.interceptor.js.map