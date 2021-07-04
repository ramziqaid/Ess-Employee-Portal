var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ChangeDetectorRef } from "@angular/core";
import { MatTable } from "@angular/material/table";
import { InvoiceService } from "../invoice.service";
import { AppConfirmService } from "app/shared/services/app-confirm/app-confirm.service";
let InvoiceListComponent = class InvoiceListComponent {
    constructor(invoiceService, confirmService, cdr) {
        this.invoiceService = invoiceService;
        this.confirmService = confirmService;
        this.cdr = cdr;
        this.itemTableColumn = [
            "Order No.",
            "Bill From",
            "Bill To",
            "Status",
            "Actions"
        ];
    }
    ngOnInit() {
        this.getInvoiceList();
    }
    getInvoiceList() {
        this.invoiceService.getInvoiceList()
            .subscribe((res) => {
            this.invoiceList = res;
            this.cdr.detectChanges();
        });
    }
    deleteInvoiceById(id) {
        this.confirmService
            .confirm({ title: "Confirm", message: "Are you sure to delete?" })
            .subscribe(res => {
            if (res) {
                this.invoiceService.deleteInvoice(id).subscribe(e => {
                    this.getInvoiceList();
                });
                this.itemTable.renderRows();
            }
            else
                return;
        });
    }
};
__decorate([
    ViewChild(MatTable),
    __metadata("design:type", MatTable)
], InvoiceListComponent.prototype, "itemTable", void 0);
InvoiceListComponent = __decorate([
    Component({
        selector: "app-invoice-list",
        templateUrl: "./invoice-list.component.html",
        styleUrls: ["./invoice-list.component.scss"]
    }),
    __metadata("design:paramtypes", [InvoiceService,
        AppConfirmService,
        ChangeDetectorRef])
], InvoiceListComponent);
export { InvoiceListComponent };
//# sourceMappingURL=invoice-list.component.js.map