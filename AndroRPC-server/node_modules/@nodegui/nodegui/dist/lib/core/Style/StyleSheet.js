"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareInlineStyleSheet = exports.StyleSheet = void 0;
const postcss_1 = __importDefault(require("postcss"));
const cuid_1 = __importDefault(require("cuid"));
const postcss_nodegui_autoprefixer_1 = __importDefault(require("postcss-nodegui-autoprefixer"));
class StyleSheet {
    static create(cssString) {
        try {
            return postcss_1.default([postcss_nodegui_autoprefixer_1.default()]).process(cssString).css;
        }
        catch (err) {
            console.error(err);
            return '';
        }
    }
}
exports.StyleSheet = StyleSheet;
function prepareInlineStyleSheet(widget, rawStyle) {
    const inlineStyle = StyleSheet.create(rawStyle);
    // Make sure to not calculate ObjectName in the same pass of event loop as other props (incase of react) since the order will matter in that case
    // So doing it in multiple passes of event loop allows objectName to be set before using it. The above await solves it.
    let cssId = widget.objectName();
    if (!cssId) {
        cssId = cuid_1.default();
        widget.setObjectName(cssId);
    }
    return `
      #${cssId} {
        ${inlineStyle}
      }
  `;
}
exports.prepareInlineStyleSheet = prepareInlineStyleSheet;
