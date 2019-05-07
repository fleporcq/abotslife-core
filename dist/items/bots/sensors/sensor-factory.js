import { SensorType } from './sensor-type';
import { ShockSensor } from './shock-sensor';
import { CompassSensor } from './compass-sensor';
import { DistanceSensor } from './distance-sensor';
import { PositionSensor } from './position-sensor';
var SensorFactory = /** @class */ (function () {
    function SensorFactory() {
    }
    SensorFactory.build = function (type, bot) {
        var sensor = null;
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
    };
    return SensorFactory;
}());
export { SensorFactory };
//# sourceMappingURL=sensor-factory.js.map