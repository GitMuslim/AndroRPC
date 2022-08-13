"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageConversionFlag = void 0;
var ImageConversionFlag;
(function (ImageConversionFlag) {
    //Color/Mono preference (ignored for QBitmap)
    ImageConversionFlag[ImageConversionFlag["AutoColor"] = 0] = "AutoColor";
    ImageConversionFlag[ImageConversionFlag["ColorOnly"] = 3] = "ColorOnly";
    ImageConversionFlag[ImageConversionFlag["MonoOnly"] = 2] = "MonoOnly";
    //Dithering mode preference
    ImageConversionFlag[ImageConversionFlag["DiffuseDither"] = 0] = "DiffuseDither";
    ImageConversionFlag[ImageConversionFlag["OrderedDither"] = 16] = "OrderedDither";
    ImageConversionFlag[ImageConversionFlag["ThresholdDither"] = 32] = "ThresholdDither";
    //Dithering mode preference for 1-bit alpha masks
    ImageConversionFlag[ImageConversionFlag["ThresholdAlphaDither"] = 0] = "ThresholdAlphaDither";
    ImageConversionFlag[ImageConversionFlag["OrderedAlphaDither"] = 4] = "OrderedAlphaDither";
    ImageConversionFlag[ImageConversionFlag["DiffuseAlphaDither"] = 8] = "DiffuseAlphaDither";
    //Color matching versus dithering preference
    ImageConversionFlag[ImageConversionFlag["PreferDither"] = 64] = "PreferDither";
    ImageConversionFlag[ImageConversionFlag["AvoidDither"] = 128] = "AvoidDither";
    ImageConversionFlag[ImageConversionFlag["AutoDither"] = 0] = "AutoDither";
    ImageConversionFlag[ImageConversionFlag["NoOpaqueDetection"] = 256] = "NoOpaqueDetection";
    ImageConversionFlag[ImageConversionFlag["NoFormatConversion"] = 512] = "NoFormatConversion";
})(ImageConversionFlag = exports.ImageConversionFlag || (exports.ImageConversionFlag = {}));
