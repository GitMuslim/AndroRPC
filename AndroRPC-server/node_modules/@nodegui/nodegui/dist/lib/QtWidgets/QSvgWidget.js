"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QSvgWidget = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Display SVG files in a widget.

* **This class is a JS wrapper around Qt's [QSvgWidget class](https://doc.qt.io/qt-5/qsvgwidget.html)**

The `QSvgWidget` class provides a widget that is used to display the contents of Scalable Vector Graphics (SVG) files.

### Example

```javascript
const fs = require("fs");
const { QSvgWidget } = require("@nodegui/nodegui");

const svg = new QSvgWidget();
svg.load("icon.svg");
// or
fs.readFile("icon.svg", (err, buffer) => {
  if (!err) svg.load(buffer);
})

```

 */
class QSvgWidget extends QWidget_1.QWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QSvgWidget(parent.native);
        }
        else {
            native = new addon_1.default.QSvgWidget();
        }
        super(native);
    }
    load(file) {
        if (file instanceof Buffer) {
            this.native.load('data:image/svg+xml;base64,' + file.toString('base64'));
        }
        else {
            this.native.load(file);
        }
    }
}
exports.QSvgWidget = QSvgWidget;
WrapperCache_1.wrapperCache.registerWrapper('QSvgWidgetWrap', QSvgWidget);
