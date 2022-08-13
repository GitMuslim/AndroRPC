import { NativeElement, Component } from '../core/Component';
import { QVariant } from './QVariant';
import { DateFormat } from '../QtEnums';
export declare class QTime extends Component {
    constructor(nativeOrHours?: NativeElement | number, m?: number, s?: number, ms?: number);
    addMSecs(ms: number): QTime;
    addSecs(s: number): QTime;
    elapsed(): number;
    hour(): number;
    isNull(): boolean;
    isValid(): boolean;
    minute(): number;
    msec(): number;
    msecsSinceStartOfDay(): number;
    msecsTo(t: QTime): number;
    restart(): number;
    second(): number;
    secsTo(t: QTime): number;
    setHMS(h: number, m: number, s: number, ms?: number): boolean;
    start(): void;
    toString(format: string | DateFormat): string;
    static currentTime(): QTime;
    static fromMSecsSinceStartOfDay(msecs: number): QTime;
    static isValid(h: number, m: number, s: number, ms?: number): boolean;
    static fromString(timeString: string, format: string | DateFormat): QTime;
    static fromQVariant(variant: QVariant): QTime;
}
