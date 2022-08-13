"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPainterPath = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const QtEnums_1 = require("../QtEnums");
/**
 
> Lets you paint paths on widgets.

* **This class is a JS wrapper around Qt's [QPainterPath class](https://doc.qt.io/qt-5/qpainterpath.html)**

*/
class QPainterPath extends Component_1.Component {
    constructor() {
        super(new addon_1.default.QPainterPath());
    }
    moveTo(x, y) {
        return this.native.moveTo(x, y);
    }
    addRect(x, y, width, height) {
        return this.native.addRect(x, y, width, height);
    }
    lineTo(x, y) {
        return this.native.lineTo(x, y);
    }
    cubicTo(c1X, c1Y, c2X, c2Y, endPointX, endPointY) {
        return this.native.cubicTo(c1X, c1Y, c2X, c2Y, endPointX, endPointY);
    }
    quadTo(cx, cy, endPointX, endPointY) {
        return this.native.quadTo(cx, cy, endPointX, endPointY);
    }
    closeSubpath() {
        return this.native.closeSubpath();
    }
    addEllipse(x, y, width, height) {
        return this.native.addEllipse(x, y, width, height);
    }
    addPath(path) {
        return this.native.addPath(path.native);
    }
    addRoundedRect(x, y, width, height, xRadius, yRadius, mode = QtEnums_1.SizeMode.AbsoluteSize) {
        return this.native.addRoundedRect(x, y, width, height, xRadius, yRadius, mode);
    }
    addText(x, y, font, text) {
        return this.native.addText(x, y, font.native, text);
    }
    angleAtPercent(t) {
        return this.native.angleAtPercent(t);
    }
    arcMoveTo(x, y, width, height, angle) {
        return this.native.arcMoveTo(x, y, width, height, angle);
    }
    arcTo(x, y, width, height, startAngle, sweepLength) {
        return this.native.arcTo(x, y, width, height, startAngle, sweepLength);
    }
    boundingRect() {
        return this.native.boundingRect();
    }
    capacity() {
        return this.native.capacity();
    }
    clear() {
        return this.native.clear();
    }
    connectPath(path) {
        return this.native.connectPath(path.native);
    }
    controlPointRect() {
        return this.native.controlPointRect();
    }
    currentPosition() {
        return this.native.currentPosition();
    }
    elementCount() {
        return this.native.elementCount();
    }
    fillRule() {
        return this.native.fillRule();
    }
    intersects(path) {
        return this.native.intersects(path.native);
    }
    isEmpty() {
        return this.native.isEmpty();
    }
    length() {
        return this.native.length();
    }
    percentAtLength(len) {
        return this.native.percentAtLength(len);
    }
    pointAtPercent(p) {
        return this.native.pointAtPercent(p);
    }
    reserve(size) {
        return this.native.reserve(size);
    }
    setElementPositionAt(index, x, y) {
        return this.native.setElementPositionAt(index, x, y);
    }
    setFillRule(fillRule) {
        return this.native.setFillRule(fillRule);
    }
    slopeAtPercent(p) {
        return this.native.slopeAtPercent(p);
    }
    swap(other) {
        return this.native.swap(other.native);
    }
    translate(x, y) {
        return this.native.translate(x, y);
    }
}
exports.QPainterPath = QPainterPath;
