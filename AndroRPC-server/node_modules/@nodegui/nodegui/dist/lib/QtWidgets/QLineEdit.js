"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoMode = exports.QLineEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control editable text field.

* **This class is a JS wrapper around Qt's [QLineEdit class](https://doc.qt.io/qt-5/qlineedit.html)**

A `QLineEdit` provides ability to add and manipulate native editable text field widgets.

### Example

```javascript
const { QLineEdit } = require("@nodegui/nodegui");

const lineEdit = new QLineEdit();
```

 */
class QLineEdit extends QWidget_1.QWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QLineEdit(parent.native);
        }
        else {
            native = new addon_1.default.QLineEdit();
        }
        super(native);
    }
    // TODO: void 	addAction(QAction *action, QLineEdit::ActionPosition position)
    // TODO: QAction *	addAction(const QIcon &icon, QLineEdit::ActionPosition position)
    alignment() {
        return this.property('alignment').toInt();
    }
    backspace() {
        this.native.backspace();
    }
    // TODO: QCompleter *	completer() const
    // TODO: QMenu *	createStandardContextMenu()
    cursorBackward(mark, steps = 1) {
        this.native.cursorBackward(mark, steps);
    }
    cursorForward(mark, steps = 1) {
        this.native.cursorForward(mark, steps);
    }
    cursorMoveStyle() {
        return this.property('cursorMoveStyle').toInt();
    }
    cursorPosition() {
        return this.property('cursorPosition').toInt();
    }
    cursorPositionAt(pos) {
        return this.native.cursorPositionAt(pos);
    }
    cursorWordBackward(mark) {
        this.native.cursorWordBackward(mark);
    }
    cursorWordForward(mark) {
        this.native.cursorWordForward(mark);
    }
    del() {
        this.native.del();
    }
    deselect() {
        this.native.deselect();
    }
    displayText() {
        return this.property('displayText').toString();
    }
    dragEnabled() {
        return this.property('dragEnabled').toBool();
    }
    echoMode() {
        return this.property('echoMode').toInt();
    }
    end(mark) {
        this.native.end(mark);
    }
    hasAcceptableInput() {
        return this.property('hasAcceptableInput').toBool();
    }
    hasFrame() {
        return this.property('hasFrame').toBool();
    }
    hasSelectedText() {
        return this.property('hasSelectedText').toBool();
    }
    home(mark) {
        this.native.home(mark);
    }
    inputMask() {
        return this.property('inputMask').toString();
    }
    insert(newText) {
        this.native.insert(newText);
    }
    isClearButtonEnabled() {
        return this.property('isClearButtonEnabled').toBool();
    }
    isModified() {
        return this.property('isModified').toBool();
    }
    isReadOnly() {
        return this.property('isReadOnly').toBool();
    }
    isRedoAvailable() {
        return this.property('isRedoAvailable').toBool();
    }
    isUndoAvailable() {
        return this.property('isUndoAvailable').toBool();
    }
    maxLength() {
        return this.property('maxLength').toInt();
    }
    placeholderText() {
        return this.property('placeholderText').toString();
    }
    selectedText() {
        return this.property('selectedText').toString();
    }
    selectionEnd() {
        return this.native.selectionEnd();
    }
    selectionLength() {
        return this.native.selectionLength();
    }
    selectionStart() {
        return this.native.selectionStart();
    }
    setAlignment(alignment) {
        this.setProperty('alignment', alignment);
    }
    setClearButtonEnabled(enable) {
        this.setProperty('clearButtonEnabled', enable);
    }
    // TODO: void 	setCompleter(QCompleter *c)
    setCursorMoveStyle(style) {
        this.setProperty('cursorMoveStyle', style);
    }
    setCursorPosition(pos) {
        this.setProperty('cursorPosition', pos);
    }
    setDragEnabled(b) {
        this.setProperty('dragEnabled', b);
    }
    setEchoMode(echoMode) {
        this.setProperty('echoMode', echoMode);
    }
    setFrame(useFrame) {
        this.setProperty('frame', useFrame);
    }
    setInputMask(inputMask) {
        this.setProperty('inputMask', inputMask);
    }
    setMaxLength(maxLength) {
        this.setProperty('maxLength', maxLength);
    }
    setModified(isModified) {
        this.setProperty('modified', isModified);
    }
    setPlaceholderText(text) {
        this.setProperty('placeholderText', text);
    }
    setReadOnly(isReadOnly) {
        this.setProperty('readOnly', isReadOnly);
    }
    setSelection(start, length) {
        this.native.setSelection(start, length);
    }
    setTextMargins(left, top, right, bottom) {
        this.native.setTextMargins(left, top, right, bottom);
    }
    // TODO: void 	setTextMargins(const QMargins &margins)
    // TODO: void 	setValidator(const QValidator *v)
    text() {
        return this.property('text').toString();
    }
    // TODO: QMargins 	textMargins() const
    // TODO: const QValidator *	validator() const
    // *** Public Slots ***
    clear() {
        this.native.clear();
    }
    copy() {
        this.native.copy();
    }
    cut() {
        this.native.cut();
    }
    paste() {
        this.native.paste();
    }
    redo() {
        this.native.redo();
    }
    selectAll() {
        this.native.selectAll();
    }
    setText(text) {
        this.setProperty('text', text);
    }
    undo() {
        this.native.undo();
    }
}
exports.QLineEdit = QLineEdit;
WrapperCache_1.wrapperCache.registerWrapper('QLineEditWrap', QLineEdit);
var EchoMode;
(function (EchoMode) {
    EchoMode[EchoMode["Normal"] = 0] = "Normal";
    EchoMode[EchoMode["NoEcho"] = 1] = "NoEcho";
    EchoMode[EchoMode["Password"] = 2] = "Password";
    EchoMode[EchoMode["PasswordEchoOnEdit"] = 3] = "PasswordEchoOnEdit";
})(EchoMode = exports.EchoMode || (exports.EchoMode = {}));
