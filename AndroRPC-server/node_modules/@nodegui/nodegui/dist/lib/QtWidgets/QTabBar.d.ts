import { QWidget, QWidgetSignals } from './QWidget';
import { QIcon } from '../QtGui/QIcon';
import { TextElideMode } from '../QtEnums';
import { QSize } from '../QtCore/QSize';
import { QVariant } from '../QtCore/QVariant';
import { QColor } from '../QtGui/QColor';
import { QPoint } from '../QtCore/QPoint';
import { QRect } from '../QtCore/QRect';
import { NativeElement } from '../core/Component';
/**

> Create and control tabbar.

* **This class is a JS wrapper around Qt's [QTabBar class](https://doc.qt.io/qt-5/qtabbar.html)**

The QTabBar class provides a tab bar, e.g. for use in tabbed dialogs.

### Example

```javascript
const { QTabBar } = require("@nodegui/nodegui");

const tabBar = new QTabBar();

```
 */
export declare class QTabBar extends QWidget<QTabBarSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setAutoHide(hide: boolean): void;
    autoHide(): boolean;
    setChangeCurrentOnDrag(change: boolean): void;
    changeCurrentOnDrag(): boolean;
    count(): number;
    setCurrentIndex(index: number): void;
    currentIndex(): number;
    setDocumentMode(set: boolean): void;
    documentMode(): boolean;
    setDrawBase(drawTheBase: boolean): void;
    drawBase(): boolean;
    setElideMode(mode: TextElideMode): void;
    elideMode(): TextElideMode;
    setExpanding(enabled: boolean): void;
    expanding(): boolean;
    setIconSize(size: QSize): void;
    iconSize(): QSize;
    setMovable(movable: boolean): void;
    isMovable(): boolean;
    setSelectionBehaviorOnRemove(behavior: SelectionBehavior): void;
    selectionBehaviorOnRemove(): SelectionBehavior;
    setShape(shape: TabBarShape): void;
    shape(): TabBarShape;
    setTabsClosable(closeable: boolean): void;
    tabsClosable(): boolean;
    setUsesScrollButtons(useButtons: boolean): void;
    usesScrollButtons(): boolean;
    setAccessibleTabName(index: number, name: string): void;
    accessibleTabName(index: number): string;
    addTab(icon: QIcon | undefined, text: string): number;
    insertTab(index: number, icon: QIcon | undefined, text: string): number;
    setTabEnabled(index: number, enabled: boolean): void;
    isTabEnabled(index: number): boolean;
    moveTab(from: number, to: number): void;
    removeTab(index: number): void;
    setTabButton(index: number, position: ButtonPosition, widget: QWidget | undefined | null): void;
    setTabData(index: number, data: QVariant): void;
    tabData(index: number): QVariant;
    setTabIcon(index: number, icon: QIcon): void;
    tabIcon(index: number): QIcon;
    setTabText(index: number, text: string): void;
    tabText(index: number): string;
    setTabTextColor(index: number, color: QColor): void;
    tabTextColor(index: number): QColor;
    setTabToolTip(index: number, tip: string): void;
    tabToolTip(index: number): string;
    setTabWhatsThis(index: number, text: string): void;
    tabWhatsThis(index: number): string;
    tabAt(position: QPoint): number;
    tabRect(index: number): QRect;
}
export declare enum ButtonPosition {
    LeftSide = 0,
    RightSide = 1
}
export declare enum SelectionBehavior {
    SelectLeftTab = 0,
    SelectRightTab = 1,
    SelectPreviousTab = 2
}
export declare enum TabBarShape {
    RoundedNorth = 0,
    RoundedSouth = 1,
    RoundedWest = 2,
    RoundedEast = 3,
    TriangularNorth = 4,
    TriangularSouth = 5,
    TriangularWest = 6,
    TriangularEast = 7
}
export interface QTabBarSignals extends QWidgetSignals {
    currentChanged: (index: number) => void;
    tabBarClicked: (index: number) => void;
    tabBarDoubleClicked: (index: number) => void;
    tabCloseRequested: (index: number) => void;
    tabMoved: (from: number, to: number) => void;
}
