import { QWidget, QWidgetSignals } from './QWidget';
import { AlignmentFlag } from '../QtEnums';
/**

> This is the abstract base class of button widgets, providing their functionality.

* **This class is a JS wrapper around Qt's [QAbstractSpinBox class](https://doc.qt.io/qt-5/qabstractspinbox.html)**

The QAbstractSpinBox class is an abstract class and therefore, technically, no further instances actually have to be created.
It is inherited by QDateTimeEdit and QSpinBox. (n/a QDoubleSpinBox)

 */
export declare abstract class QAbstractSpinBox<Signals extends QAbstractSpinBoxSignals> extends QWidget<Signals> {
    selectAll(): void;
    stepDown(): void;
    stepUp(): void;
    setAccelerated(on: boolean): void;
    isAccelerated(): boolean;
    hasAcceptableInput(): boolean;
    setAlignment(alignment: AlignmentFlag): void;
    alignment(): AlignmentFlag;
    setButtonSymbols(bs: ButtonSymbols): void;
    buttonSymbols(): ButtonSymbols;
    setCorrectionMode(cm: CorrectionMode): void;
    correctionMode(): CorrectionMode;
    setFrame(enable: boolean): void;
    hasFrame(): boolean;
    setKeyboardTracking(kt: boolean): void;
    keyboardTracking(): boolean;
    setReadOnly(r: boolean): void;
    isReadOnly(): boolean;
    setGroupSeparatorShown(shown: boolean): void;
    isGroupSeparatorShown(): boolean;
    setSpecialValueText(txt: string): void;
    specialValueText(): string;
    text(): string;
    setWrapping(w: boolean): void;
    wrapping(): boolean;
}
export declare enum ButtonSymbols {
    UpDownArrows = 0,
    PlusMinus = 1,
    NoButtons = 2
}
export declare enum CorrectionMode {
    CorrectToPreviousValue = 0,
    CorrectToNearestValue = 1
}
export declare enum StepType {
    DefaultStepType = 0,
    AdaptiveDecimalStepType = 1
}
export interface QAbstractSpinBoxSignals extends QWidgetSignals {
    editingFinished: () => void;
}
