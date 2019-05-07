var ScriptRom = /** @class */ (function () {
    function ScriptRom() {
        this.firmware = '';
    }
    ScriptRom.prototype.clear = function () {
        this.firmware = '';
    };
    ScriptRom.prototype.flash = function (firmware) {
        this.firmware = firmware || '';
    };
    ScriptRom.prototype.getFirmware = function () {
        return this.firmware;
    };
    return ScriptRom;
}());
export { ScriptRom };
//# sourceMappingURL=script-rom.js.map