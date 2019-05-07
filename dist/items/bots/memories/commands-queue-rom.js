import * as tslib_1 from "tslib";
export var Command;
(function (Command) {
    Command["FORWARD"] = "forward";
    Command["BACKWARD"] = "backward";
    Command["TURN_LEFT"] = "turnLeft";
    Command["TURN_RIGHT"] = "turnRight";
    Command["TURN_BACK"] = "turnBack";
    Command["WAIT"] = "wait";
})(Command || (Command = {}));
var CommandsQueueRom = /** @class */ (function () {
    function CommandsQueueRom() {
        this.queue = [];
    }
    CommandsQueueRom.prototype.getQueue = function () {
        return this.queue;
    };
    CommandsQueueRom.prototype.flash = function (firmware) {
        var e_1, _a;
        var commandValues = this.split(firmware);
        try {
            for (var commandValues_1 = tslib_1.__values(commandValues), commandValues_1_1 = commandValues_1.next(); !commandValues_1_1.done; commandValues_1_1 = commandValues_1.next()) {
                var value = commandValues_1_1.value;
                var command = Command[value.toUpperCase()];
                if (command == null) {
                    throw new Error('Unknown command ' + value);
                }
                this.queue.push(command);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (commandValues_1_1 && !commandValues_1_1.done && (_a = commandValues_1.return)) _a.call(commandValues_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    CommandsQueueRom.prototype.split = function (entry) {
        var e_2, _a;
        var commands = [];
        var chunks = entry.split(/\s/g);
        try {
            for (var chunks_1 = tslib_1.__values(chunks), chunks_1_1 = chunks_1.next(); !chunks_1_1.done; chunks_1_1 = chunks_1.next()) {
                var chunk = chunks_1_1.value;
                chunk = chunk.trim();
                if (chunk !== '') {
                    commands.push(chunk);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (chunks_1_1 && !chunks_1_1.done && (_a = chunks_1.return)) _a.call(chunks_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return commands;
    };
    CommandsQueueRom.prototype.get = function (index) {
        return this.queue[index];
    };
    CommandsQueueRom.prototype.size = function () {
        return this.queue.length;
    };
    CommandsQueueRom.prototype.clear = function () {
        this.queue = [];
    };
    return CommandsQueueRom;
}());
export { CommandsQueueRom };
//# sourceMappingURL=commands-queue-rom.js.map