"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QApplication = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QClipboard_1 = require("./QClipboard");
const QStyle_1 = require("./QStyle");
const QObject_1 = require("../QtCore/QObject");
const QPalette_1 = require("./QPalette");
const StyleSheet_1 = require("../core/Style/StyleSheet");
const memoize_one_1 = __importDefault(require("memoize-one"));
const QScreen_1 = require("./QScreen");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> QApplication is the root object for the entire application. It manages app level settings.

* **This class is a JS wrapper around Qt's [QApplication class](https://doc.qt.io/qt-5/qapplication.html)**

The QApplication class manages the GUI application's control flow and main settings. In NodeGui you will never create an instance of it manually. NodeGui's internal runtime `Qode` does it for you on app start. You can access the initialised QApplication though if needed.

### Example

```js
const { QApplication } = require("@nodegui/nodegui");

const qApp = QApplication.instance();
qApp.quit();
```
 */
class QApplication extends QObject_1.QObject {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QApplication(parent.native);
        }
        else {
            native = new addon_1.default.QApplication();
        }
        super(native);
        this.setStyleSheet = memoize_one_1.default(this.setStyleSheet);
    }
    devicePixelRatio() {
        return this.native.devicePixelRatio();
    }
    exec() {
        return this.native.exec();
    }
    exit(exitCode) {
        return this.native.exit(exitCode);
    }
    palette() {
        return new QPalette_1.QPalette(this.native.palette());
    }
    processEvents() {
        this.native.processEvents();
    }
    quit() {
        return this.native.quit();
    }
    quitOnLastWindowClosed() {
        return this.native.quitOnLastWindowClosed();
    }
    setQuitOnLastWindowClosed(quit) {
        this.native.setQuitOnLastWindowClosed(quit);
    }
    setStyleSheet(styleSheet, postprocess = true) {
        if (postprocess) {
            const preparedSheet = StyleSheet_1.StyleSheet.create(styleSheet);
            this.native.setStyleSheet(preparedSheet);
        }
        else {
            this.native.setStyleSheet(styleSheet);
        }
    }
    static clipboard() {
        const clipboardNative = addon_1.default.QApplication.clipboard();
        if (clipboardNative == null) {
            return null;
        }
        return WrapperCache_1.wrapperCache.get(QClipboard_1.QClipboard, clipboardNative);
    }
    static instance() {
        const nativeQApp = addon_1.default.QApplication.instance();
        return new QApplication(nativeQApp);
    }
    static primaryScreen() {
        const screenNative = addon_1.default.QApplication.primaryScreen();
        if (screenNative == null) {
            return null;
        }
        return WrapperCache_1.wrapperCache.get(QScreen_1.QScreen, screenNative);
    }
    static screens() {
        const screenNativeList = addon_1.default.QApplication.screens();
        return screenNativeList.map((screenNative) => WrapperCache_1.wrapperCache.get(QScreen_1.QScreen, screenNative));
    }
    static setStyle(style) {
        addon_1.default.QApplication.setStyle(style.native);
    }
    static style() {
        return new QStyle_1.QStyle(addon_1.default.QApplication.style());
    }
}
exports.QApplication = QApplication;
WrapperCache_1.wrapperCache.registerWrapper('QApplicationWrap', QApplication);
