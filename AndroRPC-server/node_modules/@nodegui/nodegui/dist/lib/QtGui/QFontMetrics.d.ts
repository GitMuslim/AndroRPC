import { Component, NativeElement } from '../core/Component';
import { QFont } from './QFont';
import { QSize } from '../QtCore/QSize';
import { TextElideMode, TextFlag } from '../QtEnums';
import { QRect } from '../..';
export declare class QFontMetrics extends Component {
    constructor(native: NativeElement);
    constructor(qfont: QFont);
    constructor(qfontmetrics: QFontMetrics);
    /** Returns the ascent of the font */
    ascent(): number;
    /** Returns the average width of glyphs in the font */
    averageCharWidth(): number;
    boundingRect(text: string): QRect;
    /** Returns the cap height of the font */
    capHeight(): number;
    /** Returns the descent of the font */
    descent(): number;
    elidedText(text: string, mode: TextElideMode, width: number, flags?: number): string;
    /** Returns the font DPI */
    fontDpi(): number;
    /** Returns the height of the font */
    height(): number;
    /** Returns the horizontal advance in pixels of the first len characters of text. If len is negative (the default), the entire string is used */
    horizontalAdvance(text: string, len?: number): number;
    /** Returns true if character ch is a valid character in the font; otherwise returns false */
    inFont(text: string): number;
    inFontUcs4(ucs4: number): boolean;
    /** Returns the leading of the font */
    leading(): number;
    /** Returns the left bearing of character ch in the font */
    leftBearing(text: string): number;
    /** Returns the distance from one base line to the next */
    lineSpacing(): number;
    /** Returns the width of the underline and strikeout lines, adjusted for the point size of the font */
    lineWidth(): number;
    maxWidth(): number;
    minLeftBearing(): number;
    minRightBearing(): number;
    /** Returns the distance from the base line to where an overline should be drawn */
    overlinePos(): number;
    /** Returns the right bearing of character ch in the font */
    rightBearing(text: string): number;
    /**
     * Returns the size in pixels of text
     *
     * See QtEnums::TextFlag for flags
     */
    size(flags: TextFlag, text: string, tabStops?: number): QSize;
    /** Returns the distance from the base line to where the strikeout line should be drawn */
    strikeOutPos(): number;
    /** Swaps metrics other with this metrics. This operation is very fast and never fails */
    swap(other: QFontMetrics): void;
    tightBoundingRect(text: string): QRect;
    /** Returns the distance from the base line to where an underscore should be drawn */
    underlinePos(): number;
    /** Returns the 'x' height of the font. This is often but not always the same as the height of the character 'x'. */
    xHeight(): number;
}
