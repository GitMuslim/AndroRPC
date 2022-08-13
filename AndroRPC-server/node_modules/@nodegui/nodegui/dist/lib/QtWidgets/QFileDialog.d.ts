import { QWidget } from './QWidget';
import { AcceptMode, DialogLabel, FileMode, Option, ViewMode } from '../QtEnums';
import { QDialog, QDialogSignals } from './QDialog';
/**

> Create and control file dialogs.

* **This class is a JS wrapper around Qt's [QFileDialog class](https://doc.qt.io/qt-5/qfiledialog.html)**

A `QFileDialog` class provides a dialog that allow users to select files or directories.

### Example

```javascript
const { QFileDialog } = require("@nodegui/nodegui");

const fileDialog = new QFileDialog();
fileDialog.setFileMode(FileMode.AnyFile);
fileDialog.setNameFilter('Images (*.png *.xpm *.jpg)');
fileDialog.exec();

const selectedFiles = fileDialog.selectedFiles();
console.log(selectedFiles);

```
 */
export declare class QFileDialog extends QDialog<QFileDialogSignals> {
    constructor();
    constructor(parent: QWidget, caption?: string, directory?: string, filter?: string);
    supportedSchemes(): string[];
    setSupportedSchemes(schemes: string[]): void;
    setNameFilter(filter: string): void;
    selectedFiles(): string[];
    labelText(label: DialogLabel): string;
    setLabelText(label: DialogLabel, text: string): void;
    setOption(option: Option, on?: boolean): void;
    acceptMode(): AcceptMode;
    defaultSuffix(): string;
    fileMode(): FileMode;
    options(): Option;
    viewMode(): ViewMode;
    setAcceptMode(acceptMode: AcceptMode): void;
    setDefaultSuffix(defaultSuffix: string): void;
    setFileMode(fileMode: FileMode): void;
    setOptions(options: Option): void;
}
export interface QFileDialogSignals extends QDialogSignals {
    currentChanged: (path: string) => void;
    currentUrlChanged: (url: string) => void;
    directoryEntered: (directory: string) => void;
    directoryUrlEntered: (url: string) => void;
    fileSelected: (file: string) => void;
    filesSelected: (selected: string[]) => void;
    filterSelected: (filter: string) => void;
    urlSelected: (url: string) => void;
    urlsSelected: (urls: string[]) => void;
}
