"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRadioButton = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractButton_1 = require("./QAbstractButton");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> Create and control radio button.

* **This class is a JS wrapper around Qt's [QRadioButton class](https://doc.qt.io/qt-5/qradiobutton.html)**

A `QRadioButton` provides ability to add and manipulate native radio button widgets.

### Example

```javascript
const { QRadioButton } = require("@nodegui/nodegui");

const radioButton = new QRadioButton();
radioButton.setText("Hello");
```

 */
class QRadioButton extends QAbstractButton_1.QAbstractButton {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QRadioButton(parent.native);
        }
        else {
            native = new addon_1.default.QRadioButton();
        }
        super(native);
    }
}
exports.QRadioButton = QRadioButton;
WrapperCache_1.wrapperCache.registerWrapper('QRadioButtonWrap', QRadioButton);
