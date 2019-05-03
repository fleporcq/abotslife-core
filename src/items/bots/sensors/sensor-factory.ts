import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
import { ScriptedBot } from '../scripted-bot';
import { ShockSensor } from './shock-sensor';
import { CompassSensor } from './compass-sensor';

export class SensorFactory {
  public static build(type: SensorType, bot: ScriptedBot): Sensor {
    let sensor = null;
    switch (type) {
      case SensorType.SHOCK:
        sensor = new ShockSensor(bot);
        break;
      case SensorType.COMPASS:
        sensor = new CompassSensor(bot);
        break;
    }
    return sensor;
  }
}
