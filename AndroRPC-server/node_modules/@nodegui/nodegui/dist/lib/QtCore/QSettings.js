"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QSettings = exports.QSettingsScope = exports.QSettingsFormat = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
var QSettingsFormat;
(function (QSettingsFormat) {
    QSettingsFormat[QSettingsFormat["NativeFormat"] = 0] = "NativeFormat";
    QSettingsFormat[QSettingsFormat["Registry32Format"] = 2] = "Registry32Format";
    QSettingsFormat[QSettingsFormat["Registry64Format"] = 3] = "Registry64Format";
    QSettingsFormat[QSettingsFormat["IniFormat"] = 1] = "IniFormat";
    QSettingsFormat[QSettingsFormat["InvalidFormat"] = 16] = "InvalidFormat";
})(QSettingsFormat = exports.QSettingsFormat || (exports.QSettingsFormat = {}));
var QSettingsScope;
(function (QSettingsScope) {
    QSettingsScope[QSettingsScope["UserScope"] = 0] = "UserScope";
    QSettingsScope[QSettingsScope["SystemScope"] = 1] = "SystemScope";
})(QSettingsScope = exports.QSettingsScope || (exports.QSettingsScope = {}));
class QSettings extends Component_1.Component {
    constructor(organization, application) {
        super(new addon_1.default.QSettings(organization, application));
    }
    sync() {
        this.native.sync();
    }
    setValue(key, value) {
        this.native.setValue(key, value);
    }
    value(key) {
        return this.native.value(key);
    }
}
exports.QSettings = QSettings;
