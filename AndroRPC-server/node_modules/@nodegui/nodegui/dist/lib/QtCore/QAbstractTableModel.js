"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAbstractTableModel = void 0;
const QtEnums_1 = require("../QtEnums");
const QAbstractItemModel_1 = require("./QAbstractItemModel");
const QModelIndex_1 = require("./QModelIndex");
class QAbstractTableModel extends QAbstractItemModel_1.QAbstractItemModel {
    index(row, column, parent = new QModelIndex_1.QModelIndex()) {
        return this.hasIndex(row, column, parent) ? this.createIndex(row, column) : new QModelIndex_1.QModelIndex();
    }
    parentModelIndex(child) {
        return new QModelIndex_1.QModelIndex();
    }
    sibling(row, column, index) {
        return this.index(row, column);
    }
    hasChildren(parent) {
        if (!parent.isValid()) {
            return this.rowCount(parent) > 0 && this.columnCount(parent) > 0;
        }
        return false;
    }
    flags(index) {
        let f = super.flags(index);
        if (index.isValid()) {
            f |= QtEnums_1.ItemFlag.ItemNeverHasChildren;
        }
        return f;
    }
}
exports.QAbstractTableModel = QAbstractTableModel;
