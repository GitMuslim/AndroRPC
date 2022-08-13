"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionMode = exports.VerticalHeaderFormat = exports.HorizontalHeaderFormat = exports.QCalendarWidget = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> Create and control a selectable monthly calendar.

* **This class is a JS wrapper around Qt's [QCalendarWidget class](https://doc.qt.io/qt-5/qcalendarwidget.html)**

A `QCalendarWidget` provides a monthly based calendar widget allowing the user to select a date.

### Example

```javascript
const { QCalendarWidget } = require("@nodegui/nodegui");

const calendarWidget = new QCalendarWidget();
// more will follow when .selectedDate() et cetera are implemented
```
 */
class QCalendarWidget extends QWidget_1.QWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QCalendarWidget(parent.native);
        }
        else {
            native = new addon_1.default.QCalendarWidget();
        }
        super(native);
    }
    setDateEditAcceptDelay(delay) {
        this.setProperty('dateEditAcceptDelay', delay);
    }
    dateEditAcceptDelay() {
        return this.property('dateEditAcceptDelay').toInt();
    }
    setDateEditEnabled(enable) {
        this.setProperty('dateEditEnabled', enable);
    }
    isDateEditEnabled() {
        return this.property('dateEditEnabled').toBool();
    }
    setFirstDayOfWeek(dayOfWeek) {
        this.setProperty('firstDayOfWeek', dayOfWeek);
    }
    firstDayOfWeek() {
        return this.property('firstDayOfWeek').toInt();
    }
    setGridVisible(show) {
        this.setProperty('gridVisible', show);
    }
    isGridVisible() {
        return this.property('gridVisible').toBool();
    }
    setHorizontalHeaderFormat(format) {
        this.setProperty('horizontalHeaderFormat', format);
    }
    horizontalHeaderFormat() {
        return this.property('horizontalHeaderFormat').toInt();
    }
    setNavigationBarVisible(visible) {
        this.setProperty('navigationBarVisible', visible);
    }
    isNavigationBarVisible() {
        return this.property('navigationBarVisible').toBool();
    }
    setSelectionMode(mode) {
        this.setProperty('selectionMode', mode);
    }
    selectionMode() {
        return this.property('selectionMode').toInt();
    }
    setVerticalHeaderFormat(format) {
        this.setProperty('verticalHeaderFormat', format);
    }
    verticalHeaderFormat() {
        return this.property('verticalHeaderFormat').toInt();
    }
}
exports.QCalendarWidget = QCalendarWidget;
WrapperCache_1.wrapperCache.registerWrapper('QCalendarWidgetWrap', QCalendarWidget);
var HorizontalHeaderFormat;
(function (HorizontalHeaderFormat) {
    HorizontalHeaderFormat[HorizontalHeaderFormat["NoHorizontalHeader"] = 0] = "NoHorizontalHeader";
    HorizontalHeaderFormat[HorizontalHeaderFormat["SingleLetterDayNames"] = 1] = "SingleLetterDayNames";
    HorizontalHeaderFormat[HorizontalHeaderFormat["ShortDayNames"] = 2] = "ShortDayNames";
    HorizontalHeaderFormat[HorizontalHeaderFormat["LongDayNames"] = 3] = "LongDayNames";
})(HorizontalHeaderFormat = exports.HorizontalHeaderFormat || (exports.HorizontalHeaderFormat = {}));
var VerticalHeaderFormat;
(function (VerticalHeaderFormat) {
    VerticalHeaderFormat[VerticalHeaderFormat["NoVerticalHeader"] = 0] = "NoVerticalHeader";
    VerticalHeaderFormat[VerticalHeaderFormat["ISOWeekNumbers"] = 1] = "ISOWeekNumbers";
})(VerticalHeaderFormat = exports.VerticalHeaderFormat || (exports.VerticalHeaderFormat = {}));
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["NoSelection"] = 0] = "NoSelection";
    SelectionMode[SelectionMode["SingleSelection"] = 1] = "SingleSelection";
})(SelectionMode = exports.SelectionMode || (exports.SelectionMode = {}));
