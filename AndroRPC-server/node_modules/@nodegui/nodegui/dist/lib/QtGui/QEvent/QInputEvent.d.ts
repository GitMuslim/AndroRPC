import { KeyboardModifier } from '../../QtEnums';
import { QEvent } from './QEvent';
export declare abstract class QInputEvent extends QEvent {
    modifiers(): KeyboardModifier;
    timestamp(): number;
}
