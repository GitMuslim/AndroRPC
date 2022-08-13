"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QBrush = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QtEnums_1 = require("../QtEnums");
const QColor_1 = require("./QColor");
const QPixmap_1 = require("./QPixmap");
/**

> The QBrush class defines the fill pattern of shapes drawn by QPainter.

* **This class is a JS wrapper around Qt's [QBrush class](https://doc.qt.io/qt-5/qbrush.html)**

### Example

```javascript
const { QBrush } = require("@nodegui/nodegui");

const brush = new QBrush();
```
 */
class QBrush extends Component_1.Component {
    constructor(nativeOrGlobalColor, style = QtEnums_1.BrushStyle.SolidPattern) {
        let native;
        if (helpers_1.checkIfNativeElement(nativeOrGlobalColor)) {
            native = nativeOrGlobalColor;
        }
        else if (typeof nativeOrGlobalColor === 'number') {
            native = new addon_1.default.QBrush(nativeOrGlobalColor, style);
        }
        else if (nativeOrGlobalColor == null) {
            native = new addon_1.default.QBrush();
        }
        else {
            native = new addon_1.default.QBrush(nativeOrGlobalColor?.native, style);
        }
        super(native);
    }
    isOpaque() {
        return this.native.isOpaque();
    }
    setColor(color) {
        if (typeof color === 'number') {
            this.native.setColor(color);
        }
        else {
            this.native.setColor(color.native);
        }
    }
    color() {
        return new QColor_1.QColor(this.native.color());
    }
    setStyle(style) {
        this.native.setStyle(style);
    }
    style() {
        return this.native.style();
    }
    setTexture(pixmap) {
        this.native.setTexture(pixmap.native);
    }
    texture() {
        return new QPixmap_1.QPixmap(this.native.texture());
    }
    static fromQVariant(variant) {
        return new QBrush(addon_1.default.QBrush.fromQVariant(variant.native));
    }
}
exports.QBrush = QBrush;
