import { Item } from './items';
export interface Hero {
    id: number;
    name: string;
    item: Item[];
    money: number;
  }