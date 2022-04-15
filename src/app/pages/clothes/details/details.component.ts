import { Component, OnInit } from '@angular/core';
import {Item} from "../../../common/model/item";
import {ActivatedRoute} from "@angular/router";
import {ItemCategory} from "../../../common/model/item-category";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  item!: Item;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    //todo service call
    // this.item = new class implements Item {
    //   category: ItemCategory = ItemCategory.TShirt;
    //   description: string = "egy";
    //   id: number = 1;
    //   name: string = "name";
    //   pictureUrl: string = "https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1614686111/D14143-336-6484-M05/g-star-raw-raw-graphic-slim-t-shirt-black.jpg";
    //   price: number = 400;
    // };
  }

}
