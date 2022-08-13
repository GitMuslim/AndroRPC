import { NativeElement } from '../core/Component';
import { QWidget, QWidgetSignals } from './QWidget';
/**

> Create and control number.

* **This class is a JS wrapper around Qt's [QLCDNumber class](https://doc.qt.io/qt-5/qlcdnumber.html)**

The `QLCDNumber` widget displays a number with LCD-like digits.

### Example

```javascript
const { QLCDNumber } = require("@nodegui/nodegui");

const lcd = new QLCDNumber();

```

 */
export declare class QLCDNumber extends QWidget<QLCDNumberSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setDigitCount(numDigits: number): void;
    digitCount(): number;
    intValue(): number;
    setMode(mode: Mode): void;
    mode(): Mode;
    setSegmentStyle(style: SegmentStyle): void;
    segmentStyle(): SegmentStyle;
    setSmallDecimalPoint(enabled: boolean): void;
    smallDecimalPoint(): boolean;
    value(): number;
    checkOverflow(num: number): boolean;
    display(value: string | number): void;
    setBinMode(): void;
    setDecMode(): void;
    setHexMode(): void;
    setOctMode(): void;
}
export declare enum Mode {
    Hex = 0,
    Dec = 1,
    Oct = 2,
    Bin = 3
}
export declare enum SegmentStyle {
    Outline = 0,
    Filled = 1,
    Flat = 2
}
export interface QLCDNumberSignals extends QWidgetSignals {
    overflow: () => void;
}
