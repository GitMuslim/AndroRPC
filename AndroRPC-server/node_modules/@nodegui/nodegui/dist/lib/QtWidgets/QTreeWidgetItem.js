"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTreeWidgetItem = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
const QIcon_1 = require("../QtGui/QIcon");
const QTreeWidget_1 = require("./QTreeWidget");
const QVariant_1 = require("../QtCore/QVariant");
/**

> Creates an item for QTreeWidget.

* **This class is a JS wrapper around Qt's [QTreeWidgetItem class](https://doc.qt.io/qt-5/qtreewidgetitem.html)**

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

tree.addTopLevelItem(item1);
tree.addTopLevelItem(item2);
tree.addTopLevelItem(item3);

// Add children to item1
const c1item1 = new QTreeWidgetItem(item1);
c1item1.setText(0, `c1item1`);
const c1item2 = new QTreeWidgetItem(item1);
c1item2.setText(0, `c1item1`);

win.setCentralWidget(tree);
win.show();
(global as any).win = win;

```
 */
class QTreeWidgetItem extends Component_1.Component {
    constructor(parent, strings) {
        let native;
        if (helpers_1.checkIfNativeElement(parent)) {
            native = parent;
        }
        else {
            if (parent instanceof QTreeWidgetItem || parent instanceof QTreeWidget_1.QTreeWidget) {
                const type = parent instanceof QTreeWidgetItem ? 'item' : 'tree';
                if (strings) {
                    native = new addon_1.default.QTreeWidgetItem(parent.native, strings, type);
                }
                else {
                    native = new addon_1.default.QTreeWidgetItem(parent.native, type);
                }
            }
            else if (Array.isArray(parent)) {
                const strings = parent;
                native = new addon_1.default.QTreeWidgetItem(strings);
            }
            else {
                native = new addon_1.default.QTreeWidgetItem();
            }
        }
        super(native);
        this.items = new Set();
    }
    setText(column, text) {
        this.native.setText(column, text);
    }
    parent() {
        const parent = this.native.parent();
        if (parent) {
            return new QTreeWidgetItem(parent);
        }
        else {
            return undefined;
        }
    }
    childCount() {
        return this.native.childCount();
    }
    child(index) {
        return this.native.child(index);
    }
    text(column) {
        return this.native.text(column);
    }
    setSelected(selected) {
        this.native.setSelected(selected);
    }
    setExpanded(expanded) {
        this.native.setExpanded(expanded);
    }
    /**
     * Adds the specified child to this QTreeWidgetItem.
     * @param childItem The child to add.
     */
    addChild(childItem) {
        this.items.add(childItem);
        this.native.addChild(childItem.native);
    }
    /**
     * Sets the flags for the item to the given flags. These determine whether the item can be selected or modified.
     * This is often used to disable an item.
     * @param flags The flags.
     */
    setFlags(flags) {
        this.native.setFlags(flags);
    }
    /**
     * Sets the item in the given column check state to be state.
     * @param column The column.
     * @param state The check state.
     */
    setCheckState(column, state) {
        this.native.setCheckState(column, state);
    }
    /**
     * Returns the flags used to describe the item. These determine whether the item can be checked, edited, and selected.
     */
    flags() {
        return this.native.flags();
    }
    /**
     * Sets the value for the item's column and role to the given value.
     * The role describes the type of data specified by value, and is defined by the ItemDataRole enum.
     * @param column The column.
     * @param role The role.
     * @param value The value.
     */
    setData(column, role, value) {
        const variant = new QVariant_1.QVariant(value);
        this.native.setData(column, role, variant.native);
    }
    /**
     * Returns the value for the item's column and role.
     * @param column The column.
     * @param role The role.
     */
    data(column, role) {
        return this.native.data(column, role);
    }
    setHidden(hide) {
        this.native.setHidden(hide);
    }
    isHidden() {
        return this.native.isHidden();
    }
    /**
     * Sets the icon for the item.
     * @param icon The icon object
     */
    setIcon(column, icon) {
        this.native.setIcon(column, icon.native);
    }
    /**
     * Returns the icon object for the item.
     */
    icon(column) {
        return new QIcon_1.QIcon(this.native.icon(column));
    }
}
exports.QTreeWidgetItem = QTreeWidgetItem;
