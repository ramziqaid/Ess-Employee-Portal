
interface Purchases {
    purchaseID: number;
    purchaseNumber: string;
    purchaseName: string;
    userID: number;
    userName: string;
    reasonID: string;
    statusID: string;
    typeID: string;
    projectID: string;
    createdDate: Date;
    createdBy: string;
    justification: string;
}


class PurchasesDetails {
    purchasesDetailsID: number;
    purchaseID: number;
    itemTypeID: number;
    mainGroupID: number;
    subGroupID: number;
    itemNumber: string;
    itemNameAR: string;
    itemNameEN: string;
    description: string;
    qty: number;
    price: number;
}

class PurchasesStage {
    purchasesStageID: number;
    purchasesStageTypeID: number;
    purchaseID: number;
    userID: number;
    isApproved: boolean;
    isRejected: boolean;
    justification: string;
}

class PurchaseOffers {
    purchaseOfferID: number;
    purchaseID: number;
    purchasesDetailsID: number;
    userID: number;
    vendNumber: string;
    vendNameEN: string;
    vendNameAR: string;
    price: Number;
    isSelected: Boolean;
    selectedByUserID: Number;
    justification: string;
    createdDate: string;
}


class Product {
    id?: string;
    Code: string;
    NameAR: string;
    NameEN: string;
    typeProductID: string;
    description: string;
    Qty: number;
    Price: number;
    SubGroupID: string;
    SubGroupName: string;
}


class ProductGroup {
    MainGroupID: string;
    MainGroupName: string;
    SubGroupID: string;
    SubGroupName: string;
}


export { Purchases, PurchasesDetails, Product, PurchasesStage, PurchaseOffers, ProductGroup }