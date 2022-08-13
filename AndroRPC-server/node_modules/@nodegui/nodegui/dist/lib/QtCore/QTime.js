"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTime = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
class QTime extends Component_1.Component {
    constructor(nativeOrHours, m, s = 0, ms = 0) {
        const count = arguments.length;
        let native;
        if (count > 1) {
            native = new addon_1.default.QTime(nativeOrHours, m, s, ms);
        }
        else if (helpers_1.checkIfNativeElement(nativeOrHours)) {
            native = nativeOrHours;
        }
        else {
            native = new addon_1.default.QTime();
        }
        super(native);
    }
    addMSecs(ms) {
        return new QTime(this.native.addMSecs(ms));
    }
    addSecs(s) {
        return new QTime(this.native.addSecs(s));
    }
    elapsed() {
        return this.native.elapsed();
    }
    hour() {
        return this.native.hour();
    }
    isNull() {
        return this.native.isNull();
    }
    isValid() {
        return this.native.isValid();
    }
    minute() {
        return this.native.minute();
    }
    msec() {
        return this.native.msec();
    }
    msecsSinceStartOfDay() {
        return this.native.msecsSinceStartOfDay();
    }
    msecsTo(t) {
        return this.native.msecsTo(t.native);
    }
    restart() {
        return this.native.restart();
    }
    second() {
        return this.native.second();
    }
    secsTo(t) {
        return this.native.secsTo(t.native);
    }
    setHMS(h, m, s, ms = 0) {
        return this.native.setHMS(h, m, s, ms);
    }
    start() {
        this.native.start();
    }
    toString(format) {
        return this.native.toString$(format);
    }
    static currentTime() {
        return new QTime(addon_1.default.QTime.currentTime());
    }
    static fromMSecsSinceStartOfDay(msecs) {
        return new QTime(addon_1.default.QTime.fromMSecsSinceStartOfDay(msecs));
    }
    static isValid(h, m, s, ms = 0) {
        return addon_1.default.QTime.isValid(h, m, s, ms);
    }
    static fromString(timeString, format) {
        return new QTime(addon_1.default.QTime.fromString(timeString, format));
    }
    static fromQVariant(variant) {
        return new QTime(addon_1.default.QTime.fromQVariant(variant.native));
    }
}
exports.QTime = QTime;
