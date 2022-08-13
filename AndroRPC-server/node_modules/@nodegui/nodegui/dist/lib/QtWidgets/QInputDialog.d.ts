import { QWidget, QWidgetSignals } from './QWidget';
import { QDialog, QDialogSignals } from './QDialog';
import { EchoMode } from './QLineEdit';
import { NativeElement } from '../core/Component';
/**

> Create and control input modal dialogs.

* **This class is a JS wrapper around Qt's [QInputDialog class](https://doc.qt.io/qt-5/qinputdialog.html)**

### Example

```javascript

import { QInputDialog } from '@nodegui/nodegui';

const dialog = new QInputDialog();
dialog.setLabelText('Click that Ok button');
dialog.exec();

```
 */
export declare class QInputDialog extends QDialog<QInputDialogSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setCancelButtonText(text: string): void;
    cancelButtonText(): string;
    setComboBoxEditable(editable: boolean): void;
    isComboBoxEditable(): boolean;
    setDoubleDecimals(decimals: number): void;
    doubleDecimals(): number;
    setDoubleMaximum(value: number): void;
    doubleMaximum(): number;
    setDoubleMinimum(value: number): void;
    doubleMinimum(): number;
    doubleStep(): number;
    setDoubleStep(value: number): void;
    doubleValue(): number;
    setDoubleValue(value: number): void;
    inputMode(): InputMode;
    setInputMode(value: InputMode): void;
    intMaximum(): number;
    setIntMaximum(value: number): void;
    intMinimum(): number;
    setIntMinimum(value: number): void;
    intStep(): number;
    setIntStep(value: number): void;
    intValue(): number;
    setIntValue(value: number): void;
    labelText(): string;
    setLabelText(value: string): void;
    okButtonText(): string;
    setOkButtonText(value: string): void;
    options(): InputDialogOptions;
    setOptions(value: InputDialogOptions): void;
    textEchoMode(): EchoMode;
    setTextEchoMode(value: EchoMode): void;
    textValue(): string;
    setTextValue(value: string): void;
}
export interface QInputDialogSignals extends QDialogSignals {
    doubleValueChanged: (value: number) => void;
    doubleValueSelected: (value: number) => void;
    intValueChanged: (value: number) => void;
    intValueSelected: (value: number) => void;
    textValueChanged: (text: string) => void;
    textValueSelected: (text: string) => void;
}
export declare enum InputMode {
    TextInput = 0,
    IntInput = 1,
    DoubleInput = 2
}
export declare enum InputDialogOptions {
    NoButtons = 1,
    UseListViewForComboBoxItems = 2,
    UsePlainTextEditForTextInput = 3
}
