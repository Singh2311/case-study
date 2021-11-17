import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route2RoutingModule } from './route-2-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Route2Service } from './route-2.service';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    Route2RoutingModule,
    HttpClientModule
  ],
  providers:[Route2Service]
})
export class Route2Module { }
