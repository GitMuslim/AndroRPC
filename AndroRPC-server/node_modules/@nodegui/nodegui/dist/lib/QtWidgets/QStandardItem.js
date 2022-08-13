"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QStandardItem = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
class QStandardItem extends Component_1.Component {
    constructor(parent, text) {
        let native;
        if (helpers_1.checkIfNativeElement(parent)) {
            native = parent;
        }
        else {
            if (text) {
                native = new addon_1.default.QStandardItem(text);
            }
            else {
                native = new addon_1.default.QStandardItem();
            }
        }
        super(native);
    }
    setCheckState(state) {
        this.native.setCheckState(state);
    }
    setFlags(flags) {
        this.native.setFlags(flags);
    }
    setData(value, role) {
        this.native.setData(value, role);
    }
    checkState() {
        return this.native.checkState();
    }
}
exports.QStandardItem = QStandardItem;
