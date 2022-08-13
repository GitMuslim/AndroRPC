"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QStyleFactory = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QStyle_1 = require("../QtGui/QStyle");
class QStyleFactory {
    static create(key) {
        const qstyle = addon_1.default.QStyleFactory_create(key);
        if (qstyle == null) {
            return null;
        }
        return new QStyle_1.QStyle(qstyle);
    }
    static keys() {
        return addon_1.default.QStyleFactory_keys();
    }
}
exports.QStyleFactory = QStyleFactory;
