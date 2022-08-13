"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestureFlag = void 0;
var GestureFlag;
(function (GestureFlag) {
    GestureFlag[GestureFlag["DontStartGestureOnChildren"] = 1] = "DontStartGestureOnChildren";
    GestureFlag[GestureFlag["ReceivePartialGestures"] = 2] = "ReceivePartialGestures";
    GestureFlag[GestureFlag["IgnoredGesturesPropagateToParent"] = 4] = "IgnoredGesturesPropagateToParent";
})(GestureFlag = exports.GestureFlag || (exports.GestureFlag = {}));
