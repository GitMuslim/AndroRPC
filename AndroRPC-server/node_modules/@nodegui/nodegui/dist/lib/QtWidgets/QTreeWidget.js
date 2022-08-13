"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTreeWidget = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractScrollArea_1 = require("./QAbstractScrollArea");
const QTreeWidgetItem_1 = require("./QTreeWidgetItem");
const __1 = require("../..");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> Creates a tree view that uses a predefined tree model.

* **This class is a JS wrapper around Qt's [QTreeWidget class](https://doc.qt.io/qt-5/qtreewidget.html)**

### Example

```javascript

const { QMainWindow, QTreeWidgetItem, QTreeWidget } = require("@nodegui/nodegui");

const win = new QMainWindow();
const tree = new QTreeWidget();

const item1 = new QTreeWidgetItem();
item1.setText(0, `item-1`);
const item2 = new QTreeWidgetItem();
item2.setText(0, `item-2`);
const item3 = new QTreeWidgetItem();
item3.setText(0, `item-3`);
const item4 = new QTreeWidgetItem();
item4.setText(0, `item-4`);
const item5 = new QTreeWidgetItem();
item5.setText(0, `item-5`);
const item6 = new QTreeWidgetItem();
item6.setText(0, `item-6`);

tree.addTopLevelItem(item1);
tree.insertTopLevelItems(0, [item2, item3]);
tree.addTopLevelItems([item4, item5]);
tree.insertTopLevelItem(2, item6);

// Add children to item1
const c1item1 = new QTreeWidgetItem(item1);
c1item1.setText(0, `c1item1`);
const c1item2 = new QTreeWidgetItem(item1);
c1item2.setText(0, `c1item1`);

win.setCentralWidget(tree);
win.show();
(global as any).win = win;```
 */
class QTreeWidget extends QAbstractScrollArea_1.QAbstractScrollArea {
    constructor(arg) {
        let native;
        if (__1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QTreeWidget(parent.native);
        }
        else {
            native = new addon_1.default.QTreeWidget();
        }
        super(native);
        this.topLevelItems = new Set();
        this.itemWidgets = new Map();
    }
    addTopLevelItem(item) {
        this.topLevelItems.add(item);
        this.native.addTopLevelItem(item.native);
    }
    addTopLevelItems(items) {
        const napiItems = [];
        items.forEach((item) => {
            this.topLevelItems.add(item);
            napiItems.push(item.native);
        });
        this.native.addTopLevelItems(napiItems);
    }
    insertTopLevelItem(index, item) {
        this.topLevelItems.add(item);
        this.native.insertTopLevelItem(index, item.native);
    }
    insertTopLevelItems(index, items) {
        const napiItems = [];
        items.forEach((item) => {
            this.topLevelItems.add(item);
            napiItems.push(item.native);
        });
        this.native.insertTopLevelItems(index, napiItems);
    }
    setHeaderHidden(hide) {
        this.native.setProperty('headerHidden', hide);
    }
    selectedItems() {
        const nativeItems = this.native.selectedItems();
        return nativeItems.map(function (eachItem) {
            return new QTreeWidgetItem_1.QTreeWidgetItem(eachItem);
        });
    }
    /**
     * Sets the column count of this QTreeWidget.
     * @param columnCount The number of columns.
     */
    setColumnCount(columnCount) {
        this.native.setColumnCount(columnCount);
    }
    /**
     * Sets the width of column of this QTreeWidget.
     * @param column The column index.
     * @param width The size of the columns.
     */
    setColumnWidth(column, width) {
        this.native.setColumnWidth(column, width);
    }
    /**
     * Sets the header label.
     * @param label The header label.
     */
    setHeaderLabel(label) {
        this.native.setHeaderLabel(label);
    }
    /**
     * Sets the header labels of the existing columns.
     * @param labels The header labels for each column.
     */
    setHeaderLabels(labels) {
        this.native.setHeaderLabels(labels);
    }
    /**
     * Sets the given widget to be displayed in the cell specified by the given item and column.
     * @param item The targeted item.
     * @param column The column in which to show the edit widget.
     * @param widget The edit widget.
     */
    setItemWidget(item, column, widget) {
        this.itemWidgets.set(item, widget);
        this.native.setItemWidget(item.native, column, widget.native);
    }
    /**
     * Returns the current item in the tree widget.
     */
    currentItem() {
        const item = this.native.currentItem();
        if (item) {
            return new QTreeWidgetItem_1.QTreeWidgetItem(item);
        }
        else {
            return undefined;
        }
    }
    /**
     * Sets if columns can be sorted by clicking on its header
     * @param enable Sorting enabled or disabled
     */
    setSortingEnabled(enable) {
        this.native.setProperty('sortingEnabled', enable);
    }
    findItems(text, flags, column) {
        const nativeItems = this.native.findItems(text, flags, column);
        return nativeItems.map(function (eachItem) {
            return new QTreeWidgetItem_1.QTreeWidgetItem(eachItem);
        });
    }
    takeTopLevelItem(index) {
        const item = this.native.takeTopLevelItem(index);
        if (item) {
            return new QTreeWidgetItem_1.QTreeWidgetItem(item);
        }
        else {
            return undefined;
        }
    }
    clear() {
        this.topLevelItems.clear();
        this.native.clear();
    }
}
exports.QTreeWidget = QTreeWidget;
WrapperCache_1.wrapperCache.registerWrapper('QTreeWidgetWrap', QTreeWidget);
