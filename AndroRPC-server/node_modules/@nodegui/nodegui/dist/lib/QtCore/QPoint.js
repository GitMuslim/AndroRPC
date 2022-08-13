"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPoint = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
/**
 * The QPoint class defines a point in the plane using integer precision.
 */
class QPoint extends Component_1.Component {
    constructor(nativeOrX, y = 0) {
        let native;
        if (helpers_1.checkIfNativeElement(nativeOrX)) {
            native = nativeOrX;
        }
        else if (typeof nativeOrX === 'number') {
            native = new addon_1.default.QPoint(nativeOrX, y);
        }
        else {
            native = new addon_1.default.QPoint();
        }
        super(native);
    }
    setX(value) {
        this.native.setX(value);
    }
    setY(value) {
        this.native.setY(value);
    }
    x() {
        return this.native.x();
    }
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
        return new QPoint(this.native.transposed());
    }
    static fromQVariant(variant) {
        return new QPoint(addon_1.default.QPoint.fromQVariant(variant.native));
    }
}
exports.QPoint = QPoint;
