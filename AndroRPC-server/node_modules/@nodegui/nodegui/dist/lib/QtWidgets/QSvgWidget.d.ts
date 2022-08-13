/// <reference types="node" />
import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
/**

> Display SVG files in a widget.

* **This class is a JS wrapper around Qt's [QSvgWidget class](https://doc.qt.io/qt-5/qsvgwidget.html)**

The `QSvgWidget` class provides a widget that is used to display the contents of Scalable Vector Graphics (SVG) files.

### Example

```javascript
const fs = require("fs");
const { QSvgWidget } = require("@nodegui/nodegui");

const svg = new QSvgWidget();
svg.load("icon.svg");
// or
fs.readFile("icon.svg", (err, buffer) => {
  if (!err) svg.load(buffer);
})

```

 */
export declare class QSvgWidget extends QWidget<QWidgetSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    load(file: string | Buffer): void;
}
