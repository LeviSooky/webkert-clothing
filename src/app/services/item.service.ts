import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Item} from "../common/model/item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  collectionName = 'Clothes';

  constructor(private afs: AngularFirestore) {

  }

  getItems(): Observable<Item[]> {
    return this.afs.collection<Item>(this.collectionName).valueChanges();
  }

  getItemById(id: number): Observable<Item[]> {
     return this.afs.collection<Item>(this.collectionName, ref => ref.where('id','==', id).limit(1)).valueChanges();
  }
}
