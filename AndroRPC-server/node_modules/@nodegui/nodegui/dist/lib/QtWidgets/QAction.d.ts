import { NativeElement } from '../core/Component';
import { QMenu } from './QMenu';
import { QIcon } from '../QtGui/QIcon';
import { QFont } from '../QtGui/QFont';
import { QKeySequence } from '../QtGui/QKeySequence';
import { ShortcutContext } from '../QtEnums';
import { QObject, QObjectSignals } from '../QtCore/QObject';
import { QVariant } from '../QtCore/QVariant';
/**

> The QAction class provides an abstract user interface action that can be inserted into widgets.

* **This class is a JS wrapper around Qt's [QAction class](https://doc.qt.io/qt-5/qaction.html)**

### Example

```javascript
const { QAction, QMenu } = require("@nodegui/nodegui");

const menu = new QMenu();
const menuAction = new QAction();
menuAction.setText("subAction");
menuAction.addEventListener("triggered", () => {
  console.log("Action clicked");
});
menu.addAction(menuAction);
```
 */
export declare class QAction extends QObject<QActionSignals> {
    constructor();
    constructor(native: NativeElement);
    constructor(parent: QObject);
    setText(text: string): void;
    setEnabled(enabled: boolean): void;
    setIcon(icon: QIcon): void;
    setMenu(menu: QMenu): void;
    setShortcut(keysequence: QKeySequence): void;
    setShortcutContext(shortcutContext: ShortcutContext): void;
    isCheckable(): boolean;
    setCheckable(isCheckable: boolean): void;
    isChecked(): boolean;
    setChecked(isChecked: boolean): void;
    isSeparator(): boolean;
    setSeparator(isSeparator: boolean): void;
    setFont(font: QFont): void;
    font(): QFont;
    setData(value: QVariant): void;
    data(): QVariant;
}
export interface QActionSignals extends QObjectSignals {
    triggered: (checked: boolean) => void;
    changed: () => void;
    hovered: () => void;
    toggled: (checked: boolean) => void;
}
