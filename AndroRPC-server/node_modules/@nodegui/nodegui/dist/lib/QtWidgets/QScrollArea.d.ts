import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractScrollArea, QAbstractScrollAreaSignals } from './QAbstractScrollArea';
import { AlignmentFlag } from '../QtEnums';
import { Margins } from '../utils/Margins';
/**

> A `QScrollArea` provides a scrolling view onto another widget.

* **This class is a JS wrapper around Qt's [QScrollArea class](https://doc.qt.io/qt-5/qscrollarea.html)**

### Example

```javascript
const { QScrollArea } = require("@nodegui/nodegui");

const scrollArea = new QScrollArea();
scrollArea.setInlineStyle("flex: 1; width:'100%';");

const imageLabel = new QLabel();
const pixmap = new QPixmap(
  path.resolve(__dirname, "../extras/assets/kitchen.png")
);
imageLabel.setPixmap(pixmap);

scrollArea.setWidget(imageLabel);
```
 */
export declare class QScrollArea extends QAbstractScrollArea<QScrollAreaSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setAlignment(alignment: AlignmentFlag): void;
    alignment(): AlignmentFlag;
    setWidgetResizable(resizable: boolean): void;
    widgetResizable(): boolean;
    ensureVisible(x: number, y: number, xmargin?: number, ymargin?: number): void;
    ensureWidgetVisible(childWidget: QWidget, xmargin?: number, ymargin?: number): void;
    setWidget(widget: QWidget): void;
    widget(): QWidget | null;
    takeWidget(): QWidget | null;
    setViewportMargins(left: number, top: number, right: number, bottom: number): void;
    viewportMargins(): Margins;
}
export declare type QScrollAreaSignals = QAbstractScrollAreaSignals;
