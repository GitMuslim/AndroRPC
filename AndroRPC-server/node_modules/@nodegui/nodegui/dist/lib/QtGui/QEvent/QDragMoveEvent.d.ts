import { NativeRawPointer } from '../../core/Component';
import { DropAction } from '../../QtEnums';
import { QMimeData } from '../../QtCore/QMimeData';
import { QEvent } from './QEvent';
export declare class QDragMoveEvent extends QEvent {
    constructor(event: NativeRawPointer<'QEvent'>);
    /**
     * Sets the accept flag of the event object, the equivalent of calling setAccepted(true).
     * Setting the accept parameter indicates that the event receiver wants the event. Unwanted events might be propagated to the parent widget
     *
     * If the rectangle is provided, also notifies that future moves will also be acceptable if they remain within the rectangle given on the widget.
     * This can improve performance, but may also be ignored by the underlying system.
     * If the rectangle is empty, drag move events will be sent continuously. This is useful if the source is scrolling in a timer event.
     */
    accept(x?: number, y?: number, width?: number, height?: number): void;
    /**
     * Clears the accept flag parameter of the event object, the equivalent of calling setAccepted(false).
     * Clearing the accept parameter indicates that the event receiver does not want the event.
     * Unwanted events might be propagated to the parent widget.
     */
    ignore(x?: number, y?: number, width?: number, height?: number): void;
    answerRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
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
