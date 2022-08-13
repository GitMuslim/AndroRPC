"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTextBrowser = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QUrl_1 = require("../QtCore/QUrl");
const QTextEdit_1 = require("./QTextEdit");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control text browser.

* **This class is a JS wrapper around Qt's [QTextBrowser class](https://doc.qt.io/qt-5/qtextbrowser.html)**

A `QTextBrowser` provides ability to add and manipulate native text browser widgets.

### Example

```javascript
const { QTextBrowser } = require("@nodegui/nodegui");

const textBrowser = new QTextBrowser();
```

 */
class QTextBrowser extends QTextEdit_1.QTextEdit {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QTextBrowser(parent.native);
        }
        else {
            native = new addon_1.default.QTextBrowser();
        }
        super(native);
    }
    setOpenExternalLinks(open) {
        this.setProperty('openExternalLinks', open);
    }
    openExternalLinks() {
        return this.property('openExternalLinks').toBool();
    }
    setOpenLinks(open) {
        this.setProperty('openLinks', open);
    }
    openLinks() {
        return this.property('openLinks').toBool();
    }
    setSource(name) {
        this.setProperty('source', name.native);
    }
    source() {
        const name = this.property('source');
        return QUrl_1.QUrl.fromQVariant(name);
    }
    backwardHistoryCount() {
        return this.native.backwardHistoryCount();
    }
    clearHistory() {
        this.native.clearHistory();
    }
    forwardHistoryCount() {
        return this.native.forwardHistoryCount();
    }
    historyTitle(i) {
        return this.native.historyTitle(i);
    }
    historyUrl() {
        return new QUrl_1.QUrl(this.native.historyUrl());
    }
    isBackwardAvailable() {
        return this.native.isBackwardAvailable();
    }
    isForwardAvailable() {
        return this.native.isForwardAvailable();
    }
    backward() {
        this.native.backward();
    }
    forward() {
        this.native.forward();
    }
    home() {
        this.native.home();
    }
    reload() {
        this.native.reload();
    }
}
exports.QTextBrowser = QTextBrowser;
WrapperCache_1.wrapperCache.registerWrapper('QTextBrowserWrap', QTextBrowser);
