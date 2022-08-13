"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QHeaderViewResizeMode = exports.QHeaderView = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractItemView_1 = require("./QAbstractItemView");
const __1 = require("../..");
const WrapperCache_1 = require("../core/WrapperCache");
/**

> The QHeaderView class provides a header row or header column for item views.

* **This class is a JS wrapper around Qt's [QHeaderView class](https://doc.qt.io/qt-5/qheaderview.html)**

 */
class QHeaderView extends QAbstractItemView_1.QAbstractItemView {
    constructor(orientationOrNative, parent = null) {
        let native;
        if (__1.checkIfNativeElement(orientationOrNative)) {
            native = orientationOrNative;
        }
        else {
            if (parent != null) {
                native = new addon_1.default.QHeaderView(orientationOrNative, parent.native);
            }
            else {
                native = new addon_1.default.QHeaderView(orientationOrNative);
            }
        }
        super(native);
    }
    // *** Public Function ***
    cascadingSectionResizes() {
        return this.native.cascadingSectionResizes();
    }
    count() {
        return this.native.count();
    }
    defaultAlignment() {
        return this.native.defaultAlignment();
    }
    defaultSectionSize() {
        return this.native.defaultSectionSize();
    }
    hiddenSectionCount() {
        return this.native.hiddenSectionCount();
    }
    hideSection(logicalIndex) {
        this.native.hideSection(logicalIndex);
    }
    highlightSections() {
        return this.native.highlightSections();
    }
    isFirstSectionMovable() {
        return this.native.isFirstSectionMovable();
    }
    isSectionHidden(logicalIndex) {
        return this.native.isSectionHidden(logicalIndex);
    }
    isSortIndicatorShown() {
        return this.native.isSortIndicatorShown();
    }
    length() {
        return this.native.length();
    }
    logicalIndex(visualIndex) {
        return this.native.logicalIndex(visualIndex);
    }
    logicalIndexAt(positionOrPosOrX, y) {
        if (y !== undefined) {
            return this.native.logicalIndexAt_number_number(positionOrPosOrX, y);
        }
        else if (positionOrPosOrX instanceof __1.QPoint) {
            return this.native.logicalIndexAt_qpoint(positionOrPosOrX.native);
        }
        else {
            return this.native.logicalIndexAt_number(positionOrPosOrX);
        }
    }
    maximumSectionSize() {
        return this.native.maximumSectionSize();
    }
    minimumSectionSize() {
        return this.native.minimumSectionSize();
    }
    moveSection(from, to) {
        this.native.moveSection(from, to);
    }
    offset() {
        return this.native.offset();
    }
    orientation() {
        return this.native.orientation();
    }
    resetDefaultSectionSize() {
        this.native.resetDefaultSectionSize();
    }
    resizeContentsPrecision() {
        return this.native.resizeContentsPrecision();
    }
    resizeSection(logicalIndex, size) {
        this.native.resizeSection(logicalIndex, size);
    }
    resizeSections(mode) {
        this.native.resizeSections(mode);
    }
    // TODO: bool 	restoreState(const QByteArray &state)
    // TODO: QByteArray 	saveState() const
    sectionPosition(logicalIndex) {
        return this.native.sectionPosition(logicalIndex);
    }
    sectionResizeMode(logicalIndex) {
        return this.native.sectionResizeMode(logicalIndex);
    }
    sectionSize(logicalIndex) {
        return this.native.sectionSize(logicalIndex);
    }
    sectionSizeHint(logicalIndex) {
        return this.native.sectionSizeHint(logicalIndex);
    }
    sectionViewportPosition(logicalIndex) {
        return this.native.sectionViewportPosition(logicalIndex);
    }
    sectionsClickable() {
        return this.native.sectionsClickable();
    }
    sectionsHidden() {
        return this.native.sectionsHidden();
    }
    sectionsMovable() {
        return this.native.sectionsMovable();
    }
    sectionsMoved() {
        return this.native.sectionsMoved();
    }
    setCascadingSectionResizes(enable) {
        this.native.setCascadingSectionResizes(enable);
    }
    setDefaultAlignment(alignment) {
        this.native.setDefaultAlignment(alignment);
    }
    setDefaultSectionSize(size) {
        this.native.setDefaultSectionSize(size);
    }
    setFirstSectionMovable(movable) {
        this.native.setFirstSectionMovable(movable);
    }
    setHighlightSections(highlight) {
        this.native.setHighlightSections(highlight);
    }
    setMaximumSectionSize(size) {
        this.native.setMaximumSectionSize(size);
    }
    setMinimumSectionSize(size) {
        this.native.setMinimumSectionSize(size);
    }
    setResizeContentsPrecision(precision) {
        this.native.setResizeContentsPrecision(precision);
    }
    setSectionHidden(logicalIndex, hide) {
        this.native.setSectionHidden(logicalIndex, hide);
    }
    setSectionResizeMode(modeOrlogicalIndex, mode) {
        if (mode !== undefined) {
            this.native.setSectionResizeMode_number_mode(modeOrlogicalIndex, mode);
        }
        else {
            this.native.setSectionResizeMode_mode(modeOrlogicalIndex);
        }
    }
    setSectionsClickable(clickable) {
        this.native.setSectionsClickable(clickable);
    }
    setSectionsMovable(movable) {
        this.native.setSectionsMovable(movable);
    }
    setSortIndicator(logicalIndex, order) {
        this.native.setSortIndicator(logicalIndex, order);
    }
    setSortIndicatorShown(show) {
        this.native.setSortIndicatorShown(show);
    }
    setStretchLastSection(stretch) {
        this.setProperty('stretchLastSection', stretch);
    }
    showSection(logicalIndex) {
        this.native.showSection(logicalIndex);
    }
    sortIndicatorOrder() {
        return this.native.sortIndicatorOrder();
    }
    sortIndicatorSection() {
        return this.native.sortIndicatorSection();
    }
    stretchLastSection() {
        return this.property('stretchLastSection').toBool();
    }
    stretchSectionCount() {
        return this.native.stretchSectionCount();
    }
    swapSections(first, second) {
        this.native.swapSections(first, second);
    }
    visualIndex(logicalIndex) {
        return this.native.visualIndex(logicalIndex);
    }
    visualIndexAt(position) {
        return this.native.visualIndexAt(position);
    }
    // *** Public Slots ***
    headerDataChanged(orientation, logicalFirst, logicalLast) {
        this.native.headerDataChanged(orientation, logicalFirst, logicalLast);
    }
    setOffset(offset) {
        this.native.setOffset(offset);
    }
    setOffsetToLastSection() {
        this.native.setOffsetToLastSection();
    }
    setOffsetToSectionPosition(visualSectionNumber) {
        this.native.setOffsetToSectionPosition(visualSectionNumber);
    }
}
exports.QHeaderView = QHeaderView;
WrapperCache_1.wrapperCache.registerWrapper('QHeaderViewWrap', QHeaderView);
var QHeaderViewResizeMode;
(function (QHeaderViewResizeMode) {
    QHeaderViewResizeMode[QHeaderViewResizeMode["Interactive"] = 0] = "Interactive";
    QHeaderViewResizeMode[QHeaderViewResizeMode["Fixed"] = 2] = "Fixed";
    QHeaderViewResizeMode[QHeaderViewResizeMode["Stretch"] = 1] = "Stretch";
    QHeaderViewResizeMode[QHeaderViewResizeMode["ResizeToContents"] = 3] = "ResizeToContents";
})(QHeaderViewResizeMode = exports.QHeaderViewResizeMode || (exports.QHeaderViewResizeMode = {}));
