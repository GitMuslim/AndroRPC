import { QWidget, QWidgetSignals } from './QWidget';
import { QDialog, QDialogSignals } from './QDialog';
import { NativeElement } from '../core/Component';
/**

> Create and control progress dialogs.

* **This class is a JS wrapper around Qt's [QProgressDialog class](https://doc.qt.io/qt-5/qprogressdialog.html)**

The `QProgressDialog` class provides feedback on the progress of a slow operation.

### Example

```javascript
const { QProgressDialog } = require("@nodegui/nodegui");

const progressDialog = new QProgressDialog();

```
 */
export declare class QProgressDialog extends QDialog<QProgressDialogSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setAutoClose(close: boolean): void;
    autoClose(): boolean;
    setAutoReset(reset: boolean): void;
    autoReset(): boolean;
    setLabelText(text: string): void;
    labelText(): string;
    setMaximum(maximum: number): void;
    maximum(): number;
    setMinimum(minimum: number): void;
    minimum(): number;
    setMinimumDuration(ms: number): void;
    minimumDuration(): number;
    setValue(progress: number): void;
    value(): number;
    wasCanceled(): boolean;
    cancel(): void;
    reset(): void;
    setCancelButtonText(text: string): void;
    setRange(minimum: number, maximum: number): void;
}
export interface QProgressDialogSignals extends QDialogSignals {
    canceled: () => void;
}
