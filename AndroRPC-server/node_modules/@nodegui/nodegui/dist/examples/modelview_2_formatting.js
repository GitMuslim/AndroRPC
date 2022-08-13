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
        return 3;
    }
    data(index, role = __1.ItemDataRole.DisplayRole) {
        const row = index.row();
        const col = index.column();
        // generate a log message when this method gets called
        console.log(`row ${row}, col ${col}, role ${role}`);
        switch (role) {
            case __1.ItemDataRole.DisplayRole:
                if (row == 0 && col == 1) {
                    return new __1.QVariant('<--left');
                }
                if (row == 1 && col == 1) {
                    return new __1.QVariant('right-->');
                }
                return new __1.QVariant(`Row${row + 1}, Column${col + 1}`);
            case __1.ItemDataRole.FontRole:
                if (row == 0 && col == 0) {
                    // change font only for cell(0,0)
                    const boldFont = new __1.QFont();
                    boldFont.setBold(true);
                    return new __1.QVariant(boldFont.native);
                }
                break;
            case __1.ItemDataRole.BackgroundRole:
                if (row == 1 && col == 2) {
                    //change background only for cell(1,2)
                    return new __1.QVariant(new __1.QBrush(__1.GlobalColor.red).native);
                }
                break;
            case __1.ItemDataRole.TextAlignmentRole:
                if (row == 1 && col == 1) {
                    // change text alignment only for cell(1,1)
                    return new __1.QVariant(__1.AlignmentFlag.AlignRight | __1.AlignmentFlag.AlignVCenter);
                }
                break;
            case __1.ItemDataRole.CheckStateRole:
                if (row == 1 && col == 0) {
                    // add a checkbox to cell(1,0)
                    return new __1.QVariant(__1.CheckState.Checked);
                }
                break;
        }
        return new __1.QVariant();
    }
}
main();
