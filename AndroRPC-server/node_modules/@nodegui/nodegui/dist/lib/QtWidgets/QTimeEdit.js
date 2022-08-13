"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTimeEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDateTimeEdit_1 = require("./QDateTimeEdit");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
/**

> Creates a widget to edit dates with spin box layout. WIP!

* **This class is a JS wrapper around Qt's [QTimeEdit class](https://doc.qt.io/qt-5/qtimeedit.html)**

A `QTimeEdit` a widget for editing times based on the QDateTimeEdit widget

### Example

```javascript
const { QTimeEdit } = require("@nodegui/nodegui");

const timeEdit = new QTimeEdit();
// must be implemented
```
 */
class QTimeEdit extends QDateTimeEdit_1.QDateTimeEdit {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QTimeEdit(parent.native);
        }
        else {
            native = new addon_1.default.QTimeEdit();
        }
        super(native);
    }
}
exports.QTimeEdit = QTimeEdit;
WrapperCache_1.wrapperCache.registerWrapper('QTimeEditWrap', QTimeEdit);
