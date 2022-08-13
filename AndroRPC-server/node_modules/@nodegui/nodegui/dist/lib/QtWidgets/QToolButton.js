"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolButtonPopupMode = exports.QToolButton = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractButton_1 = require("./QAbstractButton");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
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
class QToolButton extends QAbstractButton_1.QAbstractButton {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QToolButton(parent.native);
        }
        else {
            native = new addon_1.default.QToolButton();
        }
        super(native);
    }
    setArrowType(type) {
        this.setProperty('arrowType', type);
    }
    arrowType() {
        return this.property('arrowType').toInt();
    }
    setAutoRaise(enable) {
        this.setProperty('autoRaise', enable);
    }
    autoRaise() {
        return this.property('autoRaise').toBool();
    }
    setPopupMode(mode) {
        this.setProperty('popupMode', mode);
    }
    popupMode() {
        return this.property('popupMode').toInt();
    }
    setToolButtonStyle(style) {
        this.setProperty('toolButtonStyle', style);
    }
    toolButtonStyle() {
        return this.property('toolButtonStyle').toInt();
    }
    setMenu(menu) {
        this.native.setMenu(menu.native);
    }
    menu() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.menu());
    }
    setDefaultAction(action) {
        this.native.setDefaultAction(action.native);
    }
    defaultAction() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.defaultAction());
    }
    showMenu() {
        this.native.showMenu();
    }
}
exports.QToolButton = QToolButton;
WrapperCache_1.wrapperCache.registerWrapper('QToolButtonWrap', QToolButton);
var ToolButtonPopupMode;
(function (ToolButtonPopupMode) {
    ToolButtonPopupMode[ToolButtonPopupMode["DelayedPopup"] = 0] = "DelayedPopup";
    ToolButtonPopupMode[ToolButtonPopupMode["MenuButtonPopup"] = 1] = "MenuButtonPopup";
    ToolButtonPopupMode[ToolButtonPopupMode["InstantPopup"] = 2] = "InstantPopup";
})(ToolButtonPopupMode = exports.ToolButtonPopupMode || (exports.ToolButtonPopupMode = {}));
