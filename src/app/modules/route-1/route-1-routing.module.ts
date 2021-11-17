import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './components/animation/animation.component';

const routes: Routes = [
  {
    path: '',
    component : AnimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route1RoutingModule { }