"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenuPolicy = void 0;
var ContextMenuPolicy;
(function (ContextMenuPolicy) {
    ContextMenuPolicy[ContextMenuPolicy["NoContextMenu"] = 0] = "NoContextMenu";
    ContextMenuPolicy[ContextMenuPolicy["PreventContextMenu"] = 4] = "PreventContextMenu";
    ContextMenuPolicy[ContextMenuPolicy["DefaultContextMenu"] = 1] = "DefaultContextMenu";
    ContextMenuPolicy[ContextMenuPolicy["ActionsContextMenu"] = 2] = "ActionsContextMenu";
    ContextMenuPolicy[ContextMenuPolicy["CustomContextMenu"] = 3] = "CustomContextMenu";
})(ContextMenuPolicy = exports.ContextMenuPolicy || (exports.ContextMenuPolicy = {}));
