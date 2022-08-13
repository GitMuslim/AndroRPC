"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchPointState = void 0;
var TouchPointState;
(function (TouchPointState) {
    TouchPointState[TouchPointState["TouchPointPressed"] = 1] = "TouchPointPressed";
    TouchPointState[TouchPointState["TouchPointMoved"] = 2] = "TouchPointMoved";
    TouchPointState[TouchPointState["TouchPointStationary"] = 4] = "TouchPointStationary";
    TouchPointState[TouchPointState["TouchPointReleased"] = 8] = "TouchPointReleased";
})(TouchPointState = exports.TouchPointState || (exports.TouchPointState = {}));
