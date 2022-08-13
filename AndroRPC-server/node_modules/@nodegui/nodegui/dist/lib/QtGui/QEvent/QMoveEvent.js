"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QMoveEvent = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
const QEvent_1 = require("./QEvent");
const QPoint_1 = require("../../QtCore/QPoint");
class QMoveEvent extends QEvent_1.QEvent {
    constructor(event) {
        super(new addon_1.default.QMoveEvent(event));
    }
    oldPos() {
        return new QPoint_1.QPoint(this.native.oldPos());
    }
    pos() {
        return new QPoint_1.QPoint(this.native.pos());
    }
}
exports.QMoveEvent = QMoveEvent;
