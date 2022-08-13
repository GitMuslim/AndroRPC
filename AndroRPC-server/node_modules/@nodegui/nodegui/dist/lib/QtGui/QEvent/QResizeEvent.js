"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QResizeEvent = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
const QEvent_1 = require("./QEvent");
const QSize_1 = require("../../QtCore/QSize");
class QResizeEvent extends QEvent_1.QEvent {
    constructor(event) {
        super(new addon_1.default.QResizeEvent(event));
    }
    oldSize() {
        return new QSize_1.QSize(this.native.oldSize());
    }
    size() {
        return new QSize_1.QSize(this.native.size());
    }
}
exports.QResizeEvent = QResizeEvent;
