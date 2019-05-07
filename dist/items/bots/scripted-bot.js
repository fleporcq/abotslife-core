import * as tslib_1 from "tslib";
import { Bot } from './bot';
import { ScriptRom } from './memories/script-rom';
import { SensorType } from './sensors/sensor-type';
import { SensorFactory } from './sensors/sensor-factory';
var ScriptedBot = /** @class */ (function (_super) {
    tslib_1.__extends(ScriptedBot, _super);
    function ScriptedBot() {
        var _this = _super.call(this) || this;
        _this.sensors = new Map();
        _this.rom = new ScriptRom();
        return _this;
    }
    ScriptedBot.prototype.flash = function (firmware) {
        if (firmware.includes('this')) {
            throw new Error('The firmware cannot contain \'this\' keyword');
        }
        this.rom.flash(firmware);
        return this;
    };
    ScriptedBot.prototype.clear = function () {
        this.rom.clear();
        return this;
    };
    ScriptedBot.prototype.hasNext = function () {
        return true;
    };
    ScriptedBot.prototype.next = function () {
        this.execute(this.rom.getFirmware());
        return this;
    };
    ScriptedBot.prototype.addSensor = function (type) {
        if (this.hasSensor(type)) {
            throw new Error('The bot has already the ' + type + ' sensor');
        }
        var sensor = SensorFactory.build(type, this);
        this.sensors.set(type, sensor);
    };
    ScriptedBot.prototype.hasSensor = function (type) {
        return this.sensors.has(type);
    };
    ScriptedBot.prototype.getSensor = function (type) {
        if (!this.hasSensor(type)) {
            throw new Error('The bot has not the ' + type + ' sensor');
        }
        return this.sensors.get(type) || null;
    };
    ScriptedBot.prototype.execute = function (script) {
        'use strict';
        var _this = this;
        var moveCount = 0;
        var forward = function () {
            moveCount++;
            _this.forward();
        };
        var backward = function () {
            moveCount++;
            _this.backward();
        };
        var turnLeft = function () {
            moveCount++;
            _this.turnLeft();
        };
        var turnRight = function () {
            moveCount++;
            _this.turnRight();
        };
        var turnBack = function () {
            moveCount++;
            _this.turnBack();
        };
        var wait = function () {
            moveCount++;
            _this.wait();
        };
        var sensor = function (type) {
            var sensorType = SensorType[type.toUpperCase()];
            if (sensorType === undefined) {
                throw new Error('The ' + type + ' sensor is unknown');
            }
            return _this.getSensor(sensorType);
        };
        eval(script);
        if (moveCount > 1) {
            throw new Error('The bot cannot move more than once');
        }
    };
    return ScriptedBot;
}(Bot));
export { ScriptedBot };
//# sourceMappingURL=scripted-bot.js.map