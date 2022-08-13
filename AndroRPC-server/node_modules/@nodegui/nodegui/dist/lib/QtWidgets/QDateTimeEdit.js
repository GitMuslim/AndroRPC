"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDateTimeEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractSpinBox_1 = require("./QAbstractSpinBox");
const QDate_1 = require("../QtCore/QDate");
const QDateTime_1 = require("../QtCore/QDateTime");
const QTime_1 = require("../QtCore/QTime");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> Creates and controls a widget for editing dates and times with spin box layout.

* **This class is a JS wrapper around Qt's [QDateTimeEdit class](https://doc.qt.io/qt-5/qdatetimeedit.html)**

### Example

```javascript
const { QDateTimeEdit, QDate, QTime } = require("@nodegui/nodegui");

const dateTimeEdit = new QDateTimeEdit();

let date = new QDate();
date.setDate(2020, 1, 1);

let time = new QTime();
time.setHMS(16, 30, 0);

dateTimeEdit.setDate(date);
dateTimeEdit.setTime(time);
```
 */
class QDateTimeEdit extends QAbstractSpinBox_1.QAbstractSpinBox {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QDateTimeEdit(parent.native);
        }
        else {
            native = new addon_1.default.QDateTimeEdit();
        }
        super(native);
    }
    setCalendarWidget(calendarWidget) {
        this.native.setCalendarWidget(calendarWidget.native);
    }
    calendarWidget() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.calendarWidget());
    }
    setCalendarPopup(enable) {
        this.setProperty('calendarPopup', enable);
    }
    calendarPopup() {
        return this.property('calendarPopup').toBool();
    }
    setDate(date) {
        this.setProperty('date', date.native);
    }
    date() {
        const date = this.property('date');
        return QDate_1.QDate.fromQVariant(date);
    }
    setDateTime(datetime) {
        this.setProperty('dateTime', datetime.native);
    }
    dateTime() {
        const datetime = this.property('dateTime');
        return QDateTime_1.QDateTime.fromQVariant(datetime);
    }
    setDisplayFormat(format) {
        this.setProperty('displayFormat', format);
    }
    displayFormat() {
        return this.property('displayFormat').toString();
    }
    setTime(time) {
        this.setProperty('time', time.native);
    }
    time() {
        const time = this.property('time');
        return QTime_1.QTime.fromQVariant(time);
    }
    setTimeSpec(spec) {
        this.setProperty('timeSpec', spec);
    }
    timeSpec() {
        return this.property('timeSpec').toInt();
    }
}
exports.QDateTimeEdit = QDateTimeEdit;
WrapperCache_1.wrapperCache.registerWrapper('QDateTimeEditWrap', QDateTimeEdit);
