import { QWidget } from './QWidget';
import { QLayout, QLayoutSignals } from './QLayout';
import { NativeElement } from '../core/Component';
import { AlignmentFlag, Direction } from '../QtEnums';
/**

> Lines up child widgets horizontally or vertically.

* **This class is a JS wrapper around Qt's [QBoxLayout class](https://doc.qt.io/qt-5/qboxlayout.html)**

### Example

```javascript
// This example arranges two calendars horizontally.

const { QBoxLayout, QCalendarWidget } = require("@nodegui/nodegui");

const centralWidget = new QWidget();
const boxLayout = new QBoxLayout(0);

boxLayout.addWidget(new QCalendarWidget());
boxLayout.addWidget(new QCalendarWidget());
centralWidget.setLayout(boxLayout);
```
 */
export declare class QBoxLayout extends QLayout<QBoxLayoutSignals> {
    constructor(arg: NativeElement | Direction, parent?: QWidget);
    addLayout(layout: QLayout, stretch?: number): void;
    addSpacing(size: number): void;
    addStretch(stretch?: number): void;
    addStrut(size: number): void;
    addWidget(widget: QWidget, stretch?: number, alignment?: AlignmentFlag): void;
    insertWidget(index: number, widget: QWidget, stretch?: number): void;
    direction(): Direction;
    insertLayout(index: number, layout: QLayout, stretch?: number): void;
    insertSpacing(index: number, size: number): void;
    insertStretch(index: number, stretch?: number): void;
    removeWidget(widget: QWidget): void;
    setDirection(dir: Direction): void;
    setStretch(index: number, stretch: number): void;
    count(): number;
}
export declare type QBoxLayoutSignals = QLayoutSignals;
