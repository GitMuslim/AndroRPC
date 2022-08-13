"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDragLeaveEvent = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
const QEvent_1 = require("./QEvent");
class QDragLeaveEvent extends QEvent_1.QEvent {
    constructor(event) {
        super(new addon_1.default.QDragLeaveEvent(event));
    }
}
exports.QDragLeaveEvent = QDragLeaveEvent;
