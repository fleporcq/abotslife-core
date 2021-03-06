import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
import { ScriptedBot } from '../scripted-bot';
import { ShockSensor } from './shock-sensor';
import { CompassSensor } from './compass-sensor';
import { DistanceSensor } from './distance-sensor';
import { PositionSensor } from './position-sensor';

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
      case SensorType.POSITION:
        sensor = new PositionSensor(bot);
        break;
      case SensorType.DISTANCE:
        sensor = new DistanceSensor(bot);
        break;
    }
    return sensor;
  }
}
