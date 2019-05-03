import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
import { ScriptedBot } from '../scripted-bot';
import { Orientation } from '../../../pose/orientation';

export class CompassSensor extends Sensor {

  constructor(bot: ScriptedBot) {
    super(SensorType.COMPASS, bot);
  }

  public measure(): Orientation {
    return this.bot.getPose().orientation;
  }

}
