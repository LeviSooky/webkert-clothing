import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {NewsletterSubscriber} from "../common/model/newsletter-subscriber";

@Injectable({
  providedIn: 'root'
})
export class NewsletterSubService {

  private collectionName: string = "NewsletterSubscribers";

  constructor(private afs: AngularFirestore) { }

  saveSubscription(sub: NewsletterSubscriber): void {
    this.afs.collection(this.collectionName).doc(this.afs.createId()).set(sub).then(() => console.log("saved subscription"));
  }
}
