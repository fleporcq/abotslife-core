import { ScriptedBot } from '../scripted-bot';
import { SensorType } from './sensor-type';
export declare abstract class Sensor {
    private type;
    protected bot: ScriptedBot;
    constructor(type: SensorType, bot: ScriptedBot);
    abstract measure(): any;
    getType(): SensorType;
}
