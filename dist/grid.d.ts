import { Position } from './pose/position';
import { Item } from './items/item';
import { Pose } from './pose/pose';
export declare class Grid {
    private width;
    private height;
    private items;
    private itemsByWid;
    constructor(width: number, height: number);
    getWidth(): number;
    getHeight(): number;
    isValidPosition(position: Position): boolean;
    isInBound(position: Position): boolean;
    isEmpty(position: Position): boolean;
    add(item: Item, pose: Pose): void;
    update(position: Position): void;
    get(position: Position): Item;
    getByWid(wid: number): Item;
    clear(position: Position): void;
    private getPositionIndex;
    private errorIfAlreadyUsed;
    private errorIfOutOfBounds;
}
