"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInteractionFlag = void 0;
var TextInteractionFlag;
(function (TextInteractionFlag) {
    TextInteractionFlag[TextInteractionFlag["NoTextInteraction"] = 0] = "NoTextInteraction";
    TextInteractionFlag[TextInteractionFlag["TextSelectableByMouse"] = 1] = "TextSelectableByMouse";
    TextInteractionFlag[TextInteractionFlag["TextSelectableByKeyboard"] = 2] = "TextSelectableByKeyboard";
    TextInteractionFlag[TextInteractionFlag["LinksAccessibleByMouse"] = 4] = "LinksAccessibleByMouse";
    TextInteractionFlag[TextInteractionFlag["LinksAccessibleByKeyboard"] = 8] = "LinksAccessibleByKeyboard";
    TextInteractionFlag[TextInteractionFlag["TextEditable"] = 16] = "TextEditable";
    TextInteractionFlag[TextInteractionFlag["TextEditorInteraction"] = 19] = "TextEditorInteraction";
    TextInteractionFlag[TextInteractionFlag["TextBrowserInteraction"] = 13] = "TextBrowserInteraction";
})(TextInteractionFlag = exports.TextInteractionFlag || (exports.TextInteractionFlag = {}));
