"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QMainWindow = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control windows.

* **This class is a JS wrapper around Qt's [QMainWindow class](https://doc.qt.io/qt-5/qmainwindow.html)**

A `QMainWindow` provides a main application window. Every widget in NodeGui should be a child/nested child of QMainWindow. QMainWindow in NodeGui is also responsible for FlexLayout calculations of its children.

### Example

```javascript
const { QMainWindow, QWidget } = require("@nodegui/nodegui");

const win = new QMainWindow();

const centralWidget = new QWidget();
win.setCentralWidget(centralWidget);

win.show();

global.win = win; // prevent's gc of win
```

QMainWindow needs to have a central widget set before other widgets can be added as a children/nested children.
Once a central widget is set you can add children/layout to the central widget.
 */
class QMainWindow extends QWidget_1.QWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QMainWindow(parent.native);
        }
        else {
            native = new addon_1.default.QMainWindow();
        }
        super(native);
    }
    setLayout(parentLayout) {
        const centralWidget = this.centralWidget();
        if (centralWidget) {
            centralWidget.setLayout(parentLayout);
        }
        else {
            super.setLayout(parentLayout);
        }
    }
    setCentralWidget(widget) {
        this.native.setCentralWidget(widget.native);
        const centralWidget = this.centralWidget();
        if (centralWidget) {
            centralWidget.setFlexNodeSizeControlled(true);
        }
    }
    centralWidget() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.centralWidget());
    }
    takeCentralWidget() {
        const centralWidget = this.centralWidget();
        this.centralWidget = null;
        if (centralWidget) {
            centralWidget.setFlexNodeSizeControlled(false);
            return WrapperCache_1.wrapperCache.getWrapper(this.native.takeCentralWidget());
        }
        return null;
    }
    setMenuBar(menuBar) {
        this.native.setMenuBar(menuBar.native);
    }
    menuBar() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.menuBar());
    }
    setMenuWidget(menuWidget) {
        this.native.setMenuWidget(menuWidget.native);
    }
    layout() {
        const centralWidget = this.centralWidget();
        if (centralWidget) {
            return centralWidget.layout();
        }
        return super.layout();
    }
    center() {
        this.native.center();
    }
    /**
     * Sets the status bar for the main window to statusbar.
     * Note: QMainWindow takes ownership of the statusbar pointer and deletes it at the appropriate time.
     * @param statusBar The status bar.
     */
    setStatusBar(statusBar) {
        if (statusBar != null) {
            this.native.setStatusBar(statusBar.native);
        }
        else {
            this.native.setStatusBar(null);
        }
    }
    /**
     * Returns the status bar for the main window.
     */
    statusBar() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.statusBar());
    }
}
exports.QMainWindow = QMainWindow;
WrapperCache_1.wrapperCache.registerWrapper('QMainWindowWrap', QMainWindow);
