import { NativeElement, Component } from '../core/Component';
import { QBrush } from '../QtGui/QBrush';
import { QFont } from '../QtGui/QFont';
import { QIcon } from '../QtGui/QIcon';
import { QSize } from '../QtCore/QSize';
import { QVariant } from '../QtCore/QVariant';
import { CheckState } from '../QtEnums';
import { ItemFlag } from '../QtEnums/ItemFlag';
/**

> Creates an item for QListWidget.

* **This class is a JS wrapper around Qt's [QListWidgetItem class](https://doc.qt.io/qt-5/qlistwidgetitem.html)**

### Example

```javascript
const { QListWidget, QListWidgetItem } = require("@nodegui/nodegui");

const listWidget = new QListWidget();

for (let i = 0; i < 30; i++) {
  let listWidgetItem = new QListWidgetItem();
  listWidgetItem.setText('listWidgetItem ' + i);
  if (i===3) {
    listWidgetItem.setCheckState(2);
  } else {
    listWidgetItem.setCheckState(0);
  }
  listWidget.addItem(listWidgetItem);
}
```
 */
export declare class QListWidgetItem extends Component {
    constructor(arg?: QListWidgetItem | NativeElement | string);
    setBackground(brush: QBrush): void;
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
    setHidden(hide: boolean): void;
    isHidden(): boolean;
    setSelected(select: boolean): void;
    isSelected(): boolean;
    setSizeHint(size: QSize): void;
    sizeHint(): QSize;
    setStatusTip(statusTip: string): void;
    statusTip(): string;
    setText(text: string): void;
    text(): string;
    setTextAlignment(alignment: number): void;
    textAlignment(): number;
    setToolTip(toolTip: string): void;
    toolTip(): string;
    setWhatsThis(whatsThis: string): void;
    whatsThis(): string;
    type(): number;
}
