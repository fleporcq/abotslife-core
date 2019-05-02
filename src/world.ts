import { Grid } from './grid';
import { Pose } from './pose/pose';
import { Orientation } from './pose/orientation';
import { Clock } from './clock';
import { Positionable } from './positionable';
import { Actor } from './actor';

export class World {

  private grid: Grid;

  private clock: Clock;

  private actors: Actor[] = [];

  public constructor(width: number, height: number) {
    this.grid = new Grid(width, height);
    this.clock = new Clock(this.next.bind(this));
  }

  public getGrid(): Grid {
    return this.grid;
  }

  public add(thing: Positionable, pose: Pose = new Pose(0, 0, Orientation.EAST)) {
    thing.putOnWorld(this, pose);
    this.grid.add(thing, pose.position);
    if (this.isActor(thing)) {
      this.actors.push(thing as Actor);
    }
  }

  private isActor(thing): thing is Actor {
    return (thing as Actor).next !== undefined;
  }

  public setTimeInterval(timeInterval: number) {
    this.clock.setTimeInterval(timeInterval);
  }

  public getTickCount(): number {
    return this.clock.getTickCount();
  }

  public next(): this {
    this.clock.tick();
    this.actors.forEach((object, name) => {
      object.next();
    });
    return this;
  }

  public start(): this {
    this.clock.start();
    return this;
  }

  public pause(): this {
    this.clock.stop();
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
