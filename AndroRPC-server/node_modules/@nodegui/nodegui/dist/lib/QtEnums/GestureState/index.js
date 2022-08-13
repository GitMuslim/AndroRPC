"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestureState = void 0;
var GestureState;
(function (GestureState) {
    GestureState[GestureState["NoGesture"] = 0] = "NoGesture";
    GestureState[GestureState["GestureStarted"] = 1] = "GestureStarted";
    GestureState[GestureState["GestureUpdated"] = 2] = "GestureUpdated";
    GestureState[GestureState["GestureFinished"] = 3] = "GestureFinished";
    GestureState[GestureState["GestureCanceled"] = 4] = "GestureCanceled";
})(GestureState = exports.GestureState || (exports.GestureState = {}));
