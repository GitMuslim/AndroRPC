"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QScrollArea = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractScrollArea_1 = require("./QAbstractScrollArea");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> A `QScrollArea` provides a scrolling view onto another widget.

* **This class is a JS wrapper around Qt's [QScrollArea class](https://doc.qt.io/qt-5/qscrollarea.html)**

### Example

```javascript
const { QScrollArea } = require("@nodegui/nodegui");

const scrollArea = new QScrollArea();
scrollArea.setInlineStyle("flex: 1; width:'100%';");

const imageLabel = new QLabel();
const pixmap = new QPixmap(
  path.resolve(__dirname, "../extras/assets/kitchen.png")
);
imageLabel.setPixmap(pixmap);

scrollArea.setWidget(imageLabel);
```
 */
class QScrollArea extends QAbstractScrollArea_1.QAbstractScrollArea {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QScrollArea(parent.native);
        }
        else {
            native = new addon_1.default.QScrollArea();
        }
        super(native);
    }
    setAlignment(alignment) {
        this.setProperty('alignment', alignment);
    }
    alignment() {
        return this.property('alignment').toInt();
    }
    setWidgetResizable(resizable) {
        this.setProperty('widgetResizable', resizable);
    }
    widgetResizable() {
        return this.property('widgetResizable').toBool();
    }
    ensureVisible(x, y, xmargin = 50, ymargin = 50) {
        this.native.ensureVisible(x, y, xmargin, ymargin);
    }
    ensureWidgetVisible(childWidget, xmargin = 50, ymargin = 50) {
        this.native.ensureWidgetVisible(childWidget.native, xmargin, ymargin);
    }
    setWidget(widget) {
        this.native.setWidget(widget.native);
    }
    widget() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.widget());
    }
    takeWidget() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.takeWidget());
    }
    setViewportMargins(left, top, right, bottom) {
        // Technically part of QAbstractScrollArea, but the C++ side has subclass specific
        // code needed, and setViewportMargins() isn't implemented yet for all of the
        // subclasses.
        this.native.setViewportMargins(left, top, right, bottom);
    }
    viewportMargins() {
        const marginsArray = this.native.viewportMargins();
        return {
            left: marginsArray[0],
            top: marginsArray[1],
            right: marginsArray[2],
            bottom: marginsArray[3],
        };
    }
}
exports.QScrollArea = QScrollArea;
WrapperCache_1.wrapperCache.registerWrapper('QScrollAreaWrap', QScrollArea);
