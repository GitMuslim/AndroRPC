"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormat = void 0;
var DateFormat;
(function (DateFormat) {
    DateFormat[DateFormat["TextDate"] = 0] = "TextDate";
    DateFormat[DateFormat["ISODate"] = 1] = "ISODate";
    DateFormat[DateFormat["ISODateWithMs"] = 9] = "ISODateWithMs";
    DateFormat[DateFormat["SystemLocaleShortDate"] = 4] = "SystemLocaleShortDate";
    DateFormat[DateFormat["SystemLocaleLongDate"] = 5] = "SystemLocaleLongDate";
    DateFormat[DateFormat["DefaultLocaleShortDate"] = 6] = "DefaultLocaleShortDate";
    DateFormat[DateFormat["DefaultLocaleLongDate"] = 7] = "DefaultLocaleLongDate";
    DateFormat[DateFormat["SystemLocaleDate"] = 2] = "SystemLocaleDate";
    DateFormat[DateFormat["LocaleDate"] = 3] = "LocaleDate";
    DateFormat[DateFormat["LocalDate"] = 2] = "LocalDate";
    DateFormat[DateFormat["RFC2822Date"] = 8] = "RFC2822Date";
})(DateFormat = exports.DateFormat || (exports.DateFormat = {}));
