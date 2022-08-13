"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionMode = exports.RenderHint = exports.QPainter = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const QColor_1 = require("../QtGui/QColor");
const QPen_1 = require("../QtGui/QPen");
const QWidget_1 = require("./QWidget");
const QRect_1 = require("../QtCore/QRect");
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
class QPainter extends Component_1.Component {
    constructor(device) {
        let native;
        if (device) {
            native = new addon_1.default.QPainter(device.native);
        }
        else {
            native = new addon_1.default.QPainter();
        }
        super(native);
    }
    // *** Public Functions ***
    // TODO: const QBrush &	background() const
    // TODO: Qt::BGMode 	backgroundMode() const
    begin(device) {
        if (device instanceof QWidget_1.QWidget) {
            return this.native.begin(device.native, 'widget');
        }
        else {
            return this.native.begin(device.native, 'image');
        }
    }
    beginNativePainting() {
        this.native.beginNativePainting();
    }
    // TODO: QRectF 	boundingRect(const QRectF &rectangle, int flags, const QString &text)
    // TODO: QRect 	boundingRect(const QRect &rectangle, int flags, const QString &text)
    boundingRect(x, y, w, h, flags, text) {
        return new QRect_1.QRect(this.native.boundingRect(x, y, w, h, flags, text));
    }
    // TODO: QRectF 	boundingRect(const QRectF &rectangle, const QString &text, const QTextOption &option = QTextOption())
    // TODO: const QBrush &	brush() const
    // TODO: QPoint 	brushOrigin() const
    // TODO: QRectF 	clipBoundingRect() const
    // TODO: QPainterPath 	clipPath() const
    // TODO: QRegion 	clipRegion() const
    // TODO: QTransform 	combinedTransform() const
    compositionMode() {
        return this.native.compositionMode();
    }
    // TODO: QPaintDevice *	device() const
    // TODO: const QTransform &	deviceTransform() const
    // TODO: void 	drawArc(const QRectF &rectangle, int startAngle, int spanAngle)
    drawArc(x, y, width, height, startAngle, spanAngle) {
        this.native.drawArc(x, y, width, height, startAngle, spanAngle);
    }
    // TODO: void 	drawChord(const QRectF &rectangle, int startAngle, int spanAngle)
    drawChord(x, y, width, height, startAngle, spanAngle) {
        this.native.drawChord(x, y, width, height, startAngle, spanAngle);
    }
    // TODO: void 	drawChord(const QRect &rectangle, int startAngle, int spanAngle)
    drawConvexPolygon(points) {
        const nativePoints = points.map((point) => point.native);
        this.native.drawConvexPolygon(nativePoints);
    }
    // TODO: void 	drawConvexPolygon(const QPolygonF &polygon)
    drawEllipse(x, y, width, height) {
        return this.native.drawEllipse(x, y, width, height);
    }
    // TODO: void 	drawEllipse(const QRectF &rectangle)
    // TODO: void 	drawGlyphRun(const QPointF &position, const QGlyphRun &glyphs)
    drawImage(x, y, image, sx = 0, sy = 0, sw = -1, sh = -1) {
        this.native.drawImage(x, y, image.native, sx, sy, sw, sh);
    }
    drawLine(x1, y1, x2, y2) {
        this.native.drawLine(x1, y1, x2, y2);
    }
    // TODO: void 	drawLines(const QVector<QLineF> &lines)
    drawPath(path) {
        return this.native.drawPath(path.native);
    }
    // TODO: void 	drawPicture(int x, int y, const QPicture &picture)
    drawPie(x, y, width, height, startAngle, sweepLength) {
        return this.native.drawPie(x, y, width, height, startAngle, sweepLength);
    }
    // TODO: void 	drawPixmap(int x, int y, int w, int h, const QPixmap &pixmap, int sx, int sy, int sw, int sh)
    // TODO: void 	drawPixmapFragments(const QPainter::PixmapFragment *fragments, int fragmentCount, const QPixmap &pixmap, QPainter::PixmapFragmentHints hints = PixmapFragmentHints())
    drawPoint(x, y) {
        this.native.drawPoint(x, y);
    }
    // TODO: void 	drawPoints(const QPointF *points, int pointCount)
    // TODO: void 	drawPolygon(const QPointF *points, int pointCount, Qt::FillRule fillRule = Qt::OddEvenFill)
    drawRect(x, y, width, height) {
        this.native.drawRect(x, y, width, height);
    }
    // TODO: void 	drawRects(const QVector<QRectF> &rectangles)
    // TODO: void 	drawRoundedRect(int x, int y, int w, int h, qreal xRadius, qreal yRadius, Qt::SizeMode mode = Qt::AbsoluteSize)
    // TODO: void 	drawStaticText(int left, int top, const QStaticText &staticText)
    drawText(x, y, text) {
        return this.native.drawText(x, y, text);
    }
    // TODO: void 	drawText(int x, int y, int width, int height, int flags, const QString &text, QRect *boundingRect = nullptr)
    // TODO: void 	drawTiledPixmap(int x, int y, int width, int height, const QPixmap &pixmap, int sx = 0, int sy = 0)
    end() {
        return this.native.end();
    }
    endNativePainting() {
        this.native.endNativePainting();
    }
    eraseRect(x, y, width, height) {
        this.native.eraseRect(x, y, width, height);
    }
    fillRect(x, y, width, height, color) {
        this.native.fillRect(x, y, width, height, color.native);
    }
    // TODO: const QFont &	font() const
    // TODO: QFontInfo 	fontInfo() const
    // TODO: QFontMetrics 	fontMetrics() const
    // TODO: bool 	hasClipping() const
    // CLASS: QPainter
    // TODO: bool 	isActive() const
    // TODO: Qt::LayoutDirection 	layoutDirection() const
    opacity() {
        return this.native.opacity();
    }
    // TODO: QPaintEngine *	paintEngine() const
    // TODO: const QPen &	pen() const
    // TODO: QPainter::RenderHints 	renderHints() const
    // TODO: void 	resetTransform()
    restore() {
        this.native.restore();
    }
    rotate(angle) {
        this.native.rotate(angle);
    }
    save() {
        this.native.save();
    }
    scale(sx, sy) {
        this.native.scale(sx, sy);
    }
    // TODO: void 	setBackground(const QBrush &brush)
    // TODO: void 	setBackgroundMode(Qt::BGMode mode)
    setBrush(colorOrBrush) {
        if (colorOrBrush instanceof QColor_1.QColor) {
            this.native.setBrush(colorOrBrush.native, 'color');
        }
        else {
            this.native.setBrush(colorOrBrush.native, 'brush');
        }
    }
    setBrushOrigin(x, y) {
        this.native.setBrushOrigin(x, y);
    }
    setCompositionMode(mode) {
        this.native.setCompositionMode(mode);
    }
    // TODO: void 	setClipRect(int x, int y, int width, int height, Qt::ClipOperation operation = Qt::ReplaceClip)
    // TODO: void 	setClipRegion(const QRegion &region, Qt::ClipOperation operation = Qt::ReplaceClip)
    // TODO: void 	setClipping(bool enable)
    // TODO: void 	setCompositionMode(QPainter::CompositionMode mode)
    setFont(font) {
        this.native.setFont(font.native);
    }
    // TODO: void 	setLayoutDirection(Qt::LayoutDirection direction)
    setOpacity(opacity) {
        this.native.setOpacity(opacity);
    }
    setPen(arg) {
        if (typeof arg == 'number') {
            this.native.setPen(arg, 'style');
        }
        else if (arg instanceof QColor_1.QColor) {
            this.native.setPen(arg.native, 'color');
        }
        else if (arg instanceof QPen_1.QPen) {
            this.native.setPen(arg.native, 'pen');
        }
    }
    setRenderHint(hint, on = true) {
        this.native.setRenderHint(hint, on);
    }
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
    setTransform(matrix2x3, combine = false) {
        if (matrix2x3.length !== 6) {
            throw new Error('Parameter "matrix2x3" to QPainter.setTransform() must have length 6.');
        }
        this.native.setTransform('matrix2x3', combine, matrix2x3[0], matrix2x3[1], matrix2x3[2], matrix2x3[3], matrix2x3[4], matrix2x3[5]);
    }
    // TODO: void 	setViewTransformEnabled(bool enable)
    // TODO: void 	setViewport(const QRect &rectangle)
    // TODO: void 	setViewport(int x, int y, int width, int height)
    // TODO: void 	setWindow(const QRect &rectangle)
    // TODO: void 	setWindow(int x, int y, int width, int height)
    // TODO: void 	setWorldMatrixEnabled(bool enable)
    // TODO: void 	setWorldTransform(const QTransform &matrix, bool combine = false)
    // TODO: void 	shear(qreal sh, qreal sv)
    strokePath(path, pen) {
        return this.native.strokePath(path.native, pen.native);
    }
    // TODO: bool 	testRenderHint(QPainter::RenderHint hint) const
    // TODO: const QTransform &	transform() const
    translate(dx, dy) {
        this.native.translate(dx, dy);
    }
}
exports.QPainter = QPainter;
var RenderHint;
(function (RenderHint) {
    RenderHint[RenderHint["Antialiasing"] = 1] = "Antialiasing";
    RenderHint[RenderHint["TextAntialiasing"] = 2] = "TextAntialiasing";
    RenderHint[RenderHint["SmoothPixmapTransform"] = 4] = "SmoothPixmapTransform";
    RenderHint[RenderHint["HighQualityAntialiasing"] = 8] = "HighQualityAntialiasing";
    RenderHint[RenderHint["NonCosmeticDefaultPen"] = 16] = "NonCosmeticDefaultPen";
    RenderHint[RenderHint["Qt4CompatiblePainting"] = 32] = "Qt4CompatiblePainting";
    RenderHint[RenderHint["LosslessImageRendering"] = 64] = "LosslessImageRendering";
})(RenderHint = exports.RenderHint || (exports.RenderHint = {}));
var CompositionMode;
(function (CompositionMode) {
    CompositionMode[CompositionMode["CompositionMode_SourceOver"] = 0] = "CompositionMode_SourceOver";
    CompositionMode[CompositionMode["CompositionMode_DestinationOver"] = 1] = "CompositionMode_DestinationOver";
    CompositionMode[CompositionMode["CompositionMode_Clear"] = 2] = "CompositionMode_Clear";
    CompositionMode[CompositionMode["CompositionMode_Source"] = 3] = "CompositionMode_Source";
    CompositionMode[CompositionMode["CompositionMode_Destination"] = 4] = "CompositionMode_Destination";
    CompositionMode[CompositionMode["CompositionMode_SourceIn"] = 5] = "CompositionMode_SourceIn";
    CompositionMode[CompositionMode["CompositionMode_DestinationIn"] = 6] = "CompositionMode_DestinationIn";
    CompositionMode[CompositionMode["CompositionMode_SourceOut"] = 7] = "CompositionMode_SourceOut";
    CompositionMode[CompositionMode["CompositionMode_DestinationOut"] = 8] = "CompositionMode_DestinationOut";
    CompositionMode[CompositionMode["CompositionMode_SourceAtop"] = 9] = "CompositionMode_SourceAtop";
    CompositionMode[CompositionMode["CompositionMode_DestinationAtop"] = 10] = "CompositionMode_DestinationAtop";
    CompositionMode[CompositionMode["CompositionMode_Xor"] = 11] = "CompositionMode_Xor";
    CompositionMode[CompositionMode["CompositionMode_Plus"] = 12] = "CompositionMode_Plus";
    CompositionMode[CompositionMode["CompositionMode_Multiply"] = 13] = "CompositionMode_Multiply";
    CompositionMode[CompositionMode["CompositionMode_Screen"] = 14] = "CompositionMode_Screen";
    CompositionMode[CompositionMode["CompositionMode_Overlay"] = 15] = "CompositionMode_Overlay";
    CompositionMode[CompositionMode["CompositionMode_Darken"] = 16] = "CompositionMode_Darken";
    CompositionMode[CompositionMode["CompositionMode_Lighten"] = 17] = "CompositionMode_Lighten";
    CompositionMode[CompositionMode["CompositionMode_ColorDodge"] = 18] = "CompositionMode_ColorDodge";
    CompositionMode[CompositionMode["CompositionMode_ColorBurn"] = 19] = "CompositionMode_ColorBurn";
    CompositionMode[CompositionMode["CompositionMode_HardLight"] = 20] = "CompositionMode_HardLight";
    CompositionMode[CompositionMode["CompositionMode_SoftLight"] = 21] = "CompositionMode_SoftLight";
    CompositionMode[CompositionMode["CompositionMode_Difference"] = 22] = "CompositionMode_Difference";
    CompositionMode[CompositionMode["CompositionMode_Exclusion"] = 23] = "CompositionMode_Exclusion";
    CompositionMode[CompositionMode["RasterOp_SourceOrDestination"] = 24] = "RasterOp_SourceOrDestination";
    CompositionMode[CompositionMode["RasterOp_SourceAndDestination"] = 25] = "RasterOp_SourceAndDestination";
    CompositionMode[CompositionMode["RasterOp_SourceXorDestination"] = 26] = "RasterOp_SourceXorDestination";
    CompositionMode[CompositionMode["RasterOp_NotSourceAndNotDestination"] = 27] = "RasterOp_NotSourceAndNotDestination";
    CompositionMode[CompositionMode["RasterOp_NotSourceOrNotDestination"] = 28] = "RasterOp_NotSourceOrNotDestination";
    CompositionMode[CompositionMode["RasterOp_NotSourceXorDestination"] = 29] = "RasterOp_NotSourceXorDestination";
    CompositionMode[CompositionMode["RasterOp_NotSource"] = 30] = "RasterOp_NotSource";
    CompositionMode[CompositionMode["RasterOp_NotSourceAndDestination"] = 31] = "RasterOp_NotSourceAndDestination";
    CompositionMode[CompositionMode["RasterOp_SourceAndNotDestination"] = 32] = "RasterOp_SourceAndNotDestination";
    CompositionMode[CompositionMode["RasterOp_NotSourceOrDestination"] = 33] = "RasterOp_NotSourceOrDestination";
    CompositionMode[CompositionMode["RasterOp_ClearDestination"] = 35] = "RasterOp_ClearDestination";
    CompositionMode[CompositionMode["RasterOp_SetDestination"] = 36] = "RasterOp_SetDestination";
    CompositionMode[CompositionMode["RasterOp_NotDestination"] = 37] = "RasterOp_NotDestination";
    CompositionMode[CompositionMode["RasterOp_SourceOrNotDestination"] = 34] = "RasterOp_SourceOrNotDestination";
})(CompositionMode = exports.CompositionMode || (exports.CompositionMode = {}));
