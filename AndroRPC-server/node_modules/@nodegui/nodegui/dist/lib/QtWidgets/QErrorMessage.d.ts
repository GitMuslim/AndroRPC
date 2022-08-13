import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QDialog, QDialogSignals } from './QDialog';
/**

> Create and control error message dialogs.

* **This class is a JS wrapper around Qt's [QErrorMessage class](https://doc.qt.io/qt-5/qerrormessage.html)**

The `QErrorMessage` class provides an error message display dialog.

### Example

```javascript
const { QErrorMessage } = require("@nodegui/nodegui");

const errorMessage = new QErrorMessage();

```
 */
export declare class QErrorMessage extends QDialog<QErrorMessageSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    showMessage(message: string): void;
}
export declare type QErrorMessageSignals = QDialogSignals;
