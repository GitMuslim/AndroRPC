"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDialog = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QWidget_1 = require("./QWidget");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> This is the base class of dialog windows.

* **This class is a JS wrapper around Qt's [QDialog class](https://doc.qt.io/qt-5/qdialog.html)**

It is inherited by QFileDialog and QMessageBox (n/a QColorDialog, QErrorMessage, QFontDialog, QInputDialog, QMessageBox, QProgressDialog, and QWizard)
 */
class QDialog extends QWidget_1.QWidget {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QDialog(parent.native);
        }
        else {
            native = new addon_1.default.QDialog();
        }
        super(native);
    }
    setResult(i) {
        this.native.setResult(i);
    }
    result() {
        return this.native.result();
    }
    setModal(modal) {
        this.setProperty('modal', modal);
    }
    setSizeGripEnabled(enabled) {
        this.setProperty('sizeGripEnabled', enabled);
    }
    isSizeGripEnabled() {
        return this.property('sizeGripEnabled').toBool();
    }
    accept() {
        this.native.accept();
    }
    done(r) {
        this.native.done(r);
    }
    exec() {
        return this.native.exec();
    }
    open() {
        this.native.open();
    }
    reject() {
        this.native.reject();
    }
}
exports.QDialog = QDialog;
WrapperCache_1.wrapperCache.registerWrapper('QDialogWrap', QDialog);
