import { NativeRawPointer } from '../../core/Component';
import { QEvent } from './QEvent';
import { QSize } from '../../QtCore/QSize';
export declare class QResizeEvent extends QEvent {
    constructor(event: NativeRawPointer<'QEvent'>);
    oldSize(): QSize;
    size(): QSize;
}
