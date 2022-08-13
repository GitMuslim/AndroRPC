"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentStyle = exports.Mode = exports.QLCDNumber = void 0;
const WrapperCache_1 = require("../core/WrapperCache");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QWidget_1 = require("./QWidget");
/**

> Create and control number.

* **This class is a JS wrapper around Qt's [QLCDNumber class](https://doc.qt.io/qt-5/qlcdnumber.html)**

The `QLCDNumber` widget displays a number with LCD-like digits.

### Example

```javascript
const { QLCDNumber } = require("@nodegui/nodegui");

const lcd = new QLCDNumber();

```

 */
class QLCDNumber extends QWidget_1.QWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QLCDNumber(parent.native);
        }
        else {
            native = new addon_1.default.QLCDNumber();
        }
        super(native);
    }
    setDigitCount(numDigits) {
        this.setProperty('digitCount', numDigits);
    }
    digitCount() {
        return this.property('digitCount').toInt();
    }
    intValue() {
        return this.property('intValue').toInt();
    }
    setMode(mode) {
        this.setProperty('mode', mode);
    }
    mode() {
        return this.property('mode').toInt();
    }
    setSegmentStyle(style) {
        this.setProperty('segmentStyle', style);
    }
    segmentStyle() {
        return this.property('segmentStyle').toInt();
    }
    setSmallDecimalPoint(enabled) {
        this.setProperty('smallDecimalPoint', enabled);
    }
    smallDecimalPoint() {
        return this.property('smallDecimalPoint').toBool();
    }
    value() {
        return this.property('value').toDouble();
    }
    checkOverflow(num) {
        return this.native.checkOverflow(num);
    }
    display(value) {
        this.native.display(value);
    }
    setBinMode() {
        this.native.setBinMode();
    }
    setDecMode() {
        this.native.setDecMode();
    }
    setHexMode() {
        this.native.setHexMode();
    }
    setOctMode() {
        this.native.setOctMode();
    }
}
exports.QLCDNumber = QLCDNumber;
WrapperCache_1.wrapperCache.registerWrapper('QLCDNumberWrap', QLCDNumber);
var Mode;
(function (Mode) {
    Mode[Mode["Hex"] = 0] = "Hex";
    Mode[Mode["Dec"] = 1] = "Dec";
    Mode[Mode["Oct"] = 2] = "Oct";
    Mode[Mode["Bin"] = 3] = "Bin";
})(Mode = exports.Mode || (exports.Mode = {}));
var SegmentStyle;
(function (SegmentStyle) {
    SegmentStyle[SegmentStyle["Outline"] = 0] = "Outline";
    SegmentStyle[SegmentStyle["Filled"] = 1] = "Filled";
    SegmentStyle[SegmentStyle["Flat"] = 2] = "Flat";
})(SegmentStyle = exports.SegmentStyle || (exports.SegmentStyle = {}));
