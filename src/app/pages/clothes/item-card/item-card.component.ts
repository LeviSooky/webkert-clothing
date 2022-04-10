import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../../common/model/item";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input("item")
  item!: Item;
  @Output()
  toCart: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.item);
  }

  addToCart(item: Item) {
    this.toCart.emit(item);
  }

  openDetails() {
    throw new Error("not implemented!");
  }
}
