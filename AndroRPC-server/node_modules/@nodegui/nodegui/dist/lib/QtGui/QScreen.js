"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QScreen = void 0;
const helpers_1 = require("../utils/helpers");
const QObject_1 = require("../QtCore/QObject");
const QRect_1 = require("../QtCore/QRect");
const QSizeF_1 = require("../QtCore/QSizeF");
const QSize_1 = require("../QtCore/QSize");
const WrapperCache_1 = require("../core/WrapperCache");
const QPixmap_1 = require("./QPixmap");
class QScreen extends QObject_1.QObject {
    constructor(native) {
        if (!helpers_1.checkIfNativeElement(native)) {
            throw new Error('QScreen cannot be initialised this way.');
        }
        super(native);
    }
    availableGeometry() {
        return QRect_1.QRect.fromQVariant(this.property('availableGeometry'));
    }
    availableSize() {
        return QSize_1.QSize.fromQVariant(this.property('availableSize'));
    }
    availableVirtualGeometry() {
        return QRect_1.QRect.fromQVariant(this.property('availableVirtualGeometry'));
    }
    availableVirtualSize() {
        return QSize_1.QSize.fromQVariant(this.property('availableVirtualSize'));
    }
    depth() {
        return this.property('depth').toInt();
    }
    devicePixelRatio() {
        return this.property('devicePixelRatio').toDouble();
    }
    geometry() {
        return QRect_1.QRect.fromQVariant(this.property('geometry'));
    }
    grabWindow(window, x = 0, y = 0, width = -1, height = -1) {
        return new QPixmap_1.QPixmap(this.native.grabWindow(window, x, y, width, height));
    }
    logicalDotsPerInch() {
        return this.property('logicalDotsPerInch').toDouble();
    }
    logicalDotsPerInchX() {
        return this.property('logicalDotsPerInchX').toDouble();
    }
    logicalDotsPerInchY() {
        return this.property('logicalDotsPerInchY').toDouble();
    }
    manufacturer() {
        return this.property('manufacturer').toString();
    }
    model() {
        return this.property('model').toString();
    }
    name() {
        return this.property('name').toString();
    }
    nativeOrientation() {
        return this.property('nativeOrientation').toInt();
    }
    orientation() {
        return this.property('orientation').toInt();
    }
    physicalDotsPerInch() {
        return this.property('physicalDotsPerInch').toDouble();
    }
    physicalDotsPerInchX() {
        return this.property('physicalDotsPerInchX').toDouble();
    }
    physicalDotsPerInchY() {
        return this.property('physicalDotsPerInchY').toDouble();
    }
    physicalSize() {
        return QSizeF_1.QSizeF.fromQVariant(this.property('physicalSize'));
    }
    primaryOrientation() {
        return this.property('primaryOrientation').toInt();
    }
    refreshRate() {
        return this.property('refreshRate').toDouble();
    }
    serialNumber() {
        return this.property('serialNumber').toString();
    }
    size() {
        return QSize_1.QSize.fromQVariant(this.property('size'));
    }
    virtualGeometry() {
        return QRect_1.QRect.fromQVariant(this.property('virtualGeometry'));
    }
    virtualSize() {
        return QSize_1.QSize.fromQVariant(this.property('virtualSize'));
    }
}
exports.QScreen = QScreen;
WrapperCache_1.wrapperCache.registerWrapper('QScreenWrap', QScreen);
helpers_1.registerNativeWrapFunction('QScreenWrap', (native) => {
    return WrapperCache_1.wrapperCache.get(QScreen, native);
});
