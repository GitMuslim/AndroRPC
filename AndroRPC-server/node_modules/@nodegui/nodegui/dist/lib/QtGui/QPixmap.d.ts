/// <reference types="node" />
import { Component, NativeElement } from '../core/Component';
import { AspectRatioMode, ImageConversionFlag, TransformationMode } from '../QtEnums';
import { QVariant } from '../QtCore/QVariant';
import { QImage } from './QImage';
/**
 
> The QPixmap class helps hold an image in the form of off-screen image representation.

* **This class is a JS wrapper around Qt's [QPixmap class](https://doc.qt.io/qt-5/qpixmap.html)**

A `QPixmap` provides ability to store an image in the memory.

### Example

```javascript
const { QPixmap } = require("@nodegui/nodegui");

const imageUrl = "path/to/png";
const pixMap = new QPixmap(imageUrl);
```
 */
export declare class QPixmap extends Component {
    constructor();
    constructor(native: NativeElement);
    constructor(filePath: string);
    load(imagePath: string): boolean;
    loadFromData(buffer: Buffer, format?: ImageFormats): boolean;
    save(fileName: string, format?: ImageFormats): boolean;
    scaled(width: number, height: number, aspectRatioMode?: AspectRatioMode, transformationMode?: TransformationMode): QPixmap;
    height(): number;
    width(): number;
    static fromImage(image: QImage, flags: ImageConversionFlag): QPixmap;
    static fromQVariant(variant: QVariant): QPixmap;
}
export declare type ImageFormats = 'BMP' | 'GIF' | 'JPG' | 'JPEG' | 'PNG' | 'PBM' | 'PGM' | 'PPM' | 'XBM' | 'XPM' | 'SVG';
