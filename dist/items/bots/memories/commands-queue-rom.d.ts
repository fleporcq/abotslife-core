import { Rom } from './rom';
export declare enum Command {
    FORWARD = "forward",
    BACKWARD = "backward",
    TURN_LEFT = "turnLeft",
    TURN_RIGHT = "turnRight",
    TURN_BACK = "turnBack",
    WAIT = "wait"
}
export declare class CommandsQueueRom implements Rom {
    private queue;
    getQueue(): Command[];
    flash(firmware: string): void;
    private split;
    get(index: number): Command;
    size(): number;
    clear(): void;
}
