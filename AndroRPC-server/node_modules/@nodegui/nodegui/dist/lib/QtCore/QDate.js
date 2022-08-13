"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDate = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const Component_1 = require("../core/Component");
class QDate extends Component_1.Component {
    constructor(arg, month, day) {
        const count = arguments.length;
        let native;
        if (count == 3) {
            native = new addon_1.default.QDate(arg, month, day);
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            native = new addon_1.default.QDate();
        }
        super(native);
    }
    addDays(ndays) {
        return new QDate(this.native.addDays(ndays));
    }
    addMonths(nmonths) {
        return new QDate(this.native.addMonths(nmonths));
    }
    addYears(nyears) {
        return new QDate(this.native.addYears(nyears));
    }
    day() {
        return this.native.day();
    }
    dayOfWeek() {
        return this.native.dayOfWeek();
    }
    dayOfYear() {
        return this.native.dayOfYear();
    }
    daysInMonth() {
        return this.native.daysInMonth();
    }
    daysInYear() {
        return this.native.daysInYear();
    }
    daysTo(d) {
        return this.native.daysTo(d.native);
    }
    isNull() {
        return this.native.isNull();
    }
    isValid() {
        return this.native.isValid();
    }
    month() {
        return this.native.month();
    }
    setDate(year, month, day) {
        return this.native.setDate(year, month, day);
    }
    toJulianDay() {
        return this.native.toJulianDay();
    }
    toString(format) {
        return this.native.toString$(format);
    }
    year() {
        return this.native.year();
    }
    static currentDate() {
        return new QDate(addon_1.default.QDate.currentDate());
    }
    static fromJulianDay(jd) {
        return new QDate(addon_1.default.QDate.fromJulianDay(jd));
    }
    static isLeapYear(year) {
        return addon_1.default.QDate.isLeapYear(year);
    }
    static isValid(year, month, day) {
        return addon_1.default.QDate.isValid(year, month, day);
    }
    static fromString(dateString, format) {
        return new QDate(addon_1.default.QDate.fromString(dateString, format));
    }
    static fromQVariant(variant) {
        return new QDate(addon_1.default.QDate.fromQVariant(variant.native));
    }
}
exports.QDate = QDate;
