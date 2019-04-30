import { Orientation } from '../../orientation';
import { Position } from '../../position';

export class DeplacementSystem {

  private position: Position = null;

  private orientation: Orientation = null;

  public setPosition(position: Position) {
    this.position = position;
  }

  public setOrientation(orientation: Orientation) {
    this.orientation = orientation;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getOrientation(): Orientation {
    return this.orientation;
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
    if (this.orientation == null) {
      throw new Error('The bot can\'t move until it has been put on a grid.');
    }
    switch (this.orientation) {
      case Orientation.NORTH:
        this.position.y += forward ? -1 : +1;
        break;
      case Orientation.EAST:
        this.position.x += forward ? +1 : -1;
        break;
      case Orientation.SOUTH:
        this.position.y += forward ? +1 : -1;
        break;
      case Orientation.WEST:
        this.position.x += forward ? -1 : +1;
        break;
    }
  }

  private rotate90(clockwise: boolean) {
    if (this.orientation == null) {
      throw new Error('The bot can\'t turn until it has been put on a grid.');
    }
    switch (this.orientation) {
      case Orientation.NORTH:
        this.orientation = clockwise ? Orientation.EAST : Orientation.WEST;
        break;
      case Orientation.EAST:
        this.orientation = clockwise ? Orientation.SOUTH : Orientation.NORTH;
        break;
      case Orientation.SOUTH:
        this.orientation = clockwise ? Orientation.WEST : Orientation.EAST;
        break;
      case Orientation.WEST:
        this.orientation = clockwise ? Orientation.NORTH : Orientation.SOUTH;
        break;
    }
  }
}
