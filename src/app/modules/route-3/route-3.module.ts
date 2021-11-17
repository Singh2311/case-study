import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route-3-routing.module';
import { TimerComponent } from './components/timer/timer.component';
import { CountdowntimerComponent } from './components/countdowntimer/countdowntimer.component';
import { TimerlimitComponent } from './components/timerlimit/timerlimit.component';
import { TimerstampComponent } from './components/timerstamp/timerstamp.component';
import { CountclicksComponent } from './components/countclicks/countclicks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    TimerComponent,
       CountdowntimerComponent,
       TimerlimitComponent,
       TimerstampComponent,
       CountclicksComponent
  ],
  imports: [
    CommonModule,
    Route3RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Route3Module { }
