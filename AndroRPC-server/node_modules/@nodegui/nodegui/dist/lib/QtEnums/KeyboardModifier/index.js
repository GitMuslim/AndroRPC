"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardModifier = void 0;
var KeyboardModifier;
(function (KeyboardModifier) {
    KeyboardModifier[KeyboardModifier["NoModifier"] = 0] = "NoModifier";
    KeyboardModifier[KeyboardModifier["ShiftModifier"] = 33554432] = "ShiftModifier";
    KeyboardModifier[KeyboardModifier["ControlModifier"] = 67108864] = "ControlModifier";
    KeyboardModifier[KeyboardModifier["AltModifier"] = 134217728] = "AltModifier";
    KeyboardModifier[KeyboardModifier["MetaModifier"] = 268435456] = "MetaModifier";
    KeyboardModifier[KeyboardModifier["KeypadModifier"] = 536870912] = "KeypadModifier";
    KeyboardModifier[KeyboardModifier["GroupSwitchModifier"] = 1073741824] = "GroupSwitchModifier";
})(KeyboardModifier = exports.KeyboardModifier || (exports.KeyboardModifier = {}));
