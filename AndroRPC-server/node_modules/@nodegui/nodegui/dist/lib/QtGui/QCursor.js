"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QCursor = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
/**
 
> The QCursor class provides scalable icons in different modes and states.

* **This class is a JS wrapper around Qt's [QCursor class](https://doc.qt.io/qt-5/qcursor.html)**

### Example

```javascript
const { QCursor } = require("@nodegui/nodegui");

const cursor = new QCursor();
```
 */
class QCursor extends Component_1.Component {
    constructor(arg) {
        let native;
        if (arg) {
            native = new addon_1.default.QCursor(arg);
        }
        else {
            native = new addon_1.default.QCursor();
        }
        super(native);
    }
    pos() {
        return this.native.pos();
    }
    setPos(x, y) {
        return this.native.setPos(x, y);
    }
}
exports.QCursor = QCursor;
