"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QGraphicsDropShadowEffect = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QGraphicsEffect_1 = require("./QGraphicsEffect");
const QColor_1 = require("../QtGui/QColor");
const WrapperCache_1 = require("../core/WrapperCache");
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
class QGraphicsDropShadowEffect extends QGraphicsEffect_1.QGraphicsEffect {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QGraphicsDropShadowEffect(parent.native);
        }
        else {
            native = new addon_1.default.QGraphicsDropShadowEffect();
        }
        super(native);
    }
    setBlurRadius(blurRadius) {
        this.setProperty('blurRadius', blurRadius);
    }
    blurRadius() {
        return this.property('blurRadius').toDouble();
    }
    setColor(color) {
        this.setProperty('color', color.native);
    }
    color() {
        return QColor_1.QColor.fromQVariant(this.property('color'));
    }
    setXOffset(dx) {
        this.setProperty('xOffset', dx);
    }
    xOffset() {
        return this.property('xOffset').toDouble();
    }
    setYOffset(dy) {
        this.setProperty('yOffset', dy);
    }
    yOffset() {
        return this.property('yOffset').toDouble();
    }
}
exports.QGraphicsDropShadowEffect = QGraphicsDropShadowEffect;
WrapperCache_1.wrapperCache.registerWrapper('QGraphicsDropShadowEffectWrap', QGraphicsDropShadowEffect);
