import { QWidget } from '../QtWidgets/QWidget';
import { QLayout, QLayoutSignals } from '../QtWidgets/QLayout';
import { FlexNode } from './YogaWidget';
export declare type FlexLayoutSignals = QLayoutSignals;
/**

> Custom layout to help layout child widgets using flex layout.

* **This class is a JS wrapper around custom Qt layout implemented using [Yoga](https://github.com/facebook/yoga)**

A `FlexLayout` can be used to layout all child NodeGui widgets using flex.

### Example

```javascript
const { FlexLayout, QWidget, QLabel } = require("@nodegui/nodegui");

const view = new QWidget();
const layout = new FlexLayout();
view.setLayout(layout);

const label = new QLabel();
label.setText("label1");
const label2 = new QLabel();
label2.setText("label2");

layout.addWidget(label);
layout.addWidget(label2);
```
 */
export declare class FlexLayout extends QLayout<FlexLayoutSignals> {
    protected flexNode?: FlexNode;
    constructor(parent?: QWidget);
    addWidget(childWidget: QWidget, childFlexNode?: FlexNode): void;
    insertChildBefore(childWidget: QWidget, beforeChildWidget: QWidget, childFlexNode?: FlexNode, beforeChildFlexNode?: FlexNode): void;
    removeWidget(childWidget: QWidget, childFlexNode?: FlexNode): void;
    setFlexNode(flexNode: FlexNode): void;
    getChildIndex(childWidget: QWidget): number;
    getNextSibling(childWidget: QWidget): QWidget | null;
}
