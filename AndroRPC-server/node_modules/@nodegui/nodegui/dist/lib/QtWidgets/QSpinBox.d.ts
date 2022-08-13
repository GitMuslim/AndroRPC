import { QWidget, QWidgetSignals } from './QWidget';
import { QAbstractSpinBox, QAbstractSpinBoxSignals, StepType } from './QAbstractSpinBox';
import { NativeElement } from '../core/Component';
/**

> Create and control spin box widgets.

* **This class is a JS wrapper around Qt's [QSpinBox class](https://doc.qt.io/qt-5/qspinbox.html)**

A `QSpinBox` provides ability to add and manipulate native spin box widgets.

### Example

```javascript
const { QSpinBox } = require("@nodegui/nodegui");

const spinBox = new QSpinBox();
```
 */
export declare class QSpinBox extends QAbstractSpinBox<QSpinBoxSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    cleanText(): string;
    setDisplayIntegerBase(base: number): void;
    displayIntegerBase(): number;
    setMaximum(max: number): void;
    maximum(): number;
    setMinimum(min: number): void;
    minimum(): number;
    setPrefix(prefix: string): void;
    prefix(): string;
    setSingleStep(val: number): void;
    singleStep(): number;
    setStepType(stepType: StepType): void;
    stepType(): StepType;
    setSuffix(suffix: string): void;
    suffix(): string;
    setValue(val: number): void;
    value(): number;
    setRange(minimum: number, maximum: number): void;
}
export interface QSpinBoxSignals extends QAbstractSpinBoxSignals {
    valueChanged: (value: number) => void;
}
