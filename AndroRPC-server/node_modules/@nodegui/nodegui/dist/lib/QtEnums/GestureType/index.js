"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestureType = void 0;
var GestureType;
(function (GestureType) {
    GestureType[GestureType["TapGesture"] = 1] = "TapGesture";
    GestureType[GestureType["TapAndHoldGesture"] = 2] = "TapAndHoldGesture";
    GestureType[GestureType["PanGesture"] = 3] = "PanGesture";
    GestureType[GestureType["PinchGesture"] = 4] = "PinchGesture";
    GestureType[GestureType["SwipeGesture"] = 5] = "SwipeGesture";
    GestureType[GestureType["CustomGesture"] = 256] = "CustomGesture";
})(GestureType = exports.GestureType || (exports.GestureType = {}));
