import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route1RoutingModule } from './route-1-routing.module';
import { AnimationComponent } from './components/animation/animation.component';


@NgModule({
  declarations: [
    AnimationComponent
  ],
  imports: [
    CommonModule,
    Route1RoutingModule
  ]
})
export class Route1Module { }
