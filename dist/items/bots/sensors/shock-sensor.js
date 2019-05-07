import * as tslib_1 from "tslib";
import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
var ShockSensor = /** @class */ (function (_super) {
    tslib_1.__extends(ShockSensor, _super);
    function ShockSensor(bot) {
        return _super.call(this, SensorType.SHOCK, bot) || this;
    }
    ShockSensor.prototype.measure = function () {
        return this.bot.hasDetectedAShock();
    };
    return ShockSensor;
}(Sensor));
export { ShockSensor };
//# sourceMappingURL=shock-sensor.js.map