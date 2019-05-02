import { Position } from './pose/position';
import { Positionable } from './positionable';

export class Grid {

  private width: number;

  private height: number;

  private cells: Positionable[];

  constructor(width: number, height: number) {
    if (!Number.isInteger(width) || width < 1 || !Number.isInteger(height) || height < 1) {
      throw new Error('The width and height must be integers greater or equal to one');
    }
    this.width = width;
    this.height = height;
    this.cells = new Array(width * height);
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public isValidPosition(position: Position): boolean {
    return position.x > -1 && position.x < this.width && position.y > -1 && position.y < this.height;
  }

  public add(thing: Positionable, position: Position) {
    if (!this.isValidPosition(position)) {
      throw new Error(position + ' is not a valid position');
    }
    this.cells[this.getCellIndex(position)] = thing;
  }

  private getCellIndex(position: Position): number {
    return position.y * this.width + position.x;
  }

}
