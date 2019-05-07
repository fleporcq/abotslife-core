import * as tslib_1 from "tslib";
import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
import { Orientation } from '../../../pose/orientation';
import { Position } from '../../../pose/position';
var DistanceSensor = /** @class */ (function (_super) {
    tslib_1.__extends(DistanceSensor, _super);
    function DistanceSensor(bot, maxRange) {
        if (maxRange === void 0) { maxRange = 5; }
        var _this = _super.call(this, SensorType.DISTANCE, bot) || this;
        _this.maxRange = maxRange;
        return _this;
    }
    DistanceSensor.prototype.measure = function () {
        var botX = this.bot.getPose().position.x;
        var botY = this.bot.getPose().position.y;
        var botOrientation = this.bot.getPose().orientation;
        var grid = this.bot.getWorld().getGrid();
        for (var d = 1; d <= this.maxRange + 1; d++) {
            var nextPosition = void 0;
            switch (botOrientation) {
                case Orientation.EAST:
                    nextPosition = new Position(botX + d, botY);
                    break;
                case Orientation.SOUTH:
                    nextPosition = new Position(botX, botY + d);
                    break;
                case Orientation.WEST:
                    nextPosition = new Position(botX - d, botY);
                    break;
                case Orientation.NORTH:
                    nextPosition = new Position(botX, botY - d);
                    break;
            }
            if (!grid.isValidPosition(nextPosition)) {
                return d - 1;
            }
        }
        return Infinity;
    };
    return DistanceSensor;
}(Sensor));
export { DistanceSensor };
//# sourceMappingURL=distance-sensor.js.map