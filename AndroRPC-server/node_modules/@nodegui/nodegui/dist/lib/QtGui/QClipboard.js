"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QClipboardMode = exports.QClipboard = void 0;
const helpers_1 = require("../utils/helpers");
const QObject_1 = require("../QtCore/QObject");
const QPixmap_1 = require("./QPixmap");
const WrapperCache_1 = require("../core/WrapperCache");
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
class QClipboard extends QObject_1.QObject {
    constructor(native) {
        if (!helpers_1.checkIfNativeElement(native)) {
            throw new Error('QClipboard cannot be initialised this way. Use QApplication::clipboard()');
        }
        super(native);
    }
    clear(mode = QClipboardMode.Clipboard) {
        this.native.clear(mode);
    }
    setText(text, mode = QClipboardMode.Clipboard) {
        this.native.setText(text, mode);
    }
    text(mode = QClipboardMode.Clipboard) {
        return this.native.text(mode);
    }
    setPixmap(pixmap, mode = QClipboardMode.Clipboard) {
        this.native.setPixmap(pixmap.native, mode);
    }
    pixmap(mode) {
        return new QPixmap_1.QPixmap(this.native.pixmap(mode));
    }
}
exports.QClipboard = QClipboard;
WrapperCache_1.wrapperCache.registerWrapper('QClipboardWrap', QClipboard);
var QClipboardMode;
(function (QClipboardMode) {
    QClipboardMode[QClipboardMode["Clipboard"] = 0] = "Clipboard";
    QClipboardMode[QClipboardMode["Selection"] = 1] = "Selection";
    QClipboardMode[QClipboardMode["FindBuffer"] = 2] = "FindBuffer";
})(QClipboardMode = exports.QClipboardMode || (exports.QClipboardMode = {}));
helpers_1.registerNativeWrapFunction('QClipboardWrap', (native) => {
    return WrapperCache_1.wrapperCache.get(QClipboard, native);
});
