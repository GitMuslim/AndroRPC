"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchFlag = void 0;
var MatchFlag;
(function (MatchFlag) {
    MatchFlag[MatchFlag["MatchExactly"] = 0] = "MatchExactly";
    MatchFlag[MatchFlag["MatchFixedString"] = 8] = "MatchFixedString";
    MatchFlag[MatchFlag["MatchContains"] = 1] = "MatchContains";
    MatchFlag[MatchFlag["MatchStartsWith"] = 2] = "MatchStartsWith";
    MatchFlag[MatchFlag["MatchEndsWith"] = 3] = "MatchEndsWith";
    MatchFlag[MatchFlag["MatchCaseSensitive"] = 16] = "MatchCaseSensitive";
    MatchFlag[MatchFlag["MatchRegExp"] = 4] = "MatchRegExp";
    MatchFlag[MatchFlag["MatchWildcard"] = 5] = "MatchWildcard";
    MatchFlag[MatchFlag["MatchWrap"] = 32] = "MatchWrap";
    MatchFlag[MatchFlag["MatchRecursive"] = 64] = "MatchRecursive";
})(MatchFlag = exports.MatchFlag || (exports.MatchFlag = {}));
