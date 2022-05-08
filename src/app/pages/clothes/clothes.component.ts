import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {Item} from "../../common/model/item";
import {Router} from "@angular/router";
import {ItemService} from "../../services/item.service";
import {SubscriptionsContainer} from "../../common/SubscriptionsContainer";

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit, OnDestroy {
  items: Item[] = [] as Item[];
  subscriptionContainer: SubscriptionsContainer = new SubscriptionsContainer();
  @Input()
  toCart: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnDestroy(): void {
        this.subscriptionContainer.dispose();
    }

  ngOnInit(): void {
    this.subscriptionContainer.add = this.itemService.getItems().subscribe(items => this.items = items);
  }

  addToCart(item: Item) {
    this.toCart.emit(item);
  }

  openDetails(item: Item, event: Event) {
    event.preventDefault();
    if((event.target as HTMLInputElement).nodeName === 'A') {
      return;
    }
    this.router.navigate(["/clothes", item.id]);
  }

  subscribe(item: Item) {
    this.toCart.emit(item);
  }
}
