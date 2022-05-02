import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Item} from "./common/model/item";
import {Router} from "@angular/router";
import {ClothesComponent} from "./pages/clothes/clothes.component";
import {Subscription} from "rxjs";
import {CartComponent} from "./pages/cart/cart.component";
import {MatSidenav} from "@angular/material/sidenav";
import { initializeApp } from "firebase/app";
import {DetailsComponent} from "./pages/clothes/details/details.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges{

  cart: Map<Item, number> = new Map<Item, number>();
  title = 'webkert-shop';
  subscriptions: Subscription[] = [];

  constructor(private router: Router) {
  }

  getCartItemsCounter() {
    let counter = 0;
    this.cart.forEach((value: number, key: Item) => counter += value);
    return counter;
  }

  subscribeToEmitter(componentRef: any) {
    if(componentRef instanceof CartComponent) {
      this.subscriptions.push(componentRef.itemAdd.subscribe((item: Item) => this.addToCart(item)));
      this.subscriptions.push(componentRef.deleteAll.subscribe(() => this.cart.clear()));
      componentRef.items = this.cart;
      this.subscriptions.push(componentRef.itemDelete.subscribe((item) => {
        if(this.cart.get(item) === 1) {
          this.cart.delete(item);
        } else {
          this.cart.set(item, this.cart.get(item) as number - 1);
        }
      }));
    }
    if(componentRef instanceof DetailsComponent) {
      this.subscriptions.push(componentRef.toCart.subscribe((item: Item) => this.addToCart(item)))
    }
    if(!(componentRef instanceof ClothesComponent)){
      return;
    }
    const child : ClothesComponent = componentRef;
    this.subscriptions.push(child.toCart.subscribe((item: Item) => this.addToCart(item)));
  }

  unsubscribe(componentRef: any) {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.cart);
  }

  addToCart(item: Item) {
    for(let [key, value] of this.cart) {
      if(key.id === item.id) {
        this.cart.set(key, value + 1);
        return;
      }
    }
    this.cart.set(item, 1);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }
}
