import * as tslib_1 from "tslib";
import { DeplacementSystem } from './systems/deplacement-system';
import { WorldAwareItem } from '../world-aware-item';
import { ItemType } from '../item-type';
var Bot = /** @class */ (function (_super) {
    tslib_1.__extends(Bot, _super);
    function Bot() {
        var _this = _super.call(this, ItemType.BOT) || this;
        _this.deplacementSytem = null;
        return _this;
    }
    Bot.prototype.wait = function () {
        return this;
    };
    Bot.prototype.forward = function () {
        this.errorIfNotWorldAware();
        this.deplacementSytem.forward();
        return this;
    };
    Bot.prototype.backward = function () {
        this.errorIfNotWorldAware();
        this.deplacementSytem.backward();
        return this;
    };
    Bot.prototype.turnLeft = function () {
        this.errorIfNotWorldAware();
        this.deplacementSytem.turnLeft();
        return this;
    };
    Bot.prototype.turnRight = function () {
        this.errorIfNotWorldAware();
        this.deplacementSytem.turnRight();
        return this;
    };
    Bot.prototype.turnBack = function () {
        this.errorIfNotWorldAware();
        this.deplacementSytem.turnBack();
        return this;
    };
    Bot.prototype.hasDetectedAShock = function () {
        this.errorIfNotWorldAware();
        return this.deplacementSytem.hasDetectedAShock();
    };
    Bot.prototype.onWorldAware = function () {
        this.deplacementSytem = new DeplacementSystem(this.world.getGrid(), this.pose);
    };
    return Bot;
}(WorldAwareItem));
export { Bot };
//# sourceMappingURL=bot.js.map