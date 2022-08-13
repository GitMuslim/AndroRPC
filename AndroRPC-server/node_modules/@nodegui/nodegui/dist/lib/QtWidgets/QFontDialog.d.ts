import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QDialog, QDialogSignals } from './QDialog';
import { QFont } from '../QtGui/QFont';
/**

> Create and control font dialogs.

* **This class is a JS wrapper around Qt's [QFontDialog class](https://doc.qt.io/qt-5/qfontdialog.html)**

The `QFontDialog` class provides a dialog widget for selecting a font.

### Example

```javascript
const { QFontDialog } = require("@nodegui/nodegui");

const fontDialog = new QFontDialog();
fontDialog.exec();
const font = fontDialog.currentFont();
console.log(font);

```
 */
export declare class QFontDialog extends QDialog<QFontDialogSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setCurrentFont(font: QFont): void;
    currentFont(): QFont;
    setOptions(options: FontDialogOption): void;
    options(): FontDialogOption;
    selectedFont(): QFont;
    setOption(option: FontDialogOption, on?: boolean): void;
    testOption(option: FontDialogOption): boolean;
}
export declare enum FontDialogOption {
    NoButtons = 1,
    DontUseNativeDialog = 2,
    ScalableFonts = 4,
    NonScalableFonts = 8,
    MonospacedFonts = 16,
    ProportionalFonts = 32
}
export interface QFontDialogSignals extends QDialogSignals {
    fontSelected: (font: QFont) => void;
    currentFontChanged: (font: QFont) => void;
}
