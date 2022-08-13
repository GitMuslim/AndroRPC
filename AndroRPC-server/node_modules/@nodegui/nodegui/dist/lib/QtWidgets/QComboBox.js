"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertPolicy = exports.QComboBox = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const QVariant_1 = require("../QtCore/QVariant");
const QSize_1 = require("../QtCore/QSize");
const QModelIndex_1 = require("../QtCore/QModelIndex");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
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
class QComboBox extends QWidget_1.QWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QComboBox(parent.native);
        }
        else {
            native = new addon_1.default.QComboBox();
        }
        super(native);
    }
    // *** Public Functions ***
    addItem(icon, text, userData = new QVariant_1.QVariant()) {
        if (icon) {
            this.native.addItem(icon.native, text, userData.native);
        }
        else {
            this.native.addItem(text, userData.native);
        }
    }
    addItems(texts) {
        this.native.addItems(texts);
    }
    // TODO: QCompleter *	completer() const
    count() {
        return this.native.count();
    }
    // TODO: QVariant 	currentData(int role = Qt::UserRole) const
    currentIndex() {
        return this.native.currentIndex();
    }
    currentText() {
        return this.native.currentText();
    }
    duplicatesEnabled() {
        return this.native.duplicatesEnabled();
    }
    // TODO: int 	findData(const QVariant &data, int role = Qt::UserRole, Qt::MatchFlags flags = static_cast<Qt::MatchFlags>(Qt::MatchExactly|Qt::MatchCaseSensitive)) const
    // TODO: int 	findText(const QString &text, Qt::MatchFlags flags = Qt::MatchExactly|Qt::MatchCaseSensitive) const
    hasFrame() {
        return this.native.hasFrame();
    }
    hidePopup() {
        this.native.hidePopup();
    }
    iconSize() {
        return new QSize_1.QSize(this.native.iconSize());
    }
    insertItem(index, icon, text, userData = new QVariant_1.QVariant()) {
        if (icon) {
            this.native.insertItem(index, icon.native, text, userData.native);
        }
        else {
            this.native.insertItem(index, text, userData.native);
        }
    }
    insertItems(index, texts) {
        this.native.insertItems(index, texts);
    }
    insertPolicy() {
        return this.native.insertPolicy();
    }
    insertSeparator(index) {
        this.native.insertSeparator(index);
    }
    isEditable() {
        return this.native.isEditable();
    }
    itemData(index) {
        return new QVariant_1.QVariant(this.native.itemData(index));
    }
    // TODO: QAbstractItemDelegate *	itemDelegate() const
    // TODO: QIcon 	itemIcon(int index) const
    itemText(index) {
        return this.native.itemText(index);
    }
    // TODO: QLineEdit *	lineEdit() const
    maxCount() {
        return this.native.maxCount();
    }
    maxVisibleItems() {
        return this.native.maxVisibleItems();
    }
    minimumContentsLength() {
        return this.native.minimumContentsLength();
    }
    // TODO: QAbstractItemModel *	model() const
    modelColumn() {
        return this.native.modelColumn();
    }
    removeItem(index) {
        this.native.removeItem(index);
    }
    rootModelIndex() {
        return new QModelIndex_1.QModelIndex(this.native.rootModelIndex());
    }
    // TODO: void 	setCompleter(QCompleter *completer)
    setDuplicatesEnabled(enable) {
        this.native.setDuplicatesEnabled(enable);
    }
    setEditable(editable) {
        this.native.setEditable(editable);
    }
    setFrame(showFrame) {
        this.native.setFrame(showFrame);
    }
    setIconSize(size) {
        this.native.setIconSize(size);
    }
    setInsertPolicy(policy) {
        this.native.setInsertPolicy(policy);
    }
    // TODO: void 	setItemData(int index, const QVariant &value, int role = Qt::UserRole)
    // TODO: void 	setItemDelegate(QAbstractItemDelegate *delegate)
    // TODO: void 	setItemIcon(int index, const QIcon &icon)
    setItemText(index, text) {
        this.native.setItemText(index, text);
    }
    // TODO: void 	setLineEdit(QLineEdit *edit)
    setMaxCount(max) {
        this.native.setMaxCount(max);
    }
    setMaxVisibleItems(index) {
        this.native.setMaxVisibleItems(index);
    }
    setMinimumContentsLength(characters) {
        this.native.setMinimumContentsLength(characters);
    }
    setModel(model) {
        this.native.setModel(model.native);
    }
    setModelColumn(visibleColumn) {
        this.native.setModelColumn(visibleColumn);
    }
    setRootModelIndex(index) {
        this.native.setRootModelIndex(index.native);
    }
    setSizeAdjustPolicy(policy) {
        this.native.setSizeAdjustPolicy(policy);
    }
    sizeAdjustPolicy() {
        return this.native.sizeAdjustPolicy();
    }
    // TODO: void 	setValidator(const QValidator *validator)
    // TODO: void 	setView(QAbstractItemView *itemView)
    showPopup() {
        this.native.showPopup();
    }
    // TODO: const QValidator *	validator() const
    // TODO: QAbstractItemView *	view() const
    // *** Public Slots ***
    clear() {
        this.native.clear();
    }
    clearEditText() {
        this.native.clearEditText();
    }
    setCurrentIndex(index) {
        this.setProperty('currentIndex', index);
    }
    setCurrentText(text) {
        this.setProperty('currentText', text);
    }
    setEditText(text) {
        this.native.setEditText(text);
    }
}
exports.QComboBox = QComboBox;
var InsertPolicy;
(function (InsertPolicy) {
    InsertPolicy[InsertPolicy["NoInsert"] = 0] = "NoInsert";
    InsertPolicy[InsertPolicy["InsertAtTop"] = 1] = "InsertAtTop";
    InsertPolicy[InsertPolicy["InsertAtCurrent"] = 2] = "InsertAtCurrent";
    InsertPolicy[InsertPolicy["InsertAtBottom"] = 3] = "InsertAtBottom";
    InsertPolicy[InsertPolicy["InsertAfterCurrent"] = 4] = "InsertAfterCurrent";
    InsertPolicy[InsertPolicy["InsertBeforeCurrent"] = 5] = "InsertBeforeCurrent";
    InsertPolicy[InsertPolicy["InsertAlphabetically"] = 6] = "InsertAlphabetically";
})(InsertPolicy = exports.InsertPolicy || (exports.InsertPolicy = {}));
WrapperCache_1.wrapperCache.registerWrapper('QComboBoxWrap', QComboBox);
