import { QWidget, QWidgetSignals } from './QWidget';
import { QFrame, QFrameSignals } from './QFrame';
import { NativeElement } from '../core/Component';
import { Orientation } from '../QtEnums';
/**

> A QSplitter provides ability to let the user control the size between child widgets

* **This class is a JS wrapper around Qt's [QSplitter class](https://doc.qt.io/qt-5/qsplitter.html)**

### Example

```javascript
const { QSplitter, QWidget, QBoxLayout, Direction, Orientation } = require("@nodegui/nodegui");

const rootView = new QWidget();
const rootLayout = new QBoxLayout(Direction.LeftToRight);
rootLayout.setSpacing(0);
rootView.setLayout(rootLayout);
rootView.setObjectName('myroot');

const splitterHorizontal = new QSplitter();
splitterHorizontal.setObjectName("splitterleft");
splitterHorizontal.setOrientation(Orientation.Horizontal);
const left = new QWidget();
left.setInlineStyle('background-color: red;');
const right = new QWidget();
right.setInlineStyle('background-color: yellow;');
rootView.layout!.addWidget(splitterHorizontal);
splitterHorizontal.addWidget(left);
splitterHorizontal.addWidget(right);
```

 */
export declare class QSplitter extends QFrame<QSplitterSignals> {
    constructor(arg?: QWidget<QWidgetSignals> | NativeElement);
    addWidget(widget: QWidget): void;
    childrenCollapsible(): boolean;
    count(): number;
    indexOf(widget: QWidget): number;
    insertWidget(index: number, widget: QWidget): void;
    isCollapsible(index: number): boolean;
    orientation(): Orientation;
    setCollapsible(index: number, collapse: boolean): void;
    setOrientation(orientation: Orientation): void;
}
export interface QSplitterSignals extends QFrameSignals {
    splitterMoved: (pos: number, index: number) => void;
}
