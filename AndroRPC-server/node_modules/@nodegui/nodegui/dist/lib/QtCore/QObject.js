"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QObject = void 0;
const EventWidget_1 = require("../core/EventWidget");
const helpers_1 = require("../utils/helpers");
const addon_1 = __importDefault(require("../utils/addon"));
const QVariant_1 = require("./QVariant");
const TimerType_1 = require("../QtEnums/TimerType");
const WrapperCache_1 = require("../core/WrapperCache");
class QObject extends EventWidget_1.EventWidget {
    constructor(nativeElementOrParent) {
        let native;
        if (helpers_1.checkIfNativeElement(nativeElementOrParent)) {
            native = nativeElementOrParent;
        }
        else if (nativeElementOrParent) {
            const parent = nativeElementOrParent;
            native = new addon_1.default.QObject(parent.native);
        }
        else {
            native = new addon_1.default.QObject();
        }
        super(native);
        this.__id = native.__id__();
        WrapperCache_1.wrapperCache.store(this);
    }
    /**
     * Get an ID identifying the underlying C++ object.
     *
     * This can be useful when debugging memory problems with help from
     * `setLogCreateQObject()` and `setLogDestroyQObject()`. The number is
     * hash of the memory address of the C++ object.
     *
     * @return a unique number which is valid for the lifetime of the C++ object.
     */
    _id() {
        return this.__id;
    }
    inherits(className) {
        return this.native.inherits(className);
    }
    setProperty(name, value) {
        return this.native.setProperty(name, value);
    }
    property(name) {
        const nativeVariant = this.native.property(name);
        return new QVariant_1.QVariant(nativeVariant);
    }
    setObjectName(objectName) {
        this.native.setObjectName(objectName);
    }
    objectName() {
        return this.native.objectName();
    }
    dumpObjectTree() {
        this.native.dumpObjectTree();
    }
    dumpObjectInfo() {
        this.native.dumpObjectInfo();
    }
    setParent(parent) {
        if (parent != null) {
            const extern = parent.native.__external_qobject__();
            this.native.setParent(extern);
        }
        else {
            this.native.setParent(null);
        }
    }
    parent() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.parent());
    }
    startTimer(intervalMS, timerType = TimerType_1.TimerType.CoarseTimer) {
        return this.native.startTimer(intervalMS, timerType);
    }
    killTimer(timerId) {
        this.native.killTimer(timerId);
    }
    delete() {
        this.native.delete();
    }
    deleteLater() {
        this.native.deleteLater();
    }
    children() {
        return this.native.children().map((kid) => WrapperCache_1.wrapperCache.getWrapper(kid));
    }
}
exports.QObject = QObject;
WrapperCache_1.wrapperCache.registerWrapper('QObjectWrap', QObject);
