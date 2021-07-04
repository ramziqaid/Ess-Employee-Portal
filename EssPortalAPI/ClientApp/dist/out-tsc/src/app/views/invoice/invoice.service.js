var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let InvoiceService = class InvoiceService {
    constructor(http) {
        this.http = http;
    }
    getInvoiceList() {
        return this.http.get('/api/invoices/');
    }
    getInvoiceById(id) {
        return this.http.get('/api/invoices/' + id);
    }
    saveInvoice(invoice) {
        if (invoice.id) {
            return this.http.put('/api/invoices/' + invoice.id, invoice);
        }
        else {
            invoice.id = (Math.random() * 1000000000).toString();
            return this.http.post('/api/invoices/', invoice);
        }
    }
    deleteInvoice(id) {
        return this.http.delete('/api/invoices/' + id);
    }
};
InvoiceService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], InvoiceService);
export { InvoiceService };
//# sourceMappingURL=invoice.service.js.map