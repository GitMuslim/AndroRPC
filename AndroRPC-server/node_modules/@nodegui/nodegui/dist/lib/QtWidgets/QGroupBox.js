"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QGroupBox = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Create and control a group of checkboxes including a title.

* **This class is a JS wrapper around Qt's [QGroupBox class](https://doc.qt.io/qt-5/qgroupbox.html)**

A `QGroupBox` widget provides a group box frame with a title.

### Example

```javascript
import { FlexLayout, QGroupBox, QRadioButton, QMainWindow } from '@nodegui/nodegui';

const win = new QMainWindow();

const r1 = new QRadioButton();
r1.setText('R1');
const r2 = new QRadioButton();
r2.setText('R2');
const r3 = new QRadioButton();
r3.setText('R3');

const groupBoxLayout = new FlexLayout();
const groupBox = new QGroupBox();
groupBox.setLayout(groupBoxLayout);
groupBoxLayout.addWidget(r1);
groupBoxLayout.addWidget(r2);
groupBoxLayout.addWidget(r3);

win.setCentralWidget(groupBox);
win.resize(400, 400);

win.show();
(global as any).win = win;
```
 */
class QGroupBox extends QWidget_1.QWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QGroupBox(parent.native);
        }
        else {
            native = new addon_1.default.QGroupBox();
        }
        super(native);
    }
    setAlignment(alignment) {
        this.setProperty('alignment', alignment);
    }
    alignment() {
        return this.property('alignment').toInt();
    }
    setCheckable(checkable) {
        this.setProperty('checkable', checkable);
    }
    isCheckable() {
        return this.property('checkable').toBool();
    }
    setChecked(checked) {
        this.setProperty('checked', checked);
    }
    isChecked() {
        return this.property('checked').toBool();
    }
    setFlat(flat) {
        this.setProperty('flat', flat);
    }
    isFlat() {
        return this.property('flat').toBool();
    }
    setTitle(title) {
        this.setProperty('title', title);
    }
    title() {
        return this.property('title').toString();
    }
}
exports.QGroupBox = QGroupBox;
WrapperCache_1.wrapperCache.registerWrapper('QGroupBoxWrap', QGroupBox);
