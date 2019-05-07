var Grid = /** @class */ (function () {
    function Grid(width, height) {
        if (!Number.isInteger(width) || width < 1 || !Number.isInteger(height) || height < 1) {
            throw new Error('The width and height must be integers greater or equal to one');
        }
        this.width = width;
        this.height = height;
        this.items = new Array(width * height).fill(null);
    }
    Grid.prototype.getWidth = function () {
        return this.width;
    };
    Grid.prototype.getHeight = function () {
        return this.height;
    };
    Grid.prototype.isValidPosition = function (position) {
        return this.isInBound(position) && this.isEmpty(position);
    };
    Grid.prototype.isInBound = function (position) {
        return position.x > -1 && position.x < this.width && position.y > -1 && position.y < this.height;
    };
    Grid.prototype.isEmpty = function (position) {
        return this.get(position) === null;
    };
    Grid.prototype.add = function (item, pose) {
        var position = pose.position;
        if (!this.isValidPosition(position)) {
            throw new Error(position + ' is not a valid position');
        }
        item.setPose(pose);
        this.items[this.getPositionIndex(position)] = item;
    };
    Grid.prototype.get = function (position) {
        return this.items[this.getPositionIndex(position)];
    };
    Grid.prototype.getPositionIndex = function (position) {
        return position.y * this.width + position.x;
    };
    return Grid;
}());
export { Grid };
//# sourceMappingURL=grid.js.map