"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QButtonGroup = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QObject_1 = require("../QtCore/QObject");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
class QButtonGroup extends QObject_1.QObject {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QButtonGroup(parent.native);
        }
        else {
            native = new addon_1.default.QButtonGroup();
        }
        super(native);
    }
    addButton(button, id = -1) {
        this.native.addButton(button.native, id);
    }
    removeButton(button) {
        this.native.removeButton(button.native);
    }
    setExclusive(exculsive) {
        this.native.setProperty('exclusive', exculsive);
    }
    checkedId() {
        return this.native.checkedId();
    }
    exclusive() {
        return this.property('exclusive').toBool();
    }
    setId(button, id) {
        this.native.setId(button.native, id);
    }
    id(button) {
        return this.native.id(button.native);
    }
    buttons() {
        return this.native.buttons();
    }
    checkedButton() {
        return this.native.checkedButton();
    }
    button(id) {
        return this.native.button(id);
    }
}
exports.QButtonGroup = QButtonGroup;
WrapperCache_1.wrapperCache.registerWrapper('QButtonGroupWrap', QButtonGroup);
