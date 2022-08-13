import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement, Component } from '../core/Component';
import { QListWidgetItem } from './QListWidgetItem';
import { QListView, QListViewSignals } from './QListView';
import { QRect } from '../QtCore/QRect';
import { SortOrder, ScrollHint, MatchFlag } from '../QtEnums';
import { QModelIndex } from '../QtCore/QModelIndex';
/**

> Create and control a item-based list.

* **This class is a JS wrapper around Qt's [QListWidget class](https://doc.qt.io/qt-5/qlistwidget.html)**

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
export declare class QListWidget extends QListView<QListWidgetSignals> {
    items: Set<Component>;
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    count(): number;
    setCurrentRow(row: number): void;
    currentRow(): number;
    setSortingEnabled(enable: boolean): void;
    isSortingEnabled(): boolean;
    addItem(item: QListWidgetItem): void;
    addItems(labels: string[]): void;
    closePersistentEditor(itemOrIndex: QListWidgetItem | QModelIndex): void;
    currentItem(): QListWidgetItem;
    editItem(item: Component): void;
    findItems(text: string, flags: MatchFlag): QListWidgetItem[];
    insertItem(row: number, item: QListWidgetItem): void;
    insertItems(row: number, labels: string[]): void;
    isPersistentEditorOpen(itemOrIndex: QListWidgetItem | QModelIndex): boolean;
    item(row: number): QListWidgetItem;
    itemAt(x: number, y: number): QListWidgetItem;
    itemWidget(item: QListWidgetItem): QWidget;
    openPersistentEditor(itemOrIndex: QListWidgetItem | QModelIndex): void;
    removeItemWidget(item: QListWidgetItem): void;
    row(item: QListWidgetItem): number;
    selectedItems(): QListWidgetItem[];
    setCurrentItem(item: QListWidgetItem): void;
    setItemWidget(item: QListWidgetItem, widget: QWidget): void;
    sortItems(order?: SortOrder): void;
    takeItem(row: number): void;
    visualItemRect(item: QListWidgetItem): QRect;
    clear(): void;
    scrollToItem(item: QListWidgetItem, hint?: ScrollHint): void;
}
export interface QListWidgetSignals extends QListViewSignals {
    currentItemChanged: (current: QListWidgetItem, previous: QListWidgetItem) => void;
    currentRowChanged: (currentRow: number) => void;
    currentTextChanged: (currentText: string) => void;
    itemActivated: (item: QListWidgetItem) => void;
    itemChanged: (item: QListWidgetItem) => void;
    itemClicked: (item: QListWidgetItem) => void;
    itemDoubleClicked: (item: QListWidgetItem) => void;
    itemEntered: (item: QListWidgetItem) => void;
    itemPressed: (item: QListWidgetItem) => void;
    itemSelectionChanged: () => void;
}
