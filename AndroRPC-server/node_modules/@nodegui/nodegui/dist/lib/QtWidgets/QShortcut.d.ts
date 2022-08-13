import { QWidget, QWidgetSignals } from './QWidget';
import { QKeySequence } from '../QtGui/QKeySequence';
import { ShortcutContext } from '../QtEnums';
import { QObject, QObjectSignals } from '../QtCore/QObject';
import { NativeElement } from '../core/Component';
/**

> The QShortcut class is used to create keyboard shortcuts.

* **This class is a JS wrapper around Qt's [QShortcut class](https://doc.qt.io/qt-5/qshortcut.html)**

### Example

```javascript
const { QShortcut, QKeySequence, QMainWindow } = require("@nodegui/nodegui");

const win = new QMainWindow();
const shortcut = new QShortcut(win);
shortcut.setKey(new QKeySequence("Ctrl+M"));
shortcut.setEnabled(true);
shortcut.addEventListener(QShortcutEvents.activated, () => {
  console.log("Shortcut Activated");
});

win.show();
global.win = win;
global.shortcut = shortcut;
```
 */
export declare class QShortcut extends QObject<QShortcutSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setEnabled(enabled: boolean): void;
    setAutoRepeat(on: boolean): void;
    setKey(keysequence: QKeySequence): void;
    setContext(shortcutContext: ShortcutContext): void;
}
export interface QShortcutSignals extends QObjectSignals {
    activated: () => void;
    activatedAmbiguously: () => void;
}
