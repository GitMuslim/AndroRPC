import { Component, NativeElement } from '../core/Component';
import { CursorShape } from '../QtEnums';
/**
 
> The QCursor class provides scalable icons in different modes and states.

* **This class is a JS wrapper around Qt's [QCursor class](https://doc.qt.io/qt-5/qcursor.html)**

### Example

```javascript
const { QCursor } = require("@nodegui/nodegui");

const cursor = new QCursor();
```
 */
export declare class QCursor extends Component {
    constructor();
    constructor(native: NativeElement);
    constructor(shape: CursorShape);
    pos(): {
        x: number;
        y: number;
    };
    setPos(x: number, y: number): void;
}
