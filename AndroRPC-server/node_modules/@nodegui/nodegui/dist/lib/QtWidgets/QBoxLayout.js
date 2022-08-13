"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QBoxLayout = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QLayout_1 = require("./QLayout");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> Lines up child widgets horizontally or vertically.

* **This class is a JS wrapper around Qt's [QBoxLayout class](https://doc.qt.io/qt-5/qboxlayout.html)**

### Example

```javascript
// This example arranges two calendars horizontally.

const { QBoxLayout, QCalendarWidget } = require("@nodegui/nodegui");

const centralWidget = new QWidget();
const boxLayout = new QBoxLayout(0);

boxLayout.addWidget(new QCalendarWidget());
boxLayout.addWidget(new QCalendarWidget());
centralWidget.setLayout(boxLayout);
```
 */
class QBoxLayout extends QLayout_1.QLayout {
    constructor(arg, parent) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (parent) {
            native = new addon_1.default.QBoxLayout(arg, parent.native);
        }
        else {
            native = new addon_1.default.QBoxLayout(arg);
        }
        super(native);
    }
    addLayout(layout, stretch = 0) {
        this.native.addLayout(layout.native, stretch);
    }
    addSpacing(size) {
        this.native.addSpacing(size);
    }
    addStretch(stretch = 0) {
        this.native.addStretch(stretch);
    }
    addStrut(size) {
        this.native.addStrut(size);
    }
    addWidget(widget, stretch = 0, alignment = 0) {
        this.native.addWidget(widget.native, stretch, alignment);
    }
    insertWidget(index, widget, stretch = 0) {
        this.native.insertWidget(index, widget.native, stretch);
    }
    direction() {
        return this.native.direction();
    }
    insertLayout(index, layout, stretch = 0) {
        this.native.insertLayout(index, layout.native, stretch);
    }
    insertSpacing(index, size) {
        this.native.insertSpacing(index, size);
    }
    insertStretch(index, stretch = 0) {
        this.native.insertStretch(index, stretch);
    }
    removeWidget(widget) {
        this.native.removeWidget(widget.native);
    }
    setDirection(dir) {
        this.native.setDirection(dir);
    }
    setStretch(index, stretch) {
        this.native.setStretch(index, stretch);
    }
    count() {
        return this.native.count();
    }
}
exports.QBoxLayout = QBoxLayout;
WrapperCache_1.wrapperCache.registerWrapper('QBoxLayoutWrap', QBoxLayout);
