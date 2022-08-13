import { QObject, QObjectSignals } from '../QtCore/QObject';
import { QModelIndex } from './QModelIndex';
import { QVariant } from './QVariant';
import { ItemDataRole, ItemFlag, Orientation } from '../QtEnums';
export declare type QAbstractItemSignals = QObjectSignals;
export declare class QAbstractItemModel extends QObject<any> {
    constructor();
    buddy(child: QModelIndex): QModelIndex;
    checkIndex(index: QModelIndex): boolean;
    columnCount(parent?: QModelIndex): number;
    data(index: QModelIndex, role?: ItemDataRole): QVariant;
    flags(index: QModelIndex): ItemFlag;
    hasIndex(row: number, column: number, parent?: QModelIndex): boolean;
    headerData(section: number, orientation: Orientation, role: number): QVariant;
    index(row: number, column: number, parent?: QModelIndex): QModelIndex;
    /**
     * Note: This corresponds to `QAbstractItemModel::parent(QModelIndex)`. It has been given a different name in TS.
     */
    parentModelIndex(child: QModelIndex): QModelIndex;
    rowCount(parent?: QModelIndex): number;
    setData(index: QModelIndex, value: QVariant, role?: ItemDataRole): boolean;
    emitDataChanged(topLeft: QModelIndex, bottomRight: QModelIndex, roles: ItemDataRole[]): void;
    beginInsertColumns(parent: QModelIndex, first: number, last: number): void;
    beginInsertRows(parent: QModelIndex, first: number, last: number): void;
    beginMoveColumns(sourceParent: QModelIndex, sourceFirst: number, sourceLast: number, destinationParent: QModelIndex, destinationChild: number): boolean;
    beginMoveRows(sourceParent: QModelIndex, sourceFirst: number, sourceLast: number, destinationParent: QModelIndex, destinationChild: number): boolean;
    beginRemoveColumns(parent: QModelIndex, first: number, last: number): void;
    beginRemoveRows(parent: QModelIndex, first: number, last: number): void;
    beginResetModel(): void;
    createIndex(row: number, column: number): QModelIndex;
    endInsertColumns(): void;
    endInsertRows(): void;
    endMoveColumns(): void;
    endMoveRows(): void;
    endRemoveColumns(): void;
    endRemoveRows(): void;
    endResetModel(): void;
}
