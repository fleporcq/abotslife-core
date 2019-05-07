import { Position } from './pose/position';
import { Item } from './items/item';
import { Pose } from './pose/pose';
export declare class Grid {
    private width;
    private height;
    private items;
    constructor(width: number, height: number);
    getWidth(): number;
    getHeight(): number;
    isValidPosition(position: Position): boolean;
    isInBound(position: Position): boolean;
    isEmpty(position: Position): boolean;
    add(item: Item, pose: Pose): void;
    get(position: Position): Item;
    private getPositionIndex;
}