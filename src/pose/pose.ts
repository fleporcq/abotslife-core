import { Orientation } from './orientation';
import { Position } from './position';

export class Pose {

  public position: Position;

  public orientation: Orientation;

  constructor(x: number, y: number, orientation?: Orientation) {
    this.position = new Position(x, y);
    this.orientation = orientation;
  }

  public toString() {
    return this.position + ' ' + this.orientation;
  }

}
