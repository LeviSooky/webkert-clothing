import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothesRoutingModule } from './clothes-routing.module';
import { ClothesComponent } from './clothes.component';
import { ItemCardComponent } from './item-card/item-card.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ClothesComponent,
    ItemCardComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ClothesRoutingModule,
  ]
})
export class ClothesModule { }
