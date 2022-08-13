import { Component, NativeElement } from '../core/Component';
import { ItemFlag } from '../QtEnums/ItemFlag';
import { CheckState } from '../QtEnums';
export declare class QStandardItem extends Component {
    constructor();
    constructor(parent: QStandardItem, text?: string);
    constructor(native: NativeElement);
    setCheckState(state: CheckState): void;
    setFlags(flags: ItemFlag): void;
    setData(value: number, role: number): void;
    checkState(): CheckState;
}
