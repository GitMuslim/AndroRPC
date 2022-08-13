import { Component, NativeElement } from '../core/Component';
import { QRect } from '../QtCore/QRect';
/**
 
> The QPicture class is a paint device that records and replays QPainter commands.

* **This class is a JS wrapper around Qt's [QPicture class](https://doc.qt.io/qt-5/qpicture.html)**

### Example

```javascript
const { QPicture } = require("@nodegui/nodegui");

const picture = new QPicture();
```
 */
export declare class QPicture extends Component {
    constructor();
    constructor(native: NativeElement);
    constructor(formatVersion: number);
    setBoundingRect(r: QRect): void;
    boundingRect(): QRect;
    isNull(): boolean;
    load(fileName: string): boolean;
    save(fileName: string): boolean;
    size(): number;
}
