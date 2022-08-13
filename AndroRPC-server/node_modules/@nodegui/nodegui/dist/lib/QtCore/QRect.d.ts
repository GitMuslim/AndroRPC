import { NativeElement, Component } from '../core/Component';
import { QVariant } from './QVariant';
export declare class QRect extends Component {
    constructor(nativeOrX?: NativeElement | number, y?: number, width?: number, height?: number);
    setWidth(width: number): void;
    width(): number;
    setHeight(height: number): void;
    height(): number;
    left(): number;
    setLeft(height: number): void;
    top(): number;
    setTop(height: number): void;
    static fromQVariant(variant: QVariant): QRect;
}
