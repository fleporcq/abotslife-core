import { Grid } from '../grid';
import { Position } from '../position';
import { Orientation } from '../orientation';
import { Bot } from './bot';

export class BasicBot implements Bot {

  private name: string;

  private grid: Grid = null;

  private position: Position = null;

  private orientation: Orientation = null;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public forward(): this {
    this.move(true);
    return this;
  }

  public backward(): this {
    this.move(false);
    return this;
  }

  public right(): this {
    this.rotate90(true);
    return this;
  }

  public left(): this {
    this.rotate90(false);
    return this;
  }

  public wait(): this {
    return this;
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

  public _putOnGrid(grid: Grid, position: Position = new Position(), orientation: Orientation = Orientation.EAST) {
    this.grid = grid;
    this.position = position;
    this.orientation = orientation;
  }

  public _position(): Position {
    return this.position;
  }

  public _orientation(): Orientation {
    return this.orientation;
  }

  public hasNext(): boolean {
    return false;
  }

  public next(): this {
    return this;
  }

}
