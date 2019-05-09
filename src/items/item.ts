import { Pose } from '../pose/pose';
import { ItemType } from './item-type';

export abstract class Item {

  protected type: ItemType;

  protected pose: Pose;

  public wid: number;

  constructor(type: ItemType) {
    this.type = type;
  }

  public getPose(): Pose {
    return this.pose;
  }

  public setPose(pose: Pose) {
    this.pose = pose;
  }

  public getType(): ItemType {
    return this.type;
  }

}
