import { QWidget, QWidgetSignals } from './QWidget';
import { QAbstractScrollArea, QAbstractScrollAreaSignals } from './QAbstractScrollArea';
import { AlignmentFlag, TextInteractionFlag } from '../QtEnums';
import { QFont } from '../QtGui/QFont';
import { QColor } from '../QtGui/QColor';
import { NativeElement } from '../core/Component';
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
export declare class QTextEdit<Signals extends QTextEditSignals = QTextEditSignals> extends QAbstractScrollArea<Signals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setAcceptRichText(accept: boolean): void;
    acceptRichText(): boolean;
    setAutoFormatting(features: AutoFormattingFlag): void;
    autoFormatting(): AutoFormattingFlag;
    setCursorWidth(width: number): void;
    cursorWidth(): number;
    setDocumentTitle(title: string): void;
    documentTitle(): string;
    setHtml(text: string): void;
    toHtml(): string;
    setLineWrapColumnOrWidth(w: number): void;
    lineWrapColumnOrWidth(): number;
    setLineWrapMode(mode: QTextEditLineWrapMode): void;
    lineWrapMode(): QTextEditLineWrapMode;
    setOverwriteMode(overwrite: boolean): void;
    overwriteMode(): boolean;
    setPlaceholderText(placeholderText: string): void;
    placeholderText(): string;
    setPlainText(text: string): void;
    toPlainText(): string;
    setReadOnly(ro: boolean): void;
    isReadOnly(): boolean;
    setTabChangesFocus(b: boolean): void;
    tabChangesFocus(): boolean;
    setTabStopDistance(distance: number): void;
    tabStopDistance(): number;
    setTextInteractionFlags(flags: TextInteractionFlag): void;
    textInteractionFlags(): TextInteractionFlag;
    setUndoRedoEnabled(enable: boolean): void;
    isUndoRedoEnabled(): boolean;
    setWordWrapMode(policy: WrapMode): void;
    wordWrapMode(): WrapMode;
    setAlignment(alignment: AlignmentFlag): void;
    alignment(): AlignmentFlag;
    canPaste(): boolean;
    setCurrentFont(f: QFont): void;
    currentFont(): QFont;
    ensureCursorVisible(): void;
    setFontFamily(family: string): void;
    fontFamily(): string;
    setFontItalic(italic: boolean): void;
    fontItalic(): boolean;
    setFontPointSize(s: number): void;
    fontPointSize(): number;
    setFontUnderline(underline: boolean): void;
    fontUnderline(): boolean;
    setFontWeight(weight: number): void;
    fontWeight(): number;
    append(text: string): void;
    clear(): void;
    copy(): void;
    cut(): void;
    insertHtml(text: string): void;
    insertPlainText(text: string): void;
    paste(): void;
    redo(): void;
    scrollToAnchor(name: string): void;
    selectAll(): void;
    setText(text: string): void;
    setTextBackgroundColor(color: QColor): void;
    setTextColor(color: QColor): void;
    undo(): void;
    zommIn(range?: number): void;
    zoomOut(range?: number): void;
}
export declare enum AutoFormattingFlag {
    AutoNone = 0,
    AutoBulletList = 1,
    AutoAll = 4294967295
}
export declare enum QTextEditLineWrapMode {
    NoWrap = 0,
    WidgetWidth = 1,
    FixedPixelWidth = 2,
    FixedColumnWidth = 3
}
export declare enum WrapMode {
    NoWrap = 0,
    WordWrap = 1,
    ManualWrap = 2,
    WrapAnywhere = 3,
    WrapAtWordBoundaryOrAnywhere = 4
}
export interface QTextEditSignals extends QAbstractScrollAreaSignals {
    copyAvailable: (yes: boolean) => void;
    cursorPositionChanged: () => void;
    redoAvailable: (available: boolean) => void;
    selectionChanged: () => void;
    textChanged: () => void;
    undoAvailable: (available: boolean) => void;
}
