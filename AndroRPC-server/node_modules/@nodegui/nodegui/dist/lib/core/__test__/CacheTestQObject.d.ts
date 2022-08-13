import { NativeElement } from '../Component';
import { QObject, QObjectSignals } from '../../QtCore/QObject';
export declare class CacheTestQObject extends QObject<QObjectSignals> {
    constructor(arg?: NativeElement);
    foo(): CacheTestQObject;
    clearFoo(): void;
    bar(): CacheTestQObject;
}
