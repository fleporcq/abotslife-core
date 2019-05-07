import { Pose } from '../../../pose/pose';
import { Grid } from '../../../grid';
export declare class DeplacementSystem {
    private grid;
    private pose;
    private shock;
    constructor(grid: Grid, initialPose: Pose);
    getPose(): Pose;
    forward(): void;
    backward(): void;
    turnRight(): void;
    turnLeft(): void;
    turnBack(): void;
    private move;
    hasDetectedAShock(): boolean;
    private rotate90;
}
