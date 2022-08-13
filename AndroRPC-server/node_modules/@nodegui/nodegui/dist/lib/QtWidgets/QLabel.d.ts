import { QWidget, QWidgetSignals } from './QWidget';
import { QFrame, QFrameSignals } from './QFrame';
import { QPixmap } from '../QtGui/QPixmap';
import { QMovie } from '../QtGui/QMovie';
import { AlignmentFlag } from '../QtEnums/AlignmentFlag';
import { TextFormat } from '../QtEnums/TextFormat';
import { TextInteractionFlag } from '../QtEnums';
import { QPicture } from '../QtGui/QPicture';
import { NativeElement } from '../core/Component';
/**

> Create and control text.

* **This class is a JS wrapper around Qt's [QLabel class](https://doc.qt.io/qt-5/qlabel.html)**

A `QLabel` provides ability to add and manipulate text.

### Example

```javascript
const { QLabel } = require("@nodegui/nodegui");

const label = new QLabel();
label.setText("Hello");
```

 */
export declare class QLabel extends QFrame<QLabelSignals> {
    private _picture?;
    private _pixmap?;
    private _movie?;
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setAlignment(alignment: AlignmentFlag): void;
    alignment(): AlignmentFlag;
    hasSelectedText(): boolean;
    setIndent(indent: number): void;
    indent(): number;
    setMargin(margin: number): void;
    margin(): number;
    setOpenExternalLinks(open: boolean): void;
    openExternalLinks(): boolean;
    setScaledContents(scaled: boolean): void;
    hasScaledContents(): boolean;
    selectedText(): string;
    setText(text: string | number): void;
    text(): string;
    setTextFormat(format: TextFormat): void;
    textFormat(): TextFormat;
    setTextInteractionFlags(flags: TextInteractionFlag): void;
    textInteractionFlags(): TextInteractionFlag;
    setWordWrap(on: boolean): void;
    wordWrap(): boolean;
    setSelection(start: number, length: number): void;
    selectionStart(): number;
    setBuddy(buddy: QWidget): void;
    buddy(): QWidget | null;
    setMovie(movie: QMovie): void;
    movie(): QMovie | undefined;
    setPicture(picture: QPicture): void;
    picture(): QPicture | undefined;
    setPixmap(pixMap: QPixmap): void;
    pixmap(): QPixmap | undefined;
    setNumDouble(num: number): void;
    setNumInt(num: number): void;
    clear(): void;
}
export interface QLabelSignals extends QFrameSignals {
    linkActivated: (link: string) => void;
    linkHovered: (link: string) => void;
}
