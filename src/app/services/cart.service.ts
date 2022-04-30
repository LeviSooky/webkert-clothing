import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Order} from "../common/model/order";

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private collectionName = "Orders";
  constructor(private afs: AngularFirestore) {
  }
  saveOrder(order: Order): Promise<void> {
    console.log(order);
    order.items
    return this.afs.collection(this.collectionName).doc(this.afs.createId()).set(Object.assign({}, order)).then(r => {
      console.log("order saved", r);
    });
  }
}
