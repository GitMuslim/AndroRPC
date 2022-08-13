"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionFlag = exports.QItemSelectionModel = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QObject_1 = require("../QtCore/QObject");
const QModelIndex_1 = require("./QModelIndex");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
class QItemSelectionModel extends QObject_1.QObject {
    constructor(arg) {
        let native = null;
        if (arg == null) {
            native = new addon_1.default.QItemSelectionModel();
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            throw new Error('QItemSelectionModel cannot be initialised this way.');
        }
        super(native);
    }
    // *** Public Functions ***
    columnIntersectsSelection(column, parent = new QModelIndex_1.QModelIndex()) {
        return this.native.columnIntersectsSelection(column, parent.native);
    }
    currentIndex() {
        return this.native.currentIndex();
    }
    hasSelection() {
        return this.native.hasSelection();
    }
    isColumnSelected(column, parent = new QModelIndex_1.QModelIndex()) {
        return this.native.isColumnSelected(column, parent.native);
    }
    isRowSelected(row, parent = new QModelIndex_1.QModelIndex()) {
        return this.native.isRowSelected(row, parent.native);
    }
    isSelected(index) {
        return this.native.isSelected(index.native);
    }
    // TODO: const QAbstractItemModel *	model() const
    // TODO: QAbstractItemModel *	model()
    rowIntersectsSelection(row, parent = new QModelIndex_1.QModelIndex()) {
        return this.native.rowIntersectsSelection(row, parent.native);
    }
    selectedColumns(row = 0) {
        const methodResult = this.native.selectedColumns(row);
        return methodResult.map((item) => new QModelIndex_1.QModelIndex(item));
    }
    selectedIndexes() {
        const methodResult = this.native.selectedIndexes();
        return methodResult.map((item) => new QModelIndex_1.QModelIndex(item));
    }
    selectedRows(column = 0) {
        const methodResult = this.native.selectedRows(column);
        return methodResult.map((item) => new QModelIndex_1.QModelIndex(item));
    }
    // TODO: const QItemSelection 	selection() const
    // TODO: void 	setModel(QAbstractItemModel *model)
    // *** Public Slots ***
    clear() {
        this.native.clear();
    }
    clearCurrentIndex() {
        this.native.clearCurrentIndex();
    }
    clearSelection() {
        this.native.clearSelection();
    }
    reset() {
        this.native.reset();
    }
    // TODO: virtual void 	select(const QItemSelection &selection, QItemSelectionModel::SelectionFlags command)
    select(index, command) {
        this.native.select(index.native, command);
    }
    setCurrentIndex(index, command) {
        this.native.setCurrentIndex(index.native, command);
    }
}
exports.QItemSelectionModel = QItemSelectionModel;
WrapperCache_1.wrapperCache.registerWrapper('QItemSelectionModelWrap', QItemSelectionModel);
var SelectionFlag;
(function (SelectionFlag) {
    SelectionFlag[SelectionFlag["NoUpdate"] = 0] = "NoUpdate";
    SelectionFlag[SelectionFlag["Clear"] = 1] = "Clear";
    SelectionFlag[SelectionFlag["Select"] = 2] = "Select";
    SelectionFlag[SelectionFlag["Deselect"] = 4] = "Deselect";
    SelectionFlag[SelectionFlag["Toggle"] = 8] = "Toggle";
    SelectionFlag[SelectionFlag["Current"] = 16] = "Current";
    SelectionFlag[SelectionFlag["Rows"] = 32] = "Rows";
    SelectionFlag[SelectionFlag["Columns"] = 64] = "Columns";
    SelectionFlag[SelectionFlag["SelectCurrent"] = 18] = "SelectCurrent";
    SelectionFlag[SelectionFlag["ToggleCurrent"] = 24] = "ToggleCurrent";
    SelectionFlag[SelectionFlag["ClearAndSelect"] = 3] = "ClearAndSelect";
})(SelectionFlag = exports.SelectionFlag || (exports.SelectionFlag = {}));
