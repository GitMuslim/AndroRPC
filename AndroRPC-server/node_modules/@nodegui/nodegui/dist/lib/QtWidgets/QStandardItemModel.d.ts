import { QObject, QObjectSignals } from '../QtCore/QObject';
import { QStandardItem } from './QStandardItem';
import { NativeElement } from '../core/Component';
export interface QStandardItemModelSignals extends QObjectSignals {
    itemChanged: (item: QStandardItem) => void;
}
export declare class QStandardItemModel extends QObject {
    constructor(arg?: QObject | NativeElement);
    item(row: number, column?: number): QStandardItem | void;
}
