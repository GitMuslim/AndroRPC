"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPointF = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QPoint_1 = require("./QPoint");
/**
 * The QPointF class defines a point in the plane using floating point precision
 *
 * A point is specified by a x coordinate and an y coordinate which can be accessed using the x() and y() functions. The coordinates of the point are specified using floating point numbers for accuracy. The isNull() function returns true if both x and y are set to 0.0. The coordinates can be set (or altered) using the setX() and setY() functions
 *
 * In addition, the QPointF class provides a constructor converting a QPoint object into a QPointF object, and a corresponding toPoint() function which returns a QPoint copy of this point.
 */
class QPointF extends Component_1.Component {
    constructor(nativeOrXOrQPoint, y = 0) {
        let native;
        if (helpers_1.checkIfNativeElement(nativeOrXOrQPoint)) {
            native = nativeOrXOrQPoint;
        }
        else if (typeof nativeOrXOrQPoint === 'number') {
            native = new addon_1.default.QPointF(nativeOrXOrQPoint, y);
        }
        else if (nativeOrXOrQPoint instanceof QPoint_1.QPoint) {
            native = new addon_1.default.QPointF(nativeOrXOrQPoint.x(), nativeOrXOrQPoint.y());
        }
        else {
            native = new addon_1.default.QPointF();
        }
        super(native);
    }
    /**
     * Sets the x coordinate of this point to the given x coordinate.
     */
    setX(value) {
        this.native.setX(value);
    }
    /**
     * Sets the y coordinate of this point to the given y coordinate.
     */
    setY(value) {
        this.native.setY(value);
    }
    /**
     * Returns the x coordinate of this point
     */
    x() {
        return this.native.x();
    }
    /**
     * Returns the y coordinate of this point
     */
    y() {
        return this.native.y();
    }
    /**
     * Returns true if both the x and y coordinates are set to 0.0 (ignoring the sign); otherwise returns false.
     */
    isNull() {
        return this.native.isNull();
    }
    /**
     * Returns the sum of the absolute values of x() and y(), traditionally known as the "Manhattan length" of the vector from the origin to the point.
     */
    manhattanLength() {
        return this.native.manhattanLength();
    }
    /**
     * Returns a point with x and y coordinates exchanged
     */
    transposed() {
        return new QPointF(this.native.transposed());
    }
    /**
     * Rounds the coordinates of this point to the nearest integer, and returns a QPoint object with the rounded coordinates.
     */
    toPoint() {
        return new QPoint_1.QPoint(this.native.toPoint());
    }
    /**
     * Returns the dot product of p1 and p2
     */
    static dotProduct(p1, p2) {
        return addon_1.default.QPointF.dotProduct(p1.native, p2.native);
    }
}
exports.QPointF = QPointF;
