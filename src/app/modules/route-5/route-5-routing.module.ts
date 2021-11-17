import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMarksComponent } from './components/student-marks/student-marks.component';

const routes: Routes = [{
  path:'',
  component:StudentMarksComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route5RoutingModule { }
