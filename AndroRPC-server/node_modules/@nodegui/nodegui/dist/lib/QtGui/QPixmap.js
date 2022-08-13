"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPixmap = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
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
class QPixmap extends Component_1.Component {
    constructor(arg) {
        let native;
        if (typeof arg === 'string') {
            const imagePath = arg;
            native = new addon_1.default.QPixmap(imagePath);
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            native = new addon_1.default.QPixmap();
        }
        super(native);
    }
    load(imagePath) {
        return this.native.load(imagePath);
    }
    loadFromData(buffer, format) {
        return format ? this.native.loadFromData(buffer, format) : this.native.loadFromData(buffer);
    }
    save(fileName, format) {
        return format ? this.native.save(fileName, format) : this.native.save(fileName);
    }
    scaled(width, height, aspectRatioMode, transformationMode) {
        const args = [width, height];
        if (aspectRatioMode) {
            args.push(aspectRatioMode);
        }
        if (aspectRatioMode && transformationMode) {
            args.push(transformationMode);
        }
        const nativePixmap = this.native.scaled(...args);
        return new QPixmap(nativePixmap);
    }
    height() {
        return this.native.height();
    }
    width() {
        return this.native.width();
    }
    static fromImage(image, flags) {
        const native = addon_1.default.QPixmap.fromImage(image.native, flags);
        return new QPixmap(native);
    }
    static fromQVariant(variant) {
        return new QPixmap(addon_1.default.QPixmap.fromQVariant(variant.native));
    }
}
exports.QPixmap = QPixmap;
