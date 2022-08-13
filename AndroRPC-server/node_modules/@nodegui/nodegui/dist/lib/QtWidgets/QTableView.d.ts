import { QWidget, QWidgetSignals } from './QWidget';
import { SortOrder, PenStyle } from '../QtEnums';
import { QAbstractItemView, QAbstractItemViewSignals } from './QAbstractItemView';
import { QHeaderView } from './QHeaderView';
import { NativeElement } from '../core/Component';
/**

> The QTableView class provides a default model/view implementation of a table view.

* **This class is a JS wrapper around Qt's [QTableView class](https://doc.qt.io/qt-5/qtableview.html)**

### Example

```javascript
const { QTableView } = require("@nodegui/nodegui");

const tableview = new QTableView();

```
 */
export declare class QTableView<Signals extends QTableViewSignals = QTableViewSignals> extends QAbstractItemView<Signals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    clearSpans(): void;
    columnAt(x: number): number;
    columnSpan(row: number, column: number): number;
    columnViewportPosition(column: number): number;
    columnWidth(column: number): number;
    gridStyle(): PenStyle;
    horizontalHeader(): QHeaderView;
    isColumnHidden(column: number): boolean;
    isCornerButtonEnabled(): boolean;
    isRowHidden(row: number): boolean;
    isSortingEnabled(): boolean;
    rowAt(y: number): number;
    rowHeight(row: number): number;
    rowSpan(row: number, column: number): number;
    rowViewportPosition(row: number): number;
    setColumnHidden(column: number, hide: boolean): void;
    setColumnWidth(column: number, width: number): void;
    setCornerButtonEnabled(enable: boolean): void;
    setGridStyle(style: PenStyle): void;
    setRowHeight(row: number, height: number): void;
    setRowHidden(row: number, hide: boolean): void;
    setSortingEnabled(enable: boolean): void;
    setSpan(row: number, column: number, rowSpanCount: number, columnSpanCount: number): void;
    setWordWrap(on: boolean): void;
    showGrid(): boolean;
    verticalHeader(): QHeaderView;
    wordWrap(): boolean;
    hideColumn(column: number): void;
    hideRow(row: number): void;
    resizeColumnToContents(column: number): void;
    resizeColumnsToContents(): void;
    resizeRowToContents(row: number): void;
    resizeRowsToContents(): void;
    selectColumn(column: number): void;
    selectRow(row: number): void;
    setShowGrid(show: boolean): void;
    showColumn(column: number): void;
    showRow(row: number): void;
    sortByColumn(column: number, order: SortOrder): void;
}
export declare type QTableViewSignals = QAbstractItemViewSignals;
