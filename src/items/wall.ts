import { Item } from './item';
import { ItemType } from './item-type';

export class Wall extends Item {

  constructor() {
    super(ItemType.WALL);
  }

}
