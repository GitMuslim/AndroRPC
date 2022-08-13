"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFlag = void 0;
var TextFlag;
(function (TextFlag) {
    TextFlag[TextFlag["None"] = 0] = "None";
    TextFlag[TextFlag["TextSingleLine"] = 256] = "TextSingleLine";
    TextFlag[TextFlag["TextDontClip"] = 512] = "TextDontClip";
    TextFlag[TextFlag["TextExpandTabs"] = 1024] = "TextExpandTabs";
    TextFlag[TextFlag["TextShowMnemonic"] = 2048] = "TextShowMnemonic";
    TextFlag[TextFlag["TextWordWrap"] = 4096] = "TextWordWrap";
    TextFlag[TextFlag["TextWrapAnywhere"] = 8192] = "TextWrapAnywhere";
    TextFlag[TextFlag["TextHideMnemonic"] = 32768] = "TextHideMnemonic";
    TextFlag[TextFlag["TextDontPrint"] = 16384] = "TextDontPrint";
    TextFlag[TextFlag["TextIncludeTrailingSpaces"] = 134217728] = "TextIncludeTrailingSpaces";
    TextFlag[TextFlag["TextJustificationForced"] = 65536] = "TextJustificationForced";
})(TextFlag = exports.TextFlag || (exports.TextFlag = {}));
