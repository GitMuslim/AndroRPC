import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { Orientation, AlignmentFlag } from '../QtEnums';
/**

> Create and control progress bar widgets.

* **This class is a JS wrapper around Qt's [QProgressBar class](https://doc.qt.io/qt-5/qprogressbar.html)**

A `QProgressBar` provides ability to add and manipulate native progress bar widgets.

### Example

```javascript
const { QProgressBar } = require("@nodegui/nodegui");

const progressBar = new QProgressBar();
```
 */
export declare class QProgressBar extends QWidget<QProgressBarSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setAlignment(alignment: AlignmentFlag): void;
    alignment(): AlignmentFlag;
    setFormat(format: string): void;
    format(): string;
    setInvertedAppearance(invert: boolean): void;
    invertedAppearance(): boolean;
    setMaximum(maximum: number): void;
    maximum(): number;
    setMinimum(minimum: number): void;
    minimum(): number;
    setOrientation(orientation: Orientation): void;
    orientation(): Orientation;
    text(): string;
    setTextDirection(textDirection: QProgressBarDirection): void;
    textDirection(): QProgressBarDirection;
    setTextVisible(visible: boolean): void;
    isTextVisible(): boolean;
    setValue(value: number): void;
    value(): number;
    resetFormat(): void;
    reset(): void;
    setRange(minimum: number, maximum: number): void;
}
export declare enum QProgressBarDirection {
    TopToBottom = 0,
    BottomToTop = 1
}
export interface QProgressBarSignals extends QWidgetSignals {
    valueChanged: (value: number) => void;
}
