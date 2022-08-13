import { Component, NativeElement } from '../core/Component';
import { QVariant } from '../QtCore/QVariant';
import { GlobalColor, BrushStyle } from '../QtEnums';
import { QColor } from './QColor';
import { QPixmap } from './QPixmap';
/**

> The QBrush class defines the fill pattern of shapes drawn by QPainter.

* **This class is a JS wrapper around Qt's [QBrush class](https://doc.qt.io/qt-5/qbrush.html)**

### Example

```javascript
const { QBrush } = require("@nodegui/nodegui");

const brush = new QBrush();
```
 */
export declare class QBrush extends Component {
    constructor(nativeOrGlobalColor?: NativeElement | GlobalColor | QColor, style?: BrushStyle);
    isOpaque(): boolean;
    setColor(color: QColor | GlobalColor): void;
    color(): QColor;
    setStyle(style: BrushStyle): void;
    style(): BrushStyle;
    setTexture(pixmap: QPixmap): void;
    texture(): QPixmap;
    static fromQVariant(variant: QVariant): QBrush;
}
