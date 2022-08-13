import { NativeRawPointer } from '../../core/Component';
import { QEvent } from './QEvent';
export declare class QTimerEvent extends QEvent {
    constructor(event: NativeRawPointer<'QEvent'>);
    timerId(): number;
}
