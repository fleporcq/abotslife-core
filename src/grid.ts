import { Position } from './pose/position';
import { Item } from './items/item';
import { Pose } from './pose/pose';

export class Grid {

  private width: number;

  private height: number;

  private items: Item[];

  constructor(width: number, height: number) {
    if (!Number.isInteger(width) || width < 1 || !Number.isInteger(height) || height < 1) {
      throw new Error('The width and height must be integers greater or equal to one');
    }
    this.width = width;
    this.height = height;
    this.items = new Array(width * height).fill(null);
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public isValidPosition(position: Position): boolean {
    return this.isInBound(position) && this.isEmpty(position);
  }

  public isInBound(position: Position): boolean {
    return position.x > -1 && position.x < this.width && position.y > -1 && position.y < this.height;
  }

  public isEmpty(position: Position): boolean {
    return this.get(position) === null;
  }

  public add(item: Item, pose: Pose) {
    const position = pose.position;
    this.errorIfOutOfBounds(position);
    this.errorIfAlreadyUsed(position);
    item.setPose(pose);
    this.items[this.getPositionIndex(position)] = item;
  }

  public update(position: Position) {
    this.errorIfOutOfBounds(position);
    const item = this.get(position);
    if (item != null && (item.getPose().position.x !== position.x || item.getPose().position.y !== position.y)) {
      this.clear(position);
      this.add(item, item.getPose());
    }
  }

  public get(position: Position): Item {
    this.errorIfOutOfBounds(position);
    return this.items[this.getPositionIndex(position)];
  }

  public clear(position: Position) {
    this.errorIfOutOfBounds(position);
    this.items[this.getPositionIndex(position)] = null;
  }

  private getPositionIndex(position: Position): number {
    return position.y * this.width + position.x;
  }

  private errorIfAlreadyUsed(position) {
    if (!this.isEmpty(position)) {
      throw new Error(position + ' is already used');
    }
  }

  private errorIfOutOfBounds(position) {
    if (!this.isInBound(position)) {
      throw new Error(position + ' is out of grid bounds');
    }
  }

}
