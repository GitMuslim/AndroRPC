"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var postcss_1 = __importDefault(require("postcss"));
var noop = function () { };
exports.autoprefixer = postcss_1.default.plugin("postcss-nodegui-autoprefixer", function () {
    return function (root) {
        root.walkDecls(function (decl) {
            var autoPrefixer = getAutoPrefixerForProp(decl.prop);
            autoPrefixer(decl);
        });
    };
});
var getAutoPrefixerForProp = function (propName) {
    var rules = {
        display: function (decl) {
            decl.prop = "qproperty-yDisplay";
        },
        "align-items": function (decl) {
            decl.prop = "qproperty-yAlignItems";
        },
        "align-content": function (decl) {
            decl.prop = "qproperty-yAlignContent";
        },
        "align-self": function (decl) {
            decl.prop = "qproperty-yAlignSelf";
        },
        "justify-content": function (decl) {
            decl.prop = "qproperty-yJustifyContent";
        },
        direction: function (decl) {
            decl.prop = "qproperty-yDirection";
        },
        "flex-direction": function (decl) {
            decl.prop = "qproperty-yFlexDirection";
        },
        overflow: function (decl) {
            decl.prop = "qproperty-yOverflow";
        },
        position: function (decl) {
            decl.cloneBefore({ prop: "qproperty-yPosition" });
        },
        "flex-wrap": function (decl) {
            decl.prop = "qproperty-yFlexWrap";
        },
        flex: function (decl) {
            decl.prop = "qproperty-yFlex";
        },
        "flex-grow": function (decl) {
            decl.prop = "qproperty-yFlexGrow";
        },
        "flex-shrink": function (decl) {
            decl.prop = "qproperty-yFlexShrink";
        },
        "aspect-ratio": function (decl) {
            decl.prop = "qproperty-yAspectRatio";
        },
        top: function (decl) {
            decl.cloneBefore({ prop: "qproperty-yTop" });
        },
        right: function (decl) {
            decl.cloneBefore({ prop: "qproperty-yRight" });
        },
        bottom: function (decl) {
            decl.cloneBefore({ prop: "qproperty-yBottom" });
        },
        left: function (decl) {
            decl.cloneBefore({ prop: "qproperty-yLeft" });
        },
        "flex-basis": function (decl) {
            decl.prop = "qproperty-yFlexBasis";
        },
        "min-width": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMinWidth" });
        },
        "min-height": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMinHeight" });
        },
        width: function (decl) {
            decl.cloneBefore({ prop: "qproperty-yWidth" });
        },
        height: function (decl) {
            decl.cloneBefore({ prop: "qproperty-yHeight" });
        },
        "max-width": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMaxWidth" });
        },
        "max-height": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMaxHeight" });
        },
        "padding-top": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yPaddingTop" });
        },
        "padding-right": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yPaddingRight" });
        },
        "padding-bottom": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yPaddingBottom" });
        },
        "padding-left": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yPaddingLeft" });
        },
        "padding-horizontal": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yPaddingHorizontal" });
            decl.cloneBefore({ prop: "padding-right" });
            decl.cloneBefore({ prop: "padding-left" });
            decl.remove();
        },
        "padding-vertical": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yPaddingVertical" });
            decl.cloneBefore({ prop: "padding-bottom" });
            decl.cloneBefore({ prop: "padding-top" });
            decl.remove();
        },
        padding: function (decl) {
            decl.cloneBefore({ prop: "qproperty-yPadding" });
        },
        "margin-top": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMarginTop" });
        },
        "margin-right": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMarginRight" });
        },
        "margin-bottom": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMarginBottom" });
        },
        "margin-left": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMarginLeft" });
        },
        "margin-horizontal": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMarginHorizontal" });
            decl.cloneBefore({ prop: "margin-right" });
            decl.cloneBefore({ prop: "margin-left" });
            decl.remove();
        },
        "margin-vertical": function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMarginVertical" });
            decl.cloneBefore({ prop: "margin-bottom" });
            decl.cloneBefore({ prop: "margin-top" });
            decl.remove();
        },
        margin: function (decl) {
            decl.cloneBefore({ prop: "qproperty-yMargin" });
        },
        "border-top": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderTop",
                value: parseInt("" + decl.value)
            });
        },
        "border-right": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderRight",
                value: parseInt("" + decl.value)
            });
        },
        "border-bottom": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderBottom",
                value: parseInt("" + decl.value)
            });
        },
        "border-left": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderLeft",
                value: parseInt("" + decl.value)
            });
        },
        "border-horizontal": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderHorizontal",
                value: parseInt("" + decl.value)
            });
            decl.cloneBefore({ prop: "border-right" });
            decl.cloneBefore({ prop: "border-left" });
            decl.remove();
        },
        "border-vertical": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderVertical",
                value: parseInt("" + decl.value)
            });
            decl.cloneBefore({ prop: "border-bottom" });
            decl.cloneBefore({ prop: "border-top" });
            decl.remove();
        },
        border: function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorder",
                value: parseInt("" + decl.value)
            });
        },
        "border-top-width": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderTop",
                value: parseInt("" + decl.value)
            });
        },
        "border-right-width": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderRight",
                value: parseInt("" + decl.value)
            });
        },
        "border-bottom-width": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderBottom",
                value: parseInt("" + decl.value)
            });
        },
        "border-left-width": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderLeft",
                value: parseInt("" + decl.value)
            });
        },
        "border-horizontal-width": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderHorizontal",
                value: parseInt("" + decl.value)
            });
            decl.cloneBefore({ prop: "border-right" });
            decl.cloneBefore({ prop: "border-left" });
            decl.remove();
        },
        "border-vertical-width": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorderVertical",
                value: parseInt("" + decl.value)
            });
            decl.cloneBefore({ prop: "border-bottom" });
            decl.cloneBefore({ prop: "border-top" });
            decl.remove();
        },
        "border-width": function (decl) {
            decl.cloneBefore({
                prop: "qproperty-yBorder",
                value: parseInt("" + decl.value)
            });
        }
    };
    return rules[propName] || noop;
};
exports.default = exports.autoprefixer;
