import { Grid } from './grid';
import { Pose } from './pose/pose';
import { Orientation } from './pose/orientation';
import { Positionable } from './items/positionable';
import { Actor } from './items/actor';
import { Item } from './items/item';

export class World {

  private grid: Grid;

  private actors: Actor[] = [];

  private tickCount = 0;

  public constructor(width: number, height: number) {
    this.grid = new Grid(width, height);
  }

  public getGrid(): Grid {
    return this.grid;
  }

  public add(item: Item, pose: Pose = new Pose(0, 0, Orientation.EAST)) {
    this.grid.add(item, pose.position);
    if (this.isPositionable(item)) {
      item.putOnWorld(this, pose);
    }
    if (this.isActor(item)) {
      this.actors.push(item as Actor);
    }
  }

  private isPositionable(item): item is Positionable {
    return (item as Positionable).putOnWorld !== undefined;
  }

  private isActor(item): item is Actor {
    return (item as Actor).next !== undefined;
  }

  public tick() {
    this.tickCount++;
  }

  public getTickCount(): number {
    return this.tickCount;
  }

  public next(): this {
    this.tick();
    this.actors.forEach((object, name) => {
      object.next();
    });
    return this;
  }

  public fastForward(count: number) {
    if (!Number.isInteger(count) || count < 1) {
      throw new Error('count must be an integer greater or equal to 1');
    }
    for (let i = 0; i < count; i++) {
      this.next();
    }
  }

}
