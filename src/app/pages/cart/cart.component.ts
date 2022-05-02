import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from "../../common/model/item";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Order} from "../../common/model/order";
import {CartService} from "../../services/cart.service";
import {ItemIdQuantityPair} from "../../common/model/item-id-quantity-pair";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  deleteAll: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  itemAdd: EventEmitter<Item> = new EventEmitter<Item>();
  cartFormGroup: FormGroup = new FormGroup( {
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    address: new FormControl('',Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required)
  });
  durationInSeconds = 5;


  constructor(private router: Router, private cartService: CartService, private _snackBar: MatSnackBar) { }



  openSnackBar(message: string) {
    this._snackBar.open(message, "ok",{
        horizontalPosition: "center",
        verticalPosition: "top"

      }
    );
  }


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
       this.openSnackBar("Sikeres rendelés!");
       this.deleteAll.emit();
       this.router.navigate(["/"]);
      },() => {
        this.openSnackBar("Something went wrong...");
      });
    }
    this.openSnackBar("Adjon meg helyes adatokat!");
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
