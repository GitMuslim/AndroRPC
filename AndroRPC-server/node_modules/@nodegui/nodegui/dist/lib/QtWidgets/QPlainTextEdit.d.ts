import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractScrollArea, QAbstractScrollAreaSignals } from './QAbstractScrollArea';
import { QTextOptionWrapMode } from '../QtGui/QTextOption';
export interface QPlainTextEditSignals extends QAbstractScrollAreaSignals {
    textChanged: () => void;
    blockCountChanged: (blockCount: number) => void;
    copyAvailable: (yes: boolean) => void;
    cursorPositionChanged: () => void;
    modificationChanged: (changed: boolean) => void;
    redoAvailable: (available: boolean) => void;
    selectionChanged: () => void;
    undoAvailable: (available: boolean) => void;
}
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
export declare class QPlainTextEdit extends QAbstractScrollArea<QPlainTextEditSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setPlainText(text: string | number): void;
    setPlaceholderText(text: string): void;
    toPlainText(): string;
    setReadOnly(isReadOnly: boolean): void;
    clear(): void;
    setWordWrapMode(mode: QTextOptionWrapMode): void;
    wordWrapMode(): QTextOptionWrapMode;
    setLineWrapMode(mode: LineWrapMode): void;
    lineWrapMode(): LineWrapMode;
    insertPlainText(text: string | number): void;
}
export declare enum LineWrapMode {
    NoWrap = 0,
    WidgetWidth = 1
}
