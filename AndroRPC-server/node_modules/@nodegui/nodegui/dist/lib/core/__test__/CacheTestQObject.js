"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheTestQObject = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
const QObject_1 = require("../../QtCore/QObject");
const WrapperCache_1 = require("../../core/WrapperCache");
class CacheTestQObject extends QObject_1.QObject {
    constructor(arg) {
        let native;
        if (arg == null) {
            native = new addon_1.default.CacheTestQObject();
        }
        else {
            native = arg;
        }
        super(native);
    }
    foo() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.foo());
    }
    clearFoo() {
        this.native.clearFoo();
    }
    bar() {
        return WrapperCache_1.wrapperCache.getWrapper(this.native.bar());
    }
}
exports.CacheTestQObject = CacheTestQObject;
WrapperCache_1.wrapperCache.registerWrapper('CacheTestQObjectWrap', CacheTestQObject);
