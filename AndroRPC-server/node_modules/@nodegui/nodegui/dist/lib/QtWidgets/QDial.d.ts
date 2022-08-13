import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractSlider, QAbstractSliderSignals } from './QAbstractSlider';
/**

> Create and control dial slider widgets.

* **This class is a JS wrapper around Qt's [QDial class](https://doc.qt.io/qt-5/qdial.html)**

A `QDial` provides ability to add and manipulate native dial slider widgets.

### Example

```javascript
const { QDial } = require("@nodegui/nodegui");

const dial = new QDial();
```
 */
export declare class QDial extends QAbstractSlider<QDialSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    notchSize(): number;
    setNotchTarget(target: number): void;
    notchTarget(): number;
    setNotchesVisible(visible: boolean): void;
    notchesVisible(): boolean;
    setWrapping(on: boolean): void;
    wrapping(): boolean;
}
export declare type QDialSignals = QAbstractSliderSignals;
