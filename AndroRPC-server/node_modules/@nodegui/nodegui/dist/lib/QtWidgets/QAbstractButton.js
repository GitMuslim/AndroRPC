"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAbstractButton = void 0;
const QWidget_1 = require("./QWidget");
const QIcon_1 = require("../QtGui/QIcon");
const QSize_1 = require("../QtCore/QSize");
const QKeySequence_1 = require("../QtGui/QKeySequence");
/**

> This is the abstract base class of button widgets, providing their functionality.

* **This class is a JS wrapper around Qt's [QAbstractButton class](https://doc.qt.io/qt-5/qabstractbutton.html)**

The QAbstractButton class is an abstract class and therefore, technically, no further instances actually have to be created.
It is inherited by QCheckBox, QPushButton, QRadioButton, and QToolButton.

 */
class QAbstractButton extends QWidget_1.QWidget {
    animateClick(msec) {
        this.native.animateClick(msec);
    }
    click() {
        this.native.click();
    }
    toggle() {
        this.native.toggle();
    }
    setAutoExclusive(enable) {
        this.setProperty('autoExclusive', enable);
    }
    autoExclusive() {
        return this.property('autoExclusive').toBool();
    }
    setAutoRepeat(enable) {
        this.setProperty('autoRepeat', enable);
    }
    autoRepeat() {
        return this.property('autoRepeat').toBool();
    }
    setAutoRepeatDelay(delay) {
        this.setProperty('autoRepeatDelay', delay);
    }
    autoRepeatDelay() {
        return this.property('autoRepeatDelay').toInt();
    }
    setAutoRepeatInterval(interval) {
        this.setProperty('autoRepeatInterval', interval);
    }
    autoRepeatInterval() {
        return this.property('autoRepeatInterval').toInt();
    }
    setCheckable(checkable) {
        this.setProperty('checkable', checkable);
    }
    isCheckable() {
        return this.property('checkable').toBool();
    }
    setChecked(checked) {
        this.setProperty('checked', checked);
    }
    isChecked() {
        return this.property('checked').toBool();
    }
    setDown(down) {
        this.setProperty('down', down);
    }
    isDown() {
        return this.property('down').toBool();
    }
    setIcon(icon) {
        this.setProperty('icon', icon.native);
    }
    icon() {
        const icon = this.property('icon');
        return QIcon_1.QIcon.fromQVariant(icon);
    }
    setIconSize(iconSize) {
        this.setProperty('iconSize', iconSize.native);
    }
    iconSize() {
        const iconSize = this.property('iconSize');
        return QSize_1.QSize.fromQVariant(iconSize);
    }
    setShortcut(key) {
        this.setProperty('shortcut', key.native);
    }
    shortcut() {
        const key = this.property('shortcut');
        return QKeySequence_1.QKeySequence.fromQVariant(key);
    }
    setText(text) {
        this.setProperty('text', text);
    }
    text() {
        return this.property('text').toString();
    }
}
exports.QAbstractButton = QAbstractButton;
