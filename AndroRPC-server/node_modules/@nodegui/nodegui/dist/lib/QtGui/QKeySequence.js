"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceFormat = exports.SequenceMatch = exports.QKeySequence = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const Component_1 = require("../core/Component");
/**
 
> The QKeySequence class encapsulates a key sequence as used by shortcuts. .

* **This class is a JS wrapper around Qt's [QKeySequence class](https://doc.qt.io/qt-5/qkeysequence.html)**

### Example

```javascript
const { QKeySequence } = require("@nodegui/nodegui");

const keySequence = new QKeySequence(`Ctrl+L`);
```
 */
class QKeySequence extends Component_1.Component {
    constructor(arg) {
        let native;
        if (typeof arg === 'string') {
            const keySequence = arg;
            native = new addon_1.default.QKeySequence(keySequence);
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            native = new addon_1.default.QKeySequence();
        }
        super(native);
    }
    count() {
        return this.native.count();
    }
    isEmpty() {
        return this.native.isEmpty();
    }
    matches(seq) {
        return this.native.matches(seq.native);
    }
    toString(format) {
        return this.native.toString$(format);
    }
    static fromQVariant(variant) {
        return new QKeySequence(addon_1.default.QKeySequence.fromQVariant(variant.native));
    }
}
exports.QKeySequence = QKeySequence;
var SequenceMatch;
(function (SequenceMatch) {
    SequenceMatch[SequenceMatch["NoMatch"] = 0] = "NoMatch";
    SequenceMatch[SequenceMatch["PartialMatch"] = 1] = "PartialMatch";
    SequenceMatch[SequenceMatch["ExactMatch"] = 2] = "ExactMatch";
})(SequenceMatch = exports.SequenceMatch || (exports.SequenceMatch = {}));
var SequenceFormat;
(function (SequenceFormat) {
    SequenceFormat[SequenceFormat["NativeText"] = 0] = "NativeText";
    SequenceFormat[SequenceFormat["PortableText"] = 1] = "PortableText";
})(SequenceFormat = exports.SequenceFormat || (exports.SequenceFormat = {}));
