import { Bot } from './bot';
import { DeplacementSystem } from '../systems/deplacement-system';
import { Pose } from '../pose/pose';
import { World } from '../world';

export class BasicBot implements Bot {

  private name: string;

  private world: World = null;

  private deplacementSytem: DeplacementSystem = null;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public wait(): this {
    return this;
  }

  public forward(): this {
    this.errorIfHasNotBeenPutOnAWorld();
    this.deplacementSytem.forward();
    return this;
  }

  public backward(): this {
    this.errorIfHasNotBeenPutOnAWorld();
    this.deplacementSytem.backward();
    return this;
  }

  public left(): this {
    this.errorIfHasNotBeenPutOnAWorld();
    this.deplacementSytem.left();
    return this;
  }

  public right(): this {
    this.errorIfHasNotBeenPutOnAWorld();
    this.deplacementSytem.right();
    return this;
  }

  public _putOnWorld(world: World, pose: Pose) {
    this.world = world;
    this.deplacementSytem = new DeplacementSystem(this.world.getGrid(), pose);
  }

  public _pose(): Pose {
    this.errorIfHasNotBeenPutOnAWorld();
    return this.deplacementSytem.getPose();
  }

  public hasNext(): boolean {
    return false;
  }

  public next(): this {
    return this;
  }

  private errorIfHasNotBeenPutOnAWorld() {
    if (this.world == null) {
      throw new Error('The bot can\'t move until it has been put on a world');
    }
  }

}
