"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListViewMode = exports.ResizeMode = exports.Movement = exports.LayoutMode = exports.Flow = exports.QListView = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractItemView_1 = require("./QAbstractItemView");
const QSize_1 = require("../QtCore/QSize");
const helpers_1 = require("../utils/helpers");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> The QListView class provides a list or icon view onto a model.

* **This class is a JS wrapper around Qt's [QListView class](https://doc.qt.io/qt-5/qlistview.html)**

### Example

```javascript
const { QListView } = require("@nodegui/nodegui");

const listview = new QListView();

```
 */
class QListView extends QAbstractItemView_1.QAbstractItemView {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QListView(parent.native);
        }
        else {
            native = new addon_1.default.QListView();
        }
        super(native);
    }
    setBatchSize(batchSize) {
        this.setProperty('batchSize', batchSize);
    }
    batchSize() {
        return this.property('batchSize').toInt();
    }
    setFlow(flow) {
        this.setProperty('flow', flow);
    }
    flow() {
        return this.property('flow').toInt();
    }
    setGridSize(size) {
        this.setProperty('gridSize', size.native);
    }
    gridSize() {
        const gridSize = this.property('gridSize');
        return QSize_1.QSize.fromQVariant(gridSize);
    }
    setWrapping(enable) {
        this.setProperty('isWrapping', enable);
    }
    isWrapping() {
        return this.property('isWrapping').toBool();
    }
    setItemAlignment(alignment) {
        this.setProperty('itemAlignment', alignment);
    }
    itemAlignment() {
        return this.property('itemAlignment').toInt();
    }
    setLayoutMode(mode) {
        this.setProperty('layoutMode', mode);
    }
    layoutMode() {
        return this.property('layoutMode').toInt();
    }
    setModelColumn(column) {
        this.setProperty('modelColumn', column);
    }
    modelColumn() {
        return this.property('modelColumn').toInt();
    }
    setMovement(movement) {
        this.setProperty('movement', movement);
    }
    movement() {
        return this.property('movement').toInt();
    }
    setResizeMode(mode) {
        this.setProperty('resizeMode', mode);
    }
    resizeMode() {
        return this.property('resizeMode').toInt();
    }
    setSelectionRectVisible(show) {
        this.setProperty('selectionRectVisible', show);
    }
    isSelectionRectVisible() {
        return this.property('selectionRectVisible').toBool();
    }
    setSpacing(space) {
        this.setProperty('spacing', space);
    }
    spacing() {
        return this.property('spacing').toInt();
    }
    setUniformItemSizes(enable) {
        this.setProperty('uniformItemSizes', enable);
    }
    uniformItemSizes() {
        return this.property('uniformItemSizes').toBool();
    }
    setViewMode(mode) {
        this.setProperty('viewMode', mode);
    }
    viewMode() {
        return this.property('viewMode').toInt();
    }
    setWordWrap(on) {
        this.setProperty('wordWrap', on);
    }
    wordWrap() {
        return this.property('wordWrap').toBool();
    }
    clearPropertyFlags() {
        this.native.clearPropertyFlags();
    }
    setRowHidden(row, hide) {
        this.native.setRowHidden(row, hide);
    }
    isRowHidden(row) {
        return this.native.isRowHidden(row);
    }
}
exports.QListView = QListView;
WrapperCache_1.wrapperCache.registerWrapper('QListViewWrap', QListView);
var Flow;
(function (Flow) {
    Flow[Flow["LeftToRight"] = 0] = "LeftToRight";
    Flow[Flow["TopToBottom"] = 1] = "TopToBottom";
})(Flow = exports.Flow || (exports.Flow = {}));
var LayoutMode;
(function (LayoutMode) {
    LayoutMode[LayoutMode["SinglePass"] = 0] = "SinglePass";
    LayoutMode[LayoutMode["Batched"] = 1] = "Batched";
})(LayoutMode = exports.LayoutMode || (exports.LayoutMode = {}));
var Movement;
(function (Movement) {
    Movement[Movement["Static"] = 0] = "Static";
    Movement[Movement["Free"] = 1] = "Free";
    Movement[Movement["Snap"] = 2] = "Snap";
})(Movement = exports.Movement || (exports.Movement = {}));
var ResizeMode;
(function (ResizeMode) {
    ResizeMode[ResizeMode["Fixed"] = 0] = "Fixed";
    ResizeMode[ResizeMode["Adjust"] = 1] = "Adjust";
})(ResizeMode = exports.ResizeMode || (exports.ResizeMode = {}));
var ListViewMode;
(function (ListViewMode) {
    ListViewMode[ListViewMode["ListMode"] = 0] = "ListMode";
    ListViewMode[ListViewMode["IconMode"] = 1] = "IconMode";
})(ListViewMode = exports.ListViewMode || (exports.ListViewMode = {}));
