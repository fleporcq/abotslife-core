import { World } from '../world';
import { Item } from './item';
export declare abstract class WorldAwareItem extends Item {
    protected world: World;
    setWorld(world: World): void;
    getWorld(): World;
    abstract onWorldAware(): any;
    protected errorIfNotWorldAware(): void;
}
