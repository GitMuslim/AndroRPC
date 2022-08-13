"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineWrapMode = exports.QPlainTextEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractScrollArea_1 = require("./QAbstractScrollArea");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Used to edit and display plain text.

* **This class is a JS wrapper around Qt's [QPlainTextEdit class](https://doc.qt.io/qt-5/qplaintextedit.html)**

A `QPlainTextEdit` provides ability to add and manipulate native editable text field widgets.

### Example

```javascript
const { QPlainTextEdit } = require("@nodegui/nodegui");

const plainTextEdit = new QPlainTextEdit();
```
 */
class QPlainTextEdit extends QAbstractScrollArea_1.QAbstractScrollArea {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QPlainTextEdit(parent.native);
        }
        else {
            native = new addon_1.default.QPlainTextEdit();
        }
        super(native);
    }
    setPlainText(text) {
        // react:✓
        this.native.setPlainText(`${text}`);
    }
    setPlaceholderText(text) {
        // react:✓, //TODO:getter
        this.native.setPlaceholderText(text);
    }
    toPlainText() {
        // react:✓
        return this.native.toPlainText();
    }
    setReadOnly(isReadOnly) {
        // react:✓
        this.native.setReadOnly(isReadOnly);
    }
    clear() {
        // react:✓
        this.native.clear();
    }
    setWordWrapMode(mode) {
        this.native.setWordWrapMode(mode);
    }
    wordWrapMode() {
        return this.native.wordWrapMode();
    }
    setLineWrapMode(mode) {
        this.native.setLineWrapMode(mode);
    }
    lineWrapMode() {
        return this.native.lineWrapMode();
    }
    insertPlainText(text) {
        this.native.insertPlainText(`${text}`);
    }
}
exports.QPlainTextEdit = QPlainTextEdit;
WrapperCache_1.wrapperCache.registerWrapper('QPlainTextEditWrap', QPlainTextEdit);
var LineWrapMode;
(function (LineWrapMode) {
    LineWrapMode[LineWrapMode["NoWrap"] = 0] = "NoWrap";
    LineWrapMode[LineWrapMode["WidgetWidth"] = 1] = "WidgetWidth";
})(LineWrapMode = exports.LineWrapMode || (exports.LineWrapMode = {}));
