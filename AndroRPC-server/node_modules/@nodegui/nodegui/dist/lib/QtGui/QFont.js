"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QFontWeight = exports.QFontCapitalization = exports.QFontStretch = exports.QFont = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
class QFont extends Component_1.Component {
    constructor(arg, pointSize = -1, weight = -1, italic = false) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg instanceof QFont) {
            native = arg.native;
        }
        else if (typeof arg === 'string') {
            native = new addon_1.default.QFont(arg, pointSize, weight, italic);
        }
        else {
            native = new addon_1.default.QFont();
        }
        super(native);
    }
    bold() {
        return this.native.bold();
    }
    setBold(enable) {
        this.native.setBold(enable);
    }
    setCapitalization(caps) {
        this.native.setCapitalization(caps);
    }
    capitalization() {
        return this.native.capitalization();
    }
    setFamily(family) {
        this.native.setFamily(family);
    }
    family() {
        return this.native.family();
    }
    setPixelSize(value) {
        this.native.setPixelSize(value);
    }
    setPointSize(value) {
        this.native.setPointSize(value);
    }
    pixelSize() {
        return this.native.pixelSize();
    }
    pointSize() {
        return this.native.pointSize();
    }
    setStretch(factor) {
        this.native.setStretch(factor);
    }
    stretch() {
        return this.native.stretch();
    }
    setWeight(weight) {
        this.native.setWeight(weight);
    }
    weight() {
        return this.native.weight();
    }
    setItalic(enable) {
        this.native.setItalic(enable);
    }
    italic() {
        return this.native.italic();
    }
    setStyleName(style) {
        this.native.setStyleName(style);
    }
    toString() {
        return this.native.toString();
    }
    static fromQVariant(variant) {
        return new QFont(addon_1.default.QFont.fromQVariant(variant.native));
    }
}
exports.QFont = QFont;
var QFontStretch;
(function (QFontStretch) {
    QFontStretch[QFontStretch["AnyStretch"] = 0] = "AnyStretch";
    QFontStretch[QFontStretch["UltraCondensed"] = 50] = "UltraCondensed";
    QFontStretch[QFontStretch["ExtraCondensed"] = 62] = "ExtraCondensed";
    QFontStretch[QFontStretch["Condensed"] = 75] = "Condensed";
    QFontStretch[QFontStretch["SemiCondensed"] = 87] = "SemiCondensed";
    QFontStretch[QFontStretch["Unstretched"] = 100] = "Unstretched";
    QFontStretch[QFontStretch["SemiExpanded"] = 112] = "SemiExpanded";
    QFontStretch[QFontStretch["Expanded"] = 125] = "Expanded";
    QFontStretch[QFontStretch["ExtraExpanded"] = 150] = "ExtraExpanded";
    QFontStretch[QFontStretch["UltraExpanded"] = 200] = "UltraExpanded";
})(QFontStretch = exports.QFontStretch || (exports.QFontStretch = {}));
var QFontCapitalization;
(function (QFontCapitalization) {
    QFontCapitalization[QFontCapitalization["MixedCase"] = 0] = "MixedCase";
    QFontCapitalization[QFontCapitalization["AllUppercase"] = 1] = "AllUppercase";
    QFontCapitalization[QFontCapitalization["AllLowercase"] = 2] = "AllLowercase";
    QFontCapitalization[QFontCapitalization["SmallCaps"] = 3] = "SmallCaps";
    QFontCapitalization[QFontCapitalization["Capitalize"] = 4] = "Capitalize";
})(QFontCapitalization = exports.QFontCapitalization || (exports.QFontCapitalization = {}));
var QFontWeight;
(function (QFontWeight) {
    QFontWeight[QFontWeight["Thin"] = 0] = "Thin";
    QFontWeight[QFontWeight["ExtraLight"] = 12] = "ExtraLight";
    QFontWeight[QFontWeight["Light"] = 25] = "Light";
    QFontWeight[QFontWeight["Normal"] = 50] = "Normal";
    QFontWeight[QFontWeight["Medium"] = 57] = "Medium";
    QFontWeight[QFontWeight["DemiBold"] = 63] = "DemiBold";
    QFontWeight[QFontWeight["Bold"] = 75] = "Bold";
    QFontWeight[QFontWeight["ExtraBold"] = 81] = "ExtraBold";
    QFontWeight[QFontWeight["Black"] = 87] = "Black";
})(QFontWeight = exports.QFontWeight || (exports.QFontWeight = {}));
