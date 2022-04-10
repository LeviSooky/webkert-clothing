import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothesRoutingModule } from './clothes-routing.module';
import { ClothesComponent } from './clothes.component';
import { ItemCardComponent } from './item-card/item-card.component';


@NgModule({
  declarations: [
    ClothesComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    ClothesRoutingModule
  ]
})
export class ClothesModule { }
