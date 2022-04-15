import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from './clothes.component';
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  { path: '', component: ClothesComponent },
  { path: '/:id', component: DetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothesRoutingModule { }
