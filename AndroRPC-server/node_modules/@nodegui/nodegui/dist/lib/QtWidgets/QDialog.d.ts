import { NativeElement } from '../core/Component';
import { QWidget, QWidgetSignals } from './QWidget';
import { DialogCode } from '../QtEnums';
/**

> This is the base class of dialog windows.

* **This class is a JS wrapper around Qt's [QDialog class](https://doc.qt.io/qt-5/qdialog.html)**

It is inherited by QFileDialog and QMessageBox (n/a QColorDialog, QErrorMessage, QFontDialog, QInputDialog, QMessageBox, QProgressDialog, and QWizard)
 */
export declare class QDialog<Signals extends QDialogSignals = QDialogSignals> extends QWidget<Signals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setResult(i: number): void;
    result(): number;
    setModal(modal: boolean): void;
    setSizeGripEnabled(enabled: boolean): void;
    isSizeGripEnabled(): boolean;
    accept(): void;
    done(r: number): void;
    exec(): DialogCode;
    open(): void;
    reject(): void;
}
export interface QDialogSignals extends QWidgetSignals {
    accepted: () => void;
    finished: (result: number) => void;
    rejected: () => void;
}
