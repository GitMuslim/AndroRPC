"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QSplitter = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QFrame_1 = require("./QFrame");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> A QSplitter provides ability to let the user control the size between child widgets

* **This class is a JS wrapper around Qt's [QSplitter class](https://doc.qt.io/qt-5/qsplitter.html)**

### Example

```javascript
const { QSplitter, QWidget, QBoxLayout, Direction, Orientation } = require("@nodegui/nodegui");

const rootView = new QWidget();
const rootLayout = new QBoxLayout(Direction.LeftToRight);
rootLayout.setSpacing(0);
rootView.setLayout(rootLayout);
rootView.setObjectName('myroot');

const splitterHorizontal = new QSplitter();
splitterHorizontal.setObjectName("splitterleft");
splitterHorizontal.setOrientation(Orientation.Horizontal);
const left = new QWidget();
left.setInlineStyle('background-color: red;');
const right = new QWidget();
right.setInlineStyle('background-color: yellow;');
rootView.layout!.addWidget(splitterHorizontal);
splitterHorizontal.addWidget(left);
splitterHorizontal.addWidget(right);
```

 */
class QSplitter extends QFrame_1.QFrame {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QSplitter(parent.native);
        }
        else {
            native = new addon_1.default.QSplitter();
        }
        super(native);
    }
    addWidget(widget) {
        this.native.addWidget(widget.native);
    }
    childrenCollapsible() {
        return this.native.childrenCollapsible();
    }
    count() {
        return this.native.count();
    }
    indexOf(widget) {
        return this.native.indexOf(widget.native);
    }
    insertWidget(index, widget) {
        this.native.insertWidget(index, widget.native);
    }
    isCollapsible(index) {
        return this.native.isCollapsible(index);
    }
    orientation() {
        return this.native.orientation();
    }
    setCollapsible(index, collapse) {
        this.native.setCollapsible(index, collapse);
    }
    setOrientation(orientation) {
        this.native.setOrientation(orientation);
    }
}
exports.QSplitter = QSplitter;
WrapperCache_1.wrapperCache.registerWrapper('QSplitterWrap', QSplitter);
