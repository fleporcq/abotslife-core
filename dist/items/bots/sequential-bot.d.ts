import { Bot } from './bot';
import { Actor } from '../actor';
export declare class SequentialBot extends Bot implements Actor {
    private rom;
    private nextStep;
    private looped;
    private loopCount;
    constructor();
    flash(program: string): this;
    loop(looped?: number): this;
    clear(): this;
    hasNext(): boolean;
    next(): this;
    getLoopCount(): number;
    private prepareNextStep;
    private execute;
}
