import { Orientation } from '../../pose/orientation';
import { Pose } from '../../pose/pose';

export class DeplacementSystem {

  private pose: Pose = null;

  public setPose(pose: Pose) {
    this.pose = pose;
  }

  public getPose(): Pose {
    return this.pose;
  }

  public forward() {
    this.move(true);
  }

  public backward() {
    this.move(false);
  }

  public right() {
    this.rotate90(true);
  }

  public left() {
    this.rotate90(false);
  }

  private move(forward: boolean) {
    if (this.pose == null) {
      throw new Error('The bot can\'t move until it has been put on a grid.');
    }
    switch (this.pose.orientation) {
      case Orientation.NORTH:
        this.pose.position.y += forward ? -1 : +1;
        break;
      case Orientation.EAST:
        this.pose.position.x += forward ? +1 : -1;
        break;
      case Orientation.SOUTH:
        this.pose.position.y += forward ? +1 : -1;
        break;
      case Orientation.WEST:
        this.pose.position.x += forward ? -1 : +1;
        break;
    }
  }

  private rotate90(clockwise: boolean) {
    if (this.pose == null) {
      throw new Error('The bot can\'t turn until it has been put on a grid.');
    }
    switch (this.pose.orientation) {
      case Orientation.NORTH:
        this.pose.orientation = clockwise ? Orientation.EAST : Orientation.WEST;
        break;
      case Orientation.EAST:
        this.pose.orientation = clockwise ? Orientation.SOUTH : Orientation.NORTH;
        break;
      case Orientation.SOUTH:
        this.pose.orientation = clockwise ? Orientation.WEST : Orientation.EAST;
        break;
      case Orientation.WEST:
        this.pose.orientation = clockwise ? Orientation.NORTH : Orientation.SOUTH;
        break;
    }
  }
}
