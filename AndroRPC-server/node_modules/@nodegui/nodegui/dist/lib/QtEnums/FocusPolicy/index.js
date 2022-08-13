"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusPolicy = void 0;
var FocusPolicy;
(function (FocusPolicy) {
    FocusPolicy[FocusPolicy["TabFocus"] = 1] = "TabFocus";
    FocusPolicy[FocusPolicy["ClickFocus"] = 2] = "ClickFocus";
    FocusPolicy[FocusPolicy["StrongFocus"] = 11] = "StrongFocus";
    FocusPolicy[FocusPolicy["WheelFocus"] = 15] = "WheelFocus";
    FocusPolicy[FocusPolicy["NoFocus"] = 0] = "NoFocus";
})(FocusPolicy = exports.FocusPolicy || (exports.FocusPolicy = {}));
