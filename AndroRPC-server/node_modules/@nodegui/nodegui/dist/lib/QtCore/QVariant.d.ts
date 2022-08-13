import { NativeElement, Component } from '../core/Component';
export declare type QVariantType = NativeElement | string | string[] | number | boolean;
export declare class QVariant extends Component {
    constructor();
    constructor(nativeElement: NativeElement);
    constructor(variant: QVariantType);
    toString(): string;
    toInt(): number;
    toDouble(): number;
    toBool(): boolean;
    toStringList(): string[];
}
