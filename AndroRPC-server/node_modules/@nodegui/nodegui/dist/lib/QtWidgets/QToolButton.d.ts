import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractButton, QAbstractButtonSignals } from './QAbstractButton';
import { ToolButtonStyle } from '../QtEnums/ToolButtonStyle';
import { ArrowType } from '../QtEnums/ArrowType';
import { QAction } from '../QtWidgets/QAction';
import { QMenu } from './QMenu';
/**

> Create and control buttons to use inside a QToolBar.

* **This class is a JS wrapper around Qt's [QToolButton class](https://doc.qt.io/qt-5/qtoolbutton.html)**

A QToolButton is a special button that provides quick-access to specific commands or options.

### Example

```javascript
const { QToolButton } = require("@nodegui/nodegui");

const tool = new QToolButton();
tool.setText('Help');
```
 */
export declare class QToolButton extends QAbstractButton<QToolButtonSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setArrowType(type: ArrowType): void;
    arrowType(): ArrowType;
    setAutoRaise(enable: boolean): void;
    autoRaise(): boolean;
    setPopupMode(mode: ToolButtonPopupMode): void;
    popupMode(): ToolButtonPopupMode;
    setToolButtonStyle(style: ToolButtonStyle): void;
    toolButtonStyle(): ToolButtonStyle;
    setMenu(menu: QMenu): void;
    menu(): QMenu | null;
    setDefaultAction(action: QAction): void;
    defaultAction(): QAction | null;
    showMenu(): void;
}
export declare enum ToolButtonPopupMode {
    DelayedPopup = 0,
    MenuButtonPopup = 1,
    InstantPopup = 2
}
export interface QToolButtonSignals extends QAbstractButtonSignals {
    triggered: (nativeAction: NativeElement) => void;
}
