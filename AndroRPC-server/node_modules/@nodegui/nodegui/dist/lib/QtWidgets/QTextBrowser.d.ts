import { QWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QUrl } from '../QtCore/QUrl';
import { QTextEdit, QTextEditSignals } from './QTextEdit';
/**

> Create and control text browser.

* **This class is a JS wrapper around Qt's [QTextBrowser class](https://doc.qt.io/qt-5/qtextbrowser.html)**

A `QTextBrowser` provides ability to add and manipulate native text browser widgets.

### Example

```javascript
const { QTextBrowser } = require("@nodegui/nodegui");

const textBrowser = new QTextBrowser();
```

 */
export declare class QTextBrowser extends QTextEdit<QTextBrowserSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    setOpenExternalLinks(open: boolean): void;
    openExternalLinks(): boolean;
    setOpenLinks(open: boolean): void;
    openLinks(): boolean;
    setSource(name: QUrl): void;
    source(): QUrl;
    backwardHistoryCount(): number;
    clearHistory(): void;
    forwardHistoryCount(): number;
    historyTitle(i: number): string;
    historyUrl(): QUrl;
    isBackwardAvailable(): boolean;
    isForwardAvailable(): boolean;
    backward(): void;
    forward(): void;
    home(): void;
    reload(): void;
}
export interface QTextBrowserSignals extends QTextEditSignals {
    anchorClicked: (link: QUrl) => void;
    backwardAvailable: (available: boolean) => void;
    forwardAvailable: (available: boolean) => void;
    highlighted: (link: string) => void;
    historyChanged: () => void;
    sourceChanged: (src: QUrl) => void;
}
