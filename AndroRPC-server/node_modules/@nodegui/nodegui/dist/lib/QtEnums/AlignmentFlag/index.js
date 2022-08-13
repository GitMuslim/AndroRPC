"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignmentFlag = void 0;
var AlignmentFlag;
(function (AlignmentFlag) {
    //The horizontal flags are:
    AlignmentFlag[AlignmentFlag["AlignLeft"] = 1] = "AlignLeft";
    AlignmentFlag[AlignmentFlag["AlignRight"] = 2] = "AlignRight";
    AlignmentFlag[AlignmentFlag["AlignHCenter"] = 4] = "AlignHCenter";
    AlignmentFlag[AlignmentFlag["AlignJustify"] = 8] = "AlignJustify";
    //The vertical flags are:
    AlignmentFlag[AlignmentFlag["AlignTop"] = 32] = "AlignTop";
    AlignmentFlag[AlignmentFlag["AlignBottom"] = 64] = "AlignBottom";
    AlignmentFlag[AlignmentFlag["AlignVCenter"] = 128] = "AlignVCenter";
    AlignmentFlag[AlignmentFlag["AlignBaseline"] = 256] = "AlignBaseline";
    //You can use only one of the horizontal flags at a time. There is one two-dimensional flag
    AlignmentFlag[AlignmentFlag["AlignCenter"] = 132] = "AlignCenter";
})(AlignmentFlag = exports.AlignmentFlag || (exports.AlignmentFlag = {}));
