import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route-4-routing.module';
import { TimerComponent } from './components/timer/timer.component';
import { CountclicksComponent } from './components/countclicks/countclicks.component';
import { TimerstampComponent } from './components/timerstamp/timerstamp.component';
import { TimerlimitComponent } from './components/timerlimit/timerlimit.component';
import { CountdowntimerComponent } from './components/countdowntimer/countdowntimer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerService } from './service/timer.service';

@NgModule({
  declarations: [
    TimerComponent,
    CountclicksComponent,
    TimerstampComponent,
    TimerlimitComponent,
    CountdowntimerComponent
  ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[TimerService]
})
export class Route4Module { }
