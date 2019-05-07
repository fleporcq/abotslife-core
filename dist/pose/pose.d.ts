import { Orientation } from './orientation';
import { Position } from './position';
export declare class Pose {
    position: Position;
    orientation: Orientation;
    constructor(x: number, y: number, orientation?: Orientation);
    toString(): string;
}
