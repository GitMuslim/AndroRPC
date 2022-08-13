import { EventWidget } from '../core/EventWidget';
import { NativeElement } from '../core/Component';
import { QVariant, QVariantType } from './QVariant';
import { TimerType } from '../QtEnums/TimerType';
export declare class QObject<Signals extends QObjectSignals = QObjectSignals> extends EventWidget<Signals> {
    private __id;
    constructor(nativeElementOrParent?: NativeElement | QObject);
    /**
     * Get an ID identifying the underlying C++ object.
     *
     * This can be useful when debugging memory problems with help from
     * `setLogCreateQObject()` and `setLogDestroyQObject()`. The number is
     * hash of the memory address of the C++ object.
     *
     * @return a unique number which is valid for the lifetime of the C++ object.
     */
    _id(): number;
    inherits(className: string): boolean;
    setProperty(name: string, value: QVariantType): boolean;
    property(name: string): QVariant;
    setObjectName(objectName: string): void;
    objectName(): string;
    dumpObjectTree(): void;
    dumpObjectInfo(): void;
    setParent(parent: QObject): void;
    parent(): QObject;
    startTimer(intervalMS: number, timerType?: TimerType): number;
    killTimer(timerId: number): void;
    delete(): void;
    deleteLater(): void;
    children(): QObject[];
}
export interface QObjectSignals {
    objectNameChanged: (objectName: string) => void;
}
