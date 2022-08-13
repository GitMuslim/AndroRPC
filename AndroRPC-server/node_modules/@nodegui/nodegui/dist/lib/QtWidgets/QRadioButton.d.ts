import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractButton, QAbstractButtonSignals } from './QAbstractButton';
/**

> Create and control radio button.

* **This class is a JS wrapper around Qt's [QRadioButton class](https://doc.qt.io/qt-5/qradiobutton.html)**

A `QRadioButton` provides ability to add and manipulate native radio button widgets.

### Example

```javascript
const { QRadioButton } = require("@nodegui/nodegui");

const radioButton = new QRadioButton();
radioButton.setText("Hello");
```

 */
export declare class QRadioButton extends QAbstractButton<QRadioButtonSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
}
export declare type QRadioButtonSignals = QAbstractButtonSignals;
