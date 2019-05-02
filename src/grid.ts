import { Position } from './pose/position';

export class Grid {

  private width: number;

  private height: number;

  constructor(width: number, height: number) {
    if (!Number.isInteger(width) || width < 1 || !Number.isInteger(height) || height < 1) {
      throw new Error('The width and height must be integers greater or equal to one');
    }
    this.width = width;
    this.height = height;
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
}
