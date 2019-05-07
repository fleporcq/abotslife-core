import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
import { ScriptedBot } from '../scripted-bot';
export declare class SensorFactory {
    static build(type: SensorType, bot: ScriptedBot): Sensor;
}
