"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var postcss_1 = __importDefault(require("postcss"));
var index_1 = __importDefault(require("../index"));
var run = function (input, output, opts) { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, postcss_1.default([index_1.default(opts)]).process(input, {
                    from: undefined
                })];
            case 1:
                result = _a.sent();
                expect(result.css).toEqual(output);
                expect(result.warnings()).toHaveLength(0);
                return [2 /*return*/];
        }
    });
}); };
it("autoprefix nodegui css", function () {
    return run("\n    #resultText {\n      flex: 1;\n      qproperty-yAlignment: 'AlignRight|AlignVCenter';\n      font-size: 40px;\n    }\n    #row0 {\n      flex: 1;\n      align-items: stretch;\n      justify-content: space-between;\n      flex-direction: row;\n    }\n  ", "\n    #resultText {\n      qproperty-yFlex: 1;\n      qproperty-yAlignment: 'AlignRight|AlignVCenter';\n      font-size: 40px;\n    }\n    #row0 {\n      qproperty-yFlex: 1;\n      qproperty-yAlignItems: stretch;\n      qproperty-yJustifyContent: space-between;\n      qproperty-yFlexDirection: row;\n    }\n  ", {});
});
it("autoprefix inline nodegui css", function () {
    return run("\n      flex: 1;\n      qproperty-yAlignment: 'AlignRight|AlignVCenter';\n      font-size: 40px;\n  ", "\n      qproperty-yFlex: 1;\n      qproperty-yAlignment: 'AlignRight|AlignVCenter';\n      font-size: 40px;\n  ", {});
});
it("height, width, max-height, max-width, min-height, min-width", function () {
    return run("\n      height: 12px;\n      width: 12px;\n      max-height:13px;\n      max-width: 13px;\n      min-height: 14px;\n      min-width: 14px;\n    ", "\n      qproperty-yHeight: 12px;\n      height: 12px;\n      qproperty-yWidth: 12px;\n      width: 12px;\n      qproperty-yMaxHeight:13px;\n      max-height:13px;\n      qproperty-yMaxWidth: 13px;\n      max-width: 13px;\n      qproperty-yMinHeight: 14px;\n      min-height: 14px;\n      qproperty-yMinWidth: 14px;\n      min-width: 14px;\n    ", {});
});
it("left,top,bottom,right", function () {
    return run("\n      top: 12px;\n      left: 12px;\n      bottom: 12px;\n      right: 12px;\n    ", "\n      qproperty-yTop: 12px;\n      top: 12px;\n      qproperty-yLeft: 12px;\n      left: 12px;\n      qproperty-yBottom: 12px;\n      bottom: 12px;\n      qproperty-yRight: 12px;\n      right: 12px;\n    ", {});
});
it("borders", function () {
    return run("\n      border-top: 10px;\n      border-right: 11px;\n      border-bottom: 12px;\n      border-left: 13px;\n      border-horizontal: 14px;\n      border-vertical: 15px;\n      border-width: 10px;\n      border-top-width: 11px;\n      border-right-width: 12px;\n      border-bottom-width: 13px;\n      border-right-width: 14px;\n      border-horizontal-width: 15px;\n      border-vertical-width: 16px;\n    ", "\n      qproperty-yBorderTop: 10;\n      border-top: 10px;\n      qproperty-yBorderRight: 11;\n      border-right: 11px;\n      qproperty-yBorderBottom: 12;\n      border-bottom: 12px;\n      qproperty-yBorderLeft: 13;\n      border-left: 13px;\n      qproperty-yBorderHorizontal: 14;\n      border-right: 14px;\n      border-left: 14px;\n      qproperty-yBorderVertical: 15;\n      border-bottom: 15px;\n      border-top: 15px;\n      qproperty-yBorder: 10;\n      border-width: 10px;\n      qproperty-yBorderTop: 11;\n      border-top-width: 11px;\n      qproperty-yBorderRight: 12;\n      border-right-width: 12px;\n      qproperty-yBorderBottom: 13;\n      border-bottom-width: 13px;\n      qproperty-yBorderRight: 14;\n      border-right-width: 14px;\n      qproperty-yBorderHorizontal: 15;\n      border-right: 15px;\n      border-left: 15px;\n      qproperty-yBorderVertical: 16;\n      border-bottom: 16px;\n      border-top: 16px;\n    ", {});
});
it("margins", function () {
    return run("\n      margin-top: 10px;\n      margin-right: 11px;\n      margin-bottom: 12px;\n      margin-left: 13px;\n      margin-horizontal: 14px;\n      margin-vertical: 15px;\n    ", "\n      qproperty-yMarginTop: 10px;\n      margin-top: 10px;\n      qproperty-yMarginRight: 11px;\n      margin-right: 11px;\n      qproperty-yMarginBottom: 12px;\n      margin-bottom: 12px;\n      qproperty-yMarginLeft: 13px;\n      margin-left: 13px;\n      qproperty-yMarginHorizontal: 14px;\n      margin-right: 14px;\n      margin-left: 14px;\n      qproperty-yMarginVertical: 15px;\n      margin-bottom: 15px;\n      margin-top: 15px;\n    ", {});
});
it("padding", function () {
    return run("\n      padding-top: 10px;\n      padding-right: 11px;\n      padding-bottom: 12px;\n      padding-left: 13px;\n      padding-horizontal: 14px;\n      padding-vertical: 15px;\n    ", "\n      qproperty-yPaddingTop: 10px;\n      padding-top: 10px;\n      qproperty-yPaddingRight: 11px;\n      padding-right: 11px;\n      qproperty-yPaddingBottom: 12px;\n      padding-bottom: 12px;\n      qproperty-yPaddingLeft: 13px;\n      padding-left: 13px;\n      qproperty-yPaddingHorizontal: 14px;\n      padding-right: 14px;\n      padding-left: 14px;\n      qproperty-yPaddingVertical: 15px;\n      padding-bottom: 15px;\n      padding-top: 15px;\n    ", {});
});
it("position", function () {
    return run("\n      position: 'absolute';\n      position: 'relative';\n    ", "\n      qproperty-yPosition: 'absolute';\n      position: 'absolute';\n      qproperty-yPosition: 'relative';\n      position: 'relative';\n    ", {});
});
