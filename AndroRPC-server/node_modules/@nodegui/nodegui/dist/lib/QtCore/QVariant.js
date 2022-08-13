"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QVariant = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
class QVariant extends Component_1.Component {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg) && arg instanceof addon_1.default.QVariant) {
            native = arg;
        }
        else if (arg) {
            native = new addon_1.default.QVariant.convertToQVariant(arg);
        }
        else {
            native = new addon_1.default.QVariant();
        }
        super(native);
    }
    toString() {
        return this.native.toString();
    }
    toInt() {
        return this.native.toInt();
    }
    toDouble() {
        return this.native.toDouble();
    }
    toBool() {
        return this.native.toBool();
    }
    toStringList() {
        return this.native.toStringList();
    }
}
exports.QVariant = QVariant;
