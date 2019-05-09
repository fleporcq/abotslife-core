import { Pose } from '../pose/pose';
import { ItemType } from './item-type';
export declare abstract class Item {
    protected type: ItemType;
    protected pose: Pose;
    wid: number;
    constructor(type: ItemType);
    getPose(): Pose;
    setPose(pose: Pose): void;
    getType(): ItemType;
}
