"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapMode = exports.QTextEditLineWrapMode = exports.AutoFormattingFlag = exports.QTextEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractScrollArea_1 = require("./QAbstractScrollArea");
const QFont_1 = require("../QtGui/QFont");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> Create and control editable text field.

* **This class is a JS wrapper around Qt's [QTextEdit class](https://doc.qt.io/qt-5/qtextedit.html)**

A `QTextEdit` provides ability to add and manipulate native editable text field widgets.

### Example

```javascript
const { QTextEdit } = require("@nodegui/nodegui");

const textEdit = new QTextEdit();
```

 */
class QTextEdit extends QAbstractScrollArea_1.QAbstractScrollArea {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QTextEdit(parent.native);
        }
        else {
            native = new addon_1.default.QTextEdit();
        }
        super(native);
    }
    setAcceptRichText(accept) {
        this.setProperty('acceptRichText', accept);
    }
    acceptRichText() {
        return this.property('acceptRichText').toBool();
    }
    setAutoFormatting(features) {
        this.setProperty('autoFormatting', features);
    }
    autoFormatting() {
        return this.property('autoFormatting').toInt();
    }
    setCursorWidth(width) {
        this.setProperty('cursorWidth', width);
    }
    cursorWidth() {
        return this.property('cursorWidth').toInt();
    }
    setDocumentTitle(title) {
        this.setProperty('documentTitle', title);
    }
    documentTitle() {
        return this.property('documentTitle').toString();
    }
    setHtml(text) {
        this.setProperty('html', text);
    }
    toHtml() {
        return this.property('html').toString();
    }
    setLineWrapColumnOrWidth(w) {
        this.setProperty('lineWrapColumnOrWidth', w);
    }
    lineWrapColumnOrWidth() {
        return this.property('lineWrapColumnOrWidth').toInt();
    }
    setLineWrapMode(mode) {
        this.setProperty('lineWrapMode', mode);
    }
    lineWrapMode() {
        return this.property('lineWrapMode').toInt();
    }
    setOverwriteMode(overwrite) {
        this.setProperty('overwriteMode', overwrite);
    }
    overwriteMode() {
        return this.property('overwriteMode').toBool();
    }
    setPlaceholderText(placeholderText) {
        this.setProperty('placeholderText', placeholderText);
    }
    placeholderText() {
        return this.property('placeholderText').toString();
    }
    setPlainText(text) {
        this.setProperty('plainText', text);
    }
    toPlainText() {
        return this.property('plainText').toString();
    }
    setReadOnly(ro) {
        this.setProperty('readOnly', ro);
    }
    isReadOnly() {
        return this.property('readOnly').toBool();
    }
    setTabChangesFocus(b) {
        this.setProperty('tabChangesFocus', b);
    }
    tabChangesFocus() {
        return this.property('tabChangesFocus').toBool();
    }
    setTabStopDistance(distance) {
        this.setProperty('tabStopDistance', distance);
    }
    tabStopDistance() {
        return this.property('tabStopDistance').toDouble();
    }
    setTextInteractionFlags(flags) {
        this.setProperty('textInteractionFlags', flags);
    }
    textInteractionFlags() {
        return this.property('textInteractionFlags').toInt();
    }
    setUndoRedoEnabled(enable) {
        this.setProperty('undoRedoEnabled', enable);
    }
    isUndoRedoEnabled() {
        return this.property('undoRedoEnabled').toBool();
    }
    setWordWrapMode(policy) {
        this.setProperty('wordWrapMode', policy);
    }
    wordWrapMode() {
        return this.property('wordWrapMode').toInt();
    }
    setAlignment(alignment) {
        this.native.setAlignment(alignment);
    }
    alignment() {
        return this.native.alignment();
    }
    canPaste() {
        return this.native.canPaste();
    }
    setCurrentFont(f) {
        this.native.setCurrentFont(f.native);
    }
    currentFont() {
        return new QFont_1.QFont(this.native.currentFont());
    }
    ensureCursorVisible() {
        this.native.ensureCursorVisible();
    }
    setFontFamily(family) {
        this.native.setFontFamily(family);
    }
    fontFamily() {
        return this.native.fontFamily();
    }
    setFontItalic(italic) {
        this.native.setFontItalic(italic);
    }
    fontItalic() {
        return this.native.fontItalic();
    }
    setFontPointSize(s) {
        this.native.setFontPointSize(s);
    }
    fontPointSize() {
        return this.native.fontPointSize();
    }
    setFontUnderline(underline) {
        this.native.setFontUnderline(underline);
    }
    fontUnderline() {
        return this.native.fontUnderline();
    }
    setFontWeight(weight) {
        this.native.setFontWeight(weight);
    }
    fontWeight() {
        return this.native.fontWeight();
    }
    append(text) {
        this.native.append(text);
    }
    clear() {
        this.native.clear();
    }
    copy() {
        this.native.copy();
    }
    cut() {
        this.native.cut();
    }
    insertHtml(text) {
        this.native.insertHtml(text);
    }
    insertPlainText(text) {
        this.native.insertPlainText(text);
    }
    paste() {
        this.native.paste();
    }
    redo() {
        this.native.redo();
    }
    scrollToAnchor(name) {
        this.native.scrollToAnchor(name);
    }
    selectAll() {
        this.native.selectAll();
    }
    setText(text) {
        this.native.setText(text);
    }
    setTextBackgroundColor(color) {
        this.native.setTextBackgroundColor(color.native);
    }
    setTextColor(color) {
        this.native.setTextColor(color.native);
    }
    undo() {
        this.native.undo();
    }
    zommIn(range = 1) {
        this.native.zoomIn(range);
    }
    zoomOut(range = 1) {
        this.native.zoomOut(range);
    }
}
exports.QTextEdit = QTextEdit;
WrapperCache_1.wrapperCache.registerWrapper('QTextEditWrap', QTextEdit);
var AutoFormattingFlag;
(function (AutoFormattingFlag) {
    AutoFormattingFlag[AutoFormattingFlag["AutoNone"] = 0] = "AutoNone";
    AutoFormattingFlag[AutoFormattingFlag["AutoBulletList"] = 1] = "AutoBulletList";
    AutoFormattingFlag[AutoFormattingFlag["AutoAll"] = 4294967295] = "AutoAll";
})(AutoFormattingFlag = exports.AutoFormattingFlag || (exports.AutoFormattingFlag = {}));
var QTextEditLineWrapMode;
(function (QTextEditLineWrapMode) {
    QTextEditLineWrapMode[QTextEditLineWrapMode["NoWrap"] = 0] = "NoWrap";
    QTextEditLineWrapMode[QTextEditLineWrapMode["WidgetWidth"] = 1] = "WidgetWidth";
    QTextEditLineWrapMode[QTextEditLineWrapMode["FixedPixelWidth"] = 2] = "FixedPixelWidth";
    QTextEditLineWrapMode[QTextEditLineWrapMode["FixedColumnWidth"] = 3] = "FixedColumnWidth";
})(QTextEditLineWrapMode = exports.QTextEditLineWrapMode || (exports.QTextEditLineWrapMode = {}));
var WrapMode;
(function (WrapMode) {
    WrapMode[WrapMode["NoWrap"] = 0] = "NoWrap";
    WrapMode[WrapMode["WordWrap"] = 1] = "WordWrap";
    WrapMode[WrapMode["ManualWrap"] = 2] = "ManualWrap";
    WrapMode[WrapMode["WrapAnywhere"] = 3] = "WrapAnywhere";
    WrapMode[WrapMode["WrapAtWordBoundaryOrAnywhere"] = 4] = "WrapAtWordBoundaryOrAnywhere";
})(WrapMode = exports.WrapMode || (exports.WrapMode = {}));
