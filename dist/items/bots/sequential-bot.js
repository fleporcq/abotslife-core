import * as tslib_1 from "tslib";
import { Bot } from './bot';
import { CommandsQueueRom } from './memories/commands-queue-rom';
var SequentialBot = /** @class */ (function (_super) {
    tslib_1.__extends(SequentialBot, _super);
    function SequentialBot() {
        var _this = _super.call(this) || this;
        _this.nextStep = 0;
        _this.looped = 1;
        _this.loopCount = 0;
        _this.rom = new CommandsQueueRom();
        return _this;
    }
    SequentialBot.prototype.flash = function (program) {
        this.rom.flash(program);
        return this;
    };
    SequentialBot.prototype.loop = function (looped) {
        if (looped === void 0) { looped = Infinity; }
        this.looped = looped;
        return this;
    };
    SequentialBot.prototype.clear = function () {
        this.rom.clear();
        return this;
    };
    SequentialBot.prototype.hasNext = function () {
        return this.nextStep != null && this.nextStep < this.rom.size();
    };
    SequentialBot.prototype.next = function () {
        if (this.hasNext()) {
            this.execute(this.rom.get(this.nextStep));
            this.nextStep = this.prepareNextStep();
        }
        return this;
    };
    SequentialBot.prototype.getLoopCount = function () {
        return this.loopCount;
    };
    SequentialBot.prototype.prepareNextStep = function () {
        if (this.nextStep + 1 === this.rom.size()) {
            this.loopCount++;
            if (this.loopCount < this.looped) {
                return 0;
            }
            return null;
        }
        return this.nextStep + 1;
    };
    SequentialBot.prototype.execute = function (command) {
        this[command]();
    };
    return SequentialBot;
}(Bot));
export { SequentialBot };
//# sourceMappingURL=sequential-bot.js.map