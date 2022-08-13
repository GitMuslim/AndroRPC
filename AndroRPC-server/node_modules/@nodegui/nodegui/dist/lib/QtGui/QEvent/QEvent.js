"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QEvent = void 0;
class QEvent {
    constructor(native) {
        this.native = native;
    }
    //Methods from QEvent ---------------------------
    /**
     * Sets the accept flag of the event object, the equivalent of calling setAccepted(true).
     * Setting the accept parameter indicates that the event receiver wants the event. Unwanted events might be propagated to the parent widget
     */
    accept() {
        return this.native.accept();
    }
    /**
     * Clears the accept flag parameter of the event object, the equivalent of calling setAccepted(false).
     * Clearing the accept parameter indicates that the event receiver does not want the event.
     * Unwanted events might be propagated to the parent widget.
     */
    ignore() {
        return this.native.ignore();
    }
    isAccepted() {
        return this.native.isAccepted();
    }
    /**
     * Sets the accept flag of the event object
     */
    setAccepted(accepted) {
        return this.native.setAccepted(accepted);
    }
    /**
     * Returns true if the event originated outside the application (a system event); otherwise returns false.
     *
     * The return value of this function is not defined for paint events.
     */
    spontaneous() {
        return this.native.spontaneous();
    }
    /**
     * Returns the event type
     * @returns {Number} This is QEvent::Type
     */
    type() {
        return this.native._type();
    }
}
exports.QEvent = QEvent;
