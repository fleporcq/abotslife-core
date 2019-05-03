import { ScriptedBot } from '../scripted-bot';
import { SensorType } from './sensor-type';

export abstract class Sensor {

  private type: SensorType;

  protected bot: ScriptedBot;

  constructor(type: SensorType, bot: ScriptedBot) {
    this.type = type;
    this.bot = bot;
  }

  public abstract measure(): any;

  public getType(): SensorType {
    return this.type;
  }
}
