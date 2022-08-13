import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractItemView, QAbstractItemViewSignals } from './QAbstractItemView';
import { QSize } from '../QtCore/QSize';
import { AlignmentFlag } from '../..';
/**

> The QListView class provides a list or icon view onto a model.

* **This class is a JS wrapper around Qt's [QListView class](https://doc.qt.io/qt-5/qlistview.html)**

### Example

```javascript
const { QListView } = require("@nodegui/nodegui");

const listview = new QListView();

```
 */
export declare class QListView<Signals extends QListViewSignals = QListViewSignals> extends QAbstractItemView<Signals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setBatchSize(batchSize: number): void;
    batchSize(): number;
    setFlow(flow: Flow): void;
    flow(): Flow;
    setGridSize(size: QSize): void;
    gridSize(): QSize;
    setWrapping(enable: boolean): void;
    isWrapping(): boolean;
    setItemAlignment(alignment: AlignmentFlag): void;
    itemAlignment(): AlignmentFlag;
    setLayoutMode(mode: LayoutMode): void;
    layoutMode(): LayoutMode;
    setModelColumn(column: number): void;
    modelColumn(): number;
    setMovement(movement: Movement): void;
    movement(): Movement;
    setResizeMode(mode: ResizeMode): void;
    resizeMode(): ResizeMode;
    setSelectionRectVisible(show: boolean): void;
    isSelectionRectVisible(): boolean;
    setSpacing(space: number): void;
    spacing(): number;
    setUniformItemSizes(enable: boolean): void;
    uniformItemSizes(): boolean;
    setViewMode(mode: ListViewMode): void;
    viewMode(): ListViewMode;
    setWordWrap(on: boolean): void;
    wordWrap(): boolean;
    clearPropertyFlags(): void;
    setRowHidden(row: number, hide: boolean): void;
    isRowHidden(row: number): boolean;
}
export declare enum Flow {
    LeftToRight = 0,
    TopToBottom = 1
}
export declare enum LayoutMode {
    SinglePass = 0,
    Batched = 1
}
export declare enum Movement {
    Static = 0,
    Free = 1,
    Snap = 2
}
export declare enum ResizeMode {
    Fixed = 0,
    Adjust = 1
}
export declare enum ListViewMode {
    ListMode = 0,
    IconMode = 1
}
export declare type QListViewSignals = QAbstractItemViewSignals;
