import { Grid } from './grid';
import * as _ from 'lodash';
var World = /** @class */ (function () {
    function World(width, height) {
        this.actors = [];
        this.tickCount = 0;
        this.grid = new Grid(width, height);
    }
    World.prototype.getGrid = function () {
        return this.grid;
    };
    World.prototype.getWidth = function () {
        return this.grid.getWidth();
    };
    World.prototype.getHeight = function () {
        return this.grid.getHeight();
    };
    World.prototype.add = function (item, pose) {
        this.grid.add(item, pose);
        item.setPose(pose);
        if (this.isWorldAwareItem(item)) {
            item.setWorld(this);
        }
        if (this.isActor(item)) {
            this.actors.push(item);
        }
    };
    World.prototype.isWorldAwareItem = function (item) {
        return item.setWorld !== undefined;
    };
    World.prototype.isActor = function (item) {
        return item.next !== undefined;
    };
    World.prototype.tick = function () {
        this.tickCount++;
    };
    World.prototype.getTickCount = function () {
        return this.tickCount;
    };
    World.prototype.next = function () {
        this.tick();
        this.actors.forEach(function (object, name) {
            object.next();
        });
        return this;
    };
    World.prototype.fastForward = function (count) {
        if (!Number.isInteger(count) || count < 1) {
            throw new Error('count must be an integer greater or equal to 1');
        }
        for (var i = 0; i < count; i++) {
            this.next();
        }
        return this;
    };
    World.prototype.clone = function () {
        return _.cloneDeep(this);
    };
    return World;
}());
export { World };
//# sourceMappingURL=world.js.map