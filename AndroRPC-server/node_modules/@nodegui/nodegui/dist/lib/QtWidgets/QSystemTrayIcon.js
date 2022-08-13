"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QSystemTrayIconActivationReason = exports.QSystemTrayIcon = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QIcon_1 = require("../QtGui/QIcon");
const QObject_1 = require("../QtCore/QObject");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
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
class QSystemTrayIcon extends QObject_1.QObject {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QSystemTrayIcon(parent.native);
        }
        else {
            native = new addon_1.default.QSystemTrayIcon();
        }
        super(native);
    }
    show() {
        this.native.show();
    }
    hide() {
        this.native.hide();
    }
    showMessage(title = '', message = '', icon = new QIcon_1.QIcon(), millisecondsTimeoutHint = 10000) {
        this.native.showMessage(title, message, icon.native, millisecondsTimeoutHint);
    }
    setIcon(icon) {
        this.native.setIcon(icon.native);
    }
    isVisible() {
        return this.native.isVisible();
    }
    setToolTip(tooltip) {
        this.native.setToolTip(tooltip);
    }
    setContextMenu(menu) {
        this.native.setContextMenu(menu.native);
    }
}
exports.QSystemTrayIcon = QSystemTrayIcon;
WrapperCache_1.wrapperCache.registerWrapper('QSystemTrayIconWrap', QSystemTrayIcon);
var QSystemTrayIconActivationReason;
(function (QSystemTrayIconActivationReason) {
    QSystemTrayIconActivationReason[QSystemTrayIconActivationReason["Unknown"] = 0] = "Unknown";
    QSystemTrayIconActivationReason[QSystemTrayIconActivationReason["Context"] = 1] = "Context";
    QSystemTrayIconActivationReason[QSystemTrayIconActivationReason["DoubleClick"] = 2] = "DoubleClick";
    QSystemTrayIconActivationReason[QSystemTrayIconActivationReason["Trigger"] = 3] = "Trigger";
    QSystemTrayIconActivationReason[QSystemTrayIconActivationReason["MiddleClick"] = 4] = "MiddleClick";
})(QSystemTrayIconActivationReason = exports.QSystemTrayIconActivationReason || (exports.QSystemTrayIconActivationReason = {}));
