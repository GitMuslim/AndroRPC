import { NativeElement, Component } from '../core/Component';
import { AlignmentFlag, CheckState, ItemFlag } from '../QtEnums';
import { QBrush } from '../QtGui/QBrush';
import { QVariant } from '../QtCore/QVariant';
import { QFont } from '../QtGui/QFont';
import { QIcon } from '../QtGui/QIcon';
import { QSize } from '../QtCore/QSize';
/**
 
> Creates an item for QTableWidget.

* **This class is a JS wrapper around Qt's [QTableWidgetItem class](https://doc.qt.io/qt-5/qtablewidgetitem.html)**

### Example

```javascript
const { QTableWidget, QMainWindow, QTableWidgetItem } = require("@nodegui/nodegui");

const win = new QMainWindow();
const table = new QTableWidget(2, 3);
table.setHorizontalHeaderLabels(['first', 'second', 'third']);

const cell00 = new QTableWidgetItem('C00');
const cell01 = new QTableWidgetItem('C01');
const cell10 = new QTableWidgetItem('C10');
const cell11 = new QTableWidgetItem('C11');

table.setItem(0, 0, cell00);
table.setItem(0, 1, cell01);
table.setItem(1, 0, cell10);
table.setItem(1, 1, cell11);

win.setCentralWidget(table);
win.show();
(global as any).win = win;

```

 */
export declare class QTableWidgetItem extends Component {
    constructor();
    constructor(other: QTableWidgetItem);
    constructor(native: NativeElement);
    constructor(text: string);
    setBackground(brush: QBrush): void;
    row(): number;
    column(): number;
    background(): QBrush;
    setCheckState(state: CheckState): void;
    checkState(): CheckState;
    setData(role: number, value: QVariant): void;
    data(role: number): QVariant;
    setFlags(flags: ItemFlag): void;
    flags(): ItemFlag;
    setFont(font: QFont): void;
    font(): QFont;
    setForeground(brush: QBrush): void;
    foreground(): QBrush;
    setIcon(icon: QIcon): void;
    icon(): QIcon;
    setSelected(select: boolean): void;
    isSelected(): boolean;
    setSizeHint(size: QSize): void;
    sizeHint(): QSize;
    setStatusTip(statusTip: string): void;
    statusTip(): string;
    setText(text: string): void;
    text(): string;
    setTextAlignment(alignment: AlignmentFlag): void;
    textAlignment(): AlignmentFlag;
    setToolTip(toolTip: string): void;
    toolTip(): string;
    setWhatsThis(whatsThis: string): void;
    whatsThis(): string;
    type(): number;
}
