import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Item} from "../../../common/model/item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../../services/item.service";
import {Subscription} from "rxjs";
import {SubscriptionsContainer} from "../../../common/SubscriptionsContainer";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  subsContainer: SubscriptionsContainer = new SubscriptionsContainer();
  item!: Item;
  @Output()
  toCart: EventEmitter<Item> = new EventEmitter<Item>();
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
    let id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get("id")!);
    this.subsContainer.add = this.itemService.getItemById(id).subscribe((item) => { //todo handle subs
      this.item = item[0];
    });
  }
  closeDetails(): void {
    this.router.navigate(["clothes"]);
  }

  ngOnDestroy(): void {
    this.subsContainer.dispose();
  }

  addToCart($event: MouseEvent) {
    this.toCart.emit(this.item);
  }
}
