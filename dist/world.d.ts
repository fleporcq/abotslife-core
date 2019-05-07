import { Grid } from './grid';
import { Pose } from './pose/pose';
import { Item } from './items/item';
export declare class World {
    private grid;
    private actors;
    private tickCount;
    constructor(width: number, height: number);
    getGrid(): Grid;
    add(item: Item, pose: Pose): void;
    private isWorldAwareItem;
    private isActor;
    tick(): void;
    getTickCount(): number;
    next(): this;
    fastForward(count: number): void;
}
