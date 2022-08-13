import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement, NativeRawPointer } from '../core/Component';
import { QDialog, QDialogSignals } from './QDialog';
import { QAbstractButton, QAbstractButtonSignals } from './QAbstractButton';
import { QPushButton } from './QPushButton';
export declare enum ButtonRole {
    InvalidRole = 0,
    AcceptRole = 1,
    RejectRole = 2,
    DestructiveRole = 3,
    ActionRole = 4,
    HelpRole = 5,
    YesRole = 6,
    NoRole = 7,
    ApplyRole = 8,
    ResetRole = 9
}
/**

> Create and control classic modal dialogs.

* **This class is a JS wrapper around Qt's [QMessageBox class](https://doc.qt.io/qt-5/qmessagebox.html)**

### Example

```javascript

import { QMessageBox, ButtonRole, QPushButton } from '@nodegui/nodegui';

const messageBox = new QMessageBox();
messageBox.setText('Alert! This is a message');
const accept = new QPushButton();
accept.setText('Accept');
messageBox.addButton(accept, ButtonRole.AcceptRole);
messageBox.exec();

```
 */
export declare class QMessageBox extends QDialog<QMessageBoxSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    accept(): void;
    done(r: number): void;
    setText(text: string): void;
    text(): string;
    setInformativeText(informativeText: string): void;
    setDetailedText(detailedText: string): void;
    detailedText(): string;
    setDefaultButton(button: QPushButton): void;
    addButton(button: QAbstractButton<QAbstractButtonSignals>, role?: ButtonRole): void;
    static about(parent: QWidget, title: string, text: string): void;
    static aboutQt(parent: QWidget, title: string): void;
}
export interface QMessageBoxSignals extends QDialogSignals {
    buttonClicked: (buttonRawPointer: NativeRawPointer<'QAbstractButton*'>) => void;
}
export declare enum QMessageBoxIcon {
    NoIcon = 0,
    Question = 4,
    Information = 1,
    Warning = 2,
    Critical = 3
}
