"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTableView = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractItemView_1 = require("./QAbstractItemView");
const QHeaderView_1 = require("./QHeaderView");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> The QTableView class provides a default model/view implementation of a table view.

* **This class is a JS wrapper around Qt's [QTableView class](https://doc.qt.io/qt-5/qtableview.html)**

### Example

```javascript
const { QTableView } = require("@nodegui/nodegui");

const tableview = new QTableView();

```
 */
class QTableView extends QAbstractItemView_1.QAbstractItemView {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QTableView(parent.native);
        }
        else {
            native = new addon_1.default.QTableView();
        }
        super(native);
    }
    // *** Public Functions ***
    clearSpans() {
        this.native.clearSpans();
    }
    columnAt(x) {
        return this.native.columnAt(x);
    }
    columnSpan(row, column) {
        return this.native.columnSpan(row, column);
    }
    columnViewportPosition(column) {
        return this.native.columnViewportPosition(column);
    }
    columnWidth(column) {
        return this.native.columnWidth(column);
    }
    gridStyle() {
        return this.property('gridStyle').toInt();
    }
    horizontalHeader() {
        return new QHeaderView_1.QHeaderView(this.native.horizontalHeader());
    }
    isColumnHidden(column) {
        return this.native.isColumnHidden(column);
    }
    isCornerButtonEnabled() {
        return this.property('cornerButtonEnabled').toBool();
    }
    isRowHidden(row) {
        return this.native.isRowHidden(row);
    }
    isSortingEnabled() {
        return this.property('sortingEnabled').toBool();
    }
    rowAt(y) {
        return this.native.rowAt(y);
    }
    rowHeight(row) {
        return this.native.rowHeight(row);
    }
    rowSpan(row, column) {
        return this.native.rowSpan(row, column);
    }
    rowViewportPosition(row) {
        return this.native.rowViewportPosition(row);
    }
    setColumnHidden(column, hide) {
        this.native.setColumnHidden(column, hide);
    }
    setColumnWidth(column, width) {
        this.native.setColumnWidth(column, width);
    }
    setCornerButtonEnabled(enable) {
        this.setProperty('cornerButtonEnabled', enable);
    }
    setGridStyle(style) {
        this.setProperty('gridStyle', style);
    }
    // TODO: void 	setHorizontalHeader(QHeaderView *header)
    setRowHeight(row, height) {
        this.native.setRowHeight(row, height);
    }
    setRowHidden(row, hide) {
        this.native.setRowHidden(row, hide);
    }
    setSortingEnabled(enable) {
        this.setProperty('sortingEnabled', enable);
    }
    setSpan(row, column, rowSpanCount, columnSpanCount) {
        this.native.setSpan(row, column, rowSpanCount, columnSpanCount);
    }
    // TODO: void 	setVerticalHeader(QHeaderView *header)
    setWordWrap(on) {
        this.setProperty('wordWrap', on);
    }
    showGrid() {
        return this.property('showGrid').toBool();
    }
    verticalHeader() {
        return new QHeaderView_1.QHeaderView(this.native.verticalHeader());
    }
    wordWrap() {
        return this.property('wordWrap').toBool();
    }
    // *** Public Slots ***
    hideColumn(column) {
        this.native.hideColumn(column);
    }
    hideRow(row) {
        this.native.hideRow(row);
    }
    resizeColumnToContents(column) {
        this.native.resizeColumnToContents(column);
    }
    resizeColumnsToContents() {
        this.native.resizeColumnsToContents();
    }
    resizeRowToContents(row) {
        this.native.resizeRowToContents(row);
    }
    resizeRowsToContents() {
        this.native.resizeRowsToContents();
    }
    selectColumn(column) {
        this.native.selectColumn(column);
    }
    selectRow(row) {
        this.native.selectRow(row);
    }
    setShowGrid(show) {
        this.setProperty('showGrid', show);
    }
    showColumn(column) {
        this.native.showColumn(column);
    }
    showRow(row) {
        this.native.showRow(row);
    }
    sortByColumn(column, order) {
        this.native.sortByColumn(column, order);
    }
}
exports.QTableView = QTableView;
WrapperCache_1.wrapperCache.registerWrapper('QTableViewWrap', QTableView);
