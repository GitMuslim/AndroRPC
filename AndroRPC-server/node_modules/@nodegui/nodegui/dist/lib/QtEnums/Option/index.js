"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
var Option;
(function (Option) {
    Option[Option["ShowDirsOnly"] = 1] = "ShowDirsOnly";
    Option[Option["DontResolveSymlinks"] = 2] = "DontResolveSymlinks";
    Option[Option["DontConfirmOverwrite"] = 4] = "DontConfirmOverwrite";
    Option[Option["DontUseNativeDialog"] = 16] = "DontUseNativeDialog";
    Option[Option["ReadOnly"] = 32] = "ReadOnly";
    Option[Option["HideNameFilterDetails"] = 64] = "HideNameFilterDetails";
    Option[Option["DontUseSheet"] = 8] = "DontUseSheet";
    Option[Option["DontUseCustomDirectoryIcons"] = 128] = "DontUseCustomDirectoryIcons";
})(Option = exports.Option || (exports.Option = {}));
