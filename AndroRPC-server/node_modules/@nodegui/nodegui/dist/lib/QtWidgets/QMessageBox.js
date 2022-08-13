"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QMessageBoxIcon = exports.QMessageBox = exports.ButtonRole = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDialog_1 = require("./QDialog");
const WrapperCache_1 = require("../core/WrapperCache");
const helpers_1 = require("../utils/helpers");
var ButtonRole;
(function (ButtonRole) {
    ButtonRole[ButtonRole["InvalidRole"] = 0] = "InvalidRole";
    ButtonRole[ButtonRole["AcceptRole"] = 1] = "AcceptRole";
    ButtonRole[ButtonRole["RejectRole"] = 2] = "RejectRole";
    ButtonRole[ButtonRole["DestructiveRole"] = 3] = "DestructiveRole";
    ButtonRole[ButtonRole["ActionRole"] = 4] = "ActionRole";
    ButtonRole[ButtonRole["HelpRole"] = 5] = "HelpRole";
    ButtonRole[ButtonRole["YesRole"] = 6] = "YesRole";
    ButtonRole[ButtonRole["NoRole"] = 7] = "NoRole";
    ButtonRole[ButtonRole["ApplyRole"] = 8] = "ApplyRole";
    ButtonRole[ButtonRole["ResetRole"] = 9] = "ResetRole";
})(ButtonRole = exports.ButtonRole || (exports.ButtonRole = {}));
/**

> Create and control classic modal dialogs.

* **This class is a JS wrapper around Qt's [QMessageBox class](https://doc.qt.io/qt-5/qmessagebox.html)**

### Example

```javascript

import { QMessageBox, ButtonRole, QPushButton } from '@nodegui/nodegui';

const messageBox = new QMessageBox();
messageBox.setText('Alert! This is a message');
const accept = new QPushButton();
accept.setText('Accept');
messageBox.addButton(accept, ButtonRole.AcceptRole);
messageBox.exec();

```
 */
class QMessageBox extends QDialog_1.QDialog {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QMessageBox(parent.native);
        }
        else {
            native = new addon_1.default.QMessageBox();
        }
        super(native);
    }
    accept() {
        this.native.accept();
    }
    done(r) {
        this.native.done(r);
    }
    setText(text) {
        this.native.setProperty('text', text);
    }
    text() {
        return this.property('text').toString();
    }
    setInformativeText(informativeText) {
        this.native.setProperty('informativeText', informativeText);
    }
    setDetailedText(detailedText) {
        this.native.setProperty('detailedText', detailedText);
    }
    detailedText() {
        return this.property('detailedText').toString();
    }
    setDefaultButton(button) {
        this.native.setDefaultButton(button);
    }
    addButton(button, role = ButtonRole.NoRole) {
        this.native.addButton(button.native, role);
    }
    static about(parent, title, text) {
        addon_1.default.QMessageBox.about(parent.native, title, text);
    }
    static aboutQt(parent, title) {
        addon_1.default.QMessageBox.aboutQt(parent.native, title);
    }
}
exports.QMessageBox = QMessageBox;
WrapperCache_1.wrapperCache.registerWrapper('QMessageBoxWrap', QMessageBox);
var QMessageBoxIcon;
(function (QMessageBoxIcon) {
    QMessageBoxIcon[QMessageBoxIcon["NoIcon"] = 0] = "NoIcon";
    QMessageBoxIcon[QMessageBoxIcon["Question"] = 4] = "Question";
    QMessageBoxIcon[QMessageBoxIcon["Information"] = 1] = "Information";
    QMessageBoxIcon[QMessageBoxIcon["Warning"] = 2] = "Warning";
    QMessageBoxIcon[QMessageBoxIcon["Critical"] = 3] = "Critical";
})(QMessageBoxIcon = exports.QMessageBoxIcon || (exports.QMessageBoxIcon = {}));
