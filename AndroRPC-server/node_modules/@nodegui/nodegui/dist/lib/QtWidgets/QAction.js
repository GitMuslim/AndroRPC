"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAction = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QFont_1 = require("../QtGui/QFont");
const QObject_1 = require("../QtCore/QObject");
const helpers_1 = require("../utils/helpers");
const QVariant_1 = require("../QtCore/QVariant");
const WrapperCache_1 = require("../core/WrapperCache");
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
class QAction extends QObject_1.QObject {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg) {
            const parent = arg;
            native = new addon_1.default.QAction(parent.native);
        }
        else {
            native = new addon_1.default.QAction();
        }
        super(native);
    }
    setText(text) {
        this.native.setText(text);
    }
    setEnabled(enabled) {
        this.native.setEnabled(enabled);
    }
    setIcon(icon) {
        this.native.setIcon(icon.native);
    }
    setMenu(menu) {
        this.native.setMenu(menu.native);
    }
    setShortcut(keysequence) {
        this.native.setShortcut(keysequence.native);
    }
    setShortcutContext(shortcutContext) {
        this.native.setShortcutContext(shortcutContext);
    }
    isCheckable() {
        return this.native.isCheckable();
    }
    setCheckable(isCheckable) {
        this.native.setCheckable(isCheckable);
    }
    isChecked() {
        return this.native.isChecked();
    }
    setChecked(isChecked) {
        this.native.setChecked(isChecked);
    }
    isSeparator() {
        return this.native.isSeparator();
    }
    setSeparator(isSeparator) {
        this.native.setSeparator(isSeparator);
    }
    setFont(font) {
        this.native.setFont(font.native);
    }
    font() {
        return QFont_1.QFont.fromQVariant(this.property('font'));
    }
    setData(value) {
        this.native.setData(value.native);
    }
    data() {
        return new QVariant_1.QVariant(this.native.data());
    }
}
exports.QAction = QAction;
WrapperCache_1.wrapperCache.registerWrapper('QActionWrap', QAction);
WrapperCache_1.wrapperCache.registerWrapper('QActionWrap', QAction);
