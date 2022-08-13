"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QMouseEvent = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
const QInputEvent_1 = require("./QInputEvent");
class QMouseEvent extends QInputEvent_1.QInputEvent {
    constructor(event) {
        super(new addon_1.default.QMouseEvent(event));
    }
    button() {
        return this.native.button();
    }
    buttons() {
        return this.native.buttons();
    }
    x() {
        return this.native.x();
    }
    y() {
        return this.native.y();
    }
    globalX() {
        return this.native.globalX();
    }
    globalY() {
        return this.native.globalY();
    }
}
exports.QMouseEvent = QMouseEvent;
