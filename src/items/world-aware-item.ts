import { World } from '../world';
import { Item } from './item';

export abstract class WorldAwareItem extends Item {

  protected world: World = null;

  public setWorld(world: World) {
    this.world = world;
    this.onWorldAware();
  }

  public getWorld(): World {
    return this.world;
  }

  public abstract onWorldAware();

  protected errorIfNotWorldAware() {
    if (this.world == null) {
      throw new Error('The item is not yet world aware');
    }
  }
}
