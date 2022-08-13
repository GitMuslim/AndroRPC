import { QLayout } from './QLayout';
import { NativeElement } from '../core/Component';
import { WidgetAttribute, WindowType, ContextMenuPolicy, FocusReason, FocusPolicy } from '../QtEnums';
import { QIcon } from '../QtGui/QIcon';
import { QCursor } from '../QtGui/QCursor';
import { CursorShape, WindowState } from '../QtEnums';
import { YogaWidget } from '../core/YogaWidget';
import { QPoint } from '../QtCore/QPoint';
import { QSize } from '../QtCore/QSize';
import { QRect } from '../QtCore/QRect';
import { QPixmap } from '../QtGui/QPixmap';
import { QObjectSignals } from '../QtCore/QObject';
import { QFont } from '../QtGui/QFont';
import { QAction } from './QAction';
import { QGraphicsEffect } from './QGraphicsEffect';
import { QSizePolicyPolicy } from './QSizePolicy';
import { QStyle } from '../QtGui/QStyle';
import { QWindow } from '../QtGui/QWindow';
/**
 > Create and control views.

* **This class is a JS wrapper around Qt's [QWidget class](https://doc.qt.io/qt-5/qwidget.html)**

A `QWidget` can be used to encapsulate other widgets and provide structure. It functions similar to a `div` in the web world.


### Example

```javascript
const { QWidget } = require("@nodegui/nodegui");

const view = new QWidget();
view.setObjectName("container"); //Similar to setting `id` on the web
view.setLayout(new FlexLayout());
```
 */
export declare class QWidget<Signals extends QWidgetSignals = QWidgetSignals> extends YogaWidget<Signals> {
    _rawInlineStyle: string;
    type: string;
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    layout(): QLayout | null;
    setLayout(layout: QLayout): void;
    acceptDrops(): boolean;
    accessibleDescription(): string;
    accessibleName(): string;
    activateWindow(): void;
    addAction(action: QAction | string): QAction;
    adjustSize(): void;
    autoFillBackground(): boolean;
    baseSize(): QSize;
    childAt(x: number, y: number): QWidget;
    childrenRect(): QRect;
    clearFocus(): void;
    clearMask(): void;
    contentsRect(): QRect;
    contextMenuPolicy(): ContextMenuPolicy;
    ensurePolished(): void;
    focusProxy(): QWidget;
    focusWidget(): QWidget;
    font(): QFont;
    frameGeometry(): QRect;
    frameSize(): QSize;
    geometry(): QRect;
    grab(rect?: QRect): QPixmap;
    grabKeyboard(): void;
    grabMouse(): void;
    hasFocus(): boolean;
    hasHeightForWidth(): boolean;
    hasMouseTracking(): boolean;
    hasTabletTracking(): boolean;
    height(): number;
    heightForWidth(w: number): number;
    isActiveWindow(): boolean;
    isAncestorOf(child: QWidget): boolean;
    isEnabled(): boolean;
    isEnabledTo(ancestor: QWidget): boolean;
    isFullScreen(): boolean;
    isHidden(): boolean;
    isMaximized(): boolean;
    isMinimized(): boolean;
    isModal(): boolean;
    isVisible(): boolean;
    isVisibleTo(ancestor: QWidget): boolean;
    isWindow(): boolean;
    isWindowModified(): boolean;
    mapFrom(parent: QWidget, pos: QPoint): QPoint;
    mapFromGlobal(pos: QPoint): QPoint;
    mapFromParent(pos: QPoint): QPoint;
    mapToGlobal(pos: QPoint): QPoint;
    mapToParent(pos: QPoint): QPoint;
    mapTo(parent: QWidget, pos: QPoint): QPoint;
    maximumHeight(): number;
    maximumSize(): QSize;
    maximumWidth(): number;
    minimumHeight(): number;
    minimumSize(): QSize;
    minimumSizeHint(): QSize;
    minimumWidth(): number;
    move(x: number, y: number): void;
    nativeParentWidget(): QWidget;
    nextInFocusChain(): QWidget;
    normalGeometry(): QRect;
    parentWidget(): QWidget;
    pos(): {
        x: number;
        y: number;
    };
    previousInFocusChain(): QWidget;
    rect(): QRect;
    releaseKeyboard(): void;
    releaseMouse(): void;
    releaseShortcut(id: number): void;
    removeAction(action: QAction): void;
    repolish(): void;
    resize(width: number, height: number): void;
    setAcceptDrops(on: boolean): void;
    setAccessibleDescription(description: string): void;
    setAccessibleName(name: string): void;
    setAttribute(attribute: WidgetAttribute, switchOn: boolean): void;
    setAutoFillBackground(enabled: boolean): void;
    setBaseSize(size: QSize): void;
    setContentsMargins(left: number, top: number, right: number, bottom: number): void;
    setContextMenuPolicy(contextMenuPolicy: ContextMenuPolicy): void;
    setCursor(cursor: CursorShape | QCursor): void;
    setFixedHeight(h: number): void;
    setFixedSize(width: number, height: number): void;
    setFixedWidth(w: number): void;
    setFocusPolicy(policy: FocusPolicy): void;
    setFocusProxy(widget: QWidget): void;
    setFont(font: QFont): void;
    setGeometry(x: number, y: number, w: number, h: number): void;
    setGraphicsEffect(effect: QGraphicsEffect<any>): void;
    setInlineStyle(style: string, postprocess?: boolean): void;
    setMaximumHeight(maxh: number): void;
    setMaximumSize(maxw: number, maxh: number): void;
    setMaximumWidth(maxw: number): void;
    setMinimumHeight(minh: number): void;
    setMinimumSize(minw: number, minh: number): void;
    setMinimumWidth(minw: number): void;
    setMouseTracking(isMouseTracked: boolean): void;
    setObjectName(objectName: string): void;
    setShortcutAutoRepeat(id: number, enable?: boolean): void;
    setShortcutEnabled(id: number, enable?: boolean): void;
    setSizeIncrement(w_or_size: QSize | number, h?: number): void;
    setSizePolicy(horizontal: QSizePolicyPolicy, vertical: QSizePolicyPolicy): void;
    setStatusTip(statusTip: string): void;
    setTabletTracking(enable: boolean): void;
    setToolTip(text: string): void;
    setToolTipDuration(msec: number): void;
    setUpdatesEnabled(enable: boolean): void;
    setWhatsThis(whatsThis: string): void;
    setWindowFilePath(filePath: string): void;
    setWindowFlag(windowType: WindowType, switchOn: boolean): void;
    setWindowIcon(icon: QIcon): void;
    setWindowOpacity(opacity: number): void;
    setWindowRole(role: string): void;
    setWindowState(state: WindowState): void;
    size(): QSize;
    sizeHint(): QSize;
    sizeIncrement(): QSize;
    stackUnder(w: QWidget): void;
    statusTip(): string;
    style(): QStyle;
    styleSheet(): string;
    testAttribute(attribute: WidgetAttribute): boolean;
    toolTip(): string;
    toolTipDuration(): number;
    underMouse(): boolean;
    unsetCursor(): void;
    unsetLayoutDirection(): void;
    unsetLocale(): void;
    updateGeometry(): void;
    updatesEnabled(): boolean;
    whatsThis(): string;
    width(): number;
    winId(): number;
    window(): QWidget;
    windowFilePath(): string;
    windowHandle(): QWindow | null;
    windowIcon(): QIcon;
    windowOpacity(): number;
    windowRole(): string;
    windowState(): WindowState;
    windowTitle(): string;
    x(): number;
    y(): number;
    close(): boolean;
    hide(): void;
    lower(): void;
    raise(): void;
    repaint(): void;
    setDisabled(disable: boolean): void;
    setEnabled(enabled: boolean): void;
    setFocus(reason?: FocusReason): void;
    setHidden(hidden: boolean): void;
    setStyleSheet(styleSheet: string, postprocess?: boolean): void;
    setVisible(visible: boolean): void;
    setWindowModified(modified: boolean): void;
    setWindowTitle(title: string): void;
    show(): void;
    showFullScreen(): void;
    showMaximized(): void;
    showMinimized(): void;
    showNormal(): void;
    update(): void;
}
export interface QWidgetSignals extends QObjectSignals {
    windowTitleChanged: (title: string) => void;
    windowIconChanged: (iconNative: NativeElement) => void;
    customContextMenuRequested: (pos: {
        x: number;
        y: number;
    }) => void;
}
