"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowState = void 0;
var WindowState;
(function (WindowState) {
    WindowState[WindowState["WindowNoState"] = 0] = "WindowNoState";
    WindowState[WindowState["WindowMinimized"] = 1] = "WindowMinimized";
    WindowState[WindowState["WindowMaximized"] = 2] = "WindowMaximized";
    WindowState[WindowState["WindowFullScreen"] = 4] = "WindowFullScreen";
    WindowState[WindowState["WindowActive"] = 8] = "WindowActive";
})(WindowState = exports.WindowState || (exports.WindowState = {}));
