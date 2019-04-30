import { Grid } from '../grid';
import { Position } from '../position';
import { Orientation } from '../orientation';
import { Bot } from './bot';
import { DeplacementSystem } from '../systems/deplacement/deplacement-system';

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

  public _putOnGrid(grid: Grid, position: Position = new Position(), orientation: Orientation = Orientation.EAST) {
    this.grid = grid;
    this.deplacementSytem.setPosition(position);
    this.deplacementSytem.setOrientation(orientation);
  }

  public _position(): Position {
    return this.deplacementSytem.getPosition();
  }

  public _orientation(): Orientation {
    return this.deplacementSytem.getOrientation();
  }

  public hasNext(): boolean {
    return false;
  }

  public next(): this {
    return this;
  }

}
