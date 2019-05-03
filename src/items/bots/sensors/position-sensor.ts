import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
import { ScriptedBot } from '../scripted-bot';
import { Position } from '../../../pose/position';

export class PositionSensor extends Sensor {

  constructor(bot: ScriptedBot) {
    super(SensorType.POSITION, bot);
  }

  public measure(): Position {
    return this.bot.getPose().position;
  }

}
