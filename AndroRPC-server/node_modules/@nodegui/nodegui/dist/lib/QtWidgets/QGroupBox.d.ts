import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { AlignmentFlag } from '../QtEnums/AlignmentFlag';
/**

> Create and control a group of checkboxes including a title.

* **This class is a JS wrapper around Qt's [QGroupBox class](https://doc.qt.io/qt-5/qgroupbox.html)**

A `QGroupBox` widget provides a group box frame with a title.

### Example

```javascript
import { FlexLayout, QGroupBox, QRadioButton, QMainWindow } from '@nodegui/nodegui';

const win = new QMainWindow();

const r1 = new QRadioButton();
r1.setText('R1');
const r2 = new QRadioButton();
r2.setText('R2');
const r3 = new QRadioButton();
r3.setText('R3');

const groupBoxLayout = new FlexLayout();
const groupBox = new QGroupBox();
groupBox.setLayout(groupBoxLayout);
groupBoxLayout.addWidget(r1);
groupBoxLayout.addWidget(r2);
groupBoxLayout.addWidget(r3);

win.setCentralWidget(groupBox);
win.resize(400, 400);

win.show();
(global as any).win = win;
```
 */
export declare class QGroupBox extends QWidget<QGroupBoxSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setAlignment(alignment: AlignmentFlag): void;
    alignment(): AlignmentFlag;
    setCheckable(checkable: boolean): void;
    isCheckable(): boolean;
    setChecked(checked: boolean): void;
    isChecked(): boolean;
    setFlat(flat: boolean): void;
    isFlat(): boolean;
    setTitle(title: string): void;
    title(): string;
}
export interface QGroupBoxSignals extends QWidgetSignals {
    clicked: (checked: boolean) => void;
    toggled: (on: boolean) => void;
}
