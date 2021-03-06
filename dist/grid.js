var Grid = /** @class */ (function () {
    function Grid(width, height) {
        if (!Number.isInteger(width) || width < 1 || !Number.isInteger(height) || height < 1) {
            throw new Error('The width and height must be integers greater or equal to one');
        }
        this.width = width;
        this.height = height;
        this.items = new Array(width * height).fill(null);
        this.itemsByWid = [];
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
        this.errorIfOutOfBounds(position);
        this.errorIfAlreadyUsed(position);
        item.setPose(pose);
        this.items[this.getPositionIndex(position)] = item;
        if (item.wid == null) {
            item.wid = this.itemsByWid.length;
            this.itemsByWid.push(item);
        }
    };
    Grid.prototype.update = function (position) {
        this.errorIfOutOfBounds(position);
        var item = this.get(position);
        if (item != null && (item.getPose().position.x !== position.x || item.getPose().position.y !== position.y)) {
            this.clear(position);
            this.add(item, item.getPose());
        }
    };
    Grid.prototype.get = function (position) {
        this.errorIfOutOfBounds(position);
        return this.items[this.getPositionIndex(position)];
    };
    Grid.prototype.getByWid = function (wid) {
        return this.itemsByWid[wid];
    };
    Grid.prototype.clear = function (position) {
        this.errorIfOutOfBounds(position);
        this.items[this.getPositionIndex(position)] = null;
    };
    Grid.prototype.getPositionIndex = function (position) {
        return position.y * this.width + position.x;
    };
    Grid.prototype.errorIfAlreadyUsed = function (position) {
        if (!this.isEmpty(position)) {
            throw new Error(position + ' is already used');
        }
    };
    Grid.prototype.errorIfOutOfBounds = function (position) {
        if (!this.isInBound(position)) {
            throw new Error(position + ' is out of grid bounds');
        }
    };
    return Grid;
}());
export { Grid };
//# sourceMappingURL=grid.js.map