"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapNative = exports.registerNativeWrapFunction = exports.wrapWithActivateUvLoop = exports.checkIfNapiExternal = exports.checkIfNativeElement = void 0;
const addon_1 = __importDefault(require("./addon"));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function checkIfNativeElement(arg) {
    const nativeArg = arg;
    return nativeArg != null && typeof nativeArg === 'object' && nativeArg.type === 'native';
}
exports.checkIfNativeElement = checkIfNativeElement;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function checkIfNapiExternal(arg) {
    return addon_1.default.NUtils.isNapiExternal(arg);
}
exports.checkIfNapiExternal = checkIfNapiExternal;
function noop() {
    return;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function wrapWithActivateUvLoop(func) {
    const fn = (...args) => {
        const activateUvLoop = process.activateUvLoop || noop;
        activateUvLoop();
        return func(...args);
    };
    return fn;
}
exports.wrapWithActivateUvLoop = wrapWithActivateUvLoop;
const nativeWrapperRegistry = new Map();
/**
 * Register a function to wrap a specific Node API wrapper objects with a JS object.
 *
 * @param wrapperTypeName the C++ wrapper type name the wrap function applies to.
 * @param jsWrapFunction function to wrap a native wrapper to a JS wrapper object.
 */
function registerNativeWrapFunction(wrapperTypeName, jsWrapFunction) {
    nativeWrapperRegistry.set(wrapperTypeName, jsWrapFunction);
}
exports.registerNativeWrapFunction = registerNativeWrapFunction;
/**
 * Try to wrap a native Node object with its JS wrapper.
 *
 * @param native the native object to wrap
 * @return the JS object wrapping the native object or the native object if
 *         it couldn't be wrapped or doesn't need to be wrapped.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function wrapNative(native) {
    if (!checkIfNativeElement(native)) {
        return native;
    }
    const func = nativeWrapperRegistry.get(native.wrapperType);
    if (func == null) {
        return native;
    }
    return func(native);
}
exports.wrapNative = wrapNative;
