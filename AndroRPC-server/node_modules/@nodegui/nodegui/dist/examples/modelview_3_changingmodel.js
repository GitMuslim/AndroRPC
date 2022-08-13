"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
function main() {
    const tableView = new __1.QTableView();
    const model = new MyModel();
    tableView.setModel(model);
    tableView.show();
    setInterval(() => {
        model.timerHit();
    }, 1000);
    global.win = tableView;
}
class MyModel extends __1.QAbstractTableModel {
    rowCount(parent = new __1.QModelIndex()) {
        return 2;
    }
    columnCount(parent = new __1.QModelIndex()) {
        return 3;
    }
    data(index, role = __1.ItemDataRole.DisplayRole) {
        const row = index.row();
        const col = index.column();
        if (role == __1.ItemDataRole.DisplayRole && row == 0 && col == 0) {
            return new __1.QVariant('' + new Date().toTimeString());
        }
        return new __1.QVariant();
    }
    timerHit() {
        const topLeft = this.createIndex(0, 0);
        this.emitDataChanged(topLeft, topLeft, [__1.ItemDataRole.DisplayRole]);
    }
}
main();
