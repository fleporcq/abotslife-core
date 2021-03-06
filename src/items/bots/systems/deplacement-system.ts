import { Orientation } from '../../../pose/orientation';
import { Pose } from '../../../pose/pose';
import { Grid } from '../../../grid';
import { Position } from '../../../pose/position';

export class DeplacementSystem {

  private grid: Grid = null;

  private pose: Pose = null;

  private shock = false;

  constructor(grid: Grid, initialPose: Pose) {
    if (grid == null) {
      throw new Error('Grid can\'t be null');
    }
    if (initialPose == null) {
      throw new Error('Initial pose can\'t be null');
    }
    this.grid = grid;
    this.pose = initialPose;
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

  public turnRight() {
    this.rotate90(true);
  }

  public turnLeft() {
    this.rotate90(false);
  }

  public turnBack() {
    this.turnRight();
    this.turnRight();
  }

  private move(forward: boolean) {
    this.shock = false;
    const x = this.pose.position.x;
    const y = this.pose.position.y;
    const nexPosition = new Position(x, y);
    switch (this.pose.orientation) {
      case Orientation.NORTH:
        nexPosition.y += forward ? -1 : +1;
        break;
      case Orientation.EAST:
        nexPosition.x += forward ? +1 : -1;
        break;
      case Orientation.SOUTH:
        nexPosition.y += forward ? +1 : -1;
        break;
      case Orientation.WEST:
        nexPosition.x += forward ? -1 : +1;
        break;
    }
    if (this.grid.isValidPosition(nexPosition)) {
      this.pose.position = nexPosition;
      const oldPosition = new Position(x, y);
      this.grid.update(oldPosition);
    } else {
      this.shock = true;
    }
  }

  public hasDetectedAShock() {
    return this.shock;
  }

  private rotate90(clockwise: boolean) {
    this.shock = false;
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
