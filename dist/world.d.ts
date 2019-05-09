import { Grid } from './grid';
import { Pose } from './pose/pose';
import { Item } from './items/item';
import { Clonable } from './clonable';
export declare class World implements Clonable {
    private grid;
    private actors;
    private tickCount;
    constructor(width: number, height: number);
    getGrid(): Grid;
    getWidth(): number;
    getHeight(): number;
    add(item: Item, pose: Pose): void;
    private isWorldAwareItem;
    private isActor;
    tick(): void;
    getTickCount(): number;
    next(): this;
    fastForward(count: number): this;
    clone(): World;
}
