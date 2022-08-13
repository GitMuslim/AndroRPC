import { NativeElement, Component, NativeRawPointer } from './Component';
export interface EventListenerOptions {
    /**
     * This applies only when listening to QEvents. If set to true, then the callback will
     * be called after the default processing by the base widget has occurred. By default
     * callbacks for QEvents are called before the base widget `::event()` is called.
     */
    afterDefault?: boolean;
}
/**

> Abstract class that adds event handling support to all widgets.

**This class implements an event emitter and merges it with Qt's event and signal system. It allows us to register and unregister event and signal listener at will from javascript**

`EventWidget` is an abstract class and hence no instances of the same should be created. It exists so that we can add event handling functionalities to all widget's easily. This is an internal class.

### Example

```javascript
const { QWidget, QWidgetSignals, WidgetEventTypes } = require("@nodegui/nodegui");

const view = new QWidget();
// You either listen for a widget's signal
view.addEventListener('windowTitleChanged', () => {
  console.log("window title changed");
});

// or you can listen for an event

view.addEventListener(WidgetEventTypes.MouseMove, () => {
  console.log("mouse moved");
});
```
 */
export declare abstract class EventWidget<Signals extends unknown> extends Component {
    private emitter;
    private _isEventProcessed;
    constructor(native: NativeElement);
    /**
     * Get the state of the event processed flag
     *
     * See `setEventProcessed()`.
     *
     * @returns boolean True if the current event is flagged as processed.
     */
    eventProcessed(): boolean;
    /**
     * Mark the current event as having been processed
     *
     * This method is used to indicate that the currently dispatched event
     * has been processed and no further processing by superclasses is
     * required. It only makes sense to call this method from an event
     * handler.
     *
     * When set, this flag will cause NodeGui's `QObject::event()` method to
     * return true and not call the superclass `event()`, effectively preventing
     * any further processing on this event.
     *
     * @param isProcessed true if the event has been processed.
     */
    setEventProcessed(isProcessed: boolean): void;
    /**
     *
    @param signalType SignalType is a signal from the widgets signals interface.
    @param callback Corresponding callback for the signal as mentioned in the widget's signal interface
    @param options Extra optional options controlling how this event listener is added.
    @returns void

    For example in the case of QPushButton:
    ```js
    const button = new QPushButton();
    button.addEventListener('clicked',(checked)=>console.log("clicked"));
    // here clicked is a value from QPushButtonSignals interface
    ```
     */
    addEventListener<SignalType extends keyof Signals>(signalType: SignalType, callback: Signals[SignalType], options?: EventListenerOptions): void;
    /**

    @param eventType
    @param callback
    @param options Extra optional options controlling how this event listener is added.

    For example in the case of QPushButton:
    ```js
    const button = new QPushButton();
    button.addEventListener(WidgetEventTypes.HoverEnter,()=>console.log("hovered"));
    ```
    */
    addEventListener(eventType: WidgetEventTypes, callback: (event?: NativeRawPointer<'QEvent'>) => void, options?: EventListenerOptions): void;
    removeEventListener<SignalType extends keyof Signals>(signalType: SignalType, callback: Signals[SignalType], options?: EventListenerOptions): void;
    removeEventListener(eventType: WidgetEventTypes, callback: (event?: NativeRawPointer<'QEvent'>) => void, options?: EventListenerOptions): void;
}
export declare enum WidgetEventTypes {
    'None' = "None",
    'ActionAdded' = "ActionAdded",
    'ActionChanged' = "ActionChanged",
    'ActionRemoved' = "ActionRemoved",
    'ActivationChange' = "ActivationChange",
    'ApplicationActivate' = "ApplicationActivate",
    'ApplicationActivated' = "ApplicationActivated",
    'ApplicationDeactivate' = "ApplicationDeactivate",
    'ApplicationFontChange' = "ApplicationFontChange",
    'ApplicationLayoutDirectionChange' = "ApplicationLayoutDirectionChange",
    'ApplicationPaletteChange' = "ApplicationPaletteChange",
    'ApplicationStateChange' = "ApplicationStateChange",
    'ApplicationWindowIconChange' = "ApplicationWindowIconChange",
    'ChildAdded' = "ChildAdded",
    'ChildPolished' = "ChildPolished",
    'ChildRemoved' = "ChildRemoved",
    'Clipboard' = "Clipboard",
    'Close' = "Close",
    'CloseSoftwareInputPanel' = "CloseSoftwareInputPanel",
    'ContentsRectChange' = "ContentsRectChange",
    'ContextMenu' = "ContextMenu",
    'CursorChange' = "CursorChange",
    'DeferredDelete' = "DeferredDelete",
    'DragEnter' = "DragEnter",
    'DragLeave' = "DragLeave",
    'DragMove' = "DragMove",
    'Drop' = "Drop",
    'DynamicPropertyChange' = "DynamicPropertyChange",
    'EnabledChange' = "EnabledChange",
    'Enter' = "Enter",
    'EnterWhatsThisMode' = "EnterWhatsThisMode",
    'Expose' = "Expose",
    'FileOpen' = "FileOpen",
    'FocusIn' = "FocusIn",
    'FocusOut' = "FocusOut",
    'FocusAboutToChange' = "FocusAboutToChange",
    'FontChange' = "FontChange",
    'Gesture' = "Gesture",
    'GestureOverride' = "GestureOverride",
    'GrabKeyboard' = "GrabKeyboard",
    'GrabMouse' = "GrabMouse",
    'GraphicsSceneContextMenu' = "GraphicsSceneContextMenu",
    'GraphicsSceneDragEnter' = "GraphicsSceneDragEnter",
    'GraphicsSceneDragLeave' = "GraphicsSceneDragLeave",
    'GraphicsSceneDragMove' = "GraphicsSceneDragMove",
    'GraphicsSceneDrop' = "GraphicsSceneDrop",
    'GraphicsSceneHelp' = "GraphicsSceneHelp",
    'GraphicsSceneHoverEnter' = "GraphicsSceneHoverEnter",
    'GraphicsSceneHoverLeave' = "GraphicsSceneHoverLeave",
    'GraphicsSceneHoverMove' = "GraphicsSceneHoverMove",
    'GraphicsSceneMouseDoubleClick' = "GraphicsSceneMouseDoubleClick",
    'GraphicsSceneMouseMove' = "GraphicsSceneMouseMove",
    'GraphicsSceneMousePress' = "GraphicsSceneMousePress",
    'GraphicsSceneMouseRelease' = "GraphicsSceneMouseRelease",
    'GraphicsSceneMove' = "GraphicsSceneMove",
    'GraphicsSceneResize' = "GraphicsSceneResize",
    'GraphicsSceneWheel' = "GraphicsSceneWheel",
    'Hide' = "Hide",
    'HideToParent' = "HideToParent",
    'HoverEnter' = "HoverEnter",
    'HoverLeave' = "HoverLeave",
    'HoverMove' = "HoverMove",
    'IconDrag' = "IconDrag",
    'IconTextChange' = "IconTextChange",
    'InputMethod' = "InputMethod",
    'InputMethodQuery' = "InputMethodQuery",
    'KeyboardLayoutChange' = "KeyboardLayoutChange",
    'KeyPress' = "KeyPress",
    'KeyRelease' = "KeyRelease",
    'LanguageChange' = "LanguageChange",
    'LayoutDirectionChange' = "LayoutDirectionChange",
    'LayoutRequest' = "LayoutRequest",
    'Leave' = "Leave",
    'LeaveWhatsThisMode' = "LeaveWhatsThisMode",
    'LocaleChange' = "LocaleChange",
    'NonClientAreaMouseButtonDblClick' = "NonClientAreaMouseButtonDblClick",
    'NonClientAreaMouseButtonPress' = "NonClientAreaMouseButtonPress",
    'NonClientAreaMouseButtonRelease' = "NonClientAreaMouseButtonRelease",
    'NonClientAreaMouseMove' = "NonClientAreaMouseMove",
    'MacSizeChange' = "MacSizeChange",
    'MetaCall' = "MetaCall",
    'ModifiedChange' = "ModifiedChange",
    'MouseButtonDblClick' = "MouseButtonDblClick",
    'MouseButtonPress' = "MouseButtonPress",
    'MouseButtonRelease' = "MouseButtonRelease",
    'MouseMove' = "MouseMove",
    'MouseTrackingChange' = "MouseTrackingChange",
    'Move' = "Move",
    'NativeGesture' = "NativeGesture",
    'OrientationChange' = "OrientationChange",
    'Paint' = "Paint",
    'PaletteChange' = "PaletteChange",
    'ParentAboutToChange' = "ParentAboutToChange",
    'ParentChange' = "ParentChange",
    'PlatformPanel' = "PlatformPanel",
    'PlatformSurface' = "PlatformSurface",
    'Polish' = "Polish",
    'PolishRequest' = "PolishRequest",
    'QueryWhatsThis' = "QueryWhatsThis",
    'ReadOnlyChange' = "ReadOnlyChange",
    'RequestSoftwareInputPanel' = "RequestSoftwareInputPanel",
    'Resize' = "Resize",
    'ScrollPrepare' = "ScrollPrepare",
    'Scroll' = "Scroll",
    'Shortcut' = "Shortcut",
    'ShortcutOverride' = "ShortcutOverride",
    'Show' = "Show",
    'ShowToParent' = "ShowToParent",
    'SockAct' = "SockAct",
    'StateMachineSignal' = "StateMachineSignal",
    'StateMachineWrapped' = "StateMachineWrapped",
    'StatusTip' = "StatusTip",
    'StyleChange' = "StyleChange",
    'TabletMove' = "TabletMove",
    'TabletPress' = "TabletPress",
    'TabletRelease' = "TabletRelease",
    'TabletEnterProximity' = "TabletEnterProximity",
    'TabletLeaveProximity' = "TabletLeaveProximity",
    'TabletTrackingChange' = "TabletTrackingChange",
    'ThreadChange' = "ThreadChange",
    'Timer' = "Timer",
    'ToolBarChange' = "ToolBarChange",
    'ToolTip' = "ToolTip",
    'ToolTipChange' = "ToolTipChange",
    'TouchBegin' = "TouchBegin",
    'TouchCancel' = "TouchCancel",
    'TouchEnd' = "TouchEnd",
    'TouchUpdate' = "TouchUpdate",
    'UngrabKeyboard' = "UngrabKeyboard",
    'UngrabMouse' = "UngrabMouse",
    'UpdateLater' = "UpdateLater",
    'UpdateRequest' = "UpdateRequest",
    'WhatsThis' = "WhatsThis",
    'WhatsThisClicked' = "WhatsThisClicked",
    'Wheel' = "Wheel",
    'WinEventAct' = "WinEventAct",
    'WindowActivate' = "WindowActivate",
    'WindowBlocked' = "WindowBlocked",
    'WindowDeactivate' = "WindowDeactivate",
    'WindowIconChange' = "WindowIconChange",
    'WindowStateChange' = "WindowStateChange",
    'WindowTitleChange' = "WindowTitleChange",
    'WindowUnblocked' = "WindowUnblocked",
    'WinIdChange' = "WinIdChange",
    'ZOrderChange' = "ZOrderChange"
}
