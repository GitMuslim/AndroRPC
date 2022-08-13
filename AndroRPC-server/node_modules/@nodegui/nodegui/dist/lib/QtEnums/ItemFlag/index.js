"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFlag = void 0;
var ItemFlag;
(function (ItemFlag) {
    ItemFlag[ItemFlag["NoItemFlags"] = 0] = "NoItemFlags";
    ItemFlag[ItemFlag["ItemIsSelectable"] = 1] = "ItemIsSelectable";
    ItemFlag[ItemFlag["ItemIsEditable"] = 2] = "ItemIsEditable";
    ItemFlag[ItemFlag["ItemIsDragEnabled"] = 4] = "ItemIsDragEnabled";
    ItemFlag[ItemFlag["ItemIsDropEnabled"] = 8] = "ItemIsDropEnabled";
    ItemFlag[ItemFlag["ItemIsUserCheckable"] = 16] = "ItemIsUserCheckable";
    ItemFlag[ItemFlag["ItemIsEnabled"] = 32] = "ItemIsEnabled";
    ItemFlag[ItemFlag["ItemIsAutoTristate"] = 64] = "ItemIsAutoTristate";
    ItemFlag[ItemFlag["ItemIsTristate"] = 64] = "ItemIsTristate";
    ItemFlag[ItemFlag["ItemNeverHasChildren"] = 128] = "ItemNeverHasChildren";
    ItemFlag[ItemFlag["ItemIsUserTristate"] = 256] = "ItemIsUserTristate";
})(ItemFlag = exports.ItemFlag || (exports.ItemFlag = {}));
