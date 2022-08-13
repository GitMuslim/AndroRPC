import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QRect } from '../QtCore/QRect';
/**
 > Create and control frame.

* **This class is a JS wrapper around Qt's [QFrame class](https://doc.qt.io/qt-5/qframe.html)**

The QFrame class is the base class of widgets that can have a frame. It can be used directly for creating simple placeholder frames without any contents.

### Example

```javascript
const { QFrame } = require("@nodegui/nodegui");

const frame = new QFrame();
```
 */
export declare class QFrame<Signals extends QFrameSignals = QFrameSignals> extends QWidget<Signals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setFrameRect(r: QRect): void;
    frameRect(): QRect;
    setFrameShadow(type: Shadow): void;
    frameShadow(): Shadow;
    setFrameShape(type: Shape): void;
    frameShape(): Shape;
    frameWidth(): number;
    setLineWidth(width: number): void;
    lineWidth(): number;
    setMidLineWidth(width: number): void;
    midLineWidth(): number;
    setFrameStyle(style: number): void;
    frameStyle(): number;
}
export declare enum Shadow {
    Plain = 16,
    Raised = 32,
    Sunken = 48
}
export declare enum Shape {
    NoFrame = 0,
    Box = 1,
    Panel = 2,
    WinPanel = 3,
    HLine = 4,
    VLine = 5,
    StyledPanel = 6
}
export declare type QFrameSignals = QWidgetSignals;
