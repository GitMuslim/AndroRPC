"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorDialogOption = exports.QColorDialog = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDialog_1 = require("./QDialog");
const QColor_1 = require("../QtGui/QColor");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control color dialogs.

* **This class is a JS wrapper around Qt's [QColorDialog class](https://doc.qt.io/qt-5/qcolordialog.html)**

The `QColorDialog` class provides a dialog widget for specifying colors.

### Example

```javascript
const { QColorDialog, QColor } = require("@nodegui/nodegui");

const colorDialog = new QColorDialog();
colorDialog.setCurrentColor(new QColor('black'));
colorDialog.exec();

const color = dialog.currentColor();
console.log(color.red(), color.green(), color.blue());

```
 */
class QColorDialog extends QDialog_1.QDialog {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QColorDialog(parent.native);
        }
        else {
            native = new addon_1.default.QColorDialog();
        }
        super(native);
    }
    setCurrentColor(color) {
        this.setProperty('currentColor', color.native);
    }
    currentColor() {
        return QColor_1.QColor.fromQVariant(this.property('currentColor'));
    }
    setOptions(options) {
        this.setProperty('options', options);
    }
    options() {
        return this.property('options').toInt();
    }
    selectedColor() {
        return new QColor_1.QColor(this.native.selectedColor());
    }
    setOption(option, on = true) {
        this.native.setOption(option, on);
    }
    testOption(option) {
        return this.native.testOption(option);
    }
    static customColor(index) {
        return new QColor_1.QColor(addon_1.default.QColorDialog.customColor(index));
    }
    static customCount() {
        return addon_1.default.QColorDialog.customCount();
    }
    static setCustomColor(index, color) {
        addon_1.default.QColorDialog.setCustomColor(index, color.native);
    }
    static setStandardColor(index, color) {
        addon_1.default.QColorDialog.setStandardColor(index, color.native);
    }
    static standardColor(index) {
        return new QColor_1.QColor(addon_1.default.QColorDialog.standardColor(index));
    }
}
exports.QColorDialog = QColorDialog;
var ColorDialogOption;
(function (ColorDialogOption) {
    ColorDialogOption[ColorDialogOption["ShowAlphaChannel"] = 1] = "ShowAlphaChannel";
    ColorDialogOption[ColorDialogOption["NoButtons"] = 2] = "NoButtons";
    ColorDialogOption[ColorDialogOption["DontUseNativeDialog"] = 4] = "DontUseNativeDialog";
})(ColorDialogOption = exports.ColorDialogOption || (exports.ColorDialogOption = {}));
WrapperCache_1.wrapperCache.registerWrapper('QColorDialogWrap', QColorDialog);
