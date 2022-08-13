import { QWidget, QWidgetSignals } from './QWidget';
import { QFrame, QFrameSignals } from './QFrame';
import { NativeElement } from '../core/Component';
/**

> Create and control stacked widgets where only one is visible at a time.

* **This class is a JS wrapper around Qt's [QStackedWidget class](https://doc.qt.io/qt-5/qstackedwidget.html)**

### Example

```javascript

const { QMainWindow, QLabel, QStackedWidget } = require("@nodegui/nodegui");

const win = new QMainWindow();
const stacked = new QStackedWidget();

const first = new QLabel();
first.setText('First');

const second = new QLabel();
second.setText('Second');

const third = new QLabel();
third.setText('Third');

stacked.addWidget(first);
stacked.addWidget(second);
stacked.addWidget(third);

stacked.setCurrentWidget(second);
//or
// stacked.setCurrentIndex(1);

win.setCentralWidget(stacked);
win.resize(200, 200);

win.show();
(global as any).win = win;


```
 */
export declare class QStackedWidget extends QFrame<QStackedWidgetSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    addWidget(widget: QWidget): void;
    count(): number;
    currentIndex(): number;
    removeWidget(widget: QWidget): void;
    setCurrentIndex(index: number): void;
    setCurrentWidget(widget: QWidget): void;
}
export interface QStackedWidgetSignals extends QFrameSignals {
    currentChanged: (index: number) => void;
}
