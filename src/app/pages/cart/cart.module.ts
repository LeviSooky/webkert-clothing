import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatIconModule
  ]
})
export class CartModule { }
