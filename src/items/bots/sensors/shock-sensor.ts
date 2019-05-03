import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
import { ScriptedBot } from '../scripted-bot';

export class ShockSensor extends Sensor {

  constructor(bot: ScriptedBot) {
    super(SensorType.SHOCK, bot);
  }

  public measure(): boolean {
    return this.bot.hasDetectedAShock();
  }

}
