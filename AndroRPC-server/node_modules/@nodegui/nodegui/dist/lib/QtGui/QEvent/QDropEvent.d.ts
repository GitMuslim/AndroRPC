import { NativeRawPointer } from '../../core/Component';
import { DropAction } from '../../QtEnums';
import { QMimeData } from '../../QtCore/QMimeData';
import { QEvent } from './QEvent';
export declare class QDropEvent extends QEvent {
    constructor(event: NativeRawPointer<'QEvent'>);
    /** Sets the drop action to be the proposed action */
    acceptProposedAction(): void;
    /**
     * Returns the action to be performed on the data by the target.
     * This may be different from the action supplied in proposedAction()
     * if you have called setDropAction() to explicitly choose a drop action
     */
    dropAction(): DropAction;
    /**
     * Returns the modifier keys that are pressed
     *
     * see Qt::KeyboardModifier for flags
     */
    keyboardModifiers(): number;
    /**
     * Returns the data that was dropped on the widget and its associated MIME type information
     */
    mimeData(): QMimeData;
    /**
     * Returns the mouse buttons that are pressed
     *
     * See Qt::MouseButton for flags
     */
    mouseButtons(): number;
    /**
     * Returns the position where the drop was made
     */
    pos(): {
        x: number;
        y: number;
    };
    /**
     * Returns the position where the drop was made
     */
    posF(): {
        x: number;
        y: number;
    };
    /**
     * Returns an OR-combination of possible drop actions.
     *
     * See Qt::DropAction for flags
     */
    possibleActions(): number;
    /**
     * Returns the proposed drop action
     *
     */
    proposedAction(): DropAction;
    setDropAction(action: DropAction): void;
}
