import { Sensor } from './sensor';
import { ScriptedBot } from '../scripted-bot';
import { Orientation } from '../../../pose/orientation';
export declare class CompassSensor extends Sensor {
    constructor(bot: ScriptedBot);
    measure(): Orientation;
}
