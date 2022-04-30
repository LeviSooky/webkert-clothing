import {Subscription} from "rxjs";

export class SubscriptionsContainer {
  subscriptions: Subscription[] = [];

  set add(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  dispose(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
 }
