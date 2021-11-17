import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from 'src/app/model/model';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { Route2Service } from '../../route-2.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  allProductList$!: ProductList[];
  allProductListClone$!: ProductList[];
  sortFilter : Array<any> = [
      {
        name : 'Default',
        value : 0
      },
      {
        name : 'Price Low to High',
        value : 1
      },
      {
        name : 'Price High to Low',
        value : 2
      }
  ]

  constructor(private route2Service:Route2Service,public commonServiceService:CommonServiceService) { }

  ngOnInit(): void {
    this.getAllProductList();
   
  }

  getAllProductList(){
    this.route2Service.getProductList().subscribe((data:any)=>{
     this.allProductList$ = data;
     this.allProductListClone$ = JSON.parse(JSON.stringify(data));
     
    },
    error =>{
      alert('something went wrong');
    }
    )
  }

  changeView(data:number){
    this.commonServiceService.productListType = data;
  }

  sortProducts(data:any){
    data = data.target.value;
    if(data == 1){
        this.allProductList$ = this.lowToHigh(this.allProductList$)   
    }
    else if(data == 2){
      this.allProductList$ = this.highToLow(this.allProductList$)
    }
    else{
      this.allProductList$ = JSON.parse(JSON.stringify(this.allProductListClone$));
    }
  }


  lowToHigh(data:ProductList[]){
    return data.sort((a:any, b:any) => parseFloat(a.Price) - parseFloat(b.Price));
  }
  highToLow(data:ProductList[]){
    return data.sort((a:any, b:any) => parseFloat(b.Price) - parseFloat(a.Price));


  }

}
