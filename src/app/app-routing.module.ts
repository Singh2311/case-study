import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/category-list/category-list.module').then(m => m.CategoryListModule)
  },
  {
    path: 'route1',
    loadChildren: () => import('./modules/route-1/route-1.module').then(m => m.Route1Module)
  },
  {
    path: 'route2',
    loadChildren: () => import('./modules/route-2/route-2.module').then(m => m.Route2Module)
  },
  {
    path: 'route3',
    loadChildren: () => import('./modules/route-3/route-3.module').then(m => m.Route3Module)
  },
  {
    path: 'route4',
    loadChildren: () => import('./modules/route-4/route-4.module').then(m => m.Route4Module)
  },
  {
    path: 'route5',
    loadChildren: () => import('./modules/route-5/route-5.module').then(m => m.Route5Module)
  },
  {
    path: 'route6',
    loadChildren: () => import('./modules/route-6/route-6.module').then(m => m.Route6Module)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  { path: '**',
    redirectTo: '/category-list' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
