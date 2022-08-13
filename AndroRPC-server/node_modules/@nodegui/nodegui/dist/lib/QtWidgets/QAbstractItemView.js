"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionMode = exports.QAbstractItemViewSelectionBehavior = exports.ScrollMode = exports.ScrollHint = exports.EditTrigger = exports.DragDropMode = exports.QAbstractItemView = void 0;
const QAbstractScrollArea_1 = require("./QAbstractScrollArea");
const QModelIndex_1 = require("../QtCore/QModelIndex");
const QSize_1 = require("../QtCore/QSize");
const WrapperCache_1 = require("../core/WrapperCache");
const QRect_1 = require("../QtCore/QRect");
/**

> This is the abstract base class of button widgets, providing their functionality.

* **This class is a JS wrapper around Qt's [QAbstractItemView class](https://doc.qt.io/qt-5/qabstractitemview.html)**

The QAbstractItemView class is an abstract class and therefore, technically, no further instances actually have to be created.
It is inherited by QListWidget. (n/a QColumnView, QHeaderView, QListView, QTableView, and QTreeView)

*/
class QAbstractItemView extends QAbstractScrollArea_1.QAbstractScrollArea {
    // *** Public Functions ***
    alternatingRowColors() {
        return this.property('alternatingRowColors').toBool();
    }
    autoScrollMargin() {
        return this.property('autoScrollMargin').toInt();
    }
    closePersistentEditor(index) {
        this.native.closePersistentEditor(index);
    }
    currentIndex() {
        return new QModelIndex_1.QModelIndex(this.native.currentIndex());
    }
    defaultDropAction() {
        return this.property('defaultDropAction').toInt();
    }
    dragDropMode() {
        return this.property('dragDropMode').toInt();
    }
    dragDropOverwriteMode() {
        return this.property('dragDropOverwriteMode').toBool();
    }
    dragEnabled() {
        return this.property('dragEnabled').toBool();
    }
    editTriggers() {
        return this.property('editTriggers').toInt();
    }
    hasAutoScroll() {
        return this.property('autoScroll').toBool();
    }
    horizontalScrollMode() {
        return this.property('horizontalScrollMode').toInt();
    }
    iconSize() {
        const iconSize = this.property('iconSize');
        return QSize_1.QSize.fromQVariant(iconSize);
    }
    indexAt(point) {
        return this.native.indexAt(point);
    }
    indexWidget(index) {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.indexWidget(index));
    }
    isPersistentEditorOpen(index) {
        return this.native.isPersistentEditorOpen(index.native);
    }
    // TODO: QAbstractItemDelegate *	itemDelegate() const
    // TODO: QAbstractItemDelegate *	itemDelegate(const QModelIndex &index) const
    // TODO: QAbstractItemDelegate *	itemDelegateForColumn(int column) const
    // TODO: QAbstractItemDelegate *	itemDelegateForRow(int row) const
    keyboardSearch(search) {
        this.native.keyboardSearch(search);
    }
    // TODO: QAbstractItemModel *	model() const
    openPersistentEditor(index) {
        this.native.openPersistentEditor(index.native);
    }
    resetHorizontalScrollMode() {
        this.native.resetHorizontalScrollMode();
    }
    resetVerticalScrollMode() {
        this.native.resetVerticalScrollMode();
    }
    rootIndex() {
        return new QModelIndex_1.QModelIndex(this.native.rootIndex());
    }
    scrollTo(index, hint = ScrollHint.EnsureVisible) {
        this.native.scrollTo(index.native, hint);
    }
    selectionBehavior() {
        return this.property('selectionBehavior').toInt();
    }
    selectionMode() {
        return this.property('selectionMode').toInt();
    }
    selectionModel() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.selectionModel());
    }
    setAlternatingRowColors(enable) {
        this.setProperty('alternatingRowColors', enable);
    }
    setAutoScroll(enable) {
        this.setProperty('autoScroll', enable);
    }
    setAutoScrollMargin(margin) {
        this.setProperty('autoScrollMargin', margin);
    }
    setDefaultDropAction(dropAction) {
        this.setProperty('defaultDropAction', dropAction);
    }
    setDragDropMode(behavior) {
        this.setProperty('dragDropMode', behavior);
    }
    setDragDropOverwriteMode(overwrite) {
        this.setProperty('dragDropOverwriteMode', overwrite);
    }
    setDragEnabled(enable) {
        this.setProperty('dragEnabled', enable);
    }
    setDropIndicatorShown(enable) {
        this.setProperty('showDropIndicator', enable);
    }
    setEditTriggers(triggers) {
        this.setProperty('editTriggers', triggers);
    }
    setHorizontalScrollMode(mode) {
        this.setProperty('horizontalScrollMode', mode);
    }
    setIconSize(iconSize) {
        this.setProperty('iconSize', iconSize.native);
    }
    setIndexWidget(index, widget) {
        this.native.setIndexWidget(index.native, widget.native);
    }
    setItemDelegate(delegate) {
        if (delegate != null) {
            const parent = delegate.parent();
            if (parent != null && parent != this) {
                throw new Error('NodeGui: QAbstractItemDelegate instances can only be given to one view instance.');
            }
            delegate.setParent(this);
            this.native.setItemDelegate(delegate.native);
        }
        else {
            this.native.setItemDelegate(null);
        }
    }
    setItemDelegateForColumn(column, delegate) {
        if (delegate != null) {
            const parent = delegate.parent();
            if (parent != null && parent != this) {
                throw new Error('NodeGui: QAbstractItemDelegate instances can only be given to one view instance.');
            }
            delegate.setParent(this);
            this.native.setItemDelegateForColumn(column, delegate.native);
        }
        else {
            this.native.setItemDelegateForColumn(column, null);
        }
    }
    setItemDelegateForRow(row, delegate) {
        if (delegate != null) {
            const parent = delegate.parent();
            if (parent != null && parent != this) {
                throw new Error('NodeGui: QAbstractItemDelegate instances can only be given to one view instance.');
            }
            delegate.setParent(this);
            this.native.setItemDelegateForColumn(row, delegate.native);
        }
        else {
            this.native.setItemDelegateForColumn(row, null);
        }
    }
    setModel(model) {
        this.native.setModel(model.native);
    }
    setSelectionBehavior(behavior) {
        this.setProperty('selectionBehavior', behavior);
    }
    setSelectionMode(mode) {
        this.setProperty('selectionMode', mode);
    }
    // TODO: virtual void 	setSelectionModel(QItemSelectionModel *selectionModel)
    setTabKeyNavigation(enable) {
        this.setProperty('tabKeyNavigation', enable);
    }
    setTextElideMode(mode) {
        this.setProperty('textElideMode', mode);
    }
    setVerticalScrollMode(mode) {
        this.setProperty('verticalScrollMode', mode);
    }
    showDropIndicator() {
        return this.property('showDropIndicator').toBool();
    }
    // TODO: virtual int    sizeHintForColumn(int column) const
    sizeHintForIndex(index) {
        return new QSize_1.QSize(this.native.sizeHintForIndex(index.native));
    }
    // TODO: virtual int    sizeHintForRow(int row) const
    tabKeyNavigation() {
        return this.property('tabKeyNavigation').toBool();
    }
    textElideMode() {
        return this.property('textElideMode').toInt();
    }
    verticalScrollMode() {
        return this.property('verticalScrollMode').toInt();
    }
    visualRect(index) {
        return new QRect_1.QRect(this.native.visualRect(index.native));
    }
    // *** Public Slots ***
    clearSelection() {
        this.native.clearSelection();
    }
    edit(index) {
        this.native.edit(index.native);
    }
    reset() {
        this.native.reset();
    }
    scrollToBottom() {
        this.native.scrollToBottom();
    }
    scrollToTop() {
        this.native.scrollToTop();
    }
    selectAll() {
        this.native.selectAll();
    }
    setCurrentIndex(index) {
        this.native.setCurrentIndex(index.native);
    }
    setRootIndex(index) {
        this.native.setRootIndex(index.native);
    }
    update(index) {
        if (index == null) {
            super.update();
        }
        else {
            this.native.update_QModelIndex(index.native);
        }
    }
}
exports.QAbstractItemView = QAbstractItemView;
var DragDropMode;
(function (DragDropMode) {
    DragDropMode[DragDropMode["NoDragDrop"] = 0] = "NoDragDrop";
    DragDropMode[DragDropMode["DragOnly"] = 1] = "DragOnly";
    DragDropMode[DragDropMode["DropOnly"] = 2] = "DropOnly";
    DragDropMode[DragDropMode["DragDrop"] = 3] = "DragDrop";
    DragDropMode[DragDropMode["InternalMove"] = 4] = "InternalMove";
})(DragDropMode = exports.DragDropMode || (exports.DragDropMode = {}));
var EditTrigger;
(function (EditTrigger) {
    EditTrigger[EditTrigger["NoEditTriggers"] = 0] = "NoEditTriggers";
    EditTrigger[EditTrigger["CurrentChanged"] = 1] = "CurrentChanged";
    EditTrigger[EditTrigger["DoubleClicked"] = 2] = "DoubleClicked";
    EditTrigger[EditTrigger["SelectedClicked"] = 4] = "SelectedClicked";
    EditTrigger[EditTrigger["EditKeyPressed"] = 8] = "EditKeyPressed";
    EditTrigger[EditTrigger["AnyKeyPressed"] = 16] = "AnyKeyPressed";
    EditTrigger[EditTrigger["AllEditTriggers"] = 31] = "AllEditTriggers";
})(EditTrigger = exports.EditTrigger || (exports.EditTrigger = {}));
var ScrollHint;
(function (ScrollHint) {
    ScrollHint[ScrollHint["EnsureVisible"] = 0] = "EnsureVisible";
    ScrollHint[ScrollHint["PositionAtTop"] = 1] = "PositionAtTop";
    ScrollHint[ScrollHint["PositionAtBottom"] = 2] = "PositionAtBottom";
    ScrollHint[ScrollHint["PositionAtCenter"] = 3] = "PositionAtCenter";
})(ScrollHint = exports.ScrollHint || (exports.ScrollHint = {}));
var ScrollMode;
(function (ScrollMode) {
    ScrollMode[ScrollMode["ScrollPerItem"] = 0] = "ScrollPerItem";
    ScrollMode[ScrollMode["ScrollPerPixel"] = 1] = "ScrollPerPixel";
})(ScrollMode = exports.ScrollMode || (exports.ScrollMode = {}));
// QTabBar also has a SelectionBehavior, so we prefix this one.
var QAbstractItemViewSelectionBehavior;
(function (QAbstractItemViewSelectionBehavior) {
    QAbstractItemViewSelectionBehavior[QAbstractItemViewSelectionBehavior["SelectItems"] = 0] = "SelectItems";
    QAbstractItemViewSelectionBehavior[QAbstractItemViewSelectionBehavior["SelectRows"] = 1] = "SelectRows";
    QAbstractItemViewSelectionBehavior[QAbstractItemViewSelectionBehavior["SelectColumns"] = 2] = "SelectColumns";
})(QAbstractItemViewSelectionBehavior = exports.QAbstractItemViewSelectionBehavior || (exports.QAbstractItemViewSelectionBehavior = {}));
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["NoSelection"] = 0] = "NoSelection";
    SelectionMode[SelectionMode["SingleSelection"] = 1] = "SingleSelection";
    SelectionMode[SelectionMode["MultiSelection"] = 2] = "MultiSelection";
    SelectionMode[SelectionMode["ExtendedSelection"] = 3] = "ExtendedSelection";
    SelectionMode[SelectionMode["ContiguousSelection"] = 4] = "ContiguousSelection";
})(SelectionMode = exports.SelectionMode || (exports.SelectionMode = {}));
