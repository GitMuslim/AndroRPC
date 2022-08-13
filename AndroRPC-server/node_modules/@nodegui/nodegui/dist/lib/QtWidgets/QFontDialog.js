"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontDialogOption = exports.QFontDialog = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDialog_1 = require("./QDialog");
const QFont_1 = require("../QtGui/QFont");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control font dialogs.

* **This class is a JS wrapper around Qt's [QFontDialog class](https://doc.qt.io/qt-5/qfontdialog.html)**

The `QFontDialog` class provides a dialog widget for selecting a font.

### Example

```javascript
const { QFontDialog } = require("@nodegui/nodegui");

const fontDialog = new QFontDialog();
fontDialog.exec();
const font = fontDialog.currentFont();
console.log(font);

```
 */
class QFontDialog extends QDialog_1.QDialog {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QFontDialog(parent.native);
        }
        else {
            native = new addon_1.default.QFontDialog();
        }
        super(native);
    }
    setCurrentFont(font) {
        this.setProperty('currentFont', font.native);
    }
    currentFont() {
        return QFont_1.QFont.fromQVariant(this.property('currentFont'));
    }
    setOptions(options) {
        this.setProperty('options', options);
    }
    options() {
        return this.property('options').toInt();
    }
    selectedFont() {
        return new QFont_1.QFont(this.native.selectedFont());
    }
    setOption(option, on = true) {
        this.native.setOption(option, on);
    }
    testOption(option) {
        return this.native.testOption(option);
    }
}
exports.QFontDialog = QFontDialog;
WrapperCache_1.wrapperCache.registerWrapper('QFontDialogWrap', QFontDialog);
var FontDialogOption;
(function (FontDialogOption) {
    FontDialogOption[FontDialogOption["NoButtons"] = 1] = "NoButtons";
    FontDialogOption[FontDialogOption["DontUseNativeDialog"] = 2] = "DontUseNativeDialog";
    FontDialogOption[FontDialogOption["ScalableFonts"] = 4] = "ScalableFonts";
    FontDialogOption[FontDialogOption["NonScalableFonts"] = 8] = "NonScalableFonts";
    FontDialogOption[FontDialogOption["MonospacedFonts"] = 16] = "MonospacedFonts";
    FontDialogOption[FontDialogOption["ProportionalFonts"] = 32] = "ProportionalFonts";
})(FontDialogOption = exports.FontDialogOption || (exports.FontDialogOption = {}));
