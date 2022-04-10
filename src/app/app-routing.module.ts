import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clothes',
    loadChildren: () => import('./pages/clothes/clothes.module').then(m => m.ClothesModule) },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
  },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
