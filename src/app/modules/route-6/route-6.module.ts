import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route6RoutingModule } from './route-6-routing.module';
import { DynamicDivComponent } from './components/dynamic-div/dynamic-div.component';


@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    Route6RoutingModule
  ]
})
export class Route6Module { }
