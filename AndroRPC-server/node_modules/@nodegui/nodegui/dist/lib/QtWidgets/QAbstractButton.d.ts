import { QWidget, QWidgetSignals } from './QWidget';
import { QIcon } from '../QtGui/QIcon';
import { QSize } from '../QtCore/QSize';
import { QKeySequence } from '../QtGui/QKeySequence';
/**

> This is the abstract base class of button widgets, providing their functionality.

* **This class is a JS wrapper around Qt's [QAbstractButton class](https://doc.qt.io/qt-5/qabstractbutton.html)**

The QAbstractButton class is an abstract class and therefore, technically, no further instances actually have to be created.
It is inherited by QCheckBox, QPushButton, QRadioButton, and QToolButton.

 */
export declare abstract class QAbstractButton<Signals extends QAbstractButtonSignals> extends QWidget<Signals> {
    animateClick(msec: number): void;
    click(): void;
    toggle(): void;
    setAutoExclusive(enable: boolean): void;
    autoExclusive(): boolean;
    setAutoRepeat(enable: boolean): void;
    autoRepeat(): boolean;
    setAutoRepeatDelay(delay: number): void;
    autoRepeatDelay(): number;
    setAutoRepeatInterval(interval: number): void;
    autoRepeatInterval(): number;
    setCheckable(checkable: boolean): void;
    isCheckable(): boolean;
    setChecked(checked: boolean): void;
    isChecked(): boolean;
    setDown(down: boolean): void;
    isDown(): boolean;
    setIcon(icon: QIcon): void;
    icon(): QIcon;
    setIconSize(iconSize: QSize): void;
    iconSize(): QSize;
    setShortcut(key: QKeySequence): void;
    shortcut(): QKeySequence;
    setText(text: string): void;
    text(): string;
}
export interface QAbstractButtonSignals extends QWidgetSignals {
    clicked: (checked: boolean) => void;
    pressed: () => void;
    released: () => void;
    toggled: (checked: boolean) => void;
}
