import { Pose } from '../pose/pose';

export abstract class Item {
  protected pose: Pose;

  public getPose(): Pose {
    return this.pose;
  }

  public setPose(pose: Pose) {
    this.pose = pose;
  }
}
