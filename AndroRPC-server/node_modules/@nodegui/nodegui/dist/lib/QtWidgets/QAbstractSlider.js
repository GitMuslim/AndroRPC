"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderAction = exports.QAbstractSlider = void 0;
const QWidget_1 = require("./QWidget");
/**

> Abstract class to add functionalities common to all slider based widgets.

**This class implements all methods, properties of Qt's [QAbstractSlider class](https://doc.qt.io/qt-5/qabstractslider.html) so that it can be inherited by all slider based widgets**

`QAbstractSlider` is an abstract class and hence no instances of the same should be created. It exists so that we can add similar functionalities to all slider widget's easily. If you wish to create a slider use [QDial](api/QDial.md) instead.

**QAbstractSlider is the base class for all slider widgets.**

QAbstractSlider will list all methods and properties that are common to all slider widgets in the NodeGui world.

 */
class QAbstractSlider extends QWidget_1.QWidget {
    triggerAction(action) {
        this.native.triggerAction(action);
    }
    setRange(min, max) {
        this.native.setRange(min, max);
    }
    setInvertedAppearance(inverted) {
        this.setProperty('invertedAppearance', inverted);
    }
    invertedAppearance() {
        return this.property('invertedAppearance').toBool();
    }
    setInvertedControls(inverted) {
        this.setProperty('invertedControls', inverted);
    }
    invertedControls() {
        return this.property('invertedControls').toBool();
    }
    setMaximum(maximum) {
        this.setProperty('maximum', maximum);
    }
    maximum() {
        return this.property('maximum').toInt();
    }
    setMinimum(minimum) {
        this.setProperty('minimum', minimum);
    }
    minimum() {
        return this.property('minimum').toInt();
    }
    setOrientation(orientation) {
        this.setProperty('orientation', orientation);
    }
    orientation() {
        return this.property('orientation').toInt();
    }
    setPageStep(step) {
        this.setProperty('pageStep', step);
    }
    pageStep() {
        return this.property('pageStep').toInt();
    }
    setSingleStep(step) {
        this.setProperty('singleStep', step);
    }
    singleStep() {
        return this.property('singleStep').toInt();
    }
    setSliderDown(down) {
        this.setProperty('sliderDown', down);
    }
    isSliderDown() {
        return this.property('sliderDown').toBool();
    }
    setSliderPosition(position) {
        this.setProperty('sliderPosition', position);
    }
    sliderPosition() {
        return this.property('sliderPosition').toInt();
    }
    setTracking(enable) {
        this.setProperty('tracking', enable);
    }
    hasTracking() {
        return this.property('tracking').toBool();
    }
    setValue(value) {
        this.setProperty('value', value);
    }
    value() {
        return this.property('value').toInt();
    }
}
exports.QAbstractSlider = QAbstractSlider;
var SliderAction;
(function (SliderAction) {
    SliderAction[SliderAction["SliderNoAction"] = 0] = "SliderNoAction";
    SliderAction[SliderAction["SliderSingleStepAdd"] = 1] = "SliderSingleStepAdd";
    SliderAction[SliderAction["SliderSingleStepSub"] = 2] = "SliderSingleStepSub";
    SliderAction[SliderAction["SliderPageStepAdd"] = 3] = "SliderPageStepAdd";
    SliderAction[SliderAction["SliderPageStepSub"] = 4] = "SliderPageStepSub";
    SliderAction[SliderAction["SliderToMinimum"] = 5] = "SliderToMinimum";
    SliderAction[SliderAction["SliderToMaximum"] = 6] = "SliderToMaximum";
    SliderAction[SliderAction["SliderMove"] = 7] = "SliderMove";
})(SliderAction = exports.SliderAction || (exports.SliderAction = {}));
