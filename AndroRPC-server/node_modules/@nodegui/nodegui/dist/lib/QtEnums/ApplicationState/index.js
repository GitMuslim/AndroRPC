"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationState = void 0;
var ApplicationState;
(function (ApplicationState) {
    ApplicationState[ApplicationState["ApplicationSuspended"] = 0] = "ApplicationSuspended";
    ApplicationState[ApplicationState["ApplicationHidden"] = 1] = "ApplicationHidden";
    ApplicationState[ApplicationState["ApplicationInactive"] = 2] = "ApplicationInactive";
    ApplicationState[ApplicationState["ApplicationActive"] = 4] = "ApplicationActive";
})(ApplicationState = exports.ApplicationState || (exports.ApplicationState = {}));
