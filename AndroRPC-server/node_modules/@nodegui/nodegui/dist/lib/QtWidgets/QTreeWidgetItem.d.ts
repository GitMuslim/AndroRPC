import { Component, NativeElement } from '../core/Component';
import { QIcon } from '../QtGui/QIcon';
import { QTreeWidget } from './QTreeWidget';
import { ItemFlag } from '../QtEnums/ItemFlag';
import { CheckState, ItemDataRole } from '../QtEnums';
import { QVariantType, QVariant } from '../QtCore/QVariant';
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
export declare class QTreeWidgetItem extends Component {
    items: Set<NativeElement | Component>;
    constructor();
    constructor(parent: QTreeWidgetItem, strings?: string[]);
    constructor(parent: QTreeWidget, strings?: string[]);
    constructor(native: NativeElement);
    constructor(strings: string[]);
    setText(column: number, text: string): void;
    parent(): QTreeWidgetItem | undefined;
    childCount(): number;
    child(index: number): QTreeWidgetItem | undefined;
    text(column: number): string;
    setSelected(selected: boolean): void;
    setExpanded(expanded: boolean): void;
    /**
     * Adds the specified child to this QTreeWidgetItem.
     * @param childItem The child to add.
     */
    addChild(childItem: QTreeWidgetItem): void;
    /**
     * Sets the flags for the item to the given flags. These determine whether the item can be selected or modified.
     * This is often used to disable an item.
     * @param flags The flags.
     */
    setFlags(flags: ItemFlag): void;
    /**
     * Sets the item in the given column check state to be state.
     * @param column The column.
     * @param state The check state.
     */
    setCheckState(column: number, state: CheckState): void;
    /**
     * Returns the flags used to describe the item. These determine whether the item can be checked, edited, and selected.
     */
    flags(): ItemFlag;
    /**
     * Sets the value for the item's column and role to the given value.
     * The role describes the type of data specified by value, and is defined by the ItemDataRole enum.
     * @param column The column.
     * @param role The role.
     * @param value The value.
     */
    setData(column: number, role: ItemDataRole, value: QVariantType): void;
    /**
     * Returns the value for the item's column and role.
     * @param column The column.
     * @param role The role.
     */
    data(column: number, role: ItemDataRole): QVariant;
    setHidden(hide: boolean): void;
    isHidden(): boolean;
    /**
     * Sets the icon for the item.
     * @param icon The icon object
     */
    setIcon(column: number, icon: QIcon): void;
    /**
     * Returns the icon object for the item.
     */
    icon(column: number): QIcon;
}
