"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPen = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const QColor_1 = require("./QColor");
/**
 
> The QPen class defines the outline of shapes drawn by QPainter.

* **This class is a JS wrapper around Qt's [QPen class](https://doc.qt.io/qt-5/qpen.html)**

### Example

```javascript
const { QPen } = require("@nodegui/nodegui");

const pen = new QPen();
```
 */
class QPen extends Component_1.Component {
    constructor() {
        super(new addon_1.default.QPen());
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
    setCapStyle(style) {
        this.native.setCapStyle(style);
    }
    setWidth(width) {
        this.native.setWidth(width);
    }
}
exports.QPen = QPen;
