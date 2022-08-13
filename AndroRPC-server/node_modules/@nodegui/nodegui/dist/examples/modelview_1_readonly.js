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
class MyModel extends __1.QAbstractTableModel {
    rowCount(parent = new __1.QModelIndex()) {
        return 2;
    }
    columnCount(parent = new __1.QModelIndex()) {
        return 2;
    }
    data(index, role = __1.ItemDataRole.DisplayRole) {
        if (role === __1.ItemDataRole.DisplayRole) {
            return new __1.QVariant(`Row${index.row() + 1}, Column${index.column() + 1}`);
        }
        return new __1.QVariant();
    }
}
main();
