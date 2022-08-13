"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageReaderError = exports.MovieState = exports.CacheMode = exports.QMovie = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QObject_1 = require("../QtCore/QObject");
const QPixmap_1 = require("./QPixmap");
const WrapperCache_1 = require("../core/WrapperCache");
class QMovie extends QObject_1.QObject {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg != null) {
            const parent = arg;
            native = new addon_1.default.QMovie(parent.native);
        }
        else {
            native = new addon_1.default.QMovie();
        }
        super(native);
    }
    //Methods
    setFileName(fileName) {
        this.native.setFileName(fileName);
        this.jumpToFrame(0);
    }
    loadFromData(buffer) {
        this.native.loadFromData(buffer);
    }
    fileName() {
        return this.native.fileName();
    }
    setFormat(formatName) {
        this.native.setFormat(formatName);
    }
    format() {
        return this.native.format();
    }
    setScaledSize(size) {
        this.native.setScaledSize(size.native);
    }
    setSpeed(percentSpeed) {
        this.setProperty('speed', percentSpeed);
    }
    start() {
        this.native.start();
    }
    stop() {
        this.native.stop();
    }
    setPaused(paused) {
        this.native.setPaused(paused);
    }
    jumpToNextFrame() {
        return this.native.jumpToNextFrame();
    }
    jumpToFrame(frame) {
        return this.native.jumpToFrame(frame);
    }
    setCacheMode(cacheMode) {
        this.setProperty('cacheMode', cacheMode);
    }
    state() {
        return this.native.state();
    }
    currentFrameNumber() {
        return this.native.currentFrameNumber();
    }
    currentPixmap() {
        return new QPixmap_1.QPixmap(this.native.currentPixmap());
    }
    frameCount() {
        return this.native.frameCount();
    }
}
exports.QMovie = QMovie;
WrapperCache_1.wrapperCache.registerWrapper('QMovieWrap', QMovie);
var CacheMode;
(function (CacheMode) {
    CacheMode[CacheMode["CacheNone"] = 0] = "CacheNone";
    CacheMode[CacheMode["CacheAll"] = 1] = "CacheAll";
})(CacheMode = exports.CacheMode || (exports.CacheMode = {}));
var MovieState;
(function (MovieState) {
    MovieState[MovieState["NotRunning"] = 0] = "NotRunning";
    MovieState[MovieState["Paused"] = 1] = "Paused";
    MovieState[MovieState["Running"] = 2] = "Running";
})(MovieState = exports.MovieState || (exports.MovieState = {}));
var ImageReaderError;
(function (ImageReaderError) {
    ImageReaderError[ImageReaderError["FileNotFoundError"] = 1] = "FileNotFoundError";
    ImageReaderError[ImageReaderError["DeviceError"] = 2] = "DeviceError";
    ImageReaderError[ImageReaderError["UnsupportedFormatError"] = 3] = "UnsupportedFormatError";
    ImageReaderError[ImageReaderError["InvalidDataError"] = 4] = "InvalidDataError";
    ImageReaderError[ImageReaderError["UnknownError"] = 0] = "UnknownError";
})(ImageReaderError = exports.ImageReaderError || (exports.ImageReaderError = {}));
