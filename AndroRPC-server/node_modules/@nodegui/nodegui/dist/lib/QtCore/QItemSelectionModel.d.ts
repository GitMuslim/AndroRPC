import { NativeElement } from '../core/Component';
import { QObject, QObjectSignals } from '../QtCore/QObject';
import { QModelIndex } from './QModelIndex';
export declare type QItemSelectionModelSignals = QObjectSignals;
export declare class QItemSelectionModel extends QObject<QItemSelectionModelSignals> {
    constructor(arg?: NativeElement);
    columnIntersectsSelection(column: number, parent?: QModelIndex): boolean;
    currentIndex(): QModelIndex;
    hasSelection(): boolean;
    isColumnSelected(column: number, parent?: QModelIndex): boolean;
    isRowSelected(row: number, parent?: QModelIndex): boolean;
    isSelected(index: QModelIndex): boolean;
    rowIntersectsSelection(row: number, parent?: QModelIndex): boolean;
    selectedColumns(row?: number): QModelIndex[];
    selectedIndexes(): QModelIndex[];
    selectedRows(column?: number): QModelIndex[];
    clear(): void;
    clearCurrentIndex(): void;
    clearSelection(): void;
    reset(): void;
    select(index: QModelIndex, command: SelectionFlag): void;
    setCurrentIndex(index: QModelIndex, command: SelectionFlag): void;
}
export declare enum SelectionFlag {
    NoUpdate = 0,
    Clear = 1,
    Select = 2,
    Deselect = 4,
    Toggle = 8,
    Current = 16,
    Rows = 32,
    Columns = 64,
    SelectCurrent = 18,
    ToggleCurrent = 24,
    ClearAndSelect = 3
}
