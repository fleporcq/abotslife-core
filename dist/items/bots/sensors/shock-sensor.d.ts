import { Sensor } from './sensor';
import { ScriptedBot } from '../scripted-bot';
export declare class ShockSensor extends Sensor {
    constructor(bot: ScriptedBot);
    measure(): boolean;
}
