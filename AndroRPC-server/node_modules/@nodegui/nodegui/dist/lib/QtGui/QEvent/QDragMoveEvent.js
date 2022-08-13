"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDragMoveEvent = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
const QMimeData_1 = require("../../QtCore/QMimeData");
const QEvent_1 = require("./QEvent");
class QDragMoveEvent extends QEvent_1.QEvent {
    constructor(event) {
        super(new addon_1.default.QDragMoveEvent(event));
    }
    /**
     * Sets the accept flag of the event object, the equivalent of calling setAccepted(true).
     * Setting the accept parameter indicates that the event receiver wants the event. Unwanted events might be propagated to the parent widget
     *
     * If the rectangle is provided, also notifies that future moves will also be acceptable if they remain within the rectangle given on the widget.
     * This can improve performance, but may also be ignored by the underlying system.
     * If the rectangle is empty, drag move events will be sent continuously. This is useful if the source is scrolling in a timer event.
     */
    accept(x, y, width, height) {
        if (arguments.length == 4) {
            this.native.accept(x, y, width, height);
        }
        else {
            this.native.accept();
        }
    }
    /**
     * Clears the accept flag parameter of the event object, the equivalent of calling setAccepted(false).
     * Clearing the accept parameter indicates that the event receiver does not want the event.
     * Unwanted events might be propagated to the parent widget.
     */
    ignore(x, y, width, height) {
        if (arguments.length == 4) {
            this.native.ignore(x, y, width, height);
        }
        else {
            this.native.ignore();
        }
    }
    answerRect() {
        return this.native.answerRect();
    }
    //Below : Methods inherited from QDropEvent ---------------------------------------
    /** Sets the drop action to be the proposed action */
    acceptProposedAction() {
        return this.native.acceptProposedAction();
    }
    /**
     * Returns the action to be performed on the data by the target.
     * This may be different from the action supplied in proposedAction()
     * if you have called setDropAction() to explicitly choose a drop action
     */
    dropAction() {
        return this.native.dropAction();
    }
    /**
     * Returns the modifier keys that are pressed
     *
     * see Qt::KeyboardModifier for flags
     */
    keyboardModifiers() {
        return this.native.keyboardModifiers();
    }
    /**
     * Returns the data that was dropped on the widget and its associated MIME type information
     */
    mimeData() {
        return new QMimeData_1.QMimeData(this.native.mimeData());
    }
    /**
     * Returns the mouse buttons that are pressed
     *
     * See Qt::MouseButton for flags
     */
    mouseButtons() {
        return this.native.mouseButtons();
    }
    /**
     * Returns the position where the drop was made
     */
    pos() {
        return this.native.pos();
    }
    /**
     * Returns the position where the drop was made
     */
    posF() {
        return this.native.posF();
    }
    /**
     * Returns an OR-combination of possible drop actions.
     *
     * See Qt::DropAction for flags
     */
    possibleActions() {
        return this.native.possibleActions();
    }
    /**
     * Returns the proposed drop action
     *
     */
    proposedAction() {
        return this.native.proposedAction();
    }
    setDropAction(action) {
        return this.native.setDropAction(action);
    }
}
exports.QDragMoveEvent = QDragMoveEvent;
