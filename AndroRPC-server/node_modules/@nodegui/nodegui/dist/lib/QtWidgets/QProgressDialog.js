"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QProgressDialog = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDialog_1 = require("./QDialog");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control progress dialogs.

* **This class is a JS wrapper around Qt's [QProgressDialog class](https://doc.qt.io/qt-5/qprogressdialog.html)**

The `QProgressDialog` class provides feedback on the progress of a slow operation.

### Example

```javascript
const { QProgressDialog } = require("@nodegui/nodegui");

const progressDialog = new QProgressDialog();

```
 */
class QProgressDialog extends QDialog_1.QDialog {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QProgressDialog(parent.native);
        }
        else {
            native = new addon_1.default.QProgressDialog();
        }
        super(native);
    }
    setAutoClose(close) {
        this.setProperty('autoClose', close);
    }
    autoClose() {
        return this.property('autoClose').toBool();
    }
    setAutoReset(reset) {
        this.setProperty('autoReset', reset);
    }
    autoReset() {
        return this.property('autoReset').toBool();
    }
    setLabelText(text) {
        this.setProperty('labelText', text);
    }
    labelText() {
        return this.property('labelText').toString();
    }
    setMaximum(maximum) {
        this.setProperty('maximum', maximum);
    }
    maximum() {
        return this.property('maximum').toInt();
    }
    setMinimum(minimum) {
        this.setProperty('minimum', minimum);
    }
    minimum() {
        return this.property('minimum').toInt();
    }
    setMinimumDuration(ms) {
        this.setProperty('minimumDuration', ms);
    }
    minimumDuration() {
        return this.property('minimumDuration').toInt();
    }
    setValue(progress) {
        this.setProperty('value', progress);
    }
    value() {
        return this.property('value').toInt();
    }
    wasCanceled() {
        return this.property('wasCanceled').toBool();
    }
    cancel() {
        this.native.cancel();
    }
    reset() {
        this.native.reset();
    }
    setCancelButtonText(text) {
        this.native.setCancelButtonText(text);
    }
    setRange(minimum, maximum) {
        this.native.setRange(minimum, maximum);
    }
}
exports.QProgressDialog = QProgressDialog;
WrapperCache_1.wrapperCache.registerWrapper('QProgressDialogWrap', QProgressDialog);
