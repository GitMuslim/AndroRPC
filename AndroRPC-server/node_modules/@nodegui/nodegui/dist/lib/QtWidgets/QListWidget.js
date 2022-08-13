"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QListWidget = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const QListWidgetItem_1 = require("./QListWidgetItem");
const QListView_1 = require("./QListView");
const QRect_1 = require("../QtCore/QRect");
const QtEnums_1 = require("../QtEnums");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
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
class QListWidget extends QListView_1.QListView {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QListWidget(parent.native);
        }
        else {
            native = new addon_1.default.QListWidget();
        }
        super(native);
        this.items = new Set();
    }
    count() {
        return this.property('count').toInt();
    }
    setCurrentRow(row) {
        this.setProperty('currentRow', row);
    }
    currentRow() {
        return this.property('currentRow').toInt();
    }
    setSortingEnabled(enable) {
        this.setProperty('sortingEnabled', enable);
    }
    isSortingEnabled() {
        return this.property('sortingEnabled').toBool();
    }
    addItem(item) {
        this.native.addItem(item.native);
        this.items.add(item);
    }
    addItems(labels) {
        this.native.addItems(labels);
    }
    closePersistentEditor(itemOrIndex) {
        if (itemOrIndex instanceof QListWidgetItem_1.QListWidgetItem) {
            this.native.closePersistentEditor_QListWidgetItem(itemOrIndex.native);
        }
        else {
            this.native.closePersistentEditor(itemOrIndex.native);
        }
    }
    currentItem() {
        return new QListWidgetItem_1.QListWidgetItem(this.native.currentItem());
    }
    editItem(item) {
        this.native.editItem(item.native);
    }
    findItems(text, flags) {
        const nativeItems = this.native.findItems(text, flags);
        return nativeItems.map(function (item) {
            return new QListWidgetItem_1.QListWidgetItem(item);
        });
    }
    insertItem(row, item) {
        this.native.insertItem(row, item.native);
        this.items.add(item);
    }
    insertItems(row, labels) {
        this.native.insertItems(row, labels);
    }
    isPersistentEditorOpen(itemOrIndex) {
        if (itemOrIndex instanceof QListWidgetItem_1.QListWidgetItem) {
            return this.native.isPersistentEditorOpen_QListWidgetItem(itemOrIndex.native);
        }
        else {
            return this.native.isPersistentEditorOpen(itemOrIndex.native);
        }
    }
    item(row) {
        return new QListWidgetItem_1.QListWidgetItem(this.native.item(row));
    }
    itemAt(x, y) {
        return new QListWidgetItem_1.QListWidgetItem(this.native.itemAt(x, y));
    }
    itemWidget(item) {
        return new QWidget_1.QWidget(this.native.itemWidget(item.native));
    }
    openPersistentEditor(itemOrIndex) {
        if (itemOrIndex instanceof QListWidgetItem_1.QListWidgetItem) {
            this.native.openPersistentEditor_QListWidgetItem(itemOrIndex.native);
        }
        else {
            this.native.openPersistentEditor(itemOrIndex.native);
        }
    }
    removeItemWidget(item) {
        this.native.removeItemWidget(item.native);
    }
    row(item) {
        return this.native.row(item.native);
    }
    selectedItems() {
        const nativeItems = this.native.selectedItems();
        return nativeItems.map(function (item) {
            return new QListWidgetItem_1.QListWidgetItem(item);
        });
    }
    setCurrentItem(item) {
        this.native.setCurrentItem(item.native);
    }
    setItemWidget(item, widget) {
        this.native.setItemWidget(item.native, widget.native);
    }
    sortItems(order = QtEnums_1.SortOrder.AscendingOrder) {
        this.native.sortItems(order);
    }
    takeItem(row) {
        this.native.takeItem(row);
    }
    visualItemRect(item) {
        return new QRect_1.QRect(this.native.visualItemRect(item.native));
    }
    clear() {
        this.native.clear();
    }
    scrollToItem(item, hint = QtEnums_1.ScrollHint.EnsureVisible) {
        this.native.scrollToItem(item.native, hint);
    }
}
exports.QListWidget = QListWidget;
WrapperCache_1.wrapperCache.registerWrapper('QListWidgetWrap', QListWidget);
