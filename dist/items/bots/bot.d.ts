import { WorldAwareItem } from '../world-aware-item';
export declare class Bot extends WorldAwareItem {
    private deplacementSytem;
    constructor();
    wait(): this;
    forward(): this;
    backward(): this;
    turnLeft(): this;
    turnRight(): this;
    turnBack(): this;
    hasDetectedAShock(): boolean;
    onWorldAware(): void;
}
