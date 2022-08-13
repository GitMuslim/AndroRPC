import { NativeElement } from '../core/Component';
import { QObject, QObjectSignals } from '../QtCore/QObject';
import { QRect } from '../QtCore/QRect';
import { QSizeF } from '../QtCore/QSizeF';
import { QSize } from '../QtCore/QSize';
import { QPixmap } from './QPixmap';
export declare class QScreen extends QObject<QScreenSignals> {
    constructor(native: NativeElement);
    availableGeometry(): QRect;
    availableSize(): QSize;
    availableVirtualGeometry(): QRect;
    availableVirtualSize(): QSize;
    depth(): number;
    devicePixelRatio(): number;
    geometry(): QRect;
    grabWindow(window: number, x?: number, y?: number, width?: number, height?: number): QPixmap;
    logicalDotsPerInch(): number;
    logicalDotsPerInchX(): number;
    logicalDotsPerInchY(): number;
    manufacturer(): string;
    model(): string;
    name(): string;
    nativeOrientation(): ScreenOrientation;
    orientation(): ScreenOrientation;
    physicalDotsPerInch(): number;
    physicalDotsPerInchX(): number;
    physicalDotsPerInchY(): number;
    physicalSize(): QSizeF;
    primaryOrientation(): ScreenOrientation;
    refreshRate(): number;
    serialNumber(): string;
    size(): QSize;
    virtualGeometry(): QRect;
    virtualSize(): QSize;
}
export interface QScreenSignals extends QObjectSignals {
    availableGeometryChanged: (geometry: QRect) => void;
    geometryChanged: (geometry: QRect) => void;
    logicalDotsPerInchChanged: (dpi: number) => void;
    orientationChanged: (orientation: ScreenOrientation) => void;
    physicalDotsPerInchChanged: (dpi: number) => void;
    physicalSizeChanged: (size: QSizeF) => void;
    primaryOrientationChanged: (orientation: ScreenOrientation) => void;
    refreshRateChanged: (refreshRate: number) => void;
    virtualGeometryChanged: (rect: QRect) => void;
}
