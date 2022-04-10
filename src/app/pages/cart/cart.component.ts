import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from "../../common/model/item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items!: Map<Item, number>;
  @Output()
  itemDelete: EventEmitter<Item> = new EventEmitter<Item>();
  @Output()
  itemAdd: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  getTotal(): number {
    let sum = 0
    this.items.forEach(((value, key) => {
      sum += key.price * value;
    }));
    return sum;
  }

  itemToRemove(item: Item) {
    this.itemDelete.emit(item);
  }

  itemToAdd(item: Item) {
    this.itemAdd.emit(item);
  }
}
