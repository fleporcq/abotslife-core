var Item = /** @class */ (function () {
    function Item(type) {
        this.type = type;
    }
    Item.prototype.getPose = function () {
        return this.pose;
    };
    Item.prototype.setPose = function (pose) {
        this.pose = pose;
    };
    Item.prototype.getType = function () {
        return this.type;
    };
    return Item;
}());
export { Item };
//# sourceMappingURL=item.js.map