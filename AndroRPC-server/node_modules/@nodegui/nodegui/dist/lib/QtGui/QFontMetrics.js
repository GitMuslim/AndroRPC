"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QFontMetrics = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
const QSize_1 = require("../QtCore/QSize");
const __1 = require("../..");
class QFontMetrics extends Component_1.Component {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg instanceof QFontMetrics) {
            native = arg.native;
        }
        else {
            native = new addon_1.default.QFontMetrics(arg.native);
        }
        super(native);
    }
    // *** Public Functions ***
    /** Returns the ascent of the font */
    ascent() {
        return this.native.ascent();
    }
    /** Returns the average width of glyphs in the font */
    averageCharWidth() {
        return this.native.averageCharWidth();
    }
    boundingRect(text) {
        return new __1.QRect(this.native.boundingRect(text));
    }
    /** Returns the cap height of the font */
    capHeight() {
        return this.native.capHeight();
    }
    /** Returns the descent of the font */
    descent() {
        return this.native.descent();
    }
    elidedText(text, mode, width, flags = 0) {
        return this.native.elidedText(text, mode, width, flags);
    }
    /** Returns the font DPI */
    fontDpi() {
        return this.native.fontDpi();
    }
    /** Returns the height of the font */
    height() {
        return this.native.height();
    }
    /** Returns the horizontal advance in pixels of the first len characters of text. If len is negative (the default), the entire string is used */
    horizontalAdvance(text, len = -1) {
        return this.native.horizontalAdvance(text, len);
    }
    /** Returns true if character ch is a valid character in the font; otherwise returns false */
    inFont(text) {
        return this.native.inFont(text);
    }
    inFontUcs4(ucs4) {
        return this.native.inFontUcs4(ucs4);
    }
    /** Returns the leading of the font */
    leading() {
        return this.native.leading();
    }
    /** Returns the left bearing of character ch in the font */
    leftBearing(text) {
        return this.native.leftBearing(text);
    }
    /** Returns the distance from one base line to the next */
    lineSpacing() {
        return this.native.lineSpacing();
    }
    /** Returns the width of the underline and strikeout lines, adjusted for the point size of the font */
    lineWidth() {
        return this.native.lineWidth();
    }
    maxWidth() {
        return this.native.maxWidth();
    }
    minLeftBearing() {
        return this.native.minLeftBearing();
    }
    minRightBearing() {
        return this.native.minRightBearing();
    }
    /** Returns the distance from the base line to where an overline should be drawn */
    overlinePos() {
        return this.native.overlinePos();
    }
    /** Returns the right bearing of character ch in the font */
    rightBearing(text) {
        return this.native.rightBearing(text);
    }
    /**
     * Returns the size in pixels of text
     *
     * See QtEnums::TextFlag for flags
     */
    size(flags, text, tabStops = 0) {
        const native = this.native.size(flags, text, tabStops);
        return new QSize_1.QSize(native);
    }
    /** Returns the distance from the base line to where the strikeout line should be drawn */
    strikeOutPos() {
        return this.native.strikeOutPos();
    }
    /** Swaps metrics other with this metrics. This operation is very fast and never fails */
    swap(other) {
        return this.native.swap(other.native);
    }
    tightBoundingRect(text) {
        return new __1.QRect(this.native.tightBoundingRect(text));
    }
    /** Returns the distance from the base line to where an underscore should be drawn */
    underlinePos() {
        return this.native.underlinePos();
    }
    /** Returns the 'x' height of the font. This is often but not always the same as the height of the character 'x'. */
    xHeight() {
        return this.native.xHeight();
    }
}
exports.QFontMetrics = QFontMetrics;
