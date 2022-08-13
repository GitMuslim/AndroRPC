import { Component } from '../core/Component';
import { QVariant } from './QVariant';
export declare enum QSettingsFormat {
    NativeFormat = 0,
    Registry32Format = 2,
    Registry64Format = 3,
    IniFormat = 1,
    InvalidFormat = 16
}
export declare enum QSettingsScope {
    UserScope = 0,
    SystemScope = 1
}
export declare class QSettings extends Component {
    constructor(organization: string, application: string);
    sync(): void;
    setValue(key: string, value: number | string | boolean): void;
    value(key: string): QVariant;
}
