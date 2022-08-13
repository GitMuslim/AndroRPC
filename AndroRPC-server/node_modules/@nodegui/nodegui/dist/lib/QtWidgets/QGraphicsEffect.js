"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QGraphicsEffect = void 0;
const QObject_1 = require("../QtCore/QObject");
/**

> This is the abstract base class of graphicseffect, providing their functionality.

* **This class is a JS wrapper around Qt's [QGraphicsEffect class](https://doc.qt.io/qt-5/qgraphicseffect.html)**

The QGraphicsEffect class is an abstract class and therefore, technically, no further instances actually have to be created.
It is inherited by QGraphicsBlurEffect, QGraphicsColorizeEffect, QGraphicsDropShadowEffect, and QGraphicsOpacityEffect.

 */
class QGraphicsEffect extends QObject_1.QObject {
    setEnabled(enable) {
        this.setProperty('enabled', enable);
    }
    isEnabled() {
        return this.property('enabled').toBool();
    }
}
exports.QGraphicsEffect = QGraphicsEffect;
