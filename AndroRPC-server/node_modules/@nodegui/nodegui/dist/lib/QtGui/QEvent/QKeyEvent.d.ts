import { NativeRawPointer } from '../../core/Component';
import { QInputEvent } from './QInputEvent';
export declare class QKeyEvent extends QInputEvent {
    constructor(event: NativeRawPointer<'QEvent'>);
    text(): string;
    key(): number;
    modifiers(): number;
    count(): number;
    isAutoRepeat(): boolean;
}
