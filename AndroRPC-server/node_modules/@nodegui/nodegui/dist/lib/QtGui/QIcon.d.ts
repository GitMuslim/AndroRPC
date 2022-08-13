import { Component, NativeElement } from '../core/Component';
import { QPixmap } from './QPixmap';
import { QVariant } from '../QtCore/QVariant';
import { QSize } from '../QtCore/QSize';
import { AlignmentFlag } from '../QtEnums/AlignmentFlag';
import { QPainter } from '../QtWidgets/QPainter';
/**

> The QIcon class provides scalable icons in different modes and states.

* **This class is a JS wrapper around Qt's [QIcon class](https://doc.qt.io/qt-5/qicon.html)**

### Example

```javascript
const { QIcon } = require("@nodegui/nodegui");

const imageUrl = "path/to/png";
const icon = new QIcon(imageUrl);
```
 */
export declare class QIcon extends Component {
    constructor();
    constructor(native: NativeElement);
    constructor(filePath: string);
    constructor(pixmap: QPixmap);
    actualSize(size?: QSize, mode?: QIconMode, state?: QIconState): QSize;
    addFile(fileName: string, size?: QSize, mode?: QIconMode, state?: QIconState): void;
    addPixmap(pixmap: QPixmap, mode?: QIconMode, state?: QIconState): void;
    availableSizes(mode?: QIconMode, state?: QIconState): QSize[];
    cacheKey(): number;
    isMask(): boolean;
    isNull(): boolean;
    name(): string;
    paint(painter: QPainter, x: number, y: number, w: number, h: number, alignment?: AlignmentFlag, mode?: QIconMode, state?: QIconState): void;
    pixmap(width: number, height: number, mode?: QIconMode, state?: QIconState): QPixmap;
    setIsMask(isMask: boolean): void;
    swap(other: QIcon): void;
    static fromQVariant(variant: QVariant): QIcon;
}
export declare enum QIconMode {
    Normal = 0,
    Disabled = 1,
    Active = 2,
    Selected = 3
}
export declare enum QIconState {
    Off = 0,
    On = 1
}
