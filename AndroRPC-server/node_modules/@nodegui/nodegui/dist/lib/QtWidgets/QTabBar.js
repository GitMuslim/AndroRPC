"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabBarShape = exports.SelectionBehavior = exports.ButtonPosition = exports.QTabBar = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const QIcon_1 = require("../QtGui/QIcon");
const QSize_1 = require("../QtCore/QSize");
const QVariant_1 = require("../QtCore/QVariant");
const QColor_1 = require("../QtGui/QColor");
const QRect_1 = require("../QtCore/QRect");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
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
class QTabBar extends QWidget_1.QWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QTabBar(parent.native);
        }
        else {
            native = new addon_1.default.QTabBar();
        }
        super(native);
    }
    setAutoHide(hide) {
        this.setProperty('autoHide', hide);
    }
    autoHide() {
        return this.property('autoHide').toBool();
    }
    setChangeCurrentOnDrag(change) {
        this.setProperty('changeCurrentOnDrag', change);
    }
    changeCurrentOnDrag() {
        return this.property('changeCurrentOnDrag').toBool();
    }
    count() {
        return this.property('count').toInt();
    }
    setCurrentIndex(index) {
        this.setProperty('currentIndex', index);
    }
    currentIndex() {
        return this.property('currentIndex').toInt();
    }
    setDocumentMode(set) {
        this.setProperty('documentMode', set);
    }
    documentMode() {
        return this.property('documentMode').toBool();
    }
    setDrawBase(drawTheBase) {
        this.setProperty('drawBase', drawTheBase);
    }
    drawBase() {
        return this.property('drawBase').toBool();
    }
    setElideMode(mode) {
        this.setProperty('elideMode', mode);
    }
    elideMode() {
        return this.property('elideMode').toInt();
    }
    setExpanding(enabled) {
        this.setProperty('expanding', enabled);
    }
    expanding() {
        return this.property('expanding').toBool();
    }
    setIconSize(size) {
        this.setProperty('iconSize', size.native);
    }
    iconSize() {
        const size = this.property('iconSize');
        return QSize_1.QSize.fromQVariant(size);
    }
    setMovable(movable) {
        this.setProperty('movable', movable);
    }
    isMovable() {
        return this.property('movable').toBool();
    }
    setSelectionBehaviorOnRemove(behavior) {
        this.setProperty('selectionBehaviorOnRemove', behavior);
    }
    selectionBehaviorOnRemove() {
        return this.property('selectionBehaviorOnRemove').toInt();
    }
    setShape(shape) {
        this.setProperty('shape', shape);
    }
    shape() {
        return this.property('shape').toInt();
    }
    setTabsClosable(closeable) {
        this.setProperty('tabsClosable', closeable);
    }
    tabsClosable() {
        return this.property('tabsClosable').toBool();
    }
    setUsesScrollButtons(useButtons) {
        this.setProperty('usesScrollButtons', useButtons);
    }
    usesScrollButtons() {
        return this.property('usesScrollButtons').toBool();
    }
    setAccessibleTabName(index, name) {
        this.native.setAccessibleTabName(index, name);
    }
    accessibleTabName(index) {
        return this.native.accessibleTabName(index);
    }
    addTab(icon, text) {
        if (icon) {
            return this.native.addTab(icon.native, text);
        }
        else {
            return this.native.addTab(text);
        }
    }
    insertTab(index, icon, text) {
        if (icon) {
            return this.native.insertTab(index, icon.native, text);
        }
        else {
            return this.native.insertTab(index, text);
        }
    }
    setTabEnabled(index, enabled) {
        this.native.setTabEnabled(index, enabled);
    }
    isTabEnabled(index) {
        return this.native.isTabEnabled(index);
    }
    moveTab(from, to) {
        this.native.moveTab(from, to);
    }
    removeTab(index) {
        this.native.removeTab(index);
    }
    setTabButton(index, position, widget) {
        this.native.setTabButton(index, position, widget == null ? null : widget?.native);
    }
    setTabData(index, data) {
        this.native.setTabData(index, data.native);
    }
    tabData(index) {
        return new QVariant_1.QVariant(this.native.tabData(index));
    }
    setTabIcon(index, icon) {
        this.native.setTabIcon(index, icon.native);
    }
    tabIcon(index) {
        return new QIcon_1.QIcon(this.native.tabIcon(index));
    }
    setTabText(index, text) {
        this.native.setTabText(index, text);
    }
    tabText(index) {
        return this.native.tabText(index);
    }
    setTabTextColor(index, color) {
        this.native.setTabTextColor(index, color.native);
    }
    tabTextColor(index) {
        return new QColor_1.QColor(this.native.tabTextColor(index));
    }
    setTabToolTip(index, tip) {
        this.native.setTabToolTip(index, tip);
    }
    tabToolTip(index) {
        return this.native.tabToolTip(index);
    }
    setTabWhatsThis(index, text) {
        this.native.setTabWhatsThis(index, text);
    }
    tabWhatsThis(index) {
        return this.native.tabWhatsThis(index);
    }
    tabAt(position) {
        return this.native.tabAt(position.native);
    }
    tabRect(index) {
        return new QRect_1.QRect(this.native.tabRect(index));
    }
}
exports.QTabBar = QTabBar;
WrapperCache_1.wrapperCache.registerWrapper('QTabBarWrap', QTabBar);
var ButtonPosition;
(function (ButtonPosition) {
    ButtonPosition[ButtonPosition["LeftSide"] = 0] = "LeftSide";
    ButtonPosition[ButtonPosition["RightSide"] = 1] = "RightSide";
})(ButtonPosition = exports.ButtonPosition || (exports.ButtonPosition = {}));
var SelectionBehavior;
(function (SelectionBehavior) {
    SelectionBehavior[SelectionBehavior["SelectLeftTab"] = 0] = "SelectLeftTab";
    SelectionBehavior[SelectionBehavior["SelectRightTab"] = 1] = "SelectRightTab";
    SelectionBehavior[SelectionBehavior["SelectPreviousTab"] = 2] = "SelectPreviousTab";
})(SelectionBehavior = exports.SelectionBehavior || (exports.SelectionBehavior = {}));
var TabBarShape;
(function (TabBarShape) {
    TabBarShape[TabBarShape["RoundedNorth"] = 0] = "RoundedNorth";
    TabBarShape[TabBarShape["RoundedSouth"] = 1] = "RoundedSouth";
    TabBarShape[TabBarShape["RoundedWest"] = 2] = "RoundedWest";
    TabBarShape[TabBarShape["RoundedEast"] = 3] = "RoundedEast";
    TabBarShape[TabBarShape["TriangularNorth"] = 4] = "TriangularNorth";
    TabBarShape[TabBarShape["TriangularSouth"] = 5] = "TriangularSouth";
    TabBarShape[TabBarShape["TriangularWest"] = 6] = "TriangularWest";
    TabBarShape[TabBarShape["TriangularEast"] = 7] = "TriangularEast";
})(TabBarShape = exports.TabBarShape || (exports.TabBarShape = {}));
