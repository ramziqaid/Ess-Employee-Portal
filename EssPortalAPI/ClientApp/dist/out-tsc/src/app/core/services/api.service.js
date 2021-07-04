var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    formatErrors(error) {
        return throwError(error.error);
    }
    get(path, params = new HttpParams()) {
        while (path.includes('/undefined')) {
            path = path.replace('/undefined', '');
        }
        return this.http.get(`${environment.apiUrl}${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }
    put(path, body = {}) {
        return this.http.put(`${environment.apiUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }
    post(path, body = {}) {
        return this.http.post(`${environment.apiUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }
    delete(path) {
        return this.http.delete(`${environment.apiUrl}${path}`).pipe(catchError(this.formatErrors));
    }
};
ApiService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map