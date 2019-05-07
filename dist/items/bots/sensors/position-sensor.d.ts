import { Sensor } from './sensor';
import { ScriptedBot } from '../scripted-bot';
import { Position } from '../../../pose/position';
export declare class PositionSensor extends Sensor {
    constructor(bot: ScriptedBot);
    measure(): Position;
}
