import { QWidget, QWidgetSignals } from './QWidget';
import { QLayout, QLayoutSignals } from './QLayout';
import { NativeElement } from '../core/Component';
import { AlignmentFlag } from '../QtEnums';
/**

> The QGridLayout class lays out widgets in a grid.

* **This class is a JS wrapper around Qt's [QGridLayout](https://doc.qt.io/qt-5/qgridlayout.html)**

### Example

```javascript
const { QGridLayout, QWidget, QLabel } = require("@nodegui/nodegui");

const view = new QWidget();
const layout = new QGridLayout();
view.setLayout(layout);

const label = new QLabel();
label.setText("label1");
const label2 = new QLabel();
label2.setText("label2");

layout.addWidget(label);
layout.addWidget(label2);
```

 */
export declare class QGridLayout extends QLayout<QGridLayoutSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    addLayout(layout: QLayout, row: number, column: number, rowSpan?: number, columnSpan?: number, alignment?: AlignmentFlag): void;
    addWidget(widget: QWidget, row?: number, col?: number, rowSpan?: number, colSpan?: number, alignment?: AlignmentFlag): void;
    removeWidget(widget: QWidget): void;
    columnStretch(column: number): number;
    rowStretch(row: number): number;
    setColumnStretch(column: number, stretch: number): void;
    setRowStretch(row: number, stretch: number): void;
    columnMinimumWidth(column: number): number;
    rowMinimumHeight(row: number): number;
    setColumnMinimumWidth(column: number, minSize: number): void;
    setRowMinimumHeight(row: number, minSize: number): void;
    horizontalSpacing(): number;
    verticalSpacing(): number;
    setHorizontalSpacing(spacing: number): void;
    setVerticalSpacing(spacing: number): void;
    columnCount(): number;
    rowCount(): number;
}
export declare type QGridLayoutSignals = QLayoutSignals;
