"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QNativeGestureEvent = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
const QInputEvent_1 = require("./QInputEvent");
class QNativeGestureEvent extends QInputEvent_1.QInputEvent {
    constructor(event) {
        super(new addon_1.default.QNativeGestureEvent(event));
    }
    //Needs QTouchDevice to implement this
    // device(): QTouchDevice {
    //     return undefined;
    // }
    /** Returns the gesture type */
    gestureType() {
        return this.native.gestureType();
    }
    /**
     * Returns the position of the gesture as a QPointF in screen coordinates
     */
    globalPos() {
        return this.native.globalPos();
    }
    /**
     * Returns the position of the gesture as a QPointF,
     * relative to the widget or item that received the event
     */
    localPos() {
        return this.native.localPos();
    }
    /**
     * Returns the position of the mouse cursor,
     * relative to the widget or item that received the event
     */
    pos() {
        return this.native.pos();
    }
    /**
     * Returns the position of the gesture as a QPointF in screen coordinates
     */
    screenPos() {
        return this.native.screenPos();
    }
    /**
     * Returns the position of the gesture as a QPointF,
     * relative to the window that received the event.
     */
    windowPos() {
        return this.native.windowPos();
    }
    /**
     * Returns the gesture value.
     *
     * The value should be interpreted based on the gesture type.
     * For example, a Zoom gesture provides a scale factor while a
     * Rotate gesture provides a rotation delta.
     */
    value() {
        return this.native.value();
    }
}
exports.QNativeGestureEvent = QNativeGestureEvent;
