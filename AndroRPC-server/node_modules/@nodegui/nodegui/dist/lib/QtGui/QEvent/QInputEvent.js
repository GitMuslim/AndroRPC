"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QInputEvent = void 0;
const QEvent_1 = require("./QEvent");
class QInputEvent extends QEvent_1.QEvent {
    modifiers() {
        return this.native.modifiers();
    }
    timestamp() {
        return this.native.timestamp();
    }
}
exports.QInputEvent = QInputEvent;
