import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QDate } from '../QtCore/QDate';
import { DayOfWeek } from '../QtEnums';
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
export declare class QCalendarWidget extends QWidget<QCalendarWidgetSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setDateEditAcceptDelay(delay: number): void;
    dateEditAcceptDelay(): number;
    setDateEditEnabled(enable: boolean): void;
    isDateEditEnabled(): boolean;
    setFirstDayOfWeek(dayOfWeek: DayOfWeek): void;
    firstDayOfWeek(): DayOfWeek;
    setGridVisible(show: boolean): void;
    isGridVisible(): boolean;
    setHorizontalHeaderFormat(format: HorizontalHeaderFormat): void;
    horizontalHeaderFormat(): HorizontalHeaderFormat;
    setNavigationBarVisible(visible: boolean): void;
    isNavigationBarVisible(): boolean;
    setSelectionMode(mode: SelectionMode): void;
    selectionMode(): SelectionMode;
    setVerticalHeaderFormat(format: VerticalHeaderFormat): void;
    verticalHeaderFormat(): VerticalHeaderFormat;
}
export declare enum HorizontalHeaderFormat {
    NoHorizontalHeader = 0,
    SingleLetterDayNames = 1,
    ShortDayNames = 2,
    LongDayNames = 3
}
export declare enum VerticalHeaderFormat {
    NoVerticalHeader = 0,
    ISOWeekNumbers = 1
}
export declare enum SelectionMode {
    NoSelection = 0,
    SingleSelection = 1
}
export interface QCalendarWidgetSignals extends QWidgetSignals {
    activated: (date: QDate) => void;
    clicked: (date: QDate) => void;
    currentPageChanged: (year: number, month: number) => void;
    selectionChanged: () => void;
}
