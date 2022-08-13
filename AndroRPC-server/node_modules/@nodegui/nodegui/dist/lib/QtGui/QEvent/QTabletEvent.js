"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTabletEvent = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
const QInputEvent_1 = require("./QInputEvent");
var PointerType;
(function (PointerType) {
    /** An unknown device */
    PointerType[PointerType["Idle"] = 0] = "Idle";
    /** Tip end of a stylus-like device (the narrow end of the pen). */
    PointerType[PointerType["Loading"] = 1] = "Loading";
    /** Any puck-like device. */
    PointerType[PointerType["Ready"] = 2] = "Ready";
    /** Eraser end of a stylus-like device (the broad end of the pen). */
    PointerType[PointerType["Error"] = 3] = "Error";
})(PointerType || (PointerType = {}));
var TabletDevice;
(function (TabletDevice) {
    /** No device, or an unknown device. */
    TabletDevice[TabletDevice["NoDevice"] = 0] = "NoDevice";
    /** A Puck (a device that is similar to a flat mouse with a transparent circle with cross-hairs). */
    TabletDevice[TabletDevice["Puck"] = 1] = "Puck";
    /** A Stylus */
    TabletDevice[TabletDevice["Stylus"] = 2] = "Stylus";
    /** An airbrush */
    TabletDevice[TabletDevice["Airbrush"] = 3] = "Airbrush";
    /** A 4D Mouse. */
    TabletDevice[TabletDevice["FourDMouse"] = 4] = "FourDMouse";
    /** A special stylus that also knows about rotation (a 6D stylus). */
    TabletDevice[TabletDevice["RotationStylus"] = 6] = "RotationStylus";
})(TabletDevice || (TabletDevice = {}));
/**
 * The QTabletEvent class contains parameters that describe a Tablet event
 */
class QTabletEvent extends QInputEvent_1.QInputEvent {
    constructor(event) {
        super(new addon_1.default.QTabletEvent(event));
        this.PointerType = PointerType;
        this.TabletDevice = TabletDevice;
    }
    /**
     * Returns the button that caused the event.
     * Note that the returned value is always Qt::NoButton for TabletMove,
     * TabletEnterProximity and TabletLeaveProximity events
     */
    button() {
        return this.native.button();
    }
    /**
     * Returns the button state when the event was generated.
     * The button state is a combination of buttons from the Qt::MouseButton enum using the OR operator.
     * For TabletMove events, this is all buttons that are pressed down.
     * For TabletPress events this includes the button that caused the event.
     * For TabletRelease events this excludes the button that caused the event.
     */
    buttons() {
        return this.native.buttons();
    }
    /*
     * Returns the type of device that generated the event
     * (see enum QTabletEvent::TabletDevice)
     *
     * Somehow the build couldn't find this method; may enable in the future
     */
    // deviceType(): TabletDevice {
    //     return this.native.deviceType();
    // }
    /**
     * Returns the global position of the device at the time of the event.
     *
     * This is important on asynchronous windows systems like X11;
     * whenever you move your widgets around in response to mouse events,
     * globalPos() can differ significantly from the current position QCursor::pos().
     *
     * use globalPosF for Floating point (more precise)
     */
    globalPos() {
        return this.native.globalPos();
    }
    /**
     * Returns the global position of the device at the time of the event.
     *
     * This is important on asynchronous windows systems like X11;
     * whenever you move your widgets around in response to mouse events,
     * globalPosF() can differ significantly from the current position QCursor::pos().
     */
    globalPosF() {
        return this.native.globalPosF();
    }
    /**
     * Returns the global x position of the mouse pointer at the time of the event
     */
    globalX() {
        return this.native.globalX();
    }
    /**
     * Returns the global y position of the mouse pointer at the time of the event
     */
    globalY() {
        return this.native.globalY();
    }
    /**
     * Returns the type of point that generated the event.
     * (See QTabletEvent::PointerType)
     */
    pointerType() {
        return this.native.pointerType();
    }
    /**
     * Returns the position of the device, relative to the widget that received the event.
     *
     * If you move widgets around in response to mouse events, use globalPos() instead of this function.
     */
    pos() {
        return this.native.pos();
    }
    /**
     * Returns the position of the device, relative to the widget that received the event.
     *
     * If you move widgets around in response to mouse events, use globalPosF() instead of this function.
     */
    posF() {
        return this.native.posF();
    }
    /**
     * Returns the pressure for the device. 0.0 indicates that the stylus is not on the tablet,
     * 1.0 indicates the maximum amount of pressure for the stylus
     */
    pressure() {
        return this.native.pressure();
    }
    /**
     * Returns the rotation of the current tool in degrees, where zero means the
     * tip of the stylus is pointing towards the top of the tablet,
     * a positive value means it's turned to the right, and a negative value means it's turned to the left.
     *
     * This can be given by a 4D Mouse or a rotation-capable stylus (such as the Wacom Art Pen or the Apple Pencil).
     *
     * If the device does not support rotation, this value is always 0.0.
     */
    rotation() {
        return this.native.rotation();
    }
    /**
     * Returns the tangential pressure for the device.
     * This is typically given by a finger wheel on an airbrush tool.
     * The range is from -1.0 to 1.0. 0.0 indicates a neutral position.
     * Current airbrushes can only move in the positive direction from the neutrual position.
     * If the device does not support tangential pressure, this value is always 0.0.
     */
    tangentialPressure() {
        return this.native.tangentialPressure();
    }
    /**
     * Returns a unique ID for the current device,
     * making it possible to differentiate between multiple devices being used at the same time on the tablet.
     *
     * Support of this feature is dependent on the tablet.
     *
     * Values for the same device may vary from OS to OS.
     */
    uniqueId() {
        return this.native.uniqueId();
    }
    /**
     * Returns the x position of the device, relative to the widget that received the event
     */
    x() {
        return this.native.x();
    }
    /**
     * Returns the angle between the device (a pen, for example) and the
     * perpendicular in the direction of the x axis.
     * Positive values are towards the tablet's physical right.
     * The angle is in the range -60 to +60 degrees.
     */
    xTilt() {
        return this.native.xTilt();
    }
    /**
     * Returns the y position of the device, relative to the widget that received the event.
     */
    y() {
        return this.native.y();
    }
    /**
     * Returns the angle between the device (a pen, for example) and
     * the perpendicular in the direction of the y axis.
     * Positive values are towards the bottom of the tablet.
     * The angle is within the range -60 to +60 degrees.
     */
    yTilt() {
        return this.native.yTilt();
    }
    /**
     * Returns the z position of the device.
     * Typically this is represented by a wheel on a 4D Mouse. If the device does not support a Z-axis, this value is always zero.
     * This is not the same as pressure.
     */
    z() {
        return this.native.z();
    }
}
exports.QTabletEvent = QTabletEvent;
QTabletEvent.PointerType = PointerType;
QTabletEvent.TabletDevice = TabletDevice;
