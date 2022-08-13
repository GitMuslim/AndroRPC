import { QStyle } from '../QtGui/QStyle';
export declare class QStyleFactory {
    static create(key: string): QStyle | null;
    static keys(): string[];
}
