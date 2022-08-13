import { Component } from '../core/Component';
import { SizeMode, FillRule } from '../QtEnums';
import { QFont } from '../QtGui/QFont';
/**
 
> Lets you paint paths on widgets.

* **This class is a JS wrapper around Qt's [QPainterPath class](https://doc.qt.io/qt-5/qpainterpath.html)**

*/
export declare class QPainterPath extends Component {
    constructor();
    moveTo(x: number, y: number): void;
    addRect(x: number, y: number, width: number, height: number): void;
    lineTo(x: number, y: number): boolean;
    cubicTo(c1X: number, c1Y: number, c2X: number, c2Y: number, endPointX: number, endPointY: number): boolean;
    quadTo(cx: number, cy: number, endPointX: number, endPointY: number): boolean;
    closeSubpath(): void;
    addEllipse(x: number, y: number, width: number, height: number): void;
    addPath(path: QPainterPath): void;
    addRoundedRect(x: number, y: number, width: number, height: number, xRadius: number, yRadius: number, mode?: SizeMode): void;
    addText(x: number, y: number, font: QFont, text: string): void;
    angleAtPercent(t: number): number;
    arcMoveTo(x: number, y: number, width: number, height: number, angle: number): void;
    arcTo(x: number, y: number, width: number, height: number, startAngle: number, sweepLength: number): void;
    boundingRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    capacity(): number;
    clear(): void;
    connectPath(path: QPainterPath): void;
    controlPointRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    currentPosition(): {
        x: number;
        y: number;
    };
    elementCount(): number;
    fillRule(): FillRule;
    intersects(path: QPainterPath): boolean;
    isEmpty(): boolean;
    length(): number;
    percentAtLength(len: number): number;
    pointAtPercent(p: number): {
        x: number;
        y: number;
    };
    reserve(size: number): void;
    setElementPositionAt(index: number, x: number, y: number): void;
    setFillRule(fillRule: FillRule): void;
    slopeAtPercent(p: number): number;
    swap(other: QPainterPath): void;
    translate(x: number, y: number): void;
}
