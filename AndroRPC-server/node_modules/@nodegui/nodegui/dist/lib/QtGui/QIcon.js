"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QIconState = exports.QIconMode = exports.QIcon = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const QPixmap_1 = require("./QPixmap");
const helpers_1 = require("../utils/helpers");
const QSize_1 = require("../QtCore/QSize");
const AlignmentFlag_1 = require("../QtEnums/AlignmentFlag");
/**

> The QIcon class provides scalable icons in different modes and states.

* **This class is a JS wrapper around Qt's [QIcon class](https://doc.qt.io/qt-5/qicon.html)**

### Example

```javascript
const { QIcon } = require("@nodegui/nodegui");

const imageUrl = "path/to/png";
const icon = new QIcon(imageUrl);
```
 */
class QIcon extends Component_1.Component {
    constructor(arg) {
        let native;
        if (typeof arg === 'string') {
            const imagePath = arg;
            native = new addon_1.default.QIcon(imagePath);
        }
        else if (arg instanceof QPixmap_1.QPixmap) {
            native = new addon_1.default.QIcon(arg.native);
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            native = new addon_1.default.QIcon();
        }
        super(native);
    }
    // *** Public Functions ***
    actualSize(size = null, mode = QIconMode.Normal, state = QIconState.Off) {
        return new QSize_1.QSize(this.native.actualSize(size ?? new QSize_1.QSize(), mode, state));
    }
    // TODO: QSize 	actualSize(QWindow *window, const QSize &size, QIcon::Mode mode = Normal, QIcon::State state = Off) const
    addFile(fileName, size = null, mode = QIconMode.Normal, state = QIconState.Off) {
        this.native.addFile(fileName, (size ?? new QSize_1.QSize()).native, mode, state);
    }
    addPixmap(pixmap, mode = QIconMode.Normal, state = QIconState.Off) {
        this.native.addPixmap(pixmap.native, mode, state);
    }
    availableSizes(mode = QIconMode.Normal, state = QIconState.Off) {
        const methodResult = this.native.availableSizes(mode, state);
        return methodResult.map((item) => new QSize_1.QSize(item));
    }
    cacheKey() {
        return this.native.cacheKey();
    }
    isMask() {
        return this.native.isMask();
    }
    isNull() {
        return this.native.isNull();
    }
    name() {
        return this.native.name();
    }
    // TODO: void 	paint(QPainter *painter, const QRect &rect, Qt::Alignment alignment = Qt::AlignCenter, QIcon::Mode mode = Normal, QIcon::State state = Off) const
    paint(painter, x, y, w, h, alignment = AlignmentFlag_1.AlignmentFlag.AlignCenter, mode = QIconMode.Normal, state = QIconState.Off) {
        this.native.paint(painter.native, x, y, w, h, alignment, mode, state);
    }
    // TODO: QPixmap 	pixmap(const QSize &size, QIcon::Mode mode = Normal, QIcon::State state = Off) const
    pixmap(width, height, mode = QIconMode.Normal, state = QIconState.Off) {
        const nativePixmap = this.native.pixmap(width, height, mode, state);
        return new QPixmap_1.QPixmap(nativePixmap);
    }
    // TODO: QPixmap 	pixmap(int extent, QIcon::Mode mode = Normal, QIcon::State state = Off) const
    // TODO: QPixmap 	pixmap(QWindow *window, const QSize &size, QIcon::Mode mode = Normal, QIcon::State state = Off) const
    setIsMask(isMask) {
        this.native.setIsMask(isMask);
    }
    swap(other) {
        this.native.swap(other.native);
    }
    // TODO: QVariant 	operator QVariant() const
    static fromQVariant(variant) {
        return new QIcon(addon_1.default.QIcon.fromQVariant(variant.native));
    }
}
exports.QIcon = QIcon;
var QIconMode;
(function (QIconMode) {
    QIconMode[QIconMode["Normal"] = 0] = "Normal";
    QIconMode[QIconMode["Disabled"] = 1] = "Disabled";
    QIconMode[QIconMode["Active"] = 2] = "Active";
    QIconMode[QIconMode["Selected"] = 3] = "Selected";
})(QIconMode = exports.QIconMode || (exports.QIconMode = {}));
var QIconState;
(function (QIconState) {
    QIconState[QIconState["Off"] = 0] = "Off";
    QIconState[QIconState["On"] = 1] = "On";
})(QIconState = exports.QIconState || (exports.QIconState = {}));
