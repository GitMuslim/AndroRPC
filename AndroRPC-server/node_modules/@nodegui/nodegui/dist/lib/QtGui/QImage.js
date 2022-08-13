"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QImageInvertMode = exports.QImageFormat = exports.QImage = void 0;
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
const addon_1 = __importDefault(require("../utils/addon"));
const QtEnums_1 = require("../QtEnums");
const QSize_1 = require("../QtCore/QSize");
const QRect_1 = require("../QtCore/QRect");
const QPoint_1 = require("../QtCore/QPoint");
const QColor_1 = require("../QtGui/QColor");
/**

> The QImage class provides a hardware-independent image representation that
  allows direct access to the pixel data, and can be used as a paint device.

* **This class is a JS wrapper around Qt's [QImage class](https://doc.qt.io/qt-5/qimage.html)**

### Example

```javascript
const { QImage } = require('@nodegui/nodegui');

const image = new QImage();
```
 */
class QImage extends Component_1.Component {
    constructor(arg, formatOrHeight, format) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (typeof arg === 'string') {
            native = new addon_1.default.QImage(arg);
        }
        else if (typeof arg === 'number') {
            native = new addon_1.default.QImage(arg, formatOrHeight, format);
        }
        else if (arg instanceof QSize_1.QSize) {
            native = new addon_1.default.QImage(arg.native, formatOrHeight);
        }
        else {
            native = new addon_1.default.QImage();
        }
        super(native);
    }
    /**
     * Returns true if all the colors in the image are shades of gray (i.e. their
     * red, green and blue components are equal); otherwise false
     */
    allGray() {
        return this.native.allGray();
    }
    /** Returns the number of bit planes in the image */
    bitPlaneCount() {
        return this.native.bitPlaneCount();
    }
    /** Returns the number of bytes per image scanline */
    bytesPerLine() {
        return this.native.bytesPerLine();
    }
    /**
     * Returns a number that identifies the contents of this QImage object. Distinct
     * QImage objects can only have the same key if they refer to the same contents
     */
    cacheKey() {
        return this.native.cacheKey();
    }
    /**
     * Returns the color in the color table at index i. The first color is at index 0
     */
    color(i) {
        return this.native.color(i);
    }
    /** Returns the size of the color table for the image */
    colorCount() {
        return this.native.colorCount();
    }
    /** Detach and convert the image to the given format in place */
    convertTo(format, flags = QtEnums_1.ImageConversionFlag.AutoColor) {
        this.native.convertTo(format, flags);
    }
    /** Returns a copy of the image in the given format */
    convertToFormat(format, flags = QtEnums_1.ImageConversionFlag.AutoColor) {
        return new QImage(this.native.convertToFormat(format, flags));
    }
    copy(rectangleOrX, y, width, height) {
        if (rectangleOrX instanceof QRect_1.QRect) {
            return new QImage(this.native.copy(rectangleOrX.native));
        }
        return new QImage(this.native.copy(rectangleOrX, y, width, height));
    }
    /**
     * Builds and returns a 1-bpp mask from the alpha buffer in this image. Returns
     * a null image if the image's format is QImageFormat::Format_RGB32
     */
    createAlphaMask(flags = QtEnums_1.ImageConversionFlag.AutoColor) {
        return new QImage(this.native.createAlphaMask(flags));
    }
    /** Creates and returns a 1-bpp heuristic mask for this image */
    createHeuristicMask(clipTight = true) {
        return new QImage(this.native.createHeuristicMask(clipTight));
    }
    /** Returns the depth of the image */
    depth() {
        return this.native.depth();
    }
    /**
     * Returns the device pixel ratio for the image. This is the ratio
     * between device pixels and device independent pixels.
     */
    devicePixelRatio() {
        return this.native.devicePixelRatio();
    }
    /**
     * Returns the number of pixels that fit horizontally in a physical meter. Together
     * with dotsPerMeterY(), this number defines the intended scale and aspect ratio of
     * the image
     */
    dotsPerMeterX() {
        return this.native.dotsPerMeterX();
    }
    /**
     * Returns the number of pixels that fit vertically in a physical meter. Together with
     * dotsPerMeterX(), this number defines the intended scale and aspect ratio of the image
     */
    dotsPerMeterY() {
        return this.native.dotsPerMeterY();
    }
    /** Fills the entire image with the given color */
    fill(color) {
        this.native.fill(color instanceof QColor_1.QColor ? color.native : color);
    }
    /** Returns the format of the image */
    format() {
        return this.native.format();
    }
    /**
     * Returns true if the image has a format that respects the alpha channel, otherwise
     * returns false
     */
    hasAlphaChannel() {
        return this.native.hasAlphaChannel();
    }
    /** Returns the height of the image */
    height() {
        return this.native.height();
    }
    /** Inverts all pixel values in the image */
    // eslint-disable-next-line
    invertPixels(mode = QImageInvertMode.InvertRgb) {
        this.native.invertPixels(mode);
    }
    /** For 32-bit images, this function is equivalent to allGray() */
    isGrayscale() {
        return this.native.isGrayscale();
    }
    /** Returns true if it is a null image, otherwise returns false */
    isNull() {
        return this.native.isNull();
    }
    /**
     * Loads an image from the file with the given fileName. Returns true if the image was
     * successfully loaded; otherwise invalidates the image and returns false
     */
    load(fileName, format = null) {
        return this.native.load(fileName, format);
    }
    /** Loads an image from the specified buffer */
    loadFromData(data, format = null) {
        return this.native.loadFromData(data, format);
    }
    /**
     * Returns a mirror of the image, mirrored in the horizontal and/or the vertical direction
     * depending on whether horizontal and vertical are set to true or false
     */
    mirrored(horizontal = false, vertical = true) {
        const native = this.native.mirrored(horizontal, vertical);
        return new QImage(native);
    }
    /**
     * Returns the number of pixels by which the image is intended to be offset by when
     * positioning relative to other images
     */
    offset() {
        const native = this.native.offset();
        return new QPoint_1.QPoint(native);
    }
    pixelColor(pointOrX, y) {
        const native = pointOrX instanceof QPoint_1.QPoint ? this.native.pixelColor(pointOrX.native) : this.native.pixelColor(pointOrX, y);
        return new QColor_1.QColor(native);
    }
    pixelIndex(pointOrX, y) {
        const pixelIndex = pointOrX instanceof QPoint_1.QPoint ? this.native.pixelIndex(pointOrX.native) : this.native.pixelIndex(pointOrX, y);
        return pixelIndex;
    }
    /** Returns the enclosing rectangle (0, 0, width(), height()) of the image */
    rect() {
        const native = this.native.rect();
        return new QRect_1.QRect(native);
    }
    /**
     * Changes the format of the image to format without changing the data. Only works
     * between formats of the same depth. Returns true if successful
     */
    reinterpretAsFormat(format) {
        return this.native.reinterpretAsFormat(format);
    }
    /**
     * Saves the image to the file with the given fileName, using the given image file
     * format and quality factor. If format is null, QImage will attempt to guess the
     * format by looking at fileName's suffix.
     */
    save(fileName, format = null, quality = -1) {
        return this.native.save(fileName, format, quality);
    }
    scaled(sizeOrWidth, modeOrHeight, transformOrAspectRatioMode, transformMode) {
        let native;
        if (sizeOrWidth instanceof QSize_1.QSize) {
            native = this.native.scaled(sizeOrWidth.native, modeOrHeight, transformOrAspectRatioMode);
        }
        else {
            native = this.native.scaled(sizeOrWidth, modeOrHeight, transformOrAspectRatioMode, transformMode);
        }
        return new QImage(native);
    }
    /**
     * Returns a scaled copy of the image. The returned image is scaled to the given height
     * using the specified transformation mode
     */
    scaledToHeight(height, mode = QtEnums_1.TransformationMode.FastTransformation) {
        const native = this.native.scaledToHeight(height, mode);
        return new QImage(native);
    }
    /**
     * Returns a scaled copy of the image. The returned image is scaled to the given width
     * using the specified transformation mode
     */
    scaledToWidth(width, mode = QtEnums_1.TransformationMode.FastTransformation) {
        const native = this.native.scaledToWidth(width, mode);
        return new QImage(native);
    }
    /**
     * Sets the alpha channel of this image to the given alphaChannel
     */
    setAlphaChannel(alphaChannel) {
        this.native.setAlphaChannel(alphaChannel.native);
    }
    /**
     * Sets the color at the given index in the color table, to the given to colorValue.
     * The color value is an ARGB quadruplet
     */
    setColor(index, colorValue) {
        this.native.setColor(index, colorValue);
    }
    /**
     * Resizes the color table to contain colorCount entries
     */
    setColorCount(colorCount) {
        this.native.setColorCount(colorCount);
    }
    /**
     * Sets the device pixel ratio for the image. This is the ratio between image pixels
     * and device-independent pixels
     */
    setDevicePixelRatio(scaleFactory) {
        this.native.setDevicePixelRatio(scaleFactory);
    }
    /**
     * Sets the number of pixels that fit horizontally in a physical meter, to x
     */
    setDotsPerMeterX(x) {
        this.native.setDotsPerMeterX(x);
    }
    /**
     * Sets the number of pixels that fit vertically in a physical meter, to y
     */
    setDotsPerMeterY(y) {
        this.native.setDotsPerMeterY(y);
    }
    /**
     * Sets the number of pixels by which the image is intended to be offset by
     * when positioning relative to other images, to offset
     */
    setOffset(offset) {
        this.native.setOffset(offset.native);
    }
    setPixel(positionOrX, indexOrRgbOrY, indexOrRgb) {
        if (positionOrX instanceof QPoint_1.QPoint) {
            this.native.setPixel(positionOrX.native, indexOrRgbOrY);
            return;
        }
        this.native.setPixel(positionOrX, indexOrRgbOrY, indexOrRgb);
    }
    setPixelColor(positionOrX, colorOrY, color) {
        if (positionOrX instanceof QPoint_1.QPoint) {
            this.native.setPixelColor(positionOrX.native, colorOrY);
            return;
        }
        this.native.setPixelColor(positionOrX, colorOrY, color?.native);
    }
    /** Sets the image text to the given text and associate it with the given key */
    setText(key, value) {
        this.native.setText(key, value);
    }
    /** Returns the size of the image, i.e. its width() and height() */
    size() {
        const native = this.native.size();
        return new QSize_1.QSize(native);
    }
    /** Returns the image data size in bytes */
    sizeInBytes() {
        return this.native.sizeInBytes();
    }
    /** Swaps image other with this image. This operation is very fast and never fails */
    swap(other) {
        this.native.swap(other.native);
    }
    /**
     * Returns the image text associated with the given key. If the specified key is an empty
     * string, the whole image text is returned, with each key-text pair separated by a newline
     */
    text(key) {
        return this.native.text(key);
    }
    /** Returns the text keys for this image */
    textKeys() {
        return this.native.textKeys();
    }
    valid(posOrX, y) {
        if (posOrX instanceof QPoint_1.QPoint) {
            return this.native.valid(posOrX.native);
        }
        return this.native.valid(posOrX, y);
    }
    /** Returns the width of the image */
    width() {
        return this.native.width();
    }
    static fromQVariant(variant) {
        return new QImage(addon_1.default.QImage.fromQVariant(variant.native));
    }
}
exports.QImage = QImage;
var QImageFormat;
(function (QImageFormat) {
    QImageFormat[QImageFormat["Invalid"] = 0] = "Invalid";
    QImageFormat[QImageFormat["Mono"] = 1] = "Mono";
    QImageFormat[QImageFormat["MonoLSB"] = 2] = "MonoLSB";
    QImageFormat[QImageFormat["Indexed8"] = 3] = "Indexed8";
    QImageFormat[QImageFormat["RGB32"] = 4] = "RGB32";
    QImageFormat[QImageFormat["ARGB32"] = 5] = "ARGB32";
    QImageFormat[QImageFormat["ARGB32_Premultiplied"] = 6] = "ARGB32_Premultiplied";
    QImageFormat[QImageFormat["RGB16"] = 7] = "RGB16";
    QImageFormat[QImageFormat["ARGB8565_Premultiplied"] = 8] = "ARGB8565_Premultiplied";
    QImageFormat[QImageFormat["RGB666"] = 9] = "RGB666";
    QImageFormat[QImageFormat["ARGB6666_Premultiplied"] = 10] = "ARGB6666_Premultiplied";
    QImageFormat[QImageFormat["RGB555"] = 11] = "RGB555";
    QImageFormat[QImageFormat["ARGB8555_Premultiplied"] = 12] = "ARGB8555_Premultiplied";
    QImageFormat[QImageFormat["RGB888"] = 13] = "RGB888";
    QImageFormat[QImageFormat["RGB444"] = 14] = "RGB444";
    QImageFormat[QImageFormat["ARGB4444_Premultiplied"] = 15] = "ARGB4444_Premultiplied";
    QImageFormat[QImageFormat["RGBX8888"] = 16] = "RGBX8888";
    QImageFormat[QImageFormat["RGBA8888"] = 17] = "RGBA8888";
    QImageFormat[QImageFormat["RGBA8888_Premultiplied"] = 18] = "RGBA8888_Premultiplied";
    QImageFormat[QImageFormat["BGR30"] = 19] = "BGR30";
    QImageFormat[QImageFormat["A2BGR30_Premultiplied"] = 20] = "A2BGR30_Premultiplied";
    QImageFormat[QImageFormat["RGB30"] = 21] = "RGB30";
    QImageFormat[QImageFormat["A2RGB30_Premultiplied"] = 22] = "A2RGB30_Premultiplied";
    QImageFormat[QImageFormat["Alpha8"] = 23] = "Alpha8";
    QImageFormat[QImageFormat["Grayscale8"] = 24] = "Grayscale8";
    QImageFormat[QImageFormat["Grayscale16"] = 25] = "Grayscale16";
    QImageFormat[QImageFormat["RGBX64"] = 26] = "RGBX64";
    QImageFormat[QImageFormat["RGBA64"] = 27] = "RGBA64";
    QImageFormat[QImageFormat["RGBA64_Premultiplied"] = 28] = "RGBA64_Premultiplied";
    QImageFormat[QImageFormat["BGR888"] = 29] = "BGR888";
})(QImageFormat = exports.QImageFormat || (exports.QImageFormat = {}));
var QImageInvertMode;
(function (QImageInvertMode) {
    QImageInvertMode[QImageInvertMode["InvertRgb"] = 0] = "InvertRgb";
    QImageInvertMode[QImageInvertMode["InvertRgba"] = 1] = "InvertRgba";
})(QImageInvertMode = exports.QImageInvertMode || (exports.QImageInvertMode = {}));
