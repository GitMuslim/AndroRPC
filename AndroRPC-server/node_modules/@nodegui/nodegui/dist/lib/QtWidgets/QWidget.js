"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QWidget = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QtEnums_1 = require("../QtEnums");
const QIcon_1 = require("../QtGui/QIcon");
const StyleSheet_1 = require("../core/Style/StyleSheet");
const helpers_1 = require("../utils/helpers");
const YogaWidget_1 = require("../core/YogaWidget");
const QPoint_1 = require("../QtCore/QPoint");
const QSize_1 = require("../QtCore/QSize");
const QRect_1 = require("../QtCore/QRect");
const QFont_1 = require("../QtGui/QFont");
const QAction_1 = require("./QAction");
const memoize_one_1 = __importDefault(require("memoize-one"));
const WrapperCache_1 = require("../core/WrapperCache");
const QStyle_1 = require("../QtGui/QStyle");
const QWindow_1 = require("../QtGui/QWindow");
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
class QWidget extends YogaWidget_1.YogaWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QWidget(parent.native);
        }
        else {
            native = new addon_1.default.QWidget();
        }
        super(native);
        this._rawInlineStyle = '';
        this.type = 'widget';
        this.setStyleSheet = memoize_one_1.default(this.setStyleSheet);
        this.setInlineStyle = memoize_one_1.default(this.setInlineStyle);
        this.setObjectName = memoize_one_1.default(this.setObjectName);
    }
    layout() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.layout());
    }
    setLayout(layout) {
        this.native.setLayout(layout == null ? null : layout.native);
        const flexLayout = layout;
        if (flexLayout?.setFlexNode) {
            //if flex layout set the flexnode
            flexLayout.setFlexNode(this.getFlexNode());
        }
    }
    // *** Public Functions ***
    acceptDrops() {
        return this.property('acceptDrops').toBool();
    }
    accessibleDescription() {
        return this.property('accessibleDescription').toString();
    }
    accessibleName() {
        return this.property('accessibleName').toString();
    }
    // TODO: QList<QAction *> 	actions() const
    activateWindow() {
        this.native.activateWindow();
    }
    addAction(action) {
        if (typeof action === 'string') {
            const qaction = new QAction_1.QAction();
            qaction.setText(action);
            this.native.addAction(qaction.native);
            return qaction;
        }
        this.native.addAction(action.native);
        return action;
    }
    // TODO: void 	addActions(QList<QAction *> actions)
    adjustSize() {
        this.native.adjustSize();
    }
    autoFillBackground() {
        return this.property('autoFillBackground').toBool();
    }
    // TODO: QPalette::ColorRole 	backgroundRole() const
    // TODO: QBackingStore *	backingStore() const
    baseSize() {
        return QSize_1.QSize.fromQVariant(this.property('baseSize'));
    }
    childAt(x, y) {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.childAt(x, y));
    }
    childrenRect() {
        return QRect_1.QRect.fromQVariant(this.property('childrenRect'));
    }
    // TODO: QRegion 	childrenRegion() const
    clearFocus() {
        this.native.clearFocus();
    }
    clearMask() {
        this.native.clearMask();
    }
    // TODO: QMargins 	contentsMargins() const
    contentsRect() {
        return new QRect_1.QRect(this.native.contentsRect());
    }
    contextMenuPolicy() {
        return this.property('contextMenuPolicy').toInt();
    }
    // TODO: QCursor 	cursor() const
    // TODO: WId 	effectiveWinId() const
    ensurePolished() {
        this.native.ensurePolished();
    }
    // TODO: Qt::FocusPolicy 	focusPolicy() const
    focusProxy() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.focusProxy());
    }
    focusWidget() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.focusWidget());
    }
    font() {
        return QFont_1.QFont.fromQVariant(this.property('font'));
    }
    // TODO: QFontInfo 	fontInfo() const
    // TODO: QFontMetrics 	fontMetrics() const
    // TODO: QPalette::ColorRole 	foregroundRole() const
    frameGeometry() {
        return QRect_1.QRect.fromQVariant(this.property('frameGeometry'));
    }
    frameSize() {
        return QSize_1.QSize.fromQVariant(this.property('frameSize'));
    }
    geometry() {
        return QRect_1.QRect.fromQVariant(this.property('geometry'));
    }
    grab(rect) {
        const arg = rect ?? new QRect_1.QRect(0, 0, -1, -1);
        return this.native.grab(arg.native);
    }
    // TODO: void 	grabGesture(Qt::GestureType gesture, Qt::GestureFlags flags = Qt::GestureFlags())
    grabKeyboard() {
        this.native.grabKeyboard();
    }
    grabMouse() {
        this.native.grabMouse();
    }
    // TODO: void 	grabMouse(const QCursor &cursor)
    // TODO: int 	grabShortcut(const QKeySequence &key, Qt::ShortcutContext context = Qt::WindowShortcut)
    // TODO: QGraphicsEffect *	graphicsEffect() const
    // TODO: QGraphicsProxyWidget *	graphicsProxyWidget() const
    hasFocus() {
        return this.property('focus').toBool();
    }
    hasHeightForWidth() {
        return this.native.hasHeightForWidth();
    }
    hasMouseTracking() {
        return this.property('mouseTracking').toBool();
    }
    hasTabletTracking() {
        return this.property('tabletTracking').toBool();
    }
    height() {
        return this.property('height').toInt();
    }
    heightForWidth(w) {
        return this.native.heightForWidth(w);
    }
    // TODO: Qt::InputMethodHints 	inputMethodHints() const
    // TODO: virtual QVariant 	inputMethodQuery(Qt::InputMethodQuery query) const
    // TODO: void 	insertAction(QAction *before, QAction *action)
    // TODO: void 	insertActions(QAction *before, QList<QAction *> actions)
    isActiveWindow() {
        return this.property('isActiveWindow').toBool();
    }
    isAncestorOf(child) {
        return this.native.isAncestorOf(child);
    }
    isEnabled() {
        return this.property('enabled').toBool();
    }
    isEnabledTo(ancestor) {
        return this.native.isEnabledTo(ancestor);
    }
    isFullScreen() {
        return this.property('fullScreen').toBool();
    }
    isHidden() {
        return !this.property('visible').toBool();
    }
    isMaximized() {
        return this.property('maximized').toBool();
    }
    isMinimized() {
        return this.property('minimized').toBool();
    }
    isModal() {
        return this.property('modal').toBool();
    }
    isVisible() {
        return this.property('visible').toBool();
    }
    isVisibleTo(ancestor) {
        return this.native.isVisibleTo(ancestor);
    }
    isWindow() {
        return this.native.isWindow();
    }
    isWindowModified() {
        return this.native.isWindowModified();
    }
    // TODO: Qt::LayoutDirection 	layoutDirection() const
    // TODO: QLocale 	locale() const
    mapFrom(parent, pos) {
        return new QPoint_1.QPoint(this.native.mapFrom(parent.native, pos.native));
    }
    mapFromGlobal(pos) {
        return new QPoint_1.QPoint(this.native.mapFromGlobal(pos.native));
    }
    mapFromParent(pos) {
        return new QPoint_1.QPoint(this.native.mapFromParent(pos.native));
    }
    mapToGlobal(pos) {
        return new QPoint_1.QPoint(this.native.mapToGlobal(pos.native));
    }
    mapToParent(pos) {
        return new QPoint_1.QPoint(this.native.mapToParent(pos.native));
    }
    mapTo(parent, pos) {
        return new QPoint_1.QPoint(this.native.mapTo(parent.native, pos.native));
    }
    // TODO: QRegion 	mask() const
    maximumHeight() {
        return this.property('maximumHeight').toInt();
    }
    maximumSize() {
        return QSize_1.QSize.fromQVariant(this.property('maximumSize'));
    }
    maximumWidth() {
        return this.property('maximumWidth').toInt();
    }
    minimumHeight() {
        return this.property('minimumHeight').toInt();
    }
    minimumSize() {
        return QSize_1.QSize.fromQVariant(this.property('minimumSize'));
    }
    minimumSizeHint() {
        return new QSize_1.QSize(this.native.minimumSizeHint());
    }
    minimumWidth() {
        return this.property('minimumWidth').toInt();
    }
    // TODO: void 	move(const QPoint &)
    move(x, y) {
        this.native.move(x, y);
    }
    nativeParentWidget() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.nativeParentWidget());
    }
    nextInFocusChain() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.nextInFocusChain());
    }
    normalGeometry() {
        return QRect_1.QRect.fromQVariant(this.property('normalGeometry'));
    }
    // TODO: void 	overrideWindowFlags(Qt::WindowFlags flags)
    // TODO: const QPalette &	palette() const
    parentWidget() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.parentWidget());
    }
    // PROP: QWidget
    pos() {
        return this.native.pos();
    }
    previousInFocusChain() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.previousInFocusChain());
    }
    rect() {
        return QRect_1.QRect.fromQVariant(this.property('rect'));
    }
    releaseKeyboard() {
        this.native.releaseKeyboard();
    }
    releaseMouse() {
        this.native.releaseMouse();
    }
    releaseShortcut(id) {
        this.native.releaseShortcut(id);
    }
    removeAction(action) {
        this.native.removeAction(action.native);
    }
    // TODO: void 	render(QPaintDevice *target, const QPoint &targetOffset = QPoint(), const QRegion &sourceRegion = QRegion(), QWidget::RenderFlags renderFlags = RenderFlags(DrawWindowBackground | DrawChildren))
    // TODO: void 	render(QPainter *painter, const QPoint &targetOffset = QPoint(), const QRegion &sourceRegion = QRegion(), QWidget::RenderFlags renderFlags = RenderFlags(DrawWindowBackground | DrawChildren))
    // TODO: void 	repaint(int x, int y, int w, int h)
    // TODO: void 	repaint(const QRect &rect)
    // TODO: void 	repaint(const QRegion &rgn)
    repolish() {
        this.native.repolish();
    }
    // TODO: void 	resize(const QSize &)
    resize(width, height) {
        this.native.resize(width, height);
    }
    // TODO: QScreen *QWidget::screen() const
    setAcceptDrops(on) {
        this.setProperty('acceptDrops', on);
    }
    setAccessibleDescription(description) {
        this.setProperty('accessibleDescription', description);
    }
    setAccessibleName(name) {
        this.setProperty('accessibleName', name);
    }
    setAttribute(attribute, switchOn) {
        // react:⛔️
        return this.native.setAttribute(attribute, switchOn);
    }
    setAutoFillBackground(enabled) {
        this.setProperty('autoFillBackground', enabled);
    }
    // TODO: void 	setBackgroundRole(QPalette::ColorRole role)
    setBaseSize(size) {
        this.setProperty('baseSize', size.native);
    }
    // TODO: void 	setBaseSize(int basew, int baseh)
    setContentsMargins(left, top, right, bottom) {
        this.native.setContentsMargins(left, top, right, bottom);
    }
    // TODO: void 	setContentsMargins(const QMargins &margins)
    setContextMenuPolicy(contextMenuPolicy) {
        this.setProperty('contextMenuPolicy', contextMenuPolicy);
    }
    // PROP: QWidget
    setCursor(cursor) {
        if (typeof cursor === 'number') {
            this.native.setCursor(cursor);
        }
        else {
            this.native.setCursor(cursor.native);
        }
    }
    // Embedded only: void setEditFocus(bool enable)
    setFixedHeight(h) {
        this.native.setFixedHeight(h);
    }
    // TODO: void 	setFixedSize(const QSize &s)
    setFixedSize(width, height) {
        this.native.setFixedSize(width, height);
    }
    setFixedWidth(w) {
        this.native.setFixedWidth(w);
    }
    setFocusPolicy(policy) {
        this.setProperty('focusPolicy', policy);
    }
    setFocusProxy(widget) {
        this.native.setFocusProxy(widget);
    }
    setFont(font) {
        this.native.setProperty('font', font.native);
    }
    // TODO: void 	setForegroundRole(QPalette::ColorRole role)
    // TODO: void 	setGeometry(const QRect &)
    setGeometry(x, y, w, h) {
        this.native.setGeometry(x, y, w, h);
    }
    setGraphicsEffect(effect) {
        this.native.setGraphicsEffect(effect.native);
    }
    // TODO: void 	setInputMethodHints(Qt::InputMethodHints hints)
    setInlineStyle(style, postprocess = true) {
        if (postprocess) {
            this._rawInlineStyle = style;
            const preparedSheet = StyleSheet_1.prepareInlineStyleSheet(this, style);
            this.native.setStyleSheet(preparedSheet);
        }
        else {
            this.native.setStyleSheet(style);
        }
    }
    // TODO: void 	setLayoutDirection(Qt::LayoutDirection direction)
    // TODO: void 	setLocale(const QLocale &locale)
    // TODO: void 	setMask(const QBitmap &bitmap)
    // TODO: void 	setMask(const QRegion &region)
    setMaximumHeight(maxh) {
        this.setProperty('maximumHeight', maxh);
    }
    // PROP: QWidget
    // TODO: void 	setMaximumSize(const QSize &)
    setMaximumSize(maxw, maxh) {
        this.native.setMaximumSize(maxw, maxh);
    }
    setMaximumWidth(maxw) {
        this.setProperty('maximumWidth', maxw);
    }
    // PROP: QWidget
    // TODO: void 	setMinimumSize(const QSize &size)
    setMinimumHeight(minh) {
        this.setProperty('minimumHeight', minh);
    }
    setMinimumSize(minw, minh) {
        this.native.setMinimumSize(minw, minh);
    }
    setMinimumWidth(minw) {
        this.setProperty('minimumWidth', minw);
    }
    setMouseTracking(isMouseTracked) {
        this.setProperty('mouseTracking', isMouseTracked);
    }
    setObjectName(objectName) {
        super.setObjectName(objectName);
        if (this._rawInlineStyle) {
            this.setInlineStyle(this._rawInlineStyle);
        }
        this.repolish();
    }
    // TODO: void 	setPalette(const QPalette &)
    // TODO: void 	setParent(QWidget *parent)
    // TODO: void 	setParent(QWidget *parent, Qt::WindowFlags f)
    setShortcutAutoRepeat(id, enable = true) {
        this.native.setShortcutAutoRepeat(id, enable);
    }
    setShortcutEnabled(id, enable = true) {
        this.native.setShortcutEnabled(id, enable);
    }
    setSizeIncrement(w_or_size, h = 0) {
        if (typeof w_or_size === 'number') {
            this.native.setSizeIncrement(w_or_size, h);
        }
        else {
            this.setProperty('sizeIncrement', w_or_size.native);
        }
    }
    // TODO: void 	setSizePolicy(QSizePolicy)
    setSizePolicy(horizontal, vertical) {
        this.native.setSizePolicy(horizontal, vertical);
    }
    setStatusTip(statusTip) {
        this.setProperty('statusTip', statusTip);
    }
    // TODO: void 	setStyle(QStyle *style)
    setTabletTracking(enable) {
        this.setProperty('tabletTracking', enable);
    }
    setToolTip(text) {
        this.native.setProperty('toolTip', text);
    }
    setToolTipDuration(msec) {
        this.setProperty('toolTipDuration', msec);
    }
    setUpdatesEnabled(enable) {
        this.native.setProperty('updatesEnabled', enable);
    }
    setWhatsThis(whatsThis) {
        this.setProperty('whatsThis', whatsThis);
    }
    setWindowFilePath(filePath) {
        this.setProperty('windowFilePath', filePath);
    }
    setWindowFlag(windowType, switchOn) {
        // react:⛔️
        return this.native.setWindowFlag(windowType, switchOn);
    }
    // PROP: QWidget
    // TODO: void 	setWindowFlags(Qt::WindowFlags type)
    setWindowIcon(icon) {
        this.native.setWindowIcon(icon.native);
    }
    // PROP: QWidget
    // TODO: void 	setWindowModality(Qt::WindowModality windowModality)
    setWindowOpacity(opacity) {
        this.native.setWindowOpacity(opacity);
    }
    setWindowRole(role) {
        this.native.setWindowRole(role);
    }
    setWindowState(state) {
        return this.native.setWindowState(state);
    }
    size() {
        return new QSize_1.QSize(this.native.size());
    }
    sizeHint() {
        return QSize_1.QSize.fromQVariant(this.property('sizeHint'));
    }
    sizeIncrement() {
        return QSize_1.QSize.fromQVariant(this.property('sizeIncrement'));
    }
    // PROP: QWidget
    // TODO: QSizePolicy 	sizePolicy() const
    stackUnder(w) {
        this.native.stackUnder(w);
    }
    statusTip() {
        return this.property('statusTip').toString();
    }
    style() {
        return new QStyle_1.QStyle(this.native.style());
    }
    styleSheet() {
        return this.native.styleSheet();
    }
    testAttribute(attribute) {
        // react:⛔️
        return this.native.testAttribute(attribute);
    }
    toolTip() {
        return this.property('toolTip').toString();
    }
    toolTipDuration() {
        return this.property('toolTipDuration').toInt();
    }
    // TODO: void 	ungrabGesture(Qt::GestureType gesture)
    underMouse() {
        return this.native.underMouse();
    }
    unsetCursor() {
        this.native.unsetCursor();
    }
    unsetLayoutDirection() {
        this.native.unsetLayoutDirection();
    }
    unsetLocale() {
        this.native.unsetLocale();
    }
    // TODO: void 	update(int x, int y, int w, int h)
    // TODO: void 	update(const QRect &rect)
    // TODO: void 	update(const QRegion &rgn)
    updateGeometry() {
        // react:⛔️
        this.native.updateGeometry();
    }
    updatesEnabled() {
        return this.property('updatesEnabled').toBool();
    }
    // TODO: QRegion 	visibleRegion() const
    whatsThis() {
        return this.property('whatsThis').toString();
    }
    width() {
        return this.property('width').toInt();
    }
    winId() {
        return this.native.winId();
    }
    window() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.window());
    }
    windowFilePath() {
        return this.property('windowFilePath').toString();
    }
    // PROP: QWidget
    // TODO: Qt::WindowFlags 	windowFlags() const
    windowHandle() {
        const handle = this.native.windowHandle();
        if (handle != null) {
            return WrapperCache_1.wrapperCache.get(QWindow_1.QWindow, handle);
        }
        return null;
    }
    windowIcon() {
        return QIcon_1.QIcon.fromQVariant(this.property('windowIcon'));
    }
    // PROP: QWidget
    // TODO: Qt::WindowModality 	windowModality() const
    windowOpacity() {
        return this.native.windowOpacity();
    }
    windowRole() {
        return this.native.windowRole();
    }
    windowState() {
        return this.native.windowState();
    }
    windowTitle() {
        return this.native.windowTitle();
    }
    // TODO: Qt::WindowType 	windowType() const
    x() {
        return this.property('x').toInt();
    }
    y() {
        return this.property('y').toInt();
    }
    // *** Public Slots ***
    close() {
        return this.native.close();
    }
    hide() {
        this.native.hide();
    }
    lower() {
        this.native.lower();
    }
    raise() {
        this.native.raise();
    }
    repaint() {
        // react:⛔️
        this.native.repaint();
    }
    setDisabled(disable) {
        this.setEnabled(!disable);
    }
    setEnabled(enabled) {
        this.setProperty('enabled', enabled);
    }
    setFocus(reason = QtEnums_1.FocusReason.OtherFocusReason) {
        this.native.setFocus(reason);
    }
    setHidden(hidden) {
        this.native.setHidden(hidden);
    }
    setStyleSheet(styleSheet, postprocess = true) {
        if (postprocess) {
            const preparedSheet = StyleSheet_1.StyleSheet.create(styleSheet);
            this.native.setStyleSheet(preparedSheet);
        }
        else {
            this.native.setStyleSheet(styleSheet);
        }
    }
    setVisible(visible) {
        this.native.setVisible(visible);
    }
    setWindowModified(modified) {
        this.native.setWindowModified(modified);
    }
    setWindowTitle(title) {
        return this.native.setWindowTitle(title);
    }
    show() {
        this.native.show();
    }
    showFullScreen() {
        this.native.showFullScreen();
    }
    showMaximized() {
        this.native.showMaximized();
    }
    showMinimized() {
        this.native.showMinimized();
    }
    showNormal() {
        this.native.showNormal();
    }
    update() {
        // react:⛔️
        this.native.update();
    }
}
exports.QWidget = QWidget;
WrapperCache_1.wrapperCache.registerWrapper('QWidgetWrap', QWidget);
