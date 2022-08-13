"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDial = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractSlider_1 = require("./QAbstractSlider");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control dial slider widgets.

* **This class is a JS wrapper around Qt's [QDial class](https://doc.qt.io/qt-5/qdial.html)**

A `QDial` provides ability to add and manipulate native dial slider widgets.

### Example

```javascript
const { QDial } = require("@nodegui/nodegui");

const dial = new QDial();
```
 */
class QDial extends QAbstractSlider_1.QAbstractSlider {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QDial(parent.native);
        }
        else {
            native = new addon_1.default.QDial();
        }
        super(native);
    }
    notchSize() {
        return this.property('notchSize').toInt();
    }
    setNotchTarget(target) {
        this.setProperty('notchTarget', target);
    }
    notchTarget() {
        return this.property('notchTarget').toDouble();
    }
    setNotchesVisible(visible) {
        this.setProperty('notchesVisible', visible);
    }
    notchesVisible() {
        return this.property('notchesVisible').toBool();
    }
    setWrapping(on) {
        this.setProperty('wrapping', on);
    }
    wrapping() {
        return this.property('wrapping').toBool();
    }
}
exports.QDial = QDial;
WrapperCache_1.wrapperCache.registerWrapper('QDialWrap', QDial);
