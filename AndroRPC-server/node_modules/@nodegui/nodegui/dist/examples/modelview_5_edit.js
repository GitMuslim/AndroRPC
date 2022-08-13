"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
function main() {
    const tableView = new __1.QTableView();
    const model = new MyModel();
    tableView.setModel(model);
    tableView.show();
    global.win = tableView;
}
const ROWS = 2;
const COLS = 3;
class MyModel extends __1.QAbstractTableModel {
    constructor() {
        super();
        this._data = [];
        for (let row = 0; row < ROWS; row++) {
            this._data[row] = [];
            for (let col = 0; col < COLS; col++) {
                this._data[row][col] = '';
            }
        }
    }
    rowCount(parent = new __1.QModelIndex()) {
        return ROWS;
    }
    columnCount(parent = new __1.QModelIndex()) {
        return COLS;
    }
    data(index, role = __1.ItemDataRole.DisplayRole) {
        if (role == __1.ItemDataRole.DisplayRole && this.checkIndex(index)) {
            return new __1.QVariant(this._data[index.row()][index.column()]);
        }
        return new __1.QVariant();
    }
    flags(index) {
        return __1.ItemFlag.ItemIsEditable | super.flags(index);
    }
    setData(index, value, role) {
        if (role == __1.ItemDataRole.EditRole) {
            if (!this.checkIndex(index)) {
                return false;
            }
            //save value from editor to member m_gridData
            this._data[index.row()][index.column()] = value.toString();
            //for presentation purposes only: build and emit a joined string
            let result = '';
            for (let row = 0; row < ROWS; row++) {
                for (let col = 0; col < COLS; col++) {
                    result += this._data[row][col] + ' ';
                }
            }
            console.log(result);
            return true;
        }
        return false;
    }
}
main();
