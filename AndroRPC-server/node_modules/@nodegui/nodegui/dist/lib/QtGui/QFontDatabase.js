"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemFont = exports.QFontDatabase = exports.WritingSystem = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
var WritingSystem;
(function (WritingSystem) {
    WritingSystem[WritingSystem["Any"] = 0] = "Any";
    WritingSystem[WritingSystem["Latin"] = 1] = "Latin";
    WritingSystem[WritingSystem["Greek"] = 2] = "Greek";
    WritingSystem[WritingSystem["Cyrillic"] = 3] = "Cyrillic";
    WritingSystem[WritingSystem["Armenian"] = 4] = "Armenian";
    WritingSystem[WritingSystem["Hebrew"] = 5] = "Hebrew";
    WritingSystem[WritingSystem["Arabic"] = 6] = "Arabic";
    WritingSystem[WritingSystem["Syriac"] = 7] = "Syriac";
    WritingSystem[WritingSystem["Thaana"] = 8] = "Thaana";
    WritingSystem[WritingSystem["Devanagari"] = 9] = "Devanagari";
    WritingSystem[WritingSystem["Bengali"] = 10] = "Bengali";
    WritingSystem[WritingSystem["Gurmukhi"] = 11] = "Gurmukhi";
    WritingSystem[WritingSystem["Gujaratin"] = 12] = "Gujaratin";
    WritingSystem[WritingSystem["Oriya"] = 13] = "Oriya";
    WritingSystem[WritingSystem["Tamil"] = 14] = "Tamil";
    WritingSystem[WritingSystem["Telugu"] = 15] = "Telugu";
    WritingSystem[WritingSystem["Kannada"] = 16] = "Kannada";
    WritingSystem[WritingSystem["Malayalam"] = 17] = "Malayalam";
    WritingSystem[WritingSystem["Sinhala"] = 18] = "Sinhala";
    WritingSystem[WritingSystem["Thai"] = 19] = "Thai";
    WritingSystem[WritingSystem["Lao"] = 20] = "Lao";
    WritingSystem[WritingSystem["Tibetan"] = 21] = "Tibetan";
    WritingSystem[WritingSystem["Myanmar"] = 22] = "Myanmar";
    WritingSystem[WritingSystem["Georgian"] = 23] = "Georgian";
    WritingSystem[WritingSystem["Khmer"] = 24] = "Khmer";
    WritingSystem[WritingSystem["SimplifiedChinese"] = 25] = "SimplifiedChinese";
    WritingSystem[WritingSystem["TraditionalChinese"] = 26] = "TraditionalChinese";
    WritingSystem[WritingSystem["Japanese"] = 27] = "Japanese";
    WritingSystem[WritingSystem["Korean"] = 28] = "Korean";
    WritingSystem[WritingSystem["Vietnamese"] = 29] = "Vietnamese";
    WritingSystem[WritingSystem["Symbol"] = 30] = "Symbol";
    WritingSystem[WritingSystem["Other"] = 30] = "Other";
    WritingSystem[WritingSystem["Ogham"] = 31] = "Ogham";
    WritingSystem[WritingSystem["Runic"] = 32] = "Runic";
    WritingSystem[WritingSystem["Nko"] = 33] = "Nko";
})(WritingSystem = exports.WritingSystem || (exports.WritingSystem = {}));
class QFontDatabase extends Component_1.Component {
    constructor() {
        super(new addon_1.default.QFontDatabase());
    }
    families(ws = WritingSystem.Any) {
        return this.native.families(ws);
    }
    bold(family, style) {
        return this.native.bold(family, style);
    }
    isFixedPitch(family, style = null) {
        return this.native.isFixedPitch(family, style);
    }
    italic(family, style) {
        return this.native.italic(family, style);
    }
    styles(family) {
        return this.native.styles(family);
    }
    weight(family, style) {
        return this.native.weight(family, style);
    }
    static addApplicationFont(fileName) {
        return addon_1.default.QFontDatabase.addApplicationFont(fileName);
    }
    static applicationFontFamilies(id) {
        return addon_1.default.QFontDatabase.applicationFontFamilies(id);
    }
    static removeApplicationFont(id) {
        return addon_1.default.QFontDatabase.removeApplicationFont(id);
    }
}
exports.QFontDatabase = QFontDatabase;
var SystemFont;
(function (SystemFont) {
    SystemFont[SystemFont["GeneralFont"] = 0] = "GeneralFont";
    SystemFont[SystemFont["FixedFont"] = 1] = "FixedFont";
    SystemFont[SystemFont["TitleFont"] = 2] = "TitleFont";
    SystemFont[SystemFont["SmallestReadableFont"] = 3] = "SmallestReadableFont";
})(SystemFont = exports.SystemFont || (exports.SystemFont = {}));
