import { NativeElement } from '../core/Component';
import { QWidget, QWidgetSignals } from './QWidget';
import { QAction } from './QAction';
import { QPoint } from '../QtCore/QPoint';
/**

> The QMenu class provides a menu widget for use in menu bars, context menus, and other popup menus.

* **This class is a JS wrapper around Qt's [QMenu class](https://doc.qt.io/qt-5/qmenu.html)**

### Example

```javascript
const { QMenu } = require("@nodegui/nodegui");

const menu = new QMenu();
```
 */
export declare class QMenu extends QWidget<QMenuSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    clear(): void;
    setTitle(title: string): void;
    addSeparator(): QAction;
    exec(point?: QPoint, action?: QAction | null): void;
    popup(point: QPoint, action?: QAction): void;
}
export interface QMenuSignals extends QWidgetSignals {
    triggered: (action: NativeElement) => void;
}
