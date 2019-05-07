import { Sensor } from './sensor';
import { ScriptedBot } from '../scripted-bot';
export declare class DistanceSensor extends Sensor {
    private maxRange;
    constructor(bot: ScriptedBot, maxRange?: number);
    measure(): number;
}
