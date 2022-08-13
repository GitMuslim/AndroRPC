"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepType = exports.CorrectionMode = exports.ButtonSymbols = exports.QAbstractSpinBox = void 0;
const QWidget_1 = require("./QWidget");
/**

> This is the abstract base class of button widgets, providing their functionality.

* **This class is a JS wrapper around Qt's [QAbstractSpinBox class](https://doc.qt.io/qt-5/qabstractspinbox.html)**

The QAbstractSpinBox class is an abstract class and therefore, technically, no further instances actually have to be created.
It is inherited by QDateTimeEdit and QSpinBox. (n/a QDoubleSpinBox)

 */
class QAbstractSpinBox extends QWidget_1.QWidget {
    selectAll() {
        this.native.selectAll();
    }
    stepDown() {
        this.native.stepDown();
    }
    stepUp() {
        this.native.stepUp();
    }
    setAccelerated(on) {
        this.setProperty('accelerated', on);
    }
    isAccelerated() {
        return this.property('accelerated').toBool();
    }
    hasAcceptableInput() {
        return this.property('acceptableInput').toBool();
    }
    setAlignment(alignment) {
        this.setProperty('alignment', alignment);
    }
    alignment() {
        return this.property('alignment').toInt();
    }
    setButtonSymbols(bs) {
        this.setProperty('buttonSymbols', bs);
    }
    buttonSymbols() {
        return this.property('buttonSymbols').toInt();
    }
    setCorrectionMode(cm) {
        this.setProperty('correctionMode', cm);
    }
    correctionMode() {
        return this.property('correctionMode').toInt();
    }
    setFrame(enable) {
        this.setProperty('frame', enable);
    }
    hasFrame() {
        return this.property('frame').toBool();
    }
    setKeyboardTracking(kt) {
        this.setProperty('keyboardTracking', kt);
    }
    keyboardTracking() {
        return this.property('keyboardTracking').toBool();
    }
    setReadOnly(r) {
        this.setProperty('readOnly', r);
    }
    isReadOnly() {
        return this.property('readOnly').toBool();
    }
    setGroupSeparatorShown(shown) {
        this.setProperty('showGroupSeparator', shown);
    }
    isGroupSeparatorShown() {
        return this.property('showGroupSeparator').toBool();
    }
    setSpecialValueText(txt) {
        this.setProperty('specialValueText', txt);
    }
    specialValueText() {
        return this.property('specialValueText').toString();
    }
    text() {
        return this.property('text').toString();
    }
    setWrapping(w) {
        this.setProperty('wrapping', w);
    }
    wrapping() {
        return this.property('wrapping').toBool();
    }
}
exports.QAbstractSpinBox = QAbstractSpinBox;
var ButtonSymbols;
(function (ButtonSymbols) {
    ButtonSymbols[ButtonSymbols["UpDownArrows"] = 0] = "UpDownArrows";
    ButtonSymbols[ButtonSymbols["PlusMinus"] = 1] = "PlusMinus";
    ButtonSymbols[ButtonSymbols["NoButtons"] = 2] = "NoButtons";
})(ButtonSymbols = exports.ButtonSymbols || (exports.ButtonSymbols = {}));
var CorrectionMode;
(function (CorrectionMode) {
    CorrectionMode[CorrectionMode["CorrectToPreviousValue"] = 0] = "CorrectToPreviousValue";
    CorrectionMode[CorrectionMode["CorrectToNearestValue"] = 1] = "CorrectToNearestValue";
})(CorrectionMode = exports.CorrectionMode || (exports.CorrectionMode = {}));
var StepType;
(function (StepType) {
    StepType[StepType["DefaultStepType"] = 0] = "DefaultStepType";
    StepType[StepType["AdaptiveDecimalStepType"] = 1] = "AdaptiveDecimalStepType";
})(StepType = exports.StepType || (exports.StepType = {}));
