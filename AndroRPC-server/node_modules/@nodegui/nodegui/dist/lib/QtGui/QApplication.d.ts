import { NativeElement } from '../core/Component';
import { QClipboard } from './QClipboard';
import { QStyle } from './QStyle';
import { QObjectSignals, QObject } from '../QtCore/QObject';
import { QPalette } from './QPalette';
import { QScreen } from './QScreen';
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
export declare class QApplication extends QObject<QApplicationSignals> {
    constructor(arg?: QObject | NativeElement);
    devicePixelRatio(): number;
    exec(): number;
    exit(exitCode: number): number;
    palette(): QPalette;
    processEvents(): void;
    quit(): number;
    quitOnLastWindowClosed(): boolean;
    setQuitOnLastWindowClosed(quit: boolean): void;
    setStyleSheet(styleSheet: string, postprocess?: boolean): void;
    static clipboard(): QClipboard | null;
    static instance(): QApplication;
    static primaryScreen(): QScreen | null;
    static screens(): QScreen[];
    static setStyle(style: QStyle): void;
    static style(): QStyle;
}
export interface QApplicationSignals extends QObjectSignals {
    focusWindowChanged: () => void;
    primaryScreenChanged: (screen: QScreen) => void;
    screenAdded: (screen: QScreen) => void;
    screenRemoved: (screen: QScreen) => void;
}
