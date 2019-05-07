import * as tslib_1 from "tslib";
import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
var CompassSensor = /** @class */ (function (_super) {
    tslib_1.__extends(CompassSensor, _super);
    function CompassSensor(bot) {
        return _super.call(this, SensorType.COMPASS, bot) || this;
    }
    CompassSensor.prototype.measure = function () {
        return this.bot.getPose().orientation;
    };
    return CompassSensor;
}(Sensor));
export { CompassSensor };
//# sourceMappingURL=compass-sensor.js.map