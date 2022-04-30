import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from "../../common/model/item";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Order} from "../../common/model/order";
import {CartService} from "../../services/cart.service";
import {ItemIdQuantityPair} from "../../common/model/item-id-quantity-pair";

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
  cartFormGroup: FormGroup = new FormGroup( {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl('')
  });


  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    if(this.items.size === 0) {
      this.router.navigate(["/"]);
    }
  }

  getTotal(): number {
    let sum = 0
    this.items.forEach(((value, key) => sum += key.price * value));
    return sum;
  }

  itemToRemove(item: Item) {
    this.itemDelete.emit(item);
  }

  itemToAdd(item: Item) {
    this.itemAdd.emit(item);
  }

  checkout() {
    if(this.cartFormGroup.valid) {
      let order: Order = {
        details: this.cartFormGroup.value,
        items: this.convertToSavable()
      };
      this.cartService.saveOrder(order).then(r => {
       console.log("SUCCCESSSS");
      });
    console.log(order);
    }
  }

  private convertToSavable(): ItemIdQuantityPair[] {
    let orderedItems = [] as ItemIdQuantityPair[];
    this.items.forEach((key, value) => {
        let item : ItemIdQuantityPair = {
          id: value.id,
          quantity: key
        };
        orderedItems.push(item);
    });
    return orderedItems;
  }
}
