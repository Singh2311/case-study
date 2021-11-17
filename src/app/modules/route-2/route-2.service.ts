import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from 'src/app/model/model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Route2Service {

  constructor(private http:HttpClient) { }


  getProductList():Observable<ProductList[]>{
    return this.http.get<ProductList[]>('assets/data/product.json').pipe(
      map(res => res as ProductList[] || [])
    )
  }
}
