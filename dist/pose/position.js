var Position = /** @class */ (function () {
    function Position(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Position.prototype.toString = function () {
        return '(' + this.x + ',' + this.y + ')';
    };
    return Position;
}());
export { Position };
//# sourceMappingURL=position.js.map