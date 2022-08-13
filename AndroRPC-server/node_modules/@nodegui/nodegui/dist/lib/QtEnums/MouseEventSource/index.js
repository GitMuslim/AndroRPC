"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseEventSource = void 0;
var MouseEventSource;
(function (MouseEventSource) {
    MouseEventSource[MouseEventSource["MouseEventNotSynthesized"] = 0] = "MouseEventNotSynthesized";
    MouseEventSource[MouseEventSource["MouseEventSynthesizedBySystem"] = 1] = "MouseEventSynthesizedBySystem";
    MouseEventSource[MouseEventSource["MouseEventSynthesizedByQt"] = 2] = "MouseEventSynthesizedByQt";
    MouseEventSource[MouseEventSource["MouseEventSynthesizedByApplication"] = 3] = "MouseEventSynthesizedByApplication";
})(MouseEventSource = exports.MouseEventSource || (exports.MouseEventSource = {}));
