import * as tslib_1 from "tslib";
import { Item } from './item';
var WorldAwareItem = /** @class */ (function (_super) {
    tslib_1.__extends(WorldAwareItem, _super);
    function WorldAwareItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.world = null;
        return _this;
    }
    WorldAwareItem.prototype.setWorld = function (world) {
        this.world = world;
        this.onWorldAware();
    };
    WorldAwareItem.prototype.getWorld = function () {
        return this.world;
    };
    WorldAwareItem.prototype.errorIfNotWorldAware = function () {
        if (this.world == null) {
            throw new Error('The item is not yet world aware');
        }
    };
    return WorldAwareItem;
}(Item));
export { WorldAwareItem };
//# sourceMappingURL=world-aware-item.js.map