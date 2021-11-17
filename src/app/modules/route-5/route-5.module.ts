import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route-5-routing.module';
import { StudentMarksComponent } from './components/student-marks/student-marks.component';
import { StudentMarksService } from './service/student-marks.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StudentMarksComponent
  ],
  imports: [
    CommonModule,
    Route5RoutingModule,
    HttpClientModule
  ],
  providers:[StudentMarksService]
})
export class Route5Module { }
