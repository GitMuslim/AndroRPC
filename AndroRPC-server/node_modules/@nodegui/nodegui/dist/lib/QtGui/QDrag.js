"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDrag = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QtEnums_1 = require("../QtEnums");
const QPixmap_1 = require("./QPixmap");
const QPoint_1 = require("../QtCore/QPoint");
const QMimeData_1 = require("../QtCore/QMimeData");
/**
 * description
 */
class QDrag extends Component_1.Component {
    constructor(arg) {
        let native;
        if (!arg) {
            native = new addon_1.default.QDrag();
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg.native) {
            native = new addon_1.default.QDrag(arg.native);
        }
        else {
            native = new addon_1.default.QDrag();
        }
        super(native);
    }
    /**
    Returns the default proposed drop action for this drag operation.
    */
    defaultAction() {
        return this.native.defaultAction();
    }
    /**
    Returns the drag cursor for the action.
    */
    dragCursor(action) {
        return new QPixmap_1.QPixmap(this.native.dragCursor(action));
    }
    /**
    Starts the drag and drop operation and returns a value indicating the requested drop action when it is completed. The drop actions that the user can choose from are specified in supportedActions. The default proposed action will be selected among the allowed actions in the following order: Move, Copy and Link.
    */
    exec(supportedActions = QtEnums_1.DropAction.MoveAction, defaultDropAction) {
        if (defaultDropAction) {
            return this.native.exec(supportedActions, defaultDropAction);
        }
        else {
            return this.native.exec(supportedActions);
        }
    }
    /**
    Returns the position of the hot spot relative to the top-left corner of the cursor.
    */
    hotSpot() {
        return new QPoint_1.QPoint(this.native.hotSpot());
    }
    /**
    Returns the pixmap used to represent the data in a drag and drop operation.
    */
    pixmap() {
        return new QPixmap_1.QPixmap(this.native.pixmap());
    }
    /**
    Sets the drag cursor for the action. This allows you to override the default native cursors. To revert to using the native cursor for action pass in a null QPixmap as cursor.
    */
    setDragCursor(cursor, action) {
        return this.native.setDragCursor(cursor.native, action);
    }
    /**
    Sets the position of the hot spot relative to the top-left corner of the pixmap used to the point specified by hotspot.
    */
    setHotSpot(hotspot) {
        return this.native.setHotSpot(hotspot.native);
    }
    /**
    Sets pixmap as the pixmap used to represent the data in a drag and drop operation. You can only set a pixmap before the drag is started.
    */
    setPixmap(pixmap) {
        return this.native.setPixmap(pixmap.native);
    }
    /**
    Returns the set of possible drop actions for this drag operation.
    */
    supportedActions() {
        return this.native.supportedActions();
    }
    /**
    Cancels a drag operation initiated by Qt.
    */
    static cancel() {
        return addon_1.default.QDrag.cancel();
    }
    //Manaully implemented methods
    /**
     * Returns the MIME data that is encapsulated by the drag object.
     */
    mimeData() {
        return new QMimeData_1.QMimeData(this.native.mimeData());
    }
    /**
     * Sets the data to be sent to the given MIME data.
     * Ownership of the data is transferred to the QDrag object.
     */
    setMimeData(data) {
        return this.native.setMimeData(data.native);
    }
}
exports.QDrag = QDrag;
