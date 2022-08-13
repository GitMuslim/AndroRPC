import { Component } from '../core/Component';
import { QPainterPath } from '../QtWidgets/QPainterPath';
import { PenStyle } from '../QtEnums';
import { QBrush } from '../QtGui/QBrush';
import { QColor } from '../QtGui/QColor';
import { QPoint } from '../QtCore/QPoint';
import { QPen } from '../QtGui/QPen';
import { QWidget } from './QWidget';
import { QImage } from '../QtGui/QImage';
import { QFont } from '../QtGui/QFont';
import { QRect } from '../QtCore/QRect';
/**

> Lets you paint on widgets.

* **This class is a JS wrapper around Qt's [QPainter class](https://doc.qt.io/qt-5/qpainter.html)**

Note: QPainter works only inside the paint event.

### Example

```javascript

import { FlexLayout, WidgetEventTypes, QMainWindow, QPainter, QWidget } from '@nodegui/nodegui';

const win = new QMainWindow();
const center = new QWidget();
const layout = new FlexLayout();
center.setLayout(layout);
win.resize(200, 200);

win.addEventListener(WidgetEventTypes.Paint, () => {
    const painter = new QPainter(win);
    painter.drawText(20, 20, 'Hello');
    painter.end();
});
win.show();
(global as any).win = win;

```

## Advanced example:

https://github.com/nodegui/examples/blob/master/nodegui/custom-native-widget-qpainter
*/
export declare class QPainter extends Component {
    constructor(device?: Component);
    begin(device: QWidget | QImage): boolean;
    beginNativePainting(): void;
    boundingRect(x: number, y: number, w: number, h: number, flags: number, text: string): QRect;
    compositionMode(): CompositionMode;
    drawArc(x: number, y: number, width: number, height: number, startAngle: number, spanAngle: number): void;
    drawChord(x: number, y: number, width: number, height: number, startAngle: number, spanAngle: number): void;
    drawConvexPolygon(points: QPoint[]): void;
    drawEllipse(x: number, y: number, width: number, height: number): void;
    drawImage(x: number, y: number, image: QImage, sx?: number, sy?: number, sw?: number, sh?: number): void;
    drawLine(x1: number, y1: number, x2: number, y2: number): void;
    drawPath(path: QPainterPath): void;
    drawPie(x: number, y: number, width: number, height: number, startAngle: number, sweepLength: number): void;
    drawPoint(x: number, y: number): void;
    drawRect(x: number, y: number, width: number, height: number): void;
    drawText(x: number, y: number, text: string): void;
    end(): boolean;
    endNativePainting(): void;
    eraseRect(x: number, y: number, width: number, height: number): void;
    fillRect(x: number, y: number, width: number, height: number, color: QColor): void;
    opacity(): number;
    restore(): void;
    rotate(angle: number): void;
    save(): void;
    scale(sx: number, sy: number): void;
    setBrush(colorOrBrush: QColor | QBrush): void;
    setBrushOrigin(x: number, y: number): void;
    setCompositionMode(mode: CompositionMode): void;
    setFont(font: QFont): void;
    setOpacity(opacity: number): void;
    setPen(arg: PenStyle | QColor | QPen): void;
    setRenderHint(hint: RenderHint, on?: boolean): void;
    /**
     * Sets the world transformation matrix.
     *
     * @param matrix2x3 An array of length 6 representing a 2x3 transformation
     *                  matrix. The order of elements corresponds to the
     *                  convention used in QTransform, i.e. m11, m12, m21, m22,
     *                  dx, and dy.
     * @param combine   If set then this transform will be combining with the
     *                  curent one. Otherwise it replaces it completely.
     */
    setTransform(matrix2x3: number[] | Float32Array, combine?: boolean): void;
    strokePath(path: QPainterPath, pen: QPen): void;
    translate(dx: number, dy: number): void;
}
export declare enum RenderHint {
    Antialiasing = 1,
    TextAntialiasing = 2,
    SmoothPixmapTransform = 4,
    HighQualityAntialiasing = 8,
    NonCosmeticDefaultPen = 16,
    Qt4CompatiblePainting = 32,
    LosslessImageRendering = 64
}
export declare enum CompositionMode {
    CompositionMode_SourceOver = 0,
    CompositionMode_DestinationOver = 1,
    CompositionMode_Clear = 2,
    CompositionMode_Source = 3,
    CompositionMode_Destination = 4,
    CompositionMode_SourceIn = 5,
    CompositionMode_DestinationIn = 6,
    CompositionMode_SourceOut = 7,
    CompositionMode_DestinationOut = 8,
    CompositionMode_SourceAtop = 9,
    CompositionMode_DestinationAtop = 10,
    CompositionMode_Xor = 11,
    CompositionMode_Plus = 12,
    CompositionMode_Multiply = 13,
    CompositionMode_Screen = 14,
    CompositionMode_Overlay = 15,
    CompositionMode_Darken = 16,
    CompositionMode_Lighten = 17,
    CompositionMode_ColorDodge = 18,
    CompositionMode_ColorBurn = 19,
    CompositionMode_HardLight = 20,
    CompositionMode_SoftLight = 21,
    CompositionMode_Difference = 22,
    CompositionMode_Exclusion = 23,
    RasterOp_SourceOrDestination = 24,
    RasterOp_SourceAndDestination = 25,
    RasterOp_SourceXorDestination = 26,
    RasterOp_NotSourceAndNotDestination = 27,
    RasterOp_NotSourceOrNotDestination = 28,
    RasterOp_NotSourceXorDestination = 29,
    RasterOp_NotSource = 30,
    RasterOp_NotSourceAndDestination = 31,
    RasterOp_SourceAndNotDestination = 32,
    RasterOp_NotSourceOrDestination = 33,
    RasterOp_ClearDestination = 35,
    RasterOp_SetDestination = 36,
    RasterOp_NotDestination = 37,
    RasterOp_SourceOrNotDestination = 34
}
