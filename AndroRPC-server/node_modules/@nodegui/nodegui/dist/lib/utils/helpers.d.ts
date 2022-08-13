import { NativeElement } from '../core/Component';
export declare function checkIfNativeElement(arg: any): arg is NativeElement;
export declare function checkIfNapiExternal(arg: any): boolean;
export declare function wrapWithActivateUvLoop<T extends Function>(func: T): T;
export declare type JsWrapFunction = (element: any) => any;
/**
 * Register a function to wrap a specific Node API wrapper objects with a JS object.
 *
 * @param wrapperTypeName the C++ wrapper type name the wrap function applies to.
 * @param jsWrapFunction function to wrap a native wrapper to a JS wrapper object.
 */
export declare function registerNativeWrapFunction(wrapperTypeName: string, jsWrapFunction: JsWrapFunction): void;
/**
 * Try to wrap a native Node object with its JS wrapper.
 *
 * @param native the native object to wrap
 * @return the JS object wrapping the native object or the native object if
 *         it couldn't be wrapped or doesn't need to be wrapped.
 */
export declare function wrapNative(native: any): any;
