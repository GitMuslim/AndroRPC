import { Component, NativeElement } from '../core/Component';
import { QVariant } from '../QtCore/QVariant';
/**
 
> The QKeySequence class encapsulates a key sequence as used by shortcuts. .

* **This class is a JS wrapper around Qt's [QKeySequence class](https://doc.qt.io/qt-5/qkeysequence.html)**

### Example

```javascript
const { QKeySequence } = require("@nodegui/nodegui");

const keySequence = new QKeySequence(`Ctrl+L`);
```
 */
export declare class QKeySequence extends Component {
    constructor();
    constructor(native: NativeElement);
    constructor(keySequence: string);
    count(): number;
    isEmpty(): boolean;
    matches(seq: QKeySequence): SequenceMatch;
    toString(format: SequenceFormat): string;
    static fromQVariant(variant: QVariant): QKeySequence;
}
export declare enum SequenceMatch {
    NoMatch = 0,
    PartialMatch = 1,
    ExactMatch = 2
}
export declare enum SequenceFormat {
    NativeText = 0,
    PortableText = 1
}
