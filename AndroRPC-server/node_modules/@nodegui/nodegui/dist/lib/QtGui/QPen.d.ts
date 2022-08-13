import { Component } from '../core/Component';
import { GlobalColor, PenStyle, PenCapStyle } from '../QtEnums';
import { QColor } from './QColor';
/**
 
> The QPen class defines the outline of shapes drawn by QPainter.

* **This class is a JS wrapper around Qt's [QPen class](https://doc.qt.io/qt-5/qpen.html)**

### Example

```javascript
const { QPen } = require("@nodegui/nodegui");

const pen = new QPen();
```
 */
export declare class QPen extends Component {
    constructor();
    setColor(color: QColor | GlobalColor): void;
    color(): QColor;
    setStyle(style: PenStyle): void;
    style(): PenStyle;
    setCapStyle(style: PenCapStyle): void;
    setWidth(width: number): void;
}
