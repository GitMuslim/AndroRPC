"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDateTime = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
const QDate_1 = require("./QDate");
const QTime_1 = require("./QTime");
class QDateTime extends Component_1.Component {
    constructor(arg, time) {
        const count = arguments.length;
        let native;
        if (arg && time) {
            native = new addon_1.default.QDateTime(arg.native, time.native);
        }
        else if (count == 1 && helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            native = new addon_1.default.QDateTime();
        }
        super(native);
    }
    addDays(ndays) {
        return new QDateTime(this.native.addDays(ndays));
    }
    addMSecs(msecs) {
        return new QDateTime(this.native.addMSecs(msecs));
    }
    addMonths(nmonths) {
        return new QDateTime(this.native.addMonths(nmonths));
    }
    addSecs(s) {
        return new QDateTime(this.native.addSecs(s));
    }
    addYears(nyears) {
        return new QDateTime(this.native.addYears(nyears));
    }
    date() {
        return new QDate_1.QDate(this.native.date());
    }
    daysTo(other) {
        return this.native.daysTo(other.native);
    }
    isDaylightTime() {
        return this.native.isDaylightTime();
    }
    isNull() {
        return this.native.isNull();
    }
    isValid() {
        return this.native.isValid();
    }
    msecsTo(other) {
        return this.native.msecsTo(other.native);
    }
    offsetFromUtc() {
        return this.native.offsetFromUtc();
    }
    secsTo(other) {
        return this.native.secsTo(other.native);
    }
    setDate(date) {
        this.native.setDate(date.native);
    }
    setMSecsSinceEpoch(msecs) {
        this.native.setMSecsSinceEpoch(msecs);
    }
    setOffsetFromUtc(offsetSeconds) {
        this.native.setOffsetFromUtc(offsetSeconds);
    }
    setSecsSinceEpoch(secs) {
        this.native.setSecsSinceEpoch(secs);
    }
    setTime(time) {
        this.native.setTime(time.native);
    }
    setTimeSpec(spec) {
        this.native.setTimeSpec(spec);
    }
    time() {
        return new QTime_1.QTime(this.native.time());
    }
    timeSpec() {
        return this.native.timeSpec();
    }
    toLocalTime() {
        return new QDateTime(this.native.toLocalTime());
    }
    toMSecsSinceEpoch() {
        return this.native.toMSecsSinceEpoch();
    }
    toOffsetFromUtc(offsetSeconds) {
        return new QDateTime(this.native.toOffsetFromUtc(offsetSeconds));
    }
    toSecsSinceEpoch() {
        return this.native.toSecsSinceEpoch();
    }
    toString(format) {
        return this.native.toString$(format);
    }
    toTimeSpec(spec) {
        return new QDateTime(this.native.toTimeSpec(spec));
    }
    toUTC() {
        return new QDateTime(this.native.toUTC());
    }
    static currentDateTime() {
        return new QDateTime(addon_1.default.QDateTime.currentDateTime());
    }
    static currentDateTimeUtc() {
        return new QDateTime(addon_1.default.QDateTime.currentDateTimeUtc());
    }
    static currentMSecsSinceEpoch() {
        return addon_1.default.QDateTime.currentMSecsSinceEpoch();
    }
    static currentSecsSinceEpoch() {
        return addon_1.default.QDateTime.currentSecsSinceEpoch();
    }
    static fromString(dateTimeString, format) {
        return addon_1.default.QDateTime.fromString(dateTimeString, format);
    }
    static fromQVariant(variant) {
        return new QDateTime(addon_1.default.QDateTime.fromQVariant(variant.native));
    }
}
exports.QDateTime = QDateTime;
