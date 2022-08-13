import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractSlider, QAbstractSliderSignals } from './QAbstractSlider';
/**

> Create and control slider widgets.

* **This class is a JS wrapper around Qt's [QSlider class](https://doc.qt.io/qt-5/qslider.html)**

A `QSlider` provides ability to add and manipulate native slider widgets.

### Example

```javascript
const { QSlider } = require("@nodegui/nodegui");

const slider = new QSlider();
```
 */
export declare class QSlider extends QAbstractSlider<QSliderSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setTickInterval(ti: number): void;
    tickInterval(): number;
    setTickPosition(position: TickPosition): void;
    tickPosition(): TickPosition;
}
export declare enum TickPosition {
    NoTicks = 0,
    TicksAbove = 1,
    TicksBelow = 2,
    TicksBothSides = 3,
    TicksLeft = 1,
    TicksRight = 2
}
export declare type QSliderSignals = QAbstractSliderSignals;
