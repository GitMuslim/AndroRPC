"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QListWidgetItem = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const Component_1 = require("../core/Component");
const QBrush_1 = require("../QtGui/QBrush");
const QFont_1 = require("../QtGui/QFont");
const QIcon_1 = require("../QtGui/QIcon");
const QSize_1 = require("../QtCore/QSize");
const QVariant_1 = require("../QtCore/QVariant");
/**

> Creates an item for QListWidget.

* **This class is a JS wrapper around Qt's [QListWidgetItem class](https://doc.qt.io/qt-5/qlistwidgetitem.html)**

### Example

```javascript
const { QListWidget, QListWidgetItem } = require("@nodegui/nodegui");

const listWidget = new QListWidget();

for (let i = 0; i < 30; i++) {
  let listWidgetItem = new QListWidgetItem();
  listWidgetItem.setText('listWidgetItem ' + i);
  if (i===3) {
    listWidgetItem.setCheckState(2);
  } else {
    listWidgetItem.setCheckState(0);
  }
  listWidget.addItem(listWidgetItem);
}
```
 */
class QListWidgetItem extends Component_1.Component {
    constructor(arg) {
        let native;
        if (typeof arg === 'string') {
            native = new addon_1.default.QListWidgetItem(arg);
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            native = new addon_1.default.QListWidgetItem();
        }
        super(native);
    }
    setBackground(brush) {
        this.native.setBackground(brush.native);
    }
    background() {
        return new QBrush_1.QBrush(this.native.background());
    }
    setCheckState(state) {
        this.native.setCheckState(state);
    }
    checkState() {
        return this.native.checkState();
    }
    setData(role, value) {
        this.native.setData(role, value.native);
    }
    data(role) {
        return new QVariant_1.QVariant(this.native.data(role));
    }
    setFlags(flags) {
        this.native.setFlags(flags);
    }
    flags() {
        return this.native.flags();
    }
    setFont(font) {
        this.native.setFont(font.native);
    }
    font() {
        return new QFont_1.QFont(this.native.font());
    }
    setForeground(brush) {
        this.native.setForeground(brush.native);
    }
    foreground() {
        return new QBrush_1.QBrush(this.native.foreground());
    }
    setIcon(icon) {
        this.native.setIcon(icon.native);
    }
    icon() {
        return new QIcon_1.QIcon(this.native.icon());
    }
    setHidden(hide) {
        this.native.setHidden(hide);
    }
    isHidden() {
        return this.native.isHidden();
    }
    setSelected(select) {
        this.native.setSelected(select);
    }
    isSelected() {
        return this.native.isSelected();
    }
    setSizeHint(size) {
        this.native.setSizeHint(size.native);
    }
    sizeHint() {
        return new QSize_1.QSize(this.native.sizeHint());
    }
    setStatusTip(statusTip) {
        this.native.setStatusTip(statusTip);
    }
    statusTip() {
        return this.native.statusTip();
    }
    setText(text) {
        this.native.setText(text);
    }
    text() {
        return this.native.text();
    }
    setTextAlignment(alignment) {
        this.native.setTextAlignment(alignment);
    }
    textAlignment() {
        return this.native.textAlignment();
    }
    setToolTip(toolTip) {
        this.native.setToolTip(toolTip);
    }
    toolTip() {
        return this.native.toolTip();
    }
    setWhatsThis(whatsThis) {
        this.native.setWhatsThis(whatsThis);
    }
    whatsThis() {
        return this.native.whatsThis();
    }
    type() {
        return this.native.type$();
    }
}
exports.QListWidgetItem = QListWidgetItem;
