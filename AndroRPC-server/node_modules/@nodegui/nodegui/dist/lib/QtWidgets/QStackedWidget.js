"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QStackedWidget = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QFrame_1 = require("./QFrame");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control stacked widgets where only one is visible at a time.

* **This class is a JS wrapper around Qt's [QStackedWidget class](https://doc.qt.io/qt-5/qstackedwidget.html)**

### Example

```javascript

const { QMainWindow, QLabel, QStackedWidget } = require("@nodegui/nodegui");

const win = new QMainWindow();
const stacked = new QStackedWidget();

const first = new QLabel();
first.setText('First');

const second = new QLabel();
second.setText('Second');

const third = new QLabel();
third.setText('Third');

stacked.addWidget(first);
stacked.addWidget(second);
stacked.addWidget(third);

stacked.setCurrentWidget(second);
//or
// stacked.setCurrentIndex(1);

win.setCentralWidget(stacked);
win.resize(200, 200);

win.show();
(global as any).win = win;


```
 */
class QStackedWidget extends QFrame_1.QFrame {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QStackedWidget(parent.native);
        }
        else {
            native = new addon_1.default.QStackedWidget();
        }
        super(native);
    }
    // *** Public Function ***
    addWidget(widget) {
        this.native.addWidget(widget.native);
        widget.setFlexNodeSizeControlled(true);
    }
    count() {
        return this.property('count').toInt();
    }
    currentIndex() {
        return this.native.currentIndex();
    }
    // TODO: QWidget *	currentWidget() const
    // TODO: int 	indexOf(QWidget *widget) const
    // TODO: int 	insertWidget(int index, QWidget *widget)
    removeWidget(widget) {
        this.native.removeWidget(widget.native);
    }
    // TODO: QWidget *	widget(int index) const
    // *** Public Slots ***
    setCurrentIndex(index) {
        this.native.setCurrentIndex(index);
    }
    setCurrentWidget(widget) {
        this.native.setCurrentWidget(widget.native);
    }
}
exports.QStackedWidget = QStackedWidget;
WrapperCache_1.wrapperCache.registerWrapper('QStackedWidgetWrap', QStackedWidget);
