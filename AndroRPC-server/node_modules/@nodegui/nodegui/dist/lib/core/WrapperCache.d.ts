import { QObject } from '../QtCore/QObject';
import { NativeElement } from './Component';
/**
 * JS side cache for wrapper objects.
 *
 * This is mainly used for caching wrappers of Qt objects which are not
 * directly created by our Nodejs application. The purpose of the cache
 * is to keep "alive" wrapper objects and their underlying C++ wrappers
 * which may be connected to Qt signals from the real Qt object.
 * This makes it easier for application to grab one of these objects,
 * set up event handlers, and then let the object go and *not* have the
 * wrapper automatically and unexpectedly garbage collected.
 */
export declare class WrapperCache {
    private _strongCache;
    private _weakCache;
    private _wrapperRegistry;
    constructor();
    logCreateQObject: boolean;
    logDestoryQObject: boolean;
    _flush(): void;
    private _objectDestroyedCallback;
    get<T extends QObject>(wrapperConstructor: {
        new (native: any): T;
    }, native: NativeElement): T;
    getWrapper(native: any): QObject | null;
    registerWrapper(qobjectClassName: string, wrapperConstructor: {
        new (native: any): QObject;
    }): void;
    store(wrapper: QObject): void;
}
export declare const wrapperCache: WrapperCache;
/**
 * Turn on/off logging when QObjects are created.
 *
 * @param on When true, logging is written to console when QObjects are
 *           created by NodeGui.
 */
export declare function setLogCreateQObject(on: boolean): void;
/**
 * Turn on/off logging when QObjects are destoryed.
 *
 * @param on When true, logging is written to console when QObjects are
 *           destroyed.
 */
export declare function setLogDestroyQObject(on: boolean): void;
