"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSpec = void 0;
var TimeSpec;
(function (TimeSpec) {
    TimeSpec[TimeSpec["LocalTime"] = 0] = "LocalTime";
    TimeSpec[TimeSpec["UTC"] = 1] = "UTC";
    TimeSpec[TimeSpec["OffsetFromUTC"] = 2] = "OffsetFromUTC";
    TimeSpec[TimeSpec["TimeZone"] = 3] = "TimeZone";
})(TimeSpec = exports.TimeSpec || (exports.TimeSpec = {}));
