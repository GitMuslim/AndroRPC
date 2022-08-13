import { NativeRawPointer } from '../../core/Component';
import { QEvent } from './QEvent';
import { QPoint } from '../../QtCore/QPoint';
export declare class QMoveEvent extends QEvent {
    constructor(event: NativeRawPointer<'QEvent'>);
    oldPos(): QPoint;
    pos(): QPoint;
}
