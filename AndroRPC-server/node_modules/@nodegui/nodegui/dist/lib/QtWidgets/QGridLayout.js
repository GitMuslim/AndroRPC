"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QGridLayout = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QLayout_1 = require("./QLayout");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> The QGridLayout class lays out widgets in a grid.

* **This class is a JS wrapper around Qt's [QGridLayout](https://doc.qt.io/qt-5/qgridlayout.html)**

### Example

```javascript
const { QGridLayout, QWidget, QLabel } = require("@nodegui/nodegui");

const view = new QWidget();
const layout = new QGridLayout();
view.setLayout(layout);

const label = new QLabel();
label.setText("label1");
const label2 = new QLabel();
label2.setText("label2");

layout.addWidget(label);
layout.addWidget(label2);
```

 */
class QGridLayout extends QLayout_1.QLayout {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QGridLayout(parent.native);
        }
        else {
            native = new addon_1.default.QGridLayout();
        }
        super(native);
    }
    addLayout(layout, row, column, rowSpan = 1, columnSpan = 1, alignment = 0) {
        this.native.addLayout(layout.native, row, column, rowSpan, columnSpan, alignment);
    }
    addWidget(widget, row = 0, col = 0, rowSpan = 1, colSpan = 1, alignment = 0) {
        this.native.addWidget(widget.native, row, col, rowSpan, colSpan, alignment);
    }
    removeWidget(widget) {
        this.native.removeWidget(widget.native);
    }
    columnStretch(column) {
        return this.native.columnStretch(column);
    }
    rowStretch(row) {
        return this.native.rowStretch(row);
    }
    setColumnStretch(column, stretch) {
        this.native.setColumnStretch(column, stretch);
    }
    setRowStretch(row, stretch) {
        this.native.setRowStretch(row, stretch);
    }
    columnMinimumWidth(column) {
        return this.native.columnMinimumWidth(column);
    }
    rowMinimumHeight(row) {
        return this.native.rowMinimumHeight(row);
    }
    setColumnMinimumWidth(column, minSize) {
        this.native.setColumnMinimumWidth(column, minSize);
    }
    setRowMinimumHeight(row, minSize) {
        this.native.setRowMinimumHeight(row, minSize);
    }
    horizontalSpacing() {
        return this.native.horizontalSpacing();
    }
    verticalSpacing() {
        return this.native.verticalSpacing();
    }
    setHorizontalSpacing(spacing) {
        this.native.setHorizontalSpacing(spacing);
    }
    setVerticalSpacing(spacing) {
        this.native.setVerticalSpacing(spacing);
    }
    columnCount() {
        return this.native.columnCount();
    }
    rowCount() {
        return this.native.rowCount();
    }
}
exports.QGridLayout = QGridLayout;
WrapperCache_1.wrapperCache.registerWrapper('QGridLayoutWrap', QGridLayout);
