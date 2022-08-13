import { NativeRawPointer } from '../../core/Component';
import { QRect } from '../../..';
import { QEvent } from './QEvent';
export declare class QPaintEvent extends QEvent {
    constructor(event: NativeRawPointer<'QEvent'>);
    rect(): QRect;
}
