import { ItemFlag } from '../QtEnums';
import { QAbstractItemModel } from './QAbstractItemModel';
import { QModelIndex } from './QModelIndex';
export declare class QAbstractTableModel extends QAbstractItemModel {
    index(row: number, column: number, parent?: QModelIndex): QModelIndex;
    parentModelIndex(child: QModelIndex): QModelIndex;
    sibling(row: number, column: number, index: QModelIndex): QModelIndex;
    hasChildren(parent: QModelIndex): boolean;
    flags(index: QModelIndex): ItemFlag;
}
