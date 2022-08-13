import { NativeElement } from '../core/Component';
import { QObject, QObjectSignals } from '../QtCore/QObject';
import { QPixmap } from './QPixmap';
/**

> The QClipboard class provides access to the window system clipboard.

* **This class is a JS wrapper around Qt's [QClipboard class](https://doc.qt.io/qt-5/QClipboard.html)**

### Example

```javascript
const {
  QClipboard,
  QClipboardMode,
  QApplication
} = require("@nodegui/nodegui");

const clipboard = QApplication.clipboard();
const text = clipboard.text(QClipboardMode.Clipboard);
```
 */
export declare class QClipboard extends QObject<QClipboardSignals> {
    constructor(native: NativeElement);
    clear(mode?: QClipboardMode): void;
    setText(text: string, mode?: QClipboardMode): void;
    text(mode?: QClipboardMode): string;
    setPixmap(pixmap: QPixmap, mode?: QClipboardMode): void;
    pixmap(mode: QClipboardMode): QPixmap;
}
export declare enum QClipboardMode {
    Clipboard = 0,
    Selection = 1,
    FindBuffer = 2
}
export interface QClipboardSignals extends QObjectSignals {
    changed: (mode: QClipboardMode) => void;
    dataChanged: () => void;
    findBufferChanged: () => void;
    selectionChanged: () => void;
}
