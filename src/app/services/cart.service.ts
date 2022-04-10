import { Injectable } from '@angular/core';
import {Item} from "../common/model/item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Item[] = [];
  constructor() { }

  getCartItems(): Observable<Item[]> {
    return new Observable<Item[]>();
  }
}
