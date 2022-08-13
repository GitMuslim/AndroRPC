"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusReason = void 0;
var FocusReason;
(function (FocusReason) {
    FocusReason[FocusReason["MouseFocusReason"] = 0] = "MouseFocusReason";
    FocusReason[FocusReason["TabFocusReason"] = 1] = "TabFocusReason";
    FocusReason[FocusReason["BacktabFocusReason"] = 2] = "BacktabFocusReason";
    FocusReason[FocusReason["ActiveWindowFocusReason"] = 3] = "ActiveWindowFocusReason";
    FocusReason[FocusReason["PopupFocusReason"] = 4] = "PopupFocusReason";
    FocusReason[FocusReason["ShortcutFocusReason"] = 5] = "ShortcutFocusReason";
    FocusReason[FocusReason["MenuBarFocusReason"] = 6] = "MenuBarFocusReason";
    FocusReason[FocusReason["OtherFocusReason"] = 7] = "OtherFocusReason";
})(FocusReason = exports.FocusReason || (exports.FocusReason = {}));
