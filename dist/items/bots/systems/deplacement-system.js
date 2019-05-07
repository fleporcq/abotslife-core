import { Orientation } from '../../../pose/orientation';
import { Position } from '../../../pose/position';
var DeplacementSystem = /** @class */ (function () {
    function DeplacementSystem(grid, initialPose) {
        this.grid = null;
        this.pose = null;
        this.shock = false;
        if (grid == null) {
            throw new Error('Grid can\'t be null');
        }
        if (initialPose == null) {
            throw new Error('Initial pose can\'t be null');
        }
        this.grid = grid;
        this.pose = initialPose;
    }
    DeplacementSystem.prototype.getPose = function () {
        return this.pose;
    };
    DeplacementSystem.prototype.forward = function () {
        this.move(true);
    };
    DeplacementSystem.prototype.backward = function () {
        this.move(false);
    };
    DeplacementSystem.prototype.turnRight = function () {
        this.rotate90(true);
    };
    DeplacementSystem.prototype.turnLeft = function () {
        this.rotate90(false);
    };
    DeplacementSystem.prototype.turnBack = function () {
        this.turnRight();
        this.turnRight();
    };
    DeplacementSystem.prototype.move = function (forward) {
        this.shock = false;
        var nexPosition = new Position(this.pose.position.x, this.pose.position.y);
        switch (this.pose.orientation) {
            case Orientation.NORTH:
                nexPosition.y += forward ? -1 : +1;
                break;
            case Orientation.EAST:
                nexPosition.x += forward ? +1 : -1;
                break;
            case Orientation.SOUTH:
                nexPosition.y += forward ? +1 : -1;
                break;
            case Orientation.WEST:
                nexPosition.x += forward ? -1 : +1;
                break;
        }
        if (this.grid.isValidPosition(nexPosition)) {
            this.pose.position = nexPosition;
        }
        else {
            this.shock = true;
        }
    };
    DeplacementSystem.prototype.hasDetectedAShock = function () {
        return this.shock;
    };
    DeplacementSystem.prototype.rotate90 = function (clockwise) {
        this.shock = false;
        switch (this.pose.orientation) {
            case Orientation.NORTH:
                this.pose.orientation = clockwise ? Orientation.EAST : Orientation.WEST;
                break;
            case Orientation.EAST:
                this.pose.orientation = clockwise ? Orientation.SOUTH : Orientation.NORTH;
                break;
            case Orientation.SOUTH:
                this.pose.orientation = clockwise ? Orientation.WEST : Orientation.EAST;
                break;
            case Orientation.WEST:
                this.pose.orientation = clockwise ? Orientation.NORTH : Orientation.SOUTH;
                break;
        }
    };
    return DeplacementSystem;
}());
export { DeplacementSystem };
//# sourceMappingURL=deplacement-system.js.map