"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPushButton = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractButton_1 = require("./QAbstractButton");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> Create and control buttons.

* **This class is a JS wrapper around Qt's [QPushButton class](https://doc.qt.io/qt-5/qpushbutton.html)**

A `QPushButton` provides ability to add and manipulate native button widgets.

### Example

```javascript
const { QPushButton } = require("@nodegui/nodegui");

const button = new QPushButton();
button.setText("Hello");
```
 */
class QPushButton extends QAbstractButton_1.QAbstractButton {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QPushButton(parent.native);
        }
        else {
            native = new addon_1.default.QPushButton();
        }
        super(native);
    }
    setAutoDefault(auto) {
        this.setProperty('autoDefault', auto);
    }
    autoDefault() {
        return this.property('autoDefault').toBool();
    }
    setDefault(isDefault) {
        this.setProperty('default', isDefault);
    }
    isDefault() {
        return this.property('default').toBool();
    }
    setFlat(isFlat) {
        this.setProperty('flat', isFlat);
    }
    isFlat() {
        return this.property('flat').toBool();
    }
    setMenu(menu) {
        this.native.setMenu(menu.native);
    }
    menu() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.menu());
    }
    showMenu() {
        this.native.showMenu();
    }
}
exports.QPushButton = QPushButton;
WrapperCache_1.wrapperCache.registerWrapper('QPushButtonWrap', QPushButton);
