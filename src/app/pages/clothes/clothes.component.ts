import {Component, EventEmitter, OnInit} from '@angular/core';
import {Item} from "../../common/model/item";
import {ItemCategory} from "../../common/model/item-category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {
  items: Item[] = [] as Item[];

  toCart: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items.push(new class implements Item {
      category: ItemCategory = ItemCategory.TShirt;
      description: string = "egy";
      id: number = 1;
      name: string = "name";
      pictureUrl: string = "https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1614686111/D14143-336-6484-M05/g-star-raw-raw-graphic-slim-t-shirt-black.jpg";
      price: number = 400;
      },
      new class implements Item {
        category: ItemCategory = ItemCategory.TShirt;
        description: string = "ketto";
        id: number = 2;
        name: string = "name";
        pictureUrl: string = "https://www.tezenis.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-TEZ_EC_COM/default/dw52cd15a2/images/2MM15C9120-F.jpg?sw=600&sfrm=jpeg";
        price: number = 250;
      },
      new class implements Item {
        category: ItemCategory = ItemCategory.TShirt;
        description: string = "harom";
        id: number = 3;
        name: string = "name";
        pictureUrl: string = "https://tommy-europe.scene7.com/is/image/TommyEurope/KG0KG03705_123_alternate1?$main$";
        price: number = 1250;
      }

    )
  }

  addToCart(item: Item) {
    this.toCart.emit(item);
  }

  openDetails(item: Item, event: Event) {
    event.preventDefault();
    if((event.target as HTMLInputElement).nodeName === 'A') {
      return;
    }
    this.router.navigate(["/clothes", item.id, item]);
  }
}
