"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAbstractItemModel = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QObject_1 = require("../QtCore/QObject");
const QModelIndex_1 = require("./QModelIndex");
const QVariant_1 = require("./QVariant");
const QtEnums_1 = require("../QtEnums");
class QAbstractItemModel extends QObject_1.QObject {
    constructor() {
        super(new addon_1.default.QAbstractItemModel());
        const dispatcher = (methodName, ...args) => {
            switch (methodName) {
                case 'index':
                    try {
                        return this.index(args[0], args[1], new QModelIndex_1.QModelIndex(args[2])).native;
                    }
                    catch (e) {
                        console.log(`An exception was thrown while dispatching to method 'index':`);
                        console.log(e);
                    }
                    return new QModelIndex_1.QModelIndex().native;
                case 'parent':
                    try {
                        return this.parentModelIndex(new QModelIndex_1.QModelIndex(args[0])).native;
                    }
                    catch (e) {
                        console.log(`An exception was thrown while dispatching to method 'parentModelIndex':`);
                        console.log(e);
                    }
                    return new QModelIndex_1.QModelIndex().native;
                case 'rowCount':
                    try {
                        return this.rowCount(new QModelIndex_1.QModelIndex(args[0]));
                    }
                    catch (e) {
                        console.log(`An exception was thrown while dispatching to method 'rowCount':`);
                        console.log(e);
                    }
                    return 0;
                case 'columnCount':
                    try {
                        return this.columnCount(new QModelIndex_1.QModelIndex(args[0]));
                    }
                    catch (e) {
                        console.log(`An exception was thrown while dispatching to method 'columnCount':`);
                        console.log(e);
                    }
                    return 0;
                case 'data':
                    try {
                        return this.data(new QModelIndex_1.QModelIndex(args[0]), args[1]).native;
                    }
                    catch (e) {
                        console.log(`An exception was thrown while dispatching to method 'data':`);
                        console.log(e);
                    }
                    return new QVariant_1.QVariant().native;
                case 'flags':
                    try {
                        return this.flags(new QModelIndex_1.QModelIndex(args[0]));
                    }
                    catch (e) {
                        console.log(`An exception was thrown while dispatching to method 'flags':`);
                        console.log(e);
                    }
                    return QtEnums_1.ItemFlag.NoItemFlags;
                case 'headerData':
                    try {
                        return this.headerData(args[0], args[1], args[2]).native;
                    }
                    catch (e) {
                        console.log(`An exception was thrown while dispatching to method 'headerData':`);
                        console.log(e);
                    }
                    return new QVariant_1.QVariant().native;
                case 'setData':
                    try {
                        return this.setData(new QModelIndex_1.QModelIndex(args[0]), new QVariant_1.QVariant(args[1]), args[2]);
                    }
                    catch (e) {
                        console.log(`An exception was thrown while dispatching to method 'setData':`);
                        console.log(e);
                    }
                    return false;
                case 'buddy':
                    try {
                        return this.buddy(new QModelIndex_1.QModelIndex(args[0])).native;
                    }
                    catch (e) {
                        console.log(`An exception was thrown while dispatching to method 'buddy':`);
                        console.log(e);
                    }
                    return new QModelIndex_1.QModelIndex().native;
                default:
                    return null;
            }
        };
        this.native.initNodeDispatcher(dispatcher);
    }
    // *** Public Functions ***
    buddy(child) {
        return new QModelIndex_1.QModelIndex(this.native._super_buddy(child.native));
    }
    // TODO: virtual bool canDropMimeData(const QMimeData *data, Qt::DropAction action, int row, int column, const QModelIndex &parent) const
    // TODO: virtual bool canFetchMore(const QModelIndex &parent) const
    checkIndex(index) {
        return this.native.checkIndex(index.native);
    }
    columnCount(parent = new QModelIndex_1.QModelIndex()) {
        return 0;
    }
    data(index, role = QtEnums_1.ItemDataRole.DisplayRole) {
        return new QVariant_1.QVariant();
    }
    // TODO: virtual bool dropMimeData(const QMimeData *data, Qt::DropAction action, int row, int column, const QModelIndex &parent)
    // TODO: virtual void fetchMore(const QModelIndex &parent)
    flags(index) {
        return this.native._super_flags(index.native);
    }
    // TODO: virtual bool hasChildren(const QModelIndex &parent = QModelIndex()) const
    hasIndex(row, column, parent = new QModelIndex_1.QModelIndex()) {
        return this.native.hasIndex(row, column, parent.native);
    }
    headerData(section, orientation, role) {
        return new QVariant_1.QVariant();
    }
    index(row, column, parent = new QModelIndex_1.QModelIndex()) {
        return new QModelIndex_1.QModelIndex();
    }
    // TODO: bool insertColumn(int column, const QModelIndex &parent = QModelIndex())
    // TODO: virtual bool insertColumns(int column, int count, const QModelIndex &parent = QModelIndex())
    // TODO: bool insertRow(int row, const QModelIndex &parent = QModelIndex())
    // TODO: virtual bool insertRows(int row, int count, const QModelIndex &parent = QModelIndex())
    // TODO: virtual QMap<int, QVariant> itemData(const QModelIndex &index) const
    // TODO: virtual QModelIndexList match(const QModelIndex &start, int role, const QVariant &value, int hits = 1, Qt::MatchFlags flags = Qt::MatchFlags(Qt::MatchStartsWith|Qt::MatchWrap)) const
    // TODO: virtual QMimeData * mimeData(const QModelIndexList &indexes) const
    // TODO: virtual QStringList mimeTypes() const
    // TODO: bool moveColumn(const QModelIndex &sourceParent, int sourceColumn, const QModelIndex &destinationParent, int destinationChild)
    // TODO: virtual bool moveColumns(const QModelIndex &sourceParent, int sourceColumn, int count, const QModelIndex &destinationParent, int destinationChild)
    // TODO: bool moveRow(const QModelIndex &sourceParent, int sourceRow, const QModelIndex &destinationParent, int destinationChild)
    // TODO: virtual bool moveRows(const QModelIndex &sourceParent, int sourceRow, int count, const QModelIndex &destinationParent, int destinationChild)
    /**
     * Note: This corresponds to `QAbstractItemModel::parent(QModelIndex)`. It has been given a different name in TS.
     */
    parentModelIndex(child) {
        return new QModelIndex_1.QModelIndex();
    }
    // TODO: bool removeColumn(int column, const QModelIndex &parent = QModelIndex())
    // TODO: virtual bool removeColumns(int column, int count, const QModelIndex &parent = QModelIndex())
    // TODO: bool removeRow(int row, const QModelIndex &parent = QModelIndex())
    // TODO: virtual bool removeRows(int row, int count, const QModelIndex &parent = QModelIndex())
    // TODO: virtual QHash<int, QByteArray> roleNames() const
    rowCount(parent = new QModelIndex_1.QModelIndex()) {
        return 0;
    }
    setData(index, value, role = QtEnums_1.ItemDataRole.EditRole) {
        return false;
    }
    // TODO: virtual bool setHeaderData(int section, Qt::Orientation orientation, const QVariant &value, int role = Qt::EditRole)
    // TODO: virtual bool setItemData(const QModelIndex &index, const QMap<int, QVariant> &roles)
    // TODO: virtual QModelIndex sibling(int row, int column, const QModelIndex &index) const
    // TODO: virtual void sort(int column, Qt::SortOrder order = Qt::AscendingOrder)
    // TODO: virtual QSize span(const QModelIndex &index) const
    // TODO: virtual Qt::DropActions supportedDragActions() const
    // TODO: virtual Qt::DropActions supportedDropActions() const
    // *** Public Slots ***
    // TODO: virtual void revert()
    // TODO: virtual bool submit()
    // *** Signals ***
    // Note: Many signals don't need to be explicitly emitted by subclasses and can be safely omitted.
    emitDataChanged(topLeft, bottomRight, roles) {
        this.native.emitDataChanged(topLeft.native, bottomRight.native, roles);
    }
    // TODO: void headerDataChanged(Qt::Orientation orientation, int first, int last)
    // TODO: void layoutAboutToBeChanged(const QList<QPersistentModelIndex> &parents = QList<QPersistentModelIndex>(), QAbstractItemModel::LayoutChangeHint hint = QAbstractItemModel::NoLayoutChangeHint)
    // TODO: void layoutChanged(const QList<QPersistentModelIndex> &parents = QList<QPersistentModelIndex>(), QAbstractItemModel::LayoutChangeHint hint = QAbstractItemModel::NoLayoutChangeHint)
    // *** Protected Functions ***
    beginInsertColumns(parent, first, last) {
        this.native.beginInsertColumns(parent.native, first, last);
    }
    beginInsertRows(parent, first, last) {
        this.native.beginInsertRows(parent.native, first, last);
    }
    beginMoveColumns(sourceParent, sourceFirst, sourceLast, destinationParent, destinationChild) {
        return this.native.beginMoveColumns(sourceParent.native, sourceFirst, sourceLast, destinationParent.native, destinationChild);
    }
    beginMoveRows(sourceParent, sourceFirst, sourceLast, destinationParent, destinationChild) {
        return this.native.beginMoveRows(sourceParent.native, sourceFirst, sourceLast, destinationParent.native, destinationChild);
    }
    beginRemoveColumns(parent, first, last) {
        this.native.beginRemoveColumns(parent.native, first, last);
    }
    beginRemoveRows(parent, first, last) {
        this.native.beginRemoveRows(parent.native, first, last);
    }
    beginResetModel() {
        this.native.beginResetModel();
    }
    // TODO: void changePersistentIndex(const QModelIndex &from, const QModelIndex &to)
    // TODO: void changePersistentIndexList(const QModelIndexList &from, const QModelIndexList &to)
    createIndex(row, column) {
        const result = this.native.createIndex(row, column);
        return new QModelIndex_1.QModelIndex(result);
    }
    // TODO: QModelIndex createIndex(int row, int column, quintptr id) const
    endInsertColumns() {
        this.native.endInsertColumns();
    }
    endInsertRows() {
        this.native.endInsertRows();
    }
    endMoveColumns() {
        this.native.endMoveColumns();
    }
    endMoveRows() {
        this.native.endMoveRows();
    }
    endRemoveColumns() {
        this.native.endRemoveColumns();
    }
    endRemoveRows() {
        this.native.endRemoveRows();
    }
    endResetModel() {
        this.native.endResetModel();
    }
}
exports.QAbstractItemModel = QAbstractItemModel;
