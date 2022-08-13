import { NativeElement, Component } from '../core/Component';
import { QVariant } from './QVariant';
import { ItemDataRole } from '../QtEnums/ItemDataRole';
import { ItemFlag } from '../QtEnums/ItemFlag';
export declare class QModelIndex extends Component {
    constructor(arg?: NativeElement);
    column(): number;
    data(role?: ItemDataRole): QVariant;
    flags(): ItemFlag;
    isValid(): boolean;
    parent(): QModelIndex;
    row(): number;
    sibling(row: number, column: number): QModelIndex;
    siblingAtColumn(column: number): QModelIndex;
    siblingAtRow(row: number): QModelIndex;
    static fromQVariant(variant: QVariant): QModelIndex;
}
