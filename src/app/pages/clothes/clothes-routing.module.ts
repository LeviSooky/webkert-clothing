import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from './clothes.component';

const routes: Routes = [{ path: '', component: ClothesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothesRoutingModule { }
