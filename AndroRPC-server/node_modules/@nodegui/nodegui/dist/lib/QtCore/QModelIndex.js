"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QModelIndex = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const QVariant_1 = require("./QVariant");
const helpers_1 = require("../utils/helpers");
const ItemDataRole_1 = require("../QtEnums/ItemDataRole");
class QModelIndex extends Component_1.Component {
    constructor(arg) {
        let native;
        if (!arg) {
            native = new addon_1.default.QModelIndex();
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            throw new Error('QModelIndex cannot be initialised this way.');
        }
        super(native);
    }
    column() {
        return this.native.column();
    }
    data(role = ItemDataRole_1.ItemDataRole.DisplayRole) {
        return new QVariant_1.QVariant(this.native.data(role));
    }
    flags() {
        return this.native.flags();
    }
    isValid() {
        return this.native.isValid();
    }
    parent() {
        return new QModelIndex(this.native.parent());
    }
    row() {
        return this.native.row();
    }
    sibling(row, column) {
        return new QModelIndex(this.native.sibling(row, column));
    }
    siblingAtColumn(column) {
        return new QModelIndex(this.native.siblingAtColumn(column));
    }
    siblingAtRow(row) {
        return new QModelIndex(this.native.siblingAtRow(row));
    }
    static fromQVariant(variant) {
        return new QModelIndex(addon_1.default.QModelIndex.fromQVariant(variant.native));
    }
}
exports.QModelIndex = QModelIndex;
