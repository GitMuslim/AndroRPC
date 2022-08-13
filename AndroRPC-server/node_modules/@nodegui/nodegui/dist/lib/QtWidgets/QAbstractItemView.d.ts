import { QAbstractScrollArea, QAbstractScrollAreaSignals } from './QAbstractScrollArea';
import { QWidget } from './QWidget';
import { QModelIndex } from '../QtCore/QModelIndex';
import { QSize } from '../QtCore/QSize';
import { DropAction } from '../QtEnums/DropAction';
import { TextElideMode } from '../QtEnums/TextElideMode';
import { QAbstractItemModel } from '../QtCore/QAbstractItemModel';
import { QPoint } from '../QtCore/QPoint';
import { QItemSelectionModel } from '../QtCore/QItemSelectionModel';
import { NativeElement } from '../core/Component';
import { QAbstractItemDelegate } from './QAbstractItemDelegate';
import { QRect } from '../QtCore/QRect';
/**

> This is the abstract base class of button widgets, providing their functionality.

* **This class is a JS wrapper around Qt's [QAbstractItemView class](https://doc.qt.io/qt-5/qabstractitemview.html)**

The QAbstractItemView class is an abstract class and therefore, technically, no further instances actually have to be created.
It is inherited by QListWidget. (n/a QColumnView, QHeaderView, QListView, QTableView, and QTreeView)

*/
export declare abstract class QAbstractItemView<Signals extends QAbstractItemViewSignals> extends QAbstractScrollArea<Signals> {
    alternatingRowColors(): boolean;
    autoScrollMargin(): number;
    closePersistentEditor(index: QModelIndex): void;
    currentIndex(): QModelIndex;
    defaultDropAction(): DropAction;
    dragDropMode(): DragDropMode;
    dragDropOverwriteMode(): boolean;
    dragEnabled(): boolean;
    editTriggers(): number;
    hasAutoScroll(): boolean;
    horizontalScrollMode(): ScrollMode;
    iconSize(): QSize;
    indexAt(point: QPoint): QModelIndex;
    indexWidget(index: QModelIndex): QWidget;
    isPersistentEditorOpen(index: QModelIndex): boolean;
    keyboardSearch(search: string): void;
    openPersistentEditor(index: QModelIndex): void;
    resetHorizontalScrollMode(): void;
    resetVerticalScrollMode(): void;
    rootIndex(): QModelIndex;
    scrollTo(index: QModelIndex, hint?: ScrollHint): void;
    selectionBehavior(): QAbstractItemViewSelectionBehavior;
    selectionMode(): SelectionMode;
    selectionModel(): QItemSelectionModel;
    setAlternatingRowColors(enable: boolean): void;
    setAutoScroll(enable: boolean): void;
    setAutoScrollMargin(margin: number): void;
    setDefaultDropAction(dropAction: DropAction): void;
    setDragDropMode(behavior: DragDropMode): void;
    setDragDropOverwriteMode(overwrite: boolean): void;
    setDragEnabled(enable: boolean): void;
    setDropIndicatorShown(enable: boolean): void;
    setEditTriggers(triggers: number): void;
    setHorizontalScrollMode(mode: boolean): void;
    setIconSize(iconSize: QSize): void;
    setIndexWidget(index: QModelIndex, widget: QWidget): void;
    setItemDelegate(delegate: QAbstractItemDelegate): void;
    setItemDelegateForColumn(column: number, delegate: QAbstractItemDelegate): void;
    setItemDelegateForRow(row: number, delegate: QAbstractItemDelegate): void;
    setModel(model: QAbstractItemModel): void;
    setSelectionBehavior(behavior: QAbstractItemViewSelectionBehavior): void;
    setSelectionMode(mode: SelectionMode): void;
    setTabKeyNavigation(enable: boolean): void;
    setTextElideMode(mode: TextElideMode): void;
    setVerticalScrollMode(mode: ScrollMode): void;
    showDropIndicator(): boolean;
    sizeHintForIndex(index: QModelIndex): QSize;
    tabKeyNavigation(): boolean;
    textElideMode(): TextElideMode;
    verticalScrollMode(): ScrollMode;
    visualRect(index: QModelIndex): QRect;
    clearSelection(): void;
    edit(index: QModelIndex): void;
    reset(): void;
    scrollToBottom(): void;
    scrollToTop(): void;
    selectAll(): void;
    setCurrentIndex(index: QModelIndex): void;
    setRootIndex(index: QModelIndex): void;
    update(index?: QModelIndex): void;
}
export declare enum DragDropMode {
    NoDragDrop = 0,
    DragOnly = 1,
    DropOnly = 2,
    DragDrop = 3,
    InternalMove = 4
}
export declare enum EditTrigger {
    NoEditTriggers = 0,
    CurrentChanged = 1,
    DoubleClicked = 2,
    SelectedClicked = 4,
    EditKeyPressed = 8,
    AnyKeyPressed = 16,
    AllEditTriggers = 31
}
export declare enum ScrollHint {
    EnsureVisible = 0,
    PositionAtTop = 1,
    PositionAtBottom = 2,
    PositionAtCenter = 3
}
export declare enum ScrollMode {
    ScrollPerItem = 0,
    ScrollPerPixel = 1
}
export declare enum QAbstractItemViewSelectionBehavior {
    SelectItems = 0,
    SelectRows = 1,
    SelectColumns = 2
}
export declare enum SelectionMode {
    NoSelection = 0,
    SingleSelection = 1,
    MultiSelection = 2,
    ExtendedSelection = 3,
    ContiguousSelection = 4
}
export interface QAbstractItemViewSignals extends QAbstractScrollAreaSignals {
    activated: (index: NativeElement) => void;
    clicked: (index: NativeElement) => void;
    doubleClicked: (index: NativeElement) => void;
    entered: (index: NativeElement) => void;
    iconSizeChanged: (size: NativeElement) => void;
    pressed: (index: NativeElement) => void;
    viewportEntered: () => void;
}
