import { Bot } from './bot';
import { Actor } from '../actor';
import { SensorType } from './sensors/sensor-type';
import { Sensor } from './sensors/sensor';
export declare class ScriptedBot extends Bot implements Actor {
    private rom;
    private sensors;
    constructor();
    flash(firmware: string): this;
    clear(): this;
    hasNext(): boolean;
    next(): this;
    addSensor(type: SensorType): void;
    hasSensor(type: SensorType): boolean;
    getSensor(type: SensorType): Sensor;
    private execute;
}
