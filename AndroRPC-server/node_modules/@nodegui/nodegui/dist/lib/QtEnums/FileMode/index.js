"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMode = void 0;
var FileMode;
(function (FileMode) {
    FileMode[FileMode["AnyFile"] = 0] = "AnyFile";
    FileMode[FileMode["ExistingFile"] = 1] = "ExistingFile";
    FileMode[FileMode["Directory"] = 2] = "Directory";
    FileMode[FileMode["ExistingFiles"] = 3] = "ExistingFiles";
})(FileMode = exports.FileMode || (exports.FileMode = {}));
