import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QIcon } from '../QtGui/QIcon';
import { TabPosition } from '../QtEnums';
/**

> Create and control a stack of tabbed widgets.

* **This class is a JS wrapper around Qt's [QTabWidget class](https://doc.qt.io/qt-5/qtabwidget.html)**

A 'QTabWidget' provides a tab bar and a "page area" that is used to display pages related to each tab.

### Example

```javascript
// This example creates two tabs, each holding a separate calendar.
const { QTabWidget, QCalendarWidget, QIcon } = require("@nodegui/nodegui");

const tabWidget = new QTabWidget();

tabWidget.addTab(new QCalendarWidget(), new QIcon(), 'Tab 1');
tabWidget.addTab(new QCalendarWidget(), new QIcon(), 'Tab 2');
```
 */
export declare class QTabWidget extends QWidget<QTabWidgetSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    addTab(page: QWidget, icon: QIcon, label: string): number;
    insertTab(index: number, page: QWidget, icon: QIcon, label: string): number;
    indexOf(widget: QWidget): number;
    setTabPosition(tabPosition: TabPosition): void;
    setTabText(tabIndex: number, tabText: string): void;
    setTabIcon(tabIndex: number, icon: QIcon): void;
    setCurrentIndex(index: number): void;
    currentIndex(): number;
    removeTab(index: number): void;
    setTabsClosable(closeable: boolean): void;
    widget(index: number): QWidget;
}
export interface QTabWidgetSignals extends QWidgetSignals {
    currentChanged: (index: number) => void;
    tabBarClicked: (index: number) => void;
    tabBarDoubleClicked: (index: number) => void;
    tabCloseRequested: (index: number) => void;
}
