import * as tslib_1 from "tslib";
import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
var PositionSensor = /** @class */ (function (_super) {
    tslib_1.__extends(PositionSensor, _super);
    function PositionSensor(bot) {
        return _super.call(this, SensorType.POSITION, bot) || this;
    }
    PositionSensor.prototype.measure = function () {
        return this.bot.getPose().position;
    };
    return PositionSensor;
}(Sensor));
export { PositionSensor };
//# sourceMappingURL=position-sensor.js.map