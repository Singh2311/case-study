import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  // 1 for grid 2 for list
  productListType : number =2;
  constructor() { }
}
