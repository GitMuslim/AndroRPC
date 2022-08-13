import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QDialog, QDialogSignals } from './QDialog';
import { QColor } from '../QtGui/QColor';
/**

> Create and control color dialogs.

* **This class is a JS wrapper around Qt's [QColorDialog class](https://doc.qt.io/qt-5/qcolordialog.html)**

The `QColorDialog` class provides a dialog widget for specifying colors.

### Example

```javascript
const { QColorDialog, QColor } = require("@nodegui/nodegui");

const colorDialog = new QColorDialog();
colorDialog.setCurrentColor(new QColor('black'));
colorDialog.exec();

const color = dialog.currentColor();
console.log(color.red(), color.green(), color.blue());

```
 */
export declare class QColorDialog extends QDialog<QColorDialogSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setCurrentColor(color: QColor): void;
    currentColor(): QColor;
    setOptions(options: ColorDialogOption): void;
    options(): ColorDialogOption;
    selectedColor(): QColor;
    setOption(option: ColorDialogOption, on?: boolean): void;
    testOption(option: ColorDialogOption): boolean;
    static customColor(index: number): QColor;
    static customCount(): number;
    static setCustomColor(index: number, color: QColor): void;
    static setStandardColor(index: number, color: QColor): void;
    static standardColor(index: number): QColor;
}
export declare enum ColorDialogOption {
    ShowAlphaChannel = 1,
    NoButtons = 2,
    DontUseNativeDialog = 4
}
export interface QColorDialogSignals extends QDialogSignals {
    colorSelected: (color: QColor) => void;
    currentColorChanged: (color: QColor) => void;
}
