import {ItemCategory} from "./item-category";

export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  pictureUrl: string;
  category: ItemCategory;

}
