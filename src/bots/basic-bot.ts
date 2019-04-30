import { Grid } from '../grid';
import { Bot } from './bot';
import { DeplacementSystem } from '../systems/deplacement-system';
import { Pose } from '../pose/pose';

export class BasicBot implements Bot {

  private name: string;

  private grid: Grid = null;

  private deplacementSytem: DeplacementSystem = null;

  constructor(name: string) {
    this.name = name;
    this.deplacementSytem = new DeplacementSystem();
  }

  public getName(): string {
    return this.name;
  }

  public wait(): this {
    return this;
  }

  public forward(): this {
    this.deplacementSytem.forward();
    return this;
  }

  public backward(): this {
    this.deplacementSytem.backward();
    return this;
  }

  public left(): this {
    this.deplacementSytem.left();
    return this;
  }

  public right(): this {
    this.deplacementSytem.right();
    return this;
  }

  public _putOnGrid(grid: Grid, pose: Pose) {
    this.grid = grid;
    this.deplacementSytem.setPose(pose);
  }

  public _pose(): Pose {
    return this.deplacementSytem.getPose();
  }

  public hasNext(): boolean {
    return false;
  }

  public next(): this {
    return this;
  }

}
