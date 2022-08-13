"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QFileDialog = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDialog_1 = require("./QDialog");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control file dialogs.

* **This class is a JS wrapper around Qt's [QFileDialog class](https://doc.qt.io/qt-5/qfiledialog.html)**

A `QFileDialog` class provides a dialog that allow users to select files or directories.

### Example

```javascript
const { QFileDialog } = require("@nodegui/nodegui");

const fileDialog = new QFileDialog();
fileDialog.setFileMode(FileMode.AnyFile);
fileDialog.setNameFilter('Images (*.png *.xpm *.jpg)');
fileDialog.exec();

const selectedFiles = fileDialog.selectedFiles();
console.log(selectedFiles);

```
 */
class QFileDialog extends QDialog_1.QDialog {
    constructor(arg, caption = 'Select File', directory = '', filter = '') {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            native = new addon_1.default.QFileDialog(arg.native, caption, directory, filter);
        }
        else {
            native = new addon_1.default.QFileDialog();
        }
        super(native);
    }
    supportedSchemes() {
        return this.native.supportedSchemes();
    }
    setSupportedSchemes(schemes) {
        this.native.setSupportedSchemes(schemes);
    }
    setNameFilter(filter) {
        this.native.setNameFilter(filter);
    }
    selectedFiles() {
        return this.native.selectedFiles();
    }
    labelText(label) {
        return this.native.labelText(label);
    }
    setLabelText(label, text) {
        this.native.setLabelText(label, text);
    }
    setOption(option, on = true) {
        this.native.setOption(option, on);
    }
    acceptMode() {
        return this.property('acceptMode').toInt();
    }
    defaultSuffix() {
        return this.property('defaultSuffix').toString();
    }
    fileMode() {
        return this.property('fileMode').toInt();
    }
    options() {
        return this.property('options').toInt();
    }
    viewMode() {
        return this.property('viewMode').toInt();
    }
    setAcceptMode(acceptMode) {
        this.setProperty('acceptMode', acceptMode);
    }
    setDefaultSuffix(defaultSuffix) {
        this.setProperty('defaultSuffix', defaultSuffix);
    }
    setFileMode(fileMode) {
        this.setProperty('fileMode', fileMode);
    }
    setOptions(options) {
        this.setProperty('options', options);
    }
}
exports.QFileDialog = QFileDialog;
WrapperCache_1.wrapperCache.registerWrapper('QFileDialogWrap', QFileDialog);
