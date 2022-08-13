import { NativeElement } from '../core/Component';
import { QObject } from '../QtCore/QObject';
import { QGraphicsEffect, QGraphicsEffectSignals } from './QGraphicsEffect';
import { QColor } from '../QtGui/QColor';
/**

> The QGraphicsDropShadowEffect class provides a drop shadow effect.

* **This class is a JS wrapper around Qt's [QGraphicsDropShadowEffect class](https://doc.qt.io/qt-5/qgraphicsdropshadoweffect.html)**

A drop shadow effect renders the source with a drop shadow.

### Example

```javascript
const { QGraphicsDropShadowEffect } = require("@nodegui/nodegui");

const shadow = new QGraphicsDropShadowEffect();
shadow.setBlurRadius(8);
```
 */
export declare class QGraphicsDropShadowEffect extends QGraphicsEffect<QGraphicsDropShadowEffectSignals> {
    constructor(arg?: QObject | NativeElement);
    setBlurRadius(blurRadius: number): void;
    blurRadius(): number;
    setColor(color: QColor): void;
    color(): QColor;
    setXOffset(dx: number): void;
    xOffset(): number;
    setYOffset(dy: number): void;
    yOffset(): number;
}
export interface QGraphicsDropShadowEffectSignals extends QGraphicsEffectSignals {
    blurRadiusChanged: (blurRadius: number) => void;
}
