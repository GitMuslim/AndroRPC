import { QWidget, QWidgetSignals } from './QWidget';
import { AlignmentFlag } from '../QtEnums/AlignmentFlag';
import { CursorMoveStyle } from '../QtEnums/CursorMoveStyle';
import { QPoint } from '../QtCore/QPoint';
import { NativeElement } from '../core/Component';
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
export declare class QLineEdit extends QWidget<QLineEditSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    alignment(): AlignmentFlag;
    backspace(): void;
    cursorBackward(mark: boolean, steps?: number): void;
    cursorForward(mark: boolean, steps?: number): void;
    cursorMoveStyle(): CursorMoveStyle;
    cursorPosition(): number;
    cursorPositionAt(pos: QPoint): number;
    cursorWordBackward(mark: boolean): void;
    cursorWordForward(mark: boolean): void;
    del(): void;
    deselect(): void;
    displayText(): string;
    dragEnabled(): boolean;
    echoMode(): EchoMode;
    end(mark: boolean): void;
    hasAcceptableInput(): boolean;
    hasFrame(): boolean;
    hasSelectedText(): boolean;
    home(mark: boolean): void;
    inputMask(): string;
    insert(newText: string): void;
    isClearButtonEnabled(): boolean;
    isModified(): boolean;
    isReadOnly(): boolean;
    isRedoAvailable(): boolean;
    isUndoAvailable(): boolean;
    maxLength(): number;
    placeholderText(): string;
    selectedText(): string;
    selectionEnd(): number;
    selectionLength(): number;
    selectionStart(): number;
    setAlignment(alignment: AlignmentFlag): void;
    setClearButtonEnabled(enable: boolean): void;
    setCursorMoveStyle(style: CursorMoveStyle): void;
    setCursorPosition(pos: number): void;
    setDragEnabled(b: boolean): void;
    setEchoMode(echoMode: EchoMode): void;
    setFrame(useFrame: boolean): void;
    setInputMask(inputMask: string): void;
    setMaxLength(maxLength: number): void;
    setModified(isModified: boolean): void;
    setPlaceholderText(text: string): void;
    setReadOnly(isReadOnly: boolean): void;
    setSelection(start: number, length: number): void;
    setTextMargins(left: number, top: number, right: number, bottom: number): void;
    text(): string;
    clear(): void;
    copy(): void;
    cut(): void;
    paste(): void;
    redo(): void;
    selectAll(): void;
    setText(text: string): void;
    undo(): void;
}
export declare enum EchoMode {
    Normal = 0,
    NoEcho = 1,
    Password = 2,
    PasswordEchoOnEdit = 3
}
export interface QLineEditSignals extends QWidgetSignals {
    cursorPositionChanged: (oldPos: number, newPos: number) => void;
    editingFinished: () => void;
    inputRejected: () => void;
    returnPressed: () => void;
    selectionChanged: () => void;
    textChanged: (text: string) => void;
    textEdited: (text: string) => void;
}
