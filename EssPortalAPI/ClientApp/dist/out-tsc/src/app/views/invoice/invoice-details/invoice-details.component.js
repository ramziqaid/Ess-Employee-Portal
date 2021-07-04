var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let InvoiceDetailsComponent = class InvoiceDetailsComponent {
    constructor(fb, route, router, invoiceService, cdr, document) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.invoiceService = invoiceService;
        this.cdr = cdr;
        this.document = document;
        this.cost = 0;
        this.vat = 0;
        this.currency = '$';
        this.showEditOption = false;
        this.isLoading = false;
        this.invoice = {
            item: []
        };
        this.emptyFormObject = {
            name: '',
            price: null,
            unit: null
        };
        this.itemTableColumn = [
            'Number',
            'Item Name',
            'Unit Price',
            'Unit',
            'Cost'
        ];
    }
    ngOnInit() {
        this.invocieId = this.route.snapshot.params['id'];
        if (this.invocieId) {
            this.getInvoice();
            this.showEditOption = false;
        }
        else {
            this.buildInvoiceForm();
            this.showEditOption = true;
        }
        // Add class for print media check _invoice.scss
        this.document.body.classList.add('print-body-content');
    }
    ngOnDestroy() {
        this.document.body.classList.remove('print-body-content');
    }
    getInvoice() {
        this.invoiceService.getInvoiceById(this.invocieId).subscribe((invoice) => {
            this.invoice = invoice;
            this.buildInvoiceForm(this.invoice);
            this.calculateCost(this.invoice);
            this.cdr.markForCheck();
        });
    }
    buildInvoiceForm(invoice) {
        this.invoiceForm = this.fb.group({
            id: [invoice ? invoice.id : ''],
            orderNo: [invoice ? invoice.orderNo : ''],
            status: invoice ? invoice.status : '',
            date: invoice ? new Date(invoice.date) : '',
            vat: invoice ? invoice.vat : 0,
            currency: invoice ? invoice.currency : '',
            seller: this.fb.group({
                name: [invoice ? invoice.seller.name : ''],
                address: [invoice ? invoice.seller.address : ''],
            }),
            buyer: this.fb.group({
                name: [invoice ? invoice.buyer.name : ''],
                address: [invoice ? invoice.buyer.address : ''],
            }),
            item: this.fb.array([])
        });
        this.invoice.item.forEach(i => {
            this.addNewItem(i);
        });
        if (this.invoiceFormSub) {
            this.invoiceFormSub.unsubscribe();
        }
        this.invoiceFormSub = this.invoiceForm.valueChanges.subscribe(res => {
            this.calculateCost(res);
        });
    }
    calculateCost(invoice) {
        this.cost = 0;
        invoice.item.forEach(element => {
            this.cost += element.unit * element.price;
        });
        this.vat = (invoice.vat * this.cost) / 100;
        this.currency = invoice.currency;
    }
    addNewItem(item) {
        this.invoiceItemFormArray.push(this.fb.group({
            name: [item ? item.name : ''],
            price: [item ? item.price : ''],
            unit: [item ? item.unit : '']
        }));
    }
    deleteItemFromInvoice(i) {
        this.invoiceItemFormArray.removeAt(i);
    }
    saveInvoice() {
        if (this.invoiceForm.invalid) {
            return;
        }
        this.isLoading = true;
        this.invoiceService.saveInvoice(this.invoiceForm.value)
            .subscribe((res) => {
            this.invoice = this.invoiceForm.value;
            this.isLoading = false;
            this.showEditOption = false;
            this.cdr.markForCheck();
            if (res) {
                this.router.navigateByUrl('/invoice/' + res.id);
            }
        });
    }
    print() {
        window.print();
    }
    get invoiceItemFormArray() {
        return this.invoiceForm.get('item');
    }
};
InvoiceDetailsComponent = __decorate([
    Component({
        selector: 'app-invoice-details',
        templateUrl: './invoice-details.component.html',
        styleUrls: ['./invoice-details.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __param(5, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [FormBuilder,
        ActivatedRoute,
        Router,
        InvoiceService,
        ChangeDetectorRef,
        Document])
], InvoiceDetailsComponent);
export { InvoiceDetailsComponent };
//# sourceMappingURL=invoice-details.component.js.map