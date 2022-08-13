"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPicture = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const Component_1 = require("../core/Component");
const QRect_1 = require("../QtCore/QRect");
/**
 
> The QPicture class is a paint device that records and replays QPainter commands.

* **This class is a JS wrapper around Qt's [QPicture class](https://doc.qt.io/qt-5/qpicture.html)**

### Example

```javascript
const { QPicture } = require("@nodegui/nodegui");

const picture = new QPicture();
```
 */
class QPicture extends Component_1.Component {
    constructor(arg) {
        let native;
        if (typeof arg === 'number') {
            const formatVersion = arg;
            native = new addon_1.default.QPicture(formatVersion);
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            native = new addon_1.default.QPicture();
        }
        super(native);
    }
    setBoundingRect(r) {
        this.native.setBoundingRect(r.native);
    }
    boundingRect() {
        return new QRect_1.QRect(this.native.boundingRect());
    }
    isNull() {
        return this.native.isNull();
    }
    load(fileName) {
        return this.native.load(fileName);
    }
    save(fileName) {
        return this.native.save(fileName);
    }
    size() {
        return this.native.size();
    }
}
exports.QPicture = QPicture;
