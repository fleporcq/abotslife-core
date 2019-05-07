import { Position } from './position';
var Pose = /** @class */ (function () {
    function Pose(x, y, orientation) {
        this.position = new Position(x, y);
        this.orientation = orientation;
    }
    Pose.prototype.toString = function () {
        return this.position + ' ' + this.orientation;
    };
    return Pose;
}());
export { Pose };
//# sourceMappingURL=pose.js.map