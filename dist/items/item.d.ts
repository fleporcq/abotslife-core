import { Pose } from '../pose/pose';
export declare abstract class Item {
    protected pose: Pose;
    getPose(): Pose;
    setPose(pose: Pose): void;
}
