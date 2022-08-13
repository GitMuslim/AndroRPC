import { NativeElement, Component } from '../core/Component';
import { QObject } from '../QtCore/QObject';
import { DropAction } from '../QtEnums';
import { QPixmap } from './QPixmap';
import { QPoint } from '../QtCore/QPoint';
import { QMimeData } from '../QtCore/QMimeData';
/**
 * description
 */
export declare class QDrag extends Component {
    constructor(arg?: NativeElement | QObject);
    /**
    Returns the default proposed drop action for this drag operation.
    */
    defaultAction(): DropAction;
    /**
    Returns the drag cursor for the action.
    */
    dragCursor(action: DropAction): QPixmap;
    /**
    Starts the drag and drop operation and returns a value indicating the requested drop action when it is completed. The drop actions that the user can choose from are specified in supportedActions. The default proposed action will be selected among the allowed actions in the following order: Move, Copy and Link.
    */
    exec(supportedActions?: number, defaultDropAction?: DropAction): DropAction;
    /**
    Returns the position of the hot spot relative to the top-left corner of the cursor.
    */
    hotSpot(): QPoint;
    /**
    Returns the pixmap used to represent the data in a drag and drop operation.
    */
    pixmap(): QPixmap;
    /**
    Sets the drag cursor for the action. This allows you to override the default native cursors. To revert to using the native cursor for action pass in a null QPixmap as cursor.
    */
    setDragCursor(cursor: QPixmap, action: DropAction): void;
    /**
    Sets the position of the hot spot relative to the top-left corner of the pixmap used to the point specified by hotspot.
    */
    setHotSpot(hotspot: QPoint): void;
    /**
    Sets pixmap as the pixmap used to represent the data in a drag and drop operation. You can only set a pixmap before the drag is started.
    */
    setPixmap(pixmap: QPixmap): void;
    /**
    Returns the set of possible drop actions for this drag operation.
    */
    supportedActions(): number;
    /**
    Cancels a drag operation initiated by Qt.
    */
    static cancel(): void;
    /**
     * Returns the MIME data that is encapsulated by the drag object.
     */
    mimeData(): QMimeData;
    /**
     * Sets the data to be sent to the given MIME data.
     * Ownership of the data is transferred to the QDrag object.
     */
    setMimeData(data: QMimeData): void;
}
