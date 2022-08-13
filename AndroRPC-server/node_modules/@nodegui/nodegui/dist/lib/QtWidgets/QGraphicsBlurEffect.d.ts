import { NativeElement } from '../core/Component';
import { QObject } from '../QtCore/QObject';
import { QGraphicsEffect, QGraphicsEffectSignals } from './QGraphicsEffect';
/**

> The QGraphicsBlurEffect class provides a blur effect.

* **This class is a JS wrapper around Qt's [QGraphicsBlurEffect class](https://doc.qt.io/qt-5/qgraphicsblureffect.html)**

A blur effect blurs the source. This effect is useful for reducing details, such as when the source loses focus and you want to draw attention to other elements.

### Example

```javascript
const { QGraphicsBlurEffect } = require("@nodegui/nodegui");

const blur = new QGraphicsBlurEffect();
blur.setBlurRadius(8);
```
 */
export declare class QGraphicsBlurEffect extends QGraphicsEffect<QGraphicsBlurEffectSignals> {
    constructor(arg?: QObject | NativeElement);
    setBlurHints(hints: BlurHint): void;
    blurHints(): BlurHint;
    setBlurRadius(blurRadius: number): void;
    blurRadius(): number;
}
export declare enum BlurHint {
    PerformanceHint = 0,
    QualityHint = 1,
    AnimationHint = 2
}
export interface QGraphicsBlurEffectSignals extends QGraphicsEffectSignals {
    blurHintsChanged: (hints: BlurHint) => void;
    blurRadiusChanged: (radius: number) => void;
}
