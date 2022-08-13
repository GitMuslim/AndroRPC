import { QWidget, QWidgetSignals } from './QWidget';
import { QDateTimeEdit } from './QDateTimeEdit';
import { NativeElement } from '../core/Component';
/**

> Creates a widget to edit dates with spin box layout. WIP!

* **This class is a JS wrapper around Qt's [QTimeEdit class](https://doc.qt.io/qt-5/qtimeedit.html)**

A `QTimeEdit` a widget for editing times based on the QDateTimeEdit widget

### Example

```javascript
const { QTimeEdit } = require("@nodegui/nodegui");

const timeEdit = new QTimeEdit();
// must be implemented
```
 */
export declare class QTimeEdit extends QDateTimeEdit {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
}
