import { ApiService } from './../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { Product, PurchasesStage, ProductGroup } from '../Models/Purchases';
import { Observable, throwError } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class PurchasesService {

  private productGroup$: Observable<ProductGroup[]>;
  private product$: Observable<Product[]>;
  public purchasesDetailsData: any;

  constructor(private apiService: ApiService) { }

  //#region load 
  loadProductGroup(): Observable<ProductGroup[]> {
    if (!this.productGroup$) {
      return this.apiService.get("AXInfo/GetProductGroup").pipe(shareReplay(),
        catchError(this.handleError));
    }
    return this.productGroup$;
  }


  loadProduct(): Observable<Product[]> {
    if (!this.product$) {
      return this.apiService.get("AXInfo/GetProduct").pipe(shareReplay(),
        catchError(this.handleError));
    }
    return this.product$;
  }

  loadProject(): Observable<any[]> {
    return this.apiService.get("AXInfo/GetProject").pipe(shareReplay(),
      catchError(this.handleError));
  }


  loadVend(): Observable<any[]> {
    return this.apiService.get("AXInfo/GetVend").pipe(shareReplay(),
      catchError(this.handleError));
  }

  loadPurchaseRequestByID(PurchaseID: number) {
    return this.apiService.get(`Purchases/GetPurchasesByID/${PurchaseID}`).pipe(
      catchError(this.handleError)
    );
  }

  loadPurchaseRequestByNumber(PurchaseNumber: string) {
    return this.apiService.get(`Purchases/GetPurchasesByNumber/${PurchaseNumber}`).pipe(
      catchError(this.handleError)
    );
  }

  loadPurchaseRequestList() {
    return this.apiService.get(`Purchases/GetPurchasesList`).pipe(
      catchError(this.handleError)
    );
  }

  loadPurchaseOffers(purchasesDetailsID: Number) {
    return this.apiService.get(`Purchases/GetPurchasesOffers/${purchasesDetailsID}`).pipe(
      catchError(this.handleError)
    );
  }

  //#end

  //#region Put

  savePurchaseRequest(request: any) {
    if (request.purchases.purchaseID == undefined) {
      return this.apiService.post("Purchases/CreatePurchases", request).pipe(
        catchError(this.handleError)
      );
    }
    else {
      return this.apiService.post("Purchases/UpdatePurchases", request).pipe(
        catchError(this.handleError)
      );
    }
  }

  savePurchaseOffers(request: any) {
    return this.apiService.post("Purchases/CreatePurchaseOffers", request).pipe(
      catchError(this.handleError)
    );
  }

  ActionPurchase(purchaseAction: PurchasesStage) {
    return this.apiService.post("Purchases/ActionPurchasesStage", purchaseAction).pipe(
      catchError(this.handleError)
    );
  }

  selectPurchaseOffers(purchaseOfferID: Number, purchasesDetailsID: Number, isSelected: boolean) {
    return this.apiService.post(`Purchases/${purchaseOfferID}/${purchasesDetailsID}/SelectPurchaseOffers/${isSelected}`, {}).pipe(
      catchError(this.handleError)
    );
  }


  //#region Delete
  deletePurchaseOffers(purchaseOfferID: Number) {
    return this.apiService.delete("Purchases/DeletePurchaseOffer/" + purchaseOfferID).pipe(
      catchError(this.handleError)
    );
  }

  //#endregion

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      return throwError(error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error} `);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  };
}
