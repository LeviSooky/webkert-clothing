import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
    imports: [
        CommonModule,
        CartRoutingModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule
    ]
})
export class CartModule { }
