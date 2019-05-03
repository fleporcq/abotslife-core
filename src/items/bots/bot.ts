import { DeplacementSystem } from './systems/deplacement-system';
import { WorldAwareItem } from '../world-aware-item';

export class Bot extends WorldAwareItem {

  private deplacementSytem: DeplacementSystem = null;

  public wait(): this {
    return this;
  }

  public forward(): this {
    this.errorIfNotWorldAware();
    this.deplacementSytem.forward();
    return this;
  }

  public backward(): this {
    this.errorIfNotWorldAware();
    this.deplacementSytem.backward();
    return this;
  }

  public turnLeft(): this {
    this.errorIfNotWorldAware();
    this.deplacementSytem.turnLeft();
    return this;
  }

  public turnRight(): this {
    this.errorIfNotWorldAware();
    this.deplacementSytem.turnRight();
    return this;
  }

  public turnBack(): this {
    this.errorIfNotWorldAware();
    this.deplacementSytem.turnBack();
    return this;
  }

  public hasDetectedAShock() {
    this.errorIfNotWorldAware();
    return this.deplacementSytem.hasDetectedAShock();
  }

  public onWorldAware() {
    this.deplacementSytem = new DeplacementSystem(this.world.getGrid(), this.pose);
  }

}
