import { QWidget } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractItemView, QAbstractItemViewSignals } from './QAbstractItemView';
import { AlignmentFlag, Orientation, QPoint, SortOrder } from '../..';
/**

> The QHeaderView class provides a header row or header column for item views.

* **This class is a JS wrapper around Qt's [QHeaderView class](https://doc.qt.io/qt-5/qheaderview.html)**

 */
export declare class QHeaderView<Signals extends QHeaderViewSignals = QHeaderViewSignals> extends QAbstractItemView<Signals> {
    constructor(orientationOrNative: Orientation | NativeElement, parent?: QWidget | null);
    cascadingSectionResizes(): boolean;
    count(): number;
    defaultAlignment(): AlignmentFlag;
    defaultSectionSize(): number;
    hiddenSectionCount(): number;
    hideSection(logicalIndex: number): void;
    highlightSections(): boolean;
    isFirstSectionMovable(): boolean;
    isSectionHidden(logicalIndex: number): boolean;
    isSortIndicatorShown(): boolean;
    length(): number;
    logicalIndex(visualIndex: number): number;
    logicalIndexAt(positionOrPosOrX: number | QPoint, y?: number): number;
    maximumSectionSize(): number;
    minimumSectionSize(): number;
    moveSection(from: number, to: number): void;
    offset(): number;
    orientation(): Orientation;
    resetDefaultSectionSize(): void;
    resizeContentsPrecision(): number;
    resizeSection(logicalIndex: number, size: number): void;
    resizeSections(mode: QHeaderViewResizeMode): void;
    sectionPosition(logicalIndex: number): number;
    sectionResizeMode(logicalIndex: number): QHeaderViewResizeMode;
    sectionSize(logicalIndex: number): number;
    sectionSizeHint(logicalIndex: number): number;
    sectionViewportPosition(logicalIndex: number): number;
    sectionsClickable(): boolean;
    sectionsHidden(): boolean;
    sectionsMovable(): boolean;
    sectionsMoved(): boolean;
    setCascadingSectionResizes(enable: boolean): void;
    setDefaultAlignment(alignment: AlignmentFlag): void;
    setDefaultSectionSize(size: number): void;
    setFirstSectionMovable(movable: boolean): void;
    setHighlightSections(highlight: boolean): void;
    setMaximumSectionSize(size: number): void;
    setMinimumSectionSize(size: number): void;
    setResizeContentsPrecision(precision: number): void;
    setSectionHidden(logicalIndex: number, hide: boolean): void;
    setSectionResizeMode(modeOrlogicalIndex: QHeaderViewResizeMode | number, mode?: QHeaderViewResizeMode): void;
    setSectionsClickable(clickable: boolean): void;
    setSectionsMovable(movable: boolean): void;
    setSortIndicator(logicalIndex: number, order: SortOrder): void;
    setSortIndicatorShown(show: boolean): void;
    setStretchLastSection(stretch: boolean): void;
    showSection(logicalIndex: number): void;
    sortIndicatorOrder(): SortOrder;
    sortIndicatorSection(): number;
    stretchLastSection(): boolean;
    stretchSectionCount(): number;
    swapSections(first: number, second: number): void;
    visualIndex(logicalIndex: number): number;
    visualIndexAt(position: number): number;
    headerDataChanged(orientation: Orientation, logicalFirst: number, logicalLast: number): void;
    setOffset(offset: number): void;
    setOffsetToLastSection(): void;
    setOffsetToSectionPosition(visualSectionNumber: number): void;
}
export declare enum QHeaderViewResizeMode {
    Interactive = 0,
    Fixed = 2,
    Stretch = 1,
    ResizeToContents = 3
}
export declare type QHeaderViewSignals = QAbstractItemViewSignals;
