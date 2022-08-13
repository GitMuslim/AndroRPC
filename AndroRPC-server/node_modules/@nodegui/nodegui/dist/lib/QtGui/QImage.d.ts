/// <reference types="node" />
import { Component, NativeElement } from '../core/Component';
import { ImageConversionFlag, GlobalColor, AspectRatioMode, TransformationMode } from '../QtEnums';
import { QSize } from '../QtCore/QSize';
import { QRect } from '../QtCore/QRect';
import { QPoint } from '../QtCore/QPoint';
import { QVariant } from '../QtCore/QVariant';
import { QColor } from '../QtGui/QColor';
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
export declare class QImage extends Component {
    /** Constructs a null image */
    constructor();
    constructor(native: NativeElement);
    /** Constructs an image and tries to load the image from the file with the given fileName */
    constructor(filename: string);
    /** Constructs an image with the given width, height and format */
    constructor(width: number, height: number, format: QImageFormat);
    /** Constructs an image with the given size and format */
    constructor(size: QSize, format: QImageFormat);
    /**
     * Returns true if all the colors in the image are shades of gray (i.e. their
     * red, green and blue components are equal); otherwise false
     */
    allGray(): boolean;
    /** Returns the number of bit planes in the image */
    bitPlaneCount(): number;
    /** Returns the number of bytes per image scanline */
    bytesPerLine(): number;
    /**
     * Returns a number that identifies the contents of this QImage object. Distinct
     * QImage objects can only have the same key if they refer to the same contents
     */
    cacheKey(): number;
    /**
     * Returns the color in the color table at index i. The first color is at index 0
     */
    color(i: number): number;
    /** Returns the size of the color table for the image */
    colorCount(): number;
    /** Detach and convert the image to the given format in place */
    convertTo(format: QImageFormat, flags?: ImageConversionFlag): void;
    /** Returns a copy of the image in the given format */
    convertToFormat(format: QImageFormat, flags?: ImageConversionFlag): QImage;
    /** Returns a sub-area of the image as a new image */
    copy(rectangle: QRect): QImage;
    /** This is an overloaded function */
    copy(x: number, y: number, width: number, height: number): QImage;
    /**
     * Builds and returns a 1-bpp mask from the alpha buffer in this image. Returns
     * a null image if the image's format is QImageFormat::Format_RGB32
     */
    createAlphaMask(flags?: ImageConversionFlag): QImage;
    /** Creates and returns a 1-bpp heuristic mask for this image */
    createHeuristicMask(clipTight?: boolean): QImage;
    /** Returns the depth of the image */
    depth(): number;
    /**
     * Returns the device pixel ratio for the image. This is the ratio
     * between device pixels and device independent pixels.
     */
    devicePixelRatio(): number;
    /**
     * Returns the number of pixels that fit horizontally in a physical meter. Together
     * with dotsPerMeterY(), this number defines the intended scale and aspect ratio of
     * the image
     */
    dotsPerMeterX(): number;
    /**
     * Returns the number of pixels that fit vertically in a physical meter. Together with
     * dotsPerMeterX(), this number defines the intended scale and aspect ratio of the image
     */
    dotsPerMeterY(): number;
    /** Fills the entire image with the given color */
    fill(color: QColor | GlobalColor): void;
    /** Returns the format of the image */
    format(): QImageFormat;
    /**
     * Returns true if the image has a format that respects the alpha channel, otherwise
     * returns false
     */
    hasAlphaChannel(): boolean;
    /** Returns the height of the image */
    height(): number;
    /** Inverts all pixel values in the image */
    invertPixels(mode?: QImageInvertMode): void;
    /** For 32-bit images, this function is equivalent to allGray() */
    isGrayscale(): boolean;
    /** Returns true if it is a null image, otherwise returns false */
    isNull(): boolean;
    /**
     * Loads an image from the file with the given fileName. Returns true if the image was
     * successfully loaded; otherwise invalidates the image and returns false
     */
    load(fileName: string, format?: string | null): boolean;
    /** Loads an image from the specified buffer */
    loadFromData(data: Buffer, format?: string | null): boolean;
    /**
     * Returns a mirror of the image, mirrored in the horizontal and/or the vertical direction
     * depending on whether horizontal and vertical are set to true or false
     */
    mirrored(horizontal?: boolean, vertical?: boolean): QImage;
    /**
     * Returns the number of pixels by which the image is intended to be offset by when
     * positioning relative to other images
     */
    offset(): QPoint;
    /** Returns the color of the pixel at the given position as a QColor */
    pixelColor(point: QPoint): QColor;
    /** Returns the color of the pixel at coordinates (x, y) as a QColor  */
    pixelColor(x: number, y: number): QColor;
    /** Returns the pixel index at the given position */
    pixelIndex(point: QPoint): number;
    /** Returns the pixel index at (x, y) */
    pixelIndex(x: number, y: number): number;
    /** Returns the enclosing rectangle (0, 0, width(), height()) of the image */
    rect(): QRect;
    /**
     * Changes the format of the image to format without changing the data. Only works
     * between formats of the same depth. Returns true if successful
     */
    reinterpretAsFormat(format: QImageFormat): boolean;
    /**
     * Saves the image to the file with the given fileName, using the given image file
     * format and quality factor. If format is null, QImage will attempt to guess the
     * format by looking at fileName's suffix.
     */
    save(fileName: string, format?: string | null, quality?: number): boolean;
    /**
     * Returns a copy of the image scaled to a rectangle defined by the given size according
     * to the given aspectRatioMode and transformMode.
     */
    scaled(size: QSize, aspectRatioMode: AspectRatioMode, transformMode: TransformationMode): QImage;
    /**
     * Returns a copy of the image scaled to a rectangle with the given width and height
     * according to the given aspectRatioMode and transformMode.
     */
    scaled(width: number, height: number, aspectRatioMode: AspectRatioMode, transformMode: TransformationMode): QImage;
    /**
     * Returns a scaled copy of the image. The returned image is scaled to the given height
     * using the specified transformation mode
     */
    scaledToHeight(height: number, mode?: TransformationMode): QImage;
    /**
     * Returns a scaled copy of the image. The returned image is scaled to the given width
     * using the specified transformation mode
     */
    scaledToWidth(width: number, mode?: TransformationMode): QImage;
    /**
     * Sets the alpha channel of this image to the given alphaChannel
     */
    setAlphaChannel(alphaChannel: QImage): void;
    /**
     * Sets the color at the given index in the color table, to the given to colorValue.
     * The color value is an ARGB quadruplet
     */
    setColor(index: number, colorValue: number): void;
    /**
     * Resizes the color table to contain colorCount entries
     */
    setColorCount(colorCount: number): void;
    /**
     * Sets the device pixel ratio for the image. This is the ratio between image pixels
     * and device-independent pixels
     */
    setDevicePixelRatio(scaleFactory: number): void;
    /**
     * Sets the number of pixels that fit horizontally in a physical meter, to x
     */
    setDotsPerMeterX(x: number): void;
    /**
     * Sets the number of pixels that fit vertically in a physical meter, to y
     */
    setDotsPerMeterY(y: number): void;
    /**
     * Sets the number of pixels by which the image is intended to be offset by
     * when positioning relative to other images, to offset
     */
    setOffset(offset: QPoint): void;
    /** Sets the pixel index or color at the given position to indexOrRgb */
    setPixel(position: QPoint, indexOrRgb: number): void;
    /** Sets the pixel index or color at (x, y) to indexOrRgb */
    setPixel(x: number, y: number, indexOrRgb: number): void;
    /** Sets the color at the given position to color */
    setPixelColor(position: QPoint, color: QColor): void;
    /** Sets the pixel color at (x, y) to color */
    setPixelColor(x: number, y: number, color: QColor): void;
    /** Sets the image text to the given text and associate it with the given key */
    setText(key: string, value: string): void;
    /** Returns the size of the image, i.e. its width() and height() */
    size(): QSize;
    /** Returns the image data size in bytes */
    sizeInBytes(): number;
    /** Swaps image other with this image. This operation is very fast and never fails */
    swap(other: QImage): void;
    /**
     * Returns the image text associated with the given key. If the specified key is an empty
     * string, the whole image text is returned, with each key-text pair separated by a newline
     */
    text(key: string): string;
    /** Returns the text keys for this image */
    textKeys(): string[];
    /** Returns true if pos is a valid coordinate pair within the image; otherwise returns false */
    valid(pos: QPoint): boolean;
    /**
     * Returns true if QPoint(x, y) is a valid coordinate pair within the image; otherwise returns
     * false
     */
    valid(x: number, y: number): boolean;
    /** Returns the width of the image */
    width(): number;
    static fromQVariant(variant: QVariant): QImage;
}
export declare enum QImageFormat {
    Invalid = 0,
    Mono = 1,
    MonoLSB = 2,
    Indexed8 = 3,
    RGB32 = 4,
    ARGB32 = 5,
    ARGB32_Premultiplied = 6,
    RGB16 = 7,
    ARGB8565_Premultiplied = 8,
    RGB666 = 9,
    ARGB6666_Premultiplied = 10,
    RGB555 = 11,
    ARGB8555_Premultiplied = 12,
    RGB888 = 13,
    RGB444 = 14,
    ARGB4444_Premultiplied = 15,
    RGBX8888 = 16,
    RGBA8888 = 17,
    RGBA8888_Premultiplied = 18,
    BGR30 = 19,
    A2BGR30_Premultiplied = 20,
    RGB30 = 21,
    A2RGB30_Premultiplied = 22,
    Alpha8 = 23,
    Grayscale8 = 24,
    Grayscale16 = 25,
    RGBX64 = 26,
    RGBA64 = 27,
    RGBA64_Premultiplied = 28,
    BGR888 = 29
}
export declare enum QImageInvertMode {
    InvertRgb = 0,
    InvertRgba = 1
}
