"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMethodHint = void 0;
var InputMethodHint;
(function (InputMethodHint) {
    InputMethodHint[InputMethodHint["ImhNone"] = 0] = "ImhNone";
    //Flags that alter the behavior
    InputMethodHint[InputMethodHint["ImhHiddenText"] = 1] = "ImhHiddenText";
    InputMethodHint[InputMethodHint["ImhSensitiveData"] = 2] = "ImhSensitiveData";
    InputMethodHint[InputMethodHint["ImhNoAutoUppercase"] = 4] = "ImhNoAutoUppercase";
    InputMethodHint[InputMethodHint["ImhPreferNumbers"] = 8] = "ImhPreferNumbers";
    InputMethodHint[InputMethodHint["ImhPreferUppercase"] = 16] = "ImhPreferUppercase";
    InputMethodHint[InputMethodHint["ImhPreferLowercase"] = 32] = "ImhPreferLowercase";
    InputMethodHint[InputMethodHint["ImhNoPredictiveText"] = 64] = "ImhNoPredictiveText";
    InputMethodHint[InputMethodHint["ImhDate"] = 128] = "ImhDate";
    InputMethodHint[InputMethodHint["ImhTime"] = 256] = "ImhTime";
    InputMethodHint[InputMethodHint["ImhPreferLatin"] = 512] = "ImhPreferLatin";
    InputMethodHint[InputMethodHint["ImhMultiLine"] = 1024] = "ImhMultiLine";
    InputMethodHint[InputMethodHint["ImhNoEditMenu"] = 2048] = "ImhNoEditMenu";
    InputMethodHint[InputMethodHint["ImhNoTextHandles"] = 4096] = "ImhNoTextHandles";
    //Flags that restrict input (exclusive flags)
    InputMethodHint[InputMethodHint["ImhDigitsOnly"] = 65536] = "ImhDigitsOnly";
    InputMethodHint[InputMethodHint["ImhFormattedNumbersOnly"] = 131072] = "ImhFormattedNumbersOnly";
    InputMethodHint[InputMethodHint["ImhUppercaseOnly"] = 262144] = "ImhUppercaseOnly";
    InputMethodHint[InputMethodHint["ImhLowercaseOnly"] = 524288] = "ImhLowercaseOnly";
    InputMethodHint[InputMethodHint["ImhDialableCharactersOnly"] = 1048576] = "ImhDialableCharactersOnly";
    InputMethodHint[InputMethodHint["ImhEmailCharactersOnly"] = 2097152] = "ImhEmailCharactersOnly";
    InputMethodHint[InputMethodHint["ImhUrlCharactersOnly"] = 4194304] = "ImhUrlCharactersOnly";
    InputMethodHint[InputMethodHint["ImhLatinOnly"] = 8388608] = "ImhLatinOnly";
    //Masks:
    InputMethodHint[InputMethodHint["ImhExclusiveInputMask"] = 4294901760] = "ImhExclusiveInputMask";
})(InputMethodHint = exports.InputMethodHint || (exports.InputMethodHint = {}));
