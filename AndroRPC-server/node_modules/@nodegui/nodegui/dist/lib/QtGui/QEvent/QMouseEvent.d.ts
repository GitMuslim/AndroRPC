import { NativeRawPointer } from '../../core/Component';
import { QInputEvent } from './QInputEvent';
export declare class QMouseEvent extends QInputEvent {
    constructor(event: NativeRawPointer<'QEvent'>);
    button(): number;
    buttons(): number;
    x(): number;
    y(): number;
    globalX(): number;
    globalY(): number;
}
