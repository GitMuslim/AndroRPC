import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { SizeAdjustPolicy } from '../QtEnums';
import { QIcon } from '../QtGui/QIcon';
import { QVariant } from '../QtCore/QVariant';
import { QStandardItemModel } from './QStandardItemModel';
import { QSize } from '../QtCore/QSize';
import { QModelIndex } from '../QtCore/QModelIndex';
/**

> Create and control a selectable drop down menu.

* **This class is a JS wrapper around Qt's [QComboBox class](https://doc.qt.io/qt-5/qcombobox.html)**

A `QComboBox` provides a means of presenting a list of options to the user.

### Example

```javascript
const { QComboBox } = require("@nodegui/nodegui");

const comboBox = new QComboBox();
comboBox.addItem(undefined, 'comboBox item 0');
comboBox.addItem(undefined, 'comboBox item 1');
comboBox.addItem(undefined, 'comboBox item 2');
comboBox.addItem(undefined, 'comboBox item 3');

comboBox.addEventListener('currentTextChanged', (text) => {
    console.log('currentTextChanged: ' + text);
});

comboBox.addEventListener('currentIndexChanged', (index) => {
    console.log('currentIndexChanged: ' + index);
});
```
 */
export declare class QComboBox extends QWidget<QComboBoxSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    addItem(icon: QIcon | undefined, text: string, userData?: QVariant): void;
    addItems(texts: string[]): void;
    count(): number;
    currentIndex(): number;
    currentText(): string;
    duplicatesEnabled(): boolean;
    hasFrame(): boolean;
    hidePopup(): void;
    iconSize(): QSize;
    insertItem(index: number, icon: QIcon | undefined, text: string, userData?: QVariant): void;
    insertItems(index: number, texts: string[]): void;
    insertPolicy(): InsertPolicy;
    insertSeparator(index: number): void;
    isEditable(): boolean;
    itemData(index: number): QVariant;
    itemText(index: number): string;
    maxCount(): number;
    maxVisibleItems(): number;
    minimumContentsLength(): number;
    modelColumn(): number;
    removeItem(index: number): void;
    rootModelIndex(): QModelIndex;
    setDuplicatesEnabled(enable: boolean): void;
    setEditable(editable: boolean): void;
    setFrame(showFrame: boolean): void;
    setIconSize(size: QSize): void;
    setInsertPolicy(policy: InsertPolicy): void;
    setItemText(index: number, text: string): void;
    setMaxCount(max: number): void;
    setMaxVisibleItems(index: number): void;
    setMinimumContentsLength(characters: number): void;
    setModel(model: QStandardItemModel): void;
    setModelColumn(visibleColumn: number): void;
    setRootModelIndex(index: QModelIndex): void;
    setSizeAdjustPolicy(policy: SizeAdjustPolicy): void;
    sizeAdjustPolicy(): number;
    showPopup(): void;
    clear(): void;
    clearEditText(): void;
    setCurrentIndex(index: number): void;
    setCurrentText(text: string): void;
    setEditText(text: string): void;
}
export declare enum InsertPolicy {
    NoInsert = 0,
    InsertAtTop = 1,
    InsertAtCurrent = 2,
    InsertAtBottom = 3,
    InsertAfterCurrent = 4,
    InsertBeforeCurrent = 5,
    InsertAlphabetically = 6
}
export interface QComboBoxSignals extends QWidgetSignals {
    activated: (index: number) => void;
    currentIndexChanged: (index: number) => void;
    currentTextChanged: (text: string) => void;
    editTextChanged: (text: string) => void;
    highlighted: (index: number) => void;
    textActivated: (text: string) => void;
    textHighlighted: (text: string) => void;
}
