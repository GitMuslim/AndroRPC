"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTableWidgetItem = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
const QBrush_1 = require("../QtGui/QBrush");
const QVariant_1 = require("../QtCore/QVariant");
const QFont_1 = require("../QtGui/QFont");
const QIcon_1 = require("../QtGui/QIcon");
const QSize_1 = require("../QtCore/QSize");
/**
 
> Creates an item for QTableWidget.

* **This class is a JS wrapper around Qt's [QTableWidgetItem class](https://doc.qt.io/qt-5/qtablewidgetitem.html)**

### Example

```javascript
const { QTableWidget, QMainWindow, QTableWidgetItem } = require("@nodegui/nodegui");

const win = new QMainWindow();
const table = new QTableWidget(2, 3);
table.setHorizontalHeaderLabels(['first', 'second', 'third']);

const cell00 = new QTableWidgetItem('C00');
const cell01 = new QTableWidgetItem('C01');
const cell10 = new QTableWidgetItem('C10');
const cell11 = new QTableWidgetItem('C11');

table.setItem(0, 0, cell00);
table.setItem(0, 1, cell01);
table.setItem(1, 0, cell10);
table.setItem(1, 1, cell11);

win.setCentralWidget(table);
win.show();
(global as any).win = win;

```

 */
class QTableWidgetItem extends Component_1.Component {
    constructor(arg) {
        let native;
        if (typeof arg === 'string') {
            native = new addon_1.default.QTableWidgetItem(arg);
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            native = new addon_1.default.QTableWidgetItem();
        }
        super(native);
    }
    setBackground(brush) {
        this.native.setBackground(brush.native);
    }
    row() {
        return this.native.row();
    }
    column() {
        return this.native.column();
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
exports.QTableWidgetItem = QTableWidgetItem;
