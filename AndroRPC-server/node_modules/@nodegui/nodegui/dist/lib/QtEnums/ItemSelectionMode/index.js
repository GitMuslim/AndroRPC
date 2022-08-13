"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSelectionMode = void 0;
var ItemSelectionMode;
(function (ItemSelectionMode) {
    ItemSelectionMode[ItemSelectionMode["ContainsItemShape"] = 0] = "ContainsItemShape";
    ItemSelectionMode[ItemSelectionMode["IntersectsItemShape"] = 1] = "IntersectsItemShape";
    ItemSelectionMode[ItemSelectionMode["ContainsItemBoundingRect"] = 2] = "ContainsItemBoundingRect";
    ItemSelectionMode[ItemSelectionMode["IntersectsItemBoundingRect"] = 3] = "IntersectsItemBoundingRect";
})(ItemSelectionMode = exports.ItemSelectionMode || (exports.ItemSelectionMode = {}));
