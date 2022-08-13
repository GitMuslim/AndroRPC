import { NativeElement, Component } from '../core/Component';
import { QPointF } from './QPointF';
import { QRect } from './QRect';
/**
 * description
 */
export declare class QRectF extends Component {
    constructor(nativeOrX?: NativeElement | number, y?: number, width?: number, height?: number);
    /**
    Adds dx1, dy1, dx2 and dy2 respectively to the existing coordinates of the rectangle.
    */
    adjust(dx1: number, dy1: number, dx2: number, dy2: number): void;
    /**
    Returns a new rectangle with dx1, dy1, dx2 and dy2 added respectively to the existing coordinates of this rectangle.
    */
    adjusted(dx1: number, dy1: number, dx2: number, dy2: number): QRectF;
    /**
    Returns the y-coordinate of the rectangle's bottom edge.
    */
    bottom(): number;
    /**
    Returns the position of the rectangle's bottom-left corner.
    */
    bottomLeft(): QPointF;
    /**
    Returns the position of the rectangle's bottom-right corner.
    */
    bottomRight(): QPointF;
    /**
    Returns the center point of the rectangle.
    */
    center(): QPointF;
    /**
     * Returns true if the given point is inside or on the edge of the rectangle; otherwise returns false.
     */
    contains(arg0: QRectF | number | QPointF, y: number): boolean;
    /**
    Returns the height of the rectangle.
    */
    height(): number;
    /**
    Returns the intersection of this rectangle and the given rectangle. Note that r.intersected(s) is equivalent to r & s.
    */
    intersected(rectangle: QRectF): QRectF;
    /**
    Returns true if this rectangle intersects with the given rectangle (i.e. there is a non-empty area of overlap between them), otherwise returns false.
    */
    intersects(rectangle: QRectF): boolean;
    /**
    Returns true if the rectangle is empty, otherwise returns false.
    */
    isEmpty(): boolean;
    /**
    Returns true if the rectangle is a null rectangle, otherwise returns false.
    */
    isNull(): boolean;
    /**
    Returns true if the rectangle is valid, otherwise returns false.
    */
    isValid(): boolean;
    /**
    Returns the x-coordinate of the rectangle's left edge. Equivalent to x().
    */
    left(): number;
    /**
    Moves the rectangle vertically, leaving the rectangle's bottom edge at the given y coordinate. The rectangle's size is unchanged.
    */
    moveBottom(y: number): void;
    /**
    Moves the rectangle, leaving the bottom-left corner at the given position. The rectangle's size is unchanged.
    */
    moveBottomLeft(position: QPointF): void;
    /**
    Moves the rectangle, leaving the bottom-right corner at the given position. The rectangle's size is unchanged.
    */
    moveBottomRight(position: QPointF): void;
    /**
    Moves the rectangle, leaving the center point at the given position. The rectangle's size is unchanged.
    */
    moveCenter(position: QPointF): void;
    /**
    Moves the rectangle horizontally, leaving the rectangle's left edge at the given x coordinate. The rectangle's size is unchanged.
    */
    moveLeft(x: number): void;
    /**
    Moves the rectangle horizontally, leaving the rectangle's right edge at the given x coordinate. The rectangle's size is unchanged.
    */
    moveRight(x: number): void;
    /**
    Moves the rectangle, leaving the top-left corner at the given position (x, y). The rectangle's size is unchanged.
    */
    moveTo(xOrPos: number | QPointF, y: number): void;
    /**
    Moves the rectangle vertically, leaving the rectangle's top line at the given y coordinate. The rectangle's size is unchanged.
    */
    moveTop(y: number): void;
    /**
    Moves the rectangle, leaving the top-left corner at the given position. The rectangle's size is unchanged.
    */
    moveTopLeft(position: QPointF): void;
    /**
    Moves the rectangle, leaving the top-right corner at the given position. The rectangle's size is unchanged.
    */
    moveTopRight(position: QPointF): void;
    /**
    Returns a normalized rectangle; i.e., a rectangle that has a non-negative width and height.
    */
    normalized(): QRectF;
    /**
    Returns the x-coordinate of the rectangle's right edge.
    */
    right(): number;
    /**
    Sets the bottom edge of the rectangle to the given y coordinate. May change the height, but will never change the top edge of the rectangle.
    */
    setBottom(y: number): void;
    /**
    Set the bottom-left corner of the rectangle to the given position. May change the size, but will never change the top-right corner of the rectangle.
    */
    setBottomLeft(position: QPointF): void;
    /**
    Set the bottom-right corner of the rectangle to the given position. May change the size, but will never change the top-left corner of the rectangle.
    */
    setBottomRight(position: QPointF): void;
    /**
    Sets the coordinates of the rectangle's top-left corner to (x1, y1), and the coordinates of its bottom-right corner to (x2, y2).
    */
    setCoords(x1: number, y1: number, x2: number, y2: number): void;
    /**
    Sets the height of the rectangle to the given height. The bottom edge is changed, but not the top one.
    */
    setHeight(height: number): void;
    /**
    Sets the left edge of the rectangle to the given x coordinate. May change the width, but will never change the right edge of the rectangle.
    */
    setLeft(x: number): void;
    /**
    Sets the coordinates of the rectangle's top-left corner to (x, y), and its size to the given width and height.
    */
    setRect(x: number, y: number, width: number, height: number): void;
    /**
    Sets the right edge of the rectangle to the given x coordinate. May change the width, but will never change the left edge of the rectangle.
    */
    setRight(x: number): void;
    /**
    Sets the top edge of the rectangle to the given y coordinate. May change the height, but will never change the bottom edge of the rectangle.
    */
    setTop(y: number): void;
    /**
    Set the top-left corner of the rectangle to the given position. May change the size, but will never change the bottom-right corner of the rectangle.
    */
    setTopLeft(position: QPointF): void;
    /**
    Set the top-right corner of the rectangle to the given position. May change the size, but will never change the bottom-left corner of the rectangle.
    */
    setTopRight(position: QPointF): void;
    /**
    Sets the width of the rectangle to the given width. The right edge is changed, but not the left one.
    */
    setWidth(width: number): void;
    /**
    Sets the left edge of the rectangle to the given x coordinate. May change the width, but will never change the right edge of the rectangle.
    */
    setX(x: number): void;
    /**
    Sets the top edge of the rectangle to the given y coordinate. May change the height, but will never change the bottom edge of the rectangle.
    */
    setY(y: number): void;
    /**
    Returns a QRect based on the values of this rectangle that is the smallest possible integer rectangle that completely contains this rectangle.
    */
    toAlignedRect(): QRect;
    /**
    Returns a QRect based on the values of this rectangle. Note that the coordinates in the returned rectangle are rounded to the nearest integer.
    */
    toRect(): QRect;
    /**
    Returns the y-coordinate of the rectangle's top edge. Equivalent to y().
    */
    top(): number;
    /**
    Returns the position of the rectangle's top-left corner.
    */
    topLeft(): QPointF;
    /**
    Returns the position of the rectangle's top-right corner.
    */
    topRight(): QPointF;
    /**
    Moves the rectangle dx along the x-axis and dy along the y-axis, relative to the current position. Positive values move the rectangle to the right and downwards.
    */
    translate(dxOrOffset: number | QPointF, dy: number): void;
    /**
    Returns a copy of the rectangle that is translated dx along the x axis and dy along the y axis, relative to the current position. Positive values move the rectangle to the right and down.
    */
    translated(dxOrOffset: number | QPointF, dy: number): QRectF;
    /**
    Returns a copy of the rectangle that has its width and height exchanged:
    */
    transposed(): QRectF;
    /**
    Returns the bounding rectangle of this rectangle and the given rectangle.
    */
    united(rectangle: QRectF): QRectF;
    /**
    Returns the width of the rectangle.
    */
    width(): number;
    /**
    Returns the x-coordinate of the rectangle's left edge. Equivalent to left().
    */
    x(): number;
    /**
    Returns the y-coordinate of the rectangle's top edge. Equivalent to top().
    */
    y(): number;
}
