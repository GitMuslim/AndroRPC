import { QWidget, QWidgetSignals } from './QWidget';
import { QIcon } from '../QtGui/QIcon';
import { QMenu } from './QMenu';
import { QObject, QObjectSignals } from '../QtCore/QObject';
import { NativeElement } from '../core/Component';
/**

> Create and control system tray icon.

* **This class is a JS wrapper around Qt's [QSystemTrayIcon class](https://doc.qt.io/qt-5/qsystemtrayicon.html)**

A `QSystemTrayIcon` provides ability to add and manipulate native system tray icon.


### Example

```javascript
const { QSystemTrayIcon, QIcon } = require("@nodegui/nodegui");
const trayIcon = new QIcon(
  resolve(__dirname, "some/image/file.png");
);
const tray = new QSystemTrayIcon();
tray.setIcon(trayIcon);
tray.show();

global.tray = tray; // prevents garbage collection of tray
```
 */
export declare class QSystemTrayIcon extends QObject<QSystemTrayIconSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    show(): void;
    hide(): void;
    showMessage(title?: string, message?: string, icon?: QIcon, millisecondsTimeoutHint?: number): void;
    setIcon(icon: QIcon): void;
    isVisible(): boolean;
    setToolTip(tooltip: string): void;
    setContextMenu(menu: QMenu): void;
}
export declare enum QSystemTrayIconActivationReason {
    Unknown = 0,
    Context = 1,
    DoubleClick = 2,
    Trigger = 3,
    MiddleClick = 4
}
export interface QSystemTrayIconSignals extends QObjectSignals {
    activated: (reason: QSystemTrayIconActivationReason) => void;
    messageClicked: () => void;
}
