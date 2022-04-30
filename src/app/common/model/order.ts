import {ItemIdQuantityPair} from "./item-id-quantity-pair";

export interface Order {
  items: ItemIdQuantityPair[];
  details: ShippingDetails;
}
interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

