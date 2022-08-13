"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QWindow = void 0;
const helpers_1 = require("../utils/helpers");
const QObject_1 = require("../QtCore/QObject");
const QScreen_1 = require("./QScreen");
const WrapperCache_1 = require("../core/WrapperCache");
class QWindow extends QObject_1.QObject {
    constructor(native) {
        if (!helpers_1.checkIfNativeElement(native)) {
            throw new Error('QWindow cannot be initialised this way.');
        }
        super(native);
    }
    screen() {
        return WrapperCache_1.wrapperCache.get(QScreen_1.QScreen, this.native.screen());
    }
    // *** Public Slots ***
    // CLASS: QWindow
    // TODO:    void 	alert(int msec)
    // TODO:    bool 	close()
    // TODO:    void 	hide()
    // TODO:    void 	lower()
    // TODO:    void 	raise()
    // TODO:    void 	requestActivate()
    // TODO:    void 	requestUpdate()
    // TODO:    void 	setGeometry(const QRect &rect)
    // TODO:    void 	setGeometry(int posx, int posy, int w, int h)
    // TODO:    void 	setHeight(int arg)
    // TODO:    void 	setMaximumHeight(int h)
    // TODO:    void 	setMaximumWidth(int w)
    // TODO:    void 	setMinimumHeight(int h)
    // TODO:    void 	setMinimumWidth(int w)
    // TODO:    void 	setTitle(const QString &)
    // TODO:    void 	setVisible(bool visible)
    // TODO:    void 	setWidth(int arg)
    // TODO:    void 	setX(int arg)
    // TODO:    void 	setY(int arg)
    // TODO:    void 	show()
    setWindowState(state) {
        return this.native.setWindowState(state);
    }
    showFullScreen() {
        this.native.showFullScreen();
    }
    showMaximized() {
        this.native.showMaximized();
    }
    showMinimized() {
        this.native.showMinimized();
    }
    showNormal() {
        this.native.showNormal();
    }
    startSystemMove() {
        return this.native.startSystemMove();
    }
    startSystemResize(edges) {
        return this.native.startSystemResize(edges);
    }
    windowState() {
        return this.native.windowState();
    }
    visibility() {
        return this.native.visibility();
    }
    setVisibility(visibility) {
        return this.native.setVisibility(visibility);
    }
}
exports.QWindow = QWindow;
WrapperCache_1.wrapperCache.registerWrapper('QWindowWrap', QWindow);
helpers_1.registerNativeWrapFunction('QWindowWrap', (native) => {
    return WrapperCache_1.wrapperCache.get(QWindow, native);
});
