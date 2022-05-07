import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../../common/model/item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  item!: Item;
  @Input()
  count!: number;
  @Output()
  itemToRemove: EventEmitter<Item> = new EventEmitter<Item>();
  @Output()
  itemToAdd: EventEmitter<Item> = new EventEmitter<Item>();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  removeItem(item: Item) {
    this.itemToRemove.emit(item);
  }

  addItem(item: Item) {
    this.itemToAdd.emit(item);
  }

  openDetails(id: number) {
    this.router.navigate([`clothes/${id}`]);
  }
}
