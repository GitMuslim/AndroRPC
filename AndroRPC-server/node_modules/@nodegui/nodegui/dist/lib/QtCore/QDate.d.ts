import { NativeElement, Component } from '../core/Component';
import { QVariant } from './QVariant';
import { DateFormat } from '../QtEnums';
export declare class QDate extends Component {
    constructor(arg?: NativeElement | number, month?: number, day?: number);
    addDays(ndays: number): QDate;
    addMonths(nmonths: number): QDate;
    addYears(nyears: number): QDate;
    day(): number;
    dayOfWeek(): number;
    dayOfYear(): number;
    daysInMonth(): number;
    daysInYear(): number;
    daysTo(d: QDate): number;
    isNull(): boolean;
    isValid(): boolean;
    month(): number;
    setDate(year: number, month: number, day: number): boolean;
    toJulianDay(): number;
    toString(format: string | DateFormat): string;
    year(): number;
    static currentDate(): QDate;
    static fromJulianDay(jd: number): QDate;
    static isLeapYear(year: number): boolean;
    static isValid(year: number, month: number, day: number): boolean;
    static fromString(dateString: string, format: string | DateFormat): QDate;
    static fromQVariant(variant: QVariant): QDate;
}
