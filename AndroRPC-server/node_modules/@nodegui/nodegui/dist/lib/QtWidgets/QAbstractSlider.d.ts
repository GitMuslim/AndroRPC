import { QWidget, QWidgetSignals } from './QWidget';
import { Orientation } from '../QtEnums';
/**

> Abstract class to add functionalities common to all slider based widgets.

**This class implements all methods, properties of Qt's [QAbstractSlider class](https://doc.qt.io/qt-5/qabstractslider.html) so that it can be inherited by all slider based widgets**

`QAbstractSlider` is an abstract class and hence no instances of the same should be created. It exists so that we can add similar functionalities to all slider widget's easily. If you wish to create a slider use [QDial](api/QDial.md) instead.

**QAbstractSlider is the base class for all slider widgets.**

QAbstractSlider will list all methods and properties that are common to all slider widgets in the NodeGui world.

 */
export declare abstract class QAbstractSlider<Signals extends QAbstractSliderSignals> extends QWidget<Signals> {
    triggerAction(action: SliderAction): void;
    setRange(min: number, max: number): void;
    setInvertedAppearance(inverted: boolean): void;
    invertedAppearance(): boolean;
    setInvertedControls(inverted: boolean): void;
    invertedControls(): boolean;
    setMaximum(maximum: number): void;
    maximum(): number;
    setMinimum(minimum: number): void;
    minimum(): number;
    setOrientation(orientation: Orientation): void;
    orientation(): Orientation;
    setPageStep(step: number): void;
    pageStep(): number;
    setSingleStep(step: number): void;
    singleStep(): number;
    setSliderDown(down: boolean): void;
    isSliderDown(): boolean;
    setSliderPosition(position: number): void;
    sliderPosition(): number;
    setTracking(enable: boolean): void;
    hasTracking(): boolean;
    setValue(value: number): void;
    value(): number;
}
export declare enum SliderAction {
    SliderNoAction = 0,
    SliderSingleStepAdd = 1,
    SliderSingleStepSub = 2,
    SliderPageStepAdd = 3,
    SliderPageStepSub = 4,
    SliderToMinimum = 5,
    SliderToMaximum = 6,
    SliderMove = 7
}
export interface QAbstractSliderSignals extends QWidgetSignals {
    actionTriggered: (action: number) => void;
    rangeChanged: (min: number, max: number) => void;
    sliderMoved: (value: number) => void;
    sliderPressed: () => void;
    sliderReleased: () => void;
    valueChanged: (value: number) => void;
}
