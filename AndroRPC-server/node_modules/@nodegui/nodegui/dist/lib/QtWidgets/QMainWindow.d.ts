import { QWidget, QWidgetSignals } from './QWidget';
import { QLayout } from './QLayout';
import { QMenuBar } from './QMenuBar';
import { QStatusBar } from './QStatusBar';
import { NativeElement } from '../core/Component';
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
export declare class QMainWindow extends QWidget<QMainWindowSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setLayout(parentLayout: QLayout): void;
    setCentralWidget(widget: QWidget): void;
    centralWidget(): QWidget;
    takeCentralWidget(): QWidget | null;
    setMenuBar(menuBar: QMenuBar): void;
    menuBar(): QMenuBar | null;
    setMenuWidget(menuWidget: QWidget): void;
    layout(): QLayout | null;
    center(): void;
    /**
     * Sets the status bar for the main window to statusbar.
     * Note: QMainWindow takes ownership of the statusbar pointer and deletes it at the appropriate time.
     * @param statusBar The status bar.
     */
    setStatusBar(statusBar: QStatusBar): void;
    /**
     * Returns the status bar for the main window.
     */
    statusBar(): QStatusBar | null;
}
export declare type QMainWindowSignals = QWidgetSignals;
