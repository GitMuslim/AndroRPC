"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMethodQuery = void 0;
var InputMethodQuery;
(function (InputMethodQuery) {
    InputMethodQuery[InputMethodQuery["ImEnabled"] = 1] = "ImEnabled";
    InputMethodQuery[InputMethodQuery["ImMicroFocus"] = 2] = "ImMicroFocus";
    InputMethodQuery[InputMethodQuery["ImCursorRectangle"] = 2] = "ImCursorRectangle";
    InputMethodQuery[InputMethodQuery["ImFont"] = 4] = "ImFont";
    InputMethodQuery[InputMethodQuery["ImCursorPosition"] = 8] = "ImCursorPosition";
    InputMethodQuery[InputMethodQuery["ImSurroundingText"] = 16] = "ImSurroundingText";
    InputMethodQuery[InputMethodQuery["ImCurrentSelection"] = 32] = "ImCurrentSelection";
    InputMethodQuery[InputMethodQuery["ImMaximumTextLength"] = 64] = "ImMaximumTextLength";
    InputMethodQuery[InputMethodQuery["ImAnchorPosition"] = 128] = "ImAnchorPosition";
    InputMethodQuery[InputMethodQuery["ImHints"] = 256] = "ImHints";
    InputMethodQuery[InputMethodQuery["ImPreferredLanguage"] = 512] = "ImPreferredLanguage";
    InputMethodQuery[InputMethodQuery["ImPlatformData"] = 2147483648] = "ImPlatformData";
    InputMethodQuery[InputMethodQuery["ImAbsolutePosition"] = 1024] = "ImAbsolutePosition";
    InputMethodQuery[InputMethodQuery["ImTextBeforeCursor"] = 2048] = "ImTextBeforeCursor";
    InputMethodQuery[InputMethodQuery["ImTextAfterCursor"] = 4096] = "ImTextAfterCursor";
    InputMethodQuery[InputMethodQuery["ImEnterKeyType"] = 8192] = "ImEnterKeyType";
    InputMethodQuery[InputMethodQuery["ImAnchorRectangle"] = 16384] = "ImAnchorRectangle";
    InputMethodQuery[InputMethodQuery["ImInputItemClipRectangle"] = 32768] = "ImInputItemClipRectangle";
    //Masks:
    InputMethodQuery[InputMethodQuery["ImQueryAll"] = 4294967295] = "ImQueryAll";
})(InputMethodQuery = exports.InputMethodQuery || (exports.InputMethodQuery = {}));
