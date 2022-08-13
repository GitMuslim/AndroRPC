"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropAction = void 0;
var DropAction;
(function (DropAction) {
    DropAction[DropAction["CopyAction"] = 1] = "CopyAction";
    DropAction[DropAction["MoveAction"] = 2] = "MoveAction";
    DropAction[DropAction["LinkAction"] = 4] = "LinkAction";
    DropAction[DropAction["ActionMask"] = 255] = "ActionMask";
    DropAction[DropAction["IgnoreAction"] = 0] = "IgnoreAction";
    DropAction[DropAction["TargetMoveAction"] = 32770] = "TargetMoveAction";
})(DropAction = exports.DropAction || (exports.DropAction = {}));
