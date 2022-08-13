import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractSpinBox, QAbstractSpinBoxSignals, StepType } from './QAbstractSpinBox';
/**

> Create and control double spin box widgets.

* **This class is a JS wrapper around Qt's [QDoubleSpinBox class](https://doc.qt.io/qt-5/qdoublespinbox.html)**

A `QDoubleSpinBox` provides ability to add and manipulate native double spin box widgets.

### Example

```javascript
const { QDoubleSpinBox } = require("@nodegui/nodegui");

const doublespinBox = new QDoubleSpinBox();
```
 */
export declare class QDoubleSpinBox extends QAbstractSpinBox<QDoubleSpinBoxSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    cleanText(): string;
    setDecimals(prec: number): void;
    decimals(): number;
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
    textFromValue(value: number): string;
    valueFromText(text: string): number;
}
export interface QDoubleSpinBoxSignals extends QAbstractSpinBoxSignals {
    valueChanged: (value: number) => void;
}
