import { NativeElement, Component } from '../core/Component';
import { QVariant } from './QVariant';
/**
 * The QPoint class defines a point in the plane using integer precision.
 */
export declare class QPoint extends Component {
    constructor();
    constructor(nativeElement: NativeElement);
    constructor(x?: number, y?: number);
    setX(value: number): void;
    setY(value: number): void;
    x(): number;
    y(): number;
    /**
     * Returns true if both the x and y coordinates are set to 0.0 (ignoring the sign); otherwise returns false.
     */
    isNull(): boolean;
    /**
     * Returns the sum of the absolute values of x() and y(), traditionally known as the "Manhattan length" of the vector from the origin to the point.
     */
    manhattanLength(): number;
    /**
     * Returns a point with x and y coordinates exchanged
     */
    transposed(): QPoint;
    static fromQVariant(variant: QVariant): QPoint;
}
