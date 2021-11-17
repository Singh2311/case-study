export interface ProductList {
    ProductID: number,
    SKU: string,
    Name: string,
    ProductURL: string,
    Price: number,
    RetailPrice: number,
    ThumbnailURL: string,
    SearchKeywords: string,
    Description: string,
    Category: string,
    CategoryID: number,
    Brand: string,
    ChildSKU: string,
    ChildPrice: string,
    Color: string,
    ColorFamily: string,
    ColorSwatches: string,
    Size: string,
    ShoeSize: string,
    PantsSize: string,
    Occassion: string,
    Season: string,
    Badges: string,
    RatingAvg: number,
    RatingCount: number,
    InventoryCount: number,
    DateCreated: string
  }


  export interface studentMarks {
    name:string,
    class: number,
    section:string,
    sub1:number,
    sub2:number,
    sub3:number
  }