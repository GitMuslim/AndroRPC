"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QStandardItemModel = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QObject_1 = require("../QtCore/QObject");
const QStandardItem_1 = require("./QStandardItem");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
class QStandardItemModel extends QObject_1.QObject {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QStandardItemModel(parent.native);
        }
        else {
            native = new addon_1.default.QStandardItemModel();
        }
        super(native);
    }
    item(row, column = 0) {
        const item = this.native.item(row, column);
        if (item) {
            return new QStandardItem_1.QStandardItem(item);
        }
        else {
            return undefined;
        }
    }
}
exports.QStandardItemModel = QStandardItemModel;
WrapperCache_1.wrapperCache.registerWrapper('QStandardItemModelWrap', QStandardItemModel);
