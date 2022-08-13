"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDialogOptions = exports.InputMode = exports.QInputDialog = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDialog_1 = require("./QDialog");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control input modal dialogs.

* **This class is a JS wrapper around Qt's [QInputDialog class](https://doc.qt.io/qt-5/qinputdialog.html)**

### Example

```javascript

import { QInputDialog } from '@nodegui/nodegui';

const dialog = new QInputDialog();
dialog.setLabelText('Click that Ok button');
dialog.exec();

```
 */
class QInputDialog extends QDialog_1.QDialog {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QInputDialog(parent.native);
        }
        else {
            native = new addon_1.default.QInputDialog();
        }
        super(native);
    }
    setCancelButtonText(text) {
        this.native.setCancelButtonText(text);
    }
    cancelButtonText() {
        return this.native.cancelButtonText();
    }
    setComboBoxEditable(editable) {
        this.native.setComboxBoxEditable(editable);
    }
    isComboBoxEditable() {
        return this.native.isComboxBoxEditable();
    }
    setDoubleDecimals(decimals) {
        this.native.setDoubleDecimals(decimals);
    }
    doubleDecimals() {
        return this.native.doubleDecimals();
    }
    setDoubleMaximum(value) {
        this.native.setDoubleMaximum(value);
    }
    doubleMaximum() {
        return this.native.doubleMaximum();
    }
    setDoubleMinimum(value) {
        this.native.setDoubleMinimum(value);
    }
    doubleMinimum() {
        return this.native.doubleMinimum();
    }
    doubleStep() {
        return this.native.doubleStep();
    }
    setDoubleStep(value) {
        this.native.setDoubleStep(value);
    }
    doubleValue() {
        return this.native.doubleValue();
    }
    setDoubleValue(value) {
        this.native.setDoubleValue(value);
    }
    inputMode() {
        return this.native.inputMode();
    }
    setInputMode(value) {
        this.native.setInputMode(value);
    }
    intMaximum() {
        return this.native.intMaximum();
    }
    setIntMaximum(value) {
        this.native.setIntMaximum(value);
    }
    intMinimum() {
        return this.native.intMinimum();
    }
    setIntMinimum(value) {
        this.native.setIntMinimum(value);
    }
    intStep() {
        return this.native.intStep();
    }
    setIntStep(value) {
        this.native.setIntStep(value);
    }
    intValue() {
        return this.native.intValue();
    }
    setIntValue(value) {
        this.native.setIntValue(value);
    }
    labelText() {
        return this.native.labelText();
    }
    setLabelText(value) {
        this.native.setLabelText(value);
    }
    okButtonText() {
        return this.native.okButtonText();
    }
    setOkButtonText(value) {
        this.native.setOkButtonText(value);
    }
    options() {
        return this.native.options();
    }
    setOptions(value) {
        this.native.setOptions(value);
    }
    textEchoMode() {
        return this.native.textEchoMode();
    }
    setTextEchoMode(value) {
        this.native.setTextEchoMode(value);
    }
    textValue() {
        return this.native.textValue();
    }
    setTextValue(value) {
        this.native.setTextValue(value);
    }
}
exports.QInputDialog = QInputDialog;
WrapperCache_1.wrapperCache.registerWrapper('QInputDialogWrap', QInputDialog);
var InputMode;
(function (InputMode) {
    InputMode[InputMode["TextInput"] = 0] = "TextInput";
    InputMode[InputMode["IntInput"] = 1] = "IntInput";
    InputMode[InputMode["DoubleInput"] = 2] = "DoubleInput";
})(InputMode = exports.InputMode || (exports.InputMode = {}));
var InputDialogOptions;
(function (InputDialogOptions) {
    InputDialogOptions[InputDialogOptions["NoButtons"] = 1] = "NoButtons";
    InputDialogOptions[InputDialogOptions["UseListViewForComboBoxItems"] = 2] = "UseListViewForComboBoxItems";
    InputDialogOptions[InputDialogOptions["UsePlainTextEditForTextInput"] = 3] = "UsePlainTextEditForTextInput";
})(InputDialogOptions = exports.InputDialogOptions || (exports.InputDialogOptions = {}));
