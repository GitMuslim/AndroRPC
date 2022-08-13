"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QErrorMessage = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDialog_1 = require("./QDialog");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> Create and control error message dialogs.

* **This class is a JS wrapper around Qt's [QErrorMessage class](https://doc.qt.io/qt-5/qerrormessage.html)**

The `QErrorMessage` class provides an error message display dialog.

### Example

```javascript
const { QErrorMessage } = require("@nodegui/nodegui");

const errorMessage = new QErrorMessage();

```
 */
class QErrorMessage extends QDialog_1.QDialog {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QErrorMessage(parent.native);
        }
        else {
            native = new addon_1.default.QErrorMessage();
        }
        super(native);
    }
    showMessage(message) {
        this.native.showMessage(message);
    }
}
exports.QErrorMessage = QErrorMessage;
WrapperCache_1.wrapperCache.registerWrapper('QErrorMessageWrap', QErrorMessage);
