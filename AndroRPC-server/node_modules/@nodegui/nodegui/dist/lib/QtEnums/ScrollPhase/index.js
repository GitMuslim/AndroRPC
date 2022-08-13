"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollPhase = void 0;
var ScrollPhase;
(function (ScrollPhase) {
    ScrollPhase[ScrollPhase["NoScrollPhase"] = 0] = "NoScrollPhase";
    ScrollPhase[ScrollPhase["ScrollBegin"] = 1] = "ScrollBegin";
    ScrollPhase[ScrollPhase["ScrollUpdate"] = 2] = "ScrollUpdate";
    ScrollPhase[ScrollPhase["ScrollEnd"] = 3] = "ScrollEnd";
    ScrollPhase[ScrollPhase["ScrollMomentum"] = 4] = "ScrollMomentum";
})(ScrollPhase = exports.ScrollPhase || (exports.ScrollPhase = {}));
